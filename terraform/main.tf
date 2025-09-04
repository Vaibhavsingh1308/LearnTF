provider "azurerm" {
  features {}

  subscription_id = var.SUBSCRIPTION_ID
  client_id       = var.SP_CLIENT_ID
  client_secret   = var.SP_CLIENT_SECRET
  tenant_id       = var.SP_TENANT_ID
}
terraform {
  backend "azurerm" {
    resource_group_name  = "TF-stat"
    storage_account_name = "learntf"
    container_name       = "learn-tf"
    key                  = "learn.tfstate"
  }
}

# Resource Group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

# Azure Container Registry
resource "azurerm_container_registry" "acr" {
  name                = var.acr_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Premium"
  admin_enabled       = false
}

# App Service Plan (Linux)
resource "azurerm_service_plan" "plan" {
  name                = var.app_service_plan_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"

  sku_name = "S1"  # Standard tier required for Docker
}

# Linux Web App with Managed Identity for ACR
resource "azurerm_linux_web_app" "app" {
  name                = var.web_app_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.plan.id

  identity {
    type = "SystemAssigned"
  }

  site_config {
  application_stack {
    docker_registry_url = "https://${azurerm_container_registry.acr.login_server}"
    docker_image_name   = "${var.docker_image_name}:${var.docker_image_tag}"
  }
}

  app_settings = {
    WEBSITES_PORT = "3000"
    NODE_ENV      = "production"
  }

  depends_on = [
    azurerm_container_registry.acr
  ]
}

# # Give Web App permission to pull from ACR
# # Assign AcrPull to the Web App’s Managed Identity
# resource "azurerm_role_assignment" "acr_pull" {
#   scope                = azurerm_container_registry.acr.id
#   role_definition_name = "AcrPull"
#   principal_id         = azurerm_linux_web_app.app.identity[0].principal_id

#   depends_on = [
#     azurerm_linux_web_app.app,
#     azurerm_container_registry.acr
#   ]
# }

# Automated AcrPull Role Assignment using Azure CLI
resource "null_resource" "assign_acr_pull" {
  depends_on = [
    azurerm_linux_web_app.app,
    azurerm_container_registry.acr
  ]

  provisioner "local-exec" {
    command = <<EOT
      az role assignment create \
        --assignee ${azurerm_linux_web_app.app.identity[0].principal_id} \
        --role "AcrPull" \
        --scope ${azurerm_container_registry.acr.id}
    EOT
  }
}
