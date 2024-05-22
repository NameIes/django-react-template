# Python venv
python := if os_family() == "windows" { "./venv/Scripts/python.exe" } else { "./venv/bin/python" }

# Shell
set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

# List available commands
@_default:
	just -l

# Build frontend assets
@build_frontend:
	echo "Building frontend..."
	cd frontend; npm run build
	just collectstatic

# Run Django's collectstatic management command
@collectstatic:
	echo "Collecting static files..."
	{{ python }} .\backend\manage.py collectstatic --no-input --no-default-ignore --clear

# Run Django's runserver
@start host="":
	{{ python }} .\backend\manage.py runserver {{host}}

# Run Vite development server
@start_frontend:
	cd frontend; npm run dev
