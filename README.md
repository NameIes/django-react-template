# Django + React Template

This boilerplate/starter template will help you or you team to jump-start any new `Django + React` project.

## ✨ Features

### 🧑‍💻 Best Practices

- [Python Decouple](https://github.com/HBNetwork/python-decouple) - Used for managing enviroment variables.
- [Just](https://github.com/casey/just) - Popular tool for running common commands (make equivalent).
- [UV](https://github.com/astral-sh/uv) - Used to maintain python requirements.

### 📦️ Django packages

- [Django](https://www.djangoproject.com/) - Latest version of Django.
- [Custom User Model](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#substituting-a-custom-user-model)
- `TODO:` [Django Allauth](https://allauth.org/)
- `TODO:` [Celery](https://docs.celeryq.dev/en/stable/)
- `TODO:` [CORS Headers](https://github.com/adamchainz/django-cors-headers)
- `TODO:` [Django Rest Framework](https://www.django-rest-framework.org/)

### 🔧 Python Testing Tools

- [Pytest](https://docs.pytest.org/) - The most popular Python test runner in Python community.
- [Pytest Django](https://pytest-django.readthedocs.io/en/latest/index.html) - A Django plugin for Pytest.
- [Pytest-cov](https://pytest-cov.readthedocs.io/) - Adds code coverage to tests.
- [Model Bakery](https://github.com/model-bakers/model_bakery) - A faster way to create model instances for tests.
- [Django Test Plus](https://github.com/revsys/django-test-plus/) - Helper functions to write tests faster.

### 🩺 Code quality, Formatting, and Linting tools

- [Ruff](https://github.com/charliermarsh/ruff) - Python formatting and linting. Lightning fast because it's written in Rust! Replaces Black and other tools.
- [Mypy](http://mypy-lang.org/) - Python type checking.
- [dj Lint](https://djlint.com/) - Automatic Django HTML template formatting and linting.
- [Django Debug Toolbar](https://github.com/jazzband/django-debug-toolbar) - A toolbar for debugging and optimizing Django queries.
- [Stylelint](https://stylelint.io/) - Automatic Sass formatting and linting.
- [Eslint](https://eslint.org/) - Automatic Javascript formatting and linting.

### 💄 Frontend

- [Vite](https://vitejs.dev/) - A fast frontend build tool.
- [MUI](https://mui.com/material-ui/getting-started/) - Popular UI framework.
- `TODO:` [Axios](https://axios-http.com/docs/intro)

### 📝 Documentation

- [MkDocs](https://www.mkdocs.org/) - Static site generator that's geared towards building project documentation.
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) - Beautify MkDocs theme.
- [mkdocstrings](https://mkdocstrings.github.io/) - Build documentation from Python docstrings.
- [mkdocs-include-markdown-plugin](https://github.com/mondeja/mkdocs-include-markdown-plugin) - Include docs from other files.
- [mkdocs-linkcheck](https://github.com/byrnereese/linkchecker-mkdocs) - Automatic link checking.

## Installation

### Requirements

Before proceeding make sure you have installed [Just](https://github.com/casey/just), [Node](https://nodejs.org/), and [Python](https://www.python.org/) (recommended [pyenv-win](https://github.com/pyenv-win/pyenv-win)) with [UV](https://github.com/astral-sh/uv).

### Creating enviroment and installing all requirements

```
just setup
```

### Start project

```
just start host - host is optional, by default 127.0.0.1:8000
```

## Usage

Django + React Template comes with Just recipes for all the most common commands and tasks that an engineer will use during development. To see the full list of commands run `just` in the root of project directory. The following is an abbreviated list of the most common commands.

```
clean                   # Remove build files, python cache files and test coverage data
build_frontend          # Build frontend assets
collectstatic           # Run Django's collectstatic management command
start                   # Run Django's runserver management command
start_frontend          # Run Vite development server
format                  # Format all code
lint                    # Lint everything
test                    # Run tests without coverage
test_with_coverage      # Run tests with coverage
pre_commit              # Run pre-commit checks
```
