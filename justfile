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

# Format all code
@format: format_py format_js format_just format_sass format_html

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

# Lint HTML
@lint_html:
	echo "Checking HTML using djLint"
	djlint . --lint

# Lint Javascript
@lint_js:
	echo "Checking Javascript code using eslint"
	cd frontend; npm run lint-js

# Check for missing Django migrations
@lint_migrations:
	echo "Check for missing Django migrations"
	python .\backend\manage.py makemigrations --check --dry-run

# Lint Python code using Ruff
@lint_py:
	echo "Checking Python code using Ruff"
	ruff check
	ruff format --check

# Lint SASS code with stylelint
@lint_sass:
	echo "Checking SASS code using stylelint"
	cd frontend; npm run lint-sass

# Lint Python types
@lint_types:
	echo "Checking Python types using mypy"
	mypy .
