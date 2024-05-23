# Shell

set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

# List available commands
@_default:
    just -l

[private]
env:
    .\.venv\Scripts\activate

# Build frontend assets
@build_frontend:
    echo "Building frontend..."
    cd frontend; npm run build
    just collectstatic

# Run Django's collectstatic management command
@collectstatic:
    echo "Collecting static files..."
    python .\backend\manage.py collectstatic --no-input --no-default-ignore --clear

# Run Django's runserver
@start host="":
    python .\backend\manage.py runserver {{ host }}

# Run Vite development server
@start_frontend:
    cd frontend; npm run dev

# Format HTML
@format_html:
    echo "Formatting HTML using djLint"
    djlint . --reformat --quiet

# Format JS
@format_js:
    echo "Formatting Javascript code using eslint"
    cd frontend; npm run format-js

# Format Just
@format_just:
    echo "Formatting the justfile"
    just --fmt --unstable

# Format Python code
@format_py:
	echo "Formatting Python code using ruff"
	ruff format
	ruff check --fix

# Format SASS/CSS code
@format_sass:
	echo "Formatting SASS code using stylelint"
	cd frontend; npm run format-sass
