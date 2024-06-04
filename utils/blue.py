import sys

try:
    import colorama

    colorama.init()
    blue = colorama.Fore.BLUE
    reset = colorama.Style.RESET_ALL
except ImportError:
    blue = ""
    reset = ""

if __name__ == "__main__":
    try:
        print(f"{blue}--- {sys.argv[1]}{reset}")
    except UnicodeEncodeError:
        print(f"--- {sys.argv[1]}")
