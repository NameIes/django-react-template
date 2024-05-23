import sys

import colorama

colorama.init()


if __name__ == "__main__":
    print(f"{colorama.Fore.BLUE}▓▓▓ {sys.argv[1]}{colorama.Style.RESET_ALL}")
