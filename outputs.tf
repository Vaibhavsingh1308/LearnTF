output "public_ip" {
  description = "Public IP of the VM"
  value       = azurerm_public_ip.public_ip.ip_address
}
output "app_url" {
  value = azurerm_web_app.app.default_site_hostname
}
