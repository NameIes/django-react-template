# Shell

set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

# List available commands
@_default:
    just -l

[private]
env:
    .\.venv\Scripts\activate

@_start_msg msg:
    python blue.py "{{ msg }}"

# Build frontend assets
@build_frontend:
    just _start_msg "Building frontend..."
    cd frontend; npm run build
    just collectstatic

# Run Django's collectstatic management command
@collectstatic:
    just _start_msg "Collecting static files..."
    python .\backend\manage.py collectstatic --no-input --no-default-ignore --clear

# Run Django's runserver
@start host="": build_frontend
    python .\backend\manage.py runserver {{ host }}

# Run Vite development server
@start_frontend:
    cd frontend; npm run dev

# Format all code
@format: format_py format_js format_just format_sass format_html

# Format HTML
@format_html:
    just _start_msg "Formatting HTML using djLint"
    djlint . --reformat --quiet

# Format JS
@format_js:
    just _start_msg "Formatting Javascript code using eslint"
    cd frontend; npm run format-js

# Format Just
@format_just:
    just _start_msg "Formatting the justfile"
    just --fmt --unstable

# Format Python code
@format_py:
    just _start_msg "Formatting Python code using ruff"
    ruff format
    ruff check --fix

# Format SASS/CSS code
@format_sass:
    just _start_msg "Formatting SASS code using stylelint"
    cd frontend; npm run format-sass

# Lint everything
@lint: lint_js lint_sass lint_html lint_py lint_migrations lint_types

# Lint HTML
@lint_html:
    just _start_msg "Checking HTML using djLint"
    djlint . --lint

# Lint Javascript
@lint_js:
    just _start_msg "Checking Javascript code using eslint"
    cd frontend; npm run lint-js

# Check for missing Django migrations
@lint_migrations:
    just _start_msg "Check for missing Django migrations"
    python .\backend\manage.py makemigrations --check --dry-run

# Lint Python code using Ruff
@lint_py:
    just _start_msg "Checking Python code using Ruff"
    ruff check
    ruff format --check

# Lint SASS code with stylelint
@lint_sass:
    just _start_msg "Checking SASS code using stylelint"
    cd frontend; npm run lint-sass

# Lint Python types
@lint_types:
    just _start_msg "Checking Python types using mypy"
    mypy .

# Run tests without coverage
@test:
    cd backend; pytest --ds=core.settings

# Run tests with coverage
@test_with_coverage:
    cd backend; pytest --cov --ds=core.settings; coverage html; .\htmlcov\index.html

# Run pre-commit checks
@pre_commit: format lint test

# Upgrade node requirements based on `package.json` file
@upgrade_node_packages:
    just _start_msg "Upgrading node requirements"
    cd frontend; npm upgrade

# Upgrade python requirements
@upgrade_python_packages:
    uv pip compile --upgrade --generate-hashes --output-file .\backend\requirements\prod_lock.txt .\backend\requirements\prod.in
    uv pip compile --upgrade --generate-hashes --output-file .\backend\requirements\dev_lock.txt .\backend\requirements\dev.in

# Install python requirements
@install_python_packages:
    uv pip sync .\backend\requirements\dev_lock.txt

# Install node requirements
@install_node_packages:
    cd frontend; npm i

# Create venv and install requirements
@setup: install_node_packages && install_python_packages
    uv venv
