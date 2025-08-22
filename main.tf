provider "azurerm" {
  features {}
}
resource "azurerm_resource_group" "rg" {
  name     = "LearnTF"
  location = "East US"
}
