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
  default = "next-app-rg"
}

variable "location" {
  default = "eastus"
}

variable "app_service_plan_name" {
  default = "next-app-plan"
}

variable "app_service_name" {
  default = "next-app-web"
}

variable "acr_name" {
  default = "nextappacr"
}
