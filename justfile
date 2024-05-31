# Shell

set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

# List available commands
@_default:
    just -l

[private]
env:
    .\.venv\Scripts\activate

@_start_msg msg:
    python .\utils\blue.py "{{ msg }}"

# Run Django's makemigrations management command
@makemigrations +attrs="":
    python manage.py makemigrations {{ attrs }}

# Run Django's migrate management command
@migrate:
    python manage.py migrate

# Remove build files, python cache files and test coverage data
@clean:
    python .\utils\clean.py

# Build frontend assets
@build_frontend:
    just _start_msg "Building frontend..."
    npm run build
    just collectstatic

# Run Django's collectstatic management command
@collectstatic:
    just _start_msg "Collecting static files..."
    python manage.py collectstatic --no-input --no-default-ignore --clear

# Run MkDocs server
@docs:
    mkdocs serve

# Run Django's runserver
@start host="": build_frontend
    python manage.py runserver {{ host }}

# Run Vite development server
@start_frontend:
    npm run dev

# Format all code
@format: format_py format_js format_just format_sass format_html

# Format HTML
@format_html:
    just _start_msg "Formatting HTML using djLint"
    djlint . --reformat --quiet

# Format JS
@format_js:
    just _start_msg "Formatting Javascript code using eslint"
    npm run format-js

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
    npm run format-sass

# Lint everything
@lint: lint_js lint_sass lint_html lint_py lint_migrations lint_types

# Lint HTML
@lint_html:
    just _start_msg "Checking HTML using djLint"
    djlint . --lint --extend-exclude "static,staticfiles"

# Lint Javascript
@lint_js:
    just _start_msg "Checking Javascript code using eslint"
    npm run lint-js

# Check for missing Django migrations
@lint_migrations:
    just _start_msg "Check for missing Django migrations"
    python manage.py makemigrations --check --dry-run

# Lint Python code using Ruff
@lint_py:
    just _start_msg "Checking Python code using Ruff"
    ruff check
    ruff format --check

# Lint SASS code with stylelint
@lint_sass:
    just _start_msg "Checking SASS code using stylelint"
    npm run lint-sass

# Lint Python types
@lint_types:
    just _start_msg "Checking Python types using mypy"
    mypy --config-file .\pyproject.toml .

# Run tests without coverage
@test:
    pytest --ds=core.settings

# Run tests with coverage
@test_with_coverage:
    pytest --cov --ds=core.settings; coverage html; .\htmlcov\index.html

# Run pre-commit checks
@pre_commit: format lint test

# Upgrade node requirements based on `package.json` file
@upgrade_node_packages:
    just _start_msg "Upgrading node requirements"
    npm upgrade

# Upgrade python requirements
@upgrade_python_packages:
    uv pip compile --upgrade --generate-hashes --output-file .\requirements\prod_lock.txt .\requirements\prod.in
    uv pip compile --upgrade --generate-hashes --output-file .\requirements\dev_lock.txt .\requirements\dev.in

# Install python requirements
@install_python_packages:
    # just _start_msg "Installing python requirements"
    uv pip install -r .\requirements\dev.in

# Install node requirements
@install_node_packages:
    # just _start_msg "Installing node requirements"
    npm i

# Create .env file
[private]
@create_dotenv:
    # just _start_msg "Creating .env"
    .\.venv\Scripts\python .\utils\create_dotenv.py

# Create venv and install requirements
@setup: install_node_packages && install_python_packages create_dotenv
    uv venv
