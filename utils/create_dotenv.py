if __name__ == "__main__":
    import os
    from pathlib import Path
    from django.core.management.utils import get_random_secret_key

    DEFAULTS = {
        'DEBUG': 'True',
        'SECRET_KEY': get_random_secret_key(),
    }

    project_dir = Path(__file__).parent.parent.resolve()

    with open(os.path.join(project_dir, ".env"), "w") as f:
        for k, v in DEFAULTS.items():
            f.write(f"{k}={v}\n")
