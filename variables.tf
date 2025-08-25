variable "SUBSCRIPTION_ID" {
  description = "Azure subscription ID"
  type        = string
}

variable "SP_CLIENT_ID" {
  description = "Azure service principal client ID"
  type        = string
}

variable "SP_CLIENT_SECRET" {
  description = "Azure service principal client secret"
  type        = string
  sensitive   = true
}

variable "SP_TENANT_ID" {
  description = "Azure tenant ID"
  type        = string
}
