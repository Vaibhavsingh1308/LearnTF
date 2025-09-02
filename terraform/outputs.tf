output "acr_login_server" {
  description = "Login server of the ACR"
  value       = azurerm_container_registry.acr.login_server
}

output "web_app_url" {
  description = "URL of the Linux Web App"
  value       = azurerm_linux_web_app.app.default_site_hostname
}
