variable "SUBSCRIPTION_ID" {
  type        = string
  description = "Azure Subscription ID"
}

variable "SP_CLIENT_ID" {
  type        = string
  description = "Service Principal Client ID"
}

variable "SP_CLIENT_SECRET" {
  type        = string
  description = "Service Principal Client Secret"
  sensitive   = true
}

variable "SP_TENANT_ID" {
  type        = string
  description = "Azure Tenant ID"
}
