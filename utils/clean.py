import shutil
from pathlib import Path

CLEAN_NAMES = (
    '.mypy_cache',
    '.pytest_cache',
    '.ruff_cache',
    '__pycache__',
    '.coverage',
    'htmlcov',
)

if __name__ == "__main__":
    project_dir = Path(__file__).parent.parent.resolve()

    for f in project_dir.rglob("*"):
        if f.name in CLEAN_NAMES:
            if f.is_dir():
                shutil.rmtree(f)
            else:
                f.unlink()
