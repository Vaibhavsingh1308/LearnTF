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

variable "location" {
  default     = "East US"
  description = "Azure Region"
}

variable "resource_group_name" {
  default     = "rg-tf-vm"
  description = "Resource Group Name"
}

variable "vm_admin_username" {
  default     = "azureuser"
  description = "Admin username for VM"
}

variable "vm_admin_password" {
  description = "Admin password for VM"
  sensitive   = true
}

variable "node_docker_image" {
  default     = "yourdockerhubuser/node-app:latest"
  description = "Node.js Docker image"
}
