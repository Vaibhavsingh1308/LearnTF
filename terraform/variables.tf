# Azure subscription and SP credentials
variable "SUBSCRIPTION_ID" {
  description = "Azure Subscription ID"
  type        = string
}

variable "SP_CLIENT_ID" {
  description = "Service Principal Client ID"
  type        = string
}

variable "SP_CLIENT_SECRET" {
  description = "Service Principal Client Secret"
  type        = string
  sensitive   = true
}

variable "SP_TENANT_ID" {
  description = "Azure Tenant ID"
  type        = string
}

# Resource Group
variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

variable "location" {
  description = "Azure location"
  type        = string
}

# App Service Plan
variable "app_service_plan_name" {
  description = "App Service Plan name"
  type        = string
}

# Linux Web App
variable "web_app_name" {
  description = "Web App name"
  type        = string
}

# Azure Container Registry
variable "acr_name" {
  description = "Azure Container Registry name"
  type        = string
}

variable "docker_image_name" {
  description = "Docker image name to deploy"
  type        = string
}

variable "docker_image_tag" {
  description = "Docker image tag"
  type        = string
  default     = "latest"
}
