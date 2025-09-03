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
  description = "Name of the resource group"
  type        = string
}

variable "location" {
  description = "Azure location"
  type        = string
}

variable "acr_name" {
  description = "Azure Container Registry name"
  type        = string
}

variable "app_service_plan_name" {
  description = "App Service Plan name"
  type        = string
}

variable "web_app_name" {
  description = "Web App name"
  type        = string
}
variable "docker_image_name" {
  type        = string
  description = "Docker image name to deploy"
}

variable "docker_image_tag" {
  type        = string
  default     = "latest"
  description = "Docker image tag"
}