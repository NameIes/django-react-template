# Django + React Template

This boilerplate/starter template will help you or you team to jump-start any new `Django + React` project.

This template was designed for use on hosting (not VPS) on which it is impossible to install applications such as Docker, Nginx, Redis, etc.
Of course, you can use this template on VPS and customize it yourself to work with similar applications.

## ✨ Features

### 🧑‍💻 Best Practices

- [Python Decouple](https://github.com/HBNetwork/python-decouple) - Used for managing enviroment variables.
- [Just](https://github.com/casey/just) - Popular tool for running common commands (make equivalent).
- [UV](https://github.com/astral-sh/uv) - Used to maintain python requirements.
- [pre-commit](https://pre-commit.com/) - A framework for managing and maintaining multi-language pre-commit hooks.

### 📦️ Django packages

- [Django](https://www.djangoproject.com/) - Latest version of Django.
- [Custom User Model](https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#substituting-a-custom-user-model) - Custom user model so that the user can be easily extended.
- [Django Rest Framework](https://www.django-rest-framework.org/) - Powerful and flexible toolkit for building Web APIs.
- [dj-rest-auth](https://dj-rest-auth.readthedocs.io/) - Popular package for adding authentication workflows to a Django Rest Framework.
- [CORS Headers](https://github.com/adamchainz/django-cors-headers) - A Django app that adds Cross-Origin Resource Sharing (CORS) headers to responses.
- [Whitenoise](https://github.com/evansd/whitenoise) - Radically simplified static file serving for Python web apps.

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
- [Axios](https://axios-http.com/docs/intro) - A promise-based HTTP Client for node.js and the browser.
- [React](https://react.dev/) - The library for web and native user interfaces.
- [React Router](https://reactrouter.com/) - React Router enables "client side routing".
- [MobX](https://mobx.js.org/) - Signal based library that makes state management simple and scalable by transparently applying functional reactive programming.

### 📝 Documentation

- [MkDocs](https://www.mkdocs.org/) - Static site generator that's geared towards building project documentation.
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) - Beautify MkDocs theme.
- [mkdocstrings](https://mkdocstrings.github.io/) - Build documentation from Python docstrings.
- [mkdocs-include-markdown-plugin](https://github.com/mondeja/mkdocs-include-markdown-plugin) - Include docs from other files.
- [mkdocs-linkcheck](https://github.com/byrnereese/linkchecker-mkdocs) - Automatic link checking.
- [drf-spectacular](https://github.com/tfranzel/drf-spectacular) - Sane and flexible OpenAPI (3.0.3 & 3.1) schema generation for Django REST framework.

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
