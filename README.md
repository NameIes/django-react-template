# Django + React Template

This boilerplate/starter template will help you or you team to jump-start any new `Django + React` project.

## ✨ Features

### 🧑‍💻 Best Practices

- [Python Decouple](https://github.com/HBNetwork/python-decouple)
- [Just](https://github.com/casey/just)
- [UV](https://github.com/astral-sh/uv)

### 📦️ Django packages

- [Django](https://www.djangoproject.com/)
- `TODO:` [Celery](https://docs.celeryq.dev/en/stable/)
- `TODO:` [Custom User Model](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#substituting-a-custom-user-model)
- `TODO:` [Django Allauth](https://allauth.org/)

### 🔧 Python Testing Tools

- [Pytest](https://docs.pytest.org/)
- [Pytest Django](https://pytest-django.readthedocs.io/en/latest/index.html)
- [Pytest-cov](https://pytest-cov.readthedocs.io/)
- [Model Bakery](https://github.com/model-bakers/model_bakery)
- [Django Test Plus](https://github.com/revsys/django-test-plus/)

### 🩺 Code quality, Formatting, and Linting tools

- [Ruff](https://github.com/charliermarsh/ruff)
- [Mypy](http://mypy-lang.org/)
- [dj Lint](https://djlint.com/)
- [Django Debug Toolbar](https://github.com/jazzband/django-debug-toolbar)
- [Stylelint](https://stylelint.io/)
- [Eslint](https://eslint.org/)

### 💄 Frontend

- [Vite](https://vitejs.dev/)
- `TODO:` [MUI](https://mui.com/material-ui/getting-started/)

### 📝 Documentation

- `TODO:` [MkDocs](https://www.mkdocs.org/)
- `TODO:` [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
- `TODO:` [mkdocstrings](https://mkdocstrings.github.io/)
- `TODO:` [mkdocs-include-markdown-plugin](https://github.com/mondeja/mkdocs-include-markdown-plugin)
- `TODO:` [mkdocs-linkcheck](https://github.com/byrnereese/linkchecker-mkdocs)

## Installation

### Requirements

Before proceeding make sure you have installed `Just`.

### Creating enviroment and installing all requirements

```
uv venv

# Bash
source .\venv\bin\activate

# PowerShell / CMD
.\venv\Scripts\activate

uv pip install -r .\backend\requirements.txt
```

### Start project

```
just start
```

## Usage

Django + React Template comes with Just recipes for all the most common commands and tasks that an engineer will use during development. To see the full list of commands run `just -l` in the root of project directory. The following is an abbreviated list of the most common commands.

```
build_assets            # Build frontend assets
clean                   # Remove build and cache files and test coverage data
collectstatic           # Run Django's collectstatic management command
```
