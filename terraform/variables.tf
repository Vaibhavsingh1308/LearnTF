variable "SUBSCRIPTION_ID" {
  description = "Azure Subscription ID"
}

variable "SP_CLIENT_ID" {
  description = "Service Principal Client ID"
}

variable "SP_CLIENT_SECRET" {
  description = "Service Principal Client Secret"
  sensitive   = true
}

variable "SP_TENANT_ID" {
  description = "Azure Tenant ID"
}
variable "resource_group_name" {
  description = "Name of the Azure Resource Group"
  type        = string
}

variable "location" {
  description = "Azure region/location"
  type        = string
}

variable "acr_name" {
  description = "Name of the Azure Container Registry"
  type        = string
}

variable "app_service_plan_name" {
  description = "Name of the Azure App Service Plan"
  type        = string
}

variable "app_service_name" {
  description = "Name of the Azure Web App"
  type        = string
}

