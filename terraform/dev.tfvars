# Resource group
resource_group_name   = "nextapp-rg"
location              = "Central US"

# App Service Plan
app_service_plan_name = "nextapp-plan"

# Linux Web App
web_app_name          = "nextapp-web"

# Azure Container Registry
acr_name              = "nextappacr"
docker_image_name     = "next-app"
docker_image_tag      = "latest"
