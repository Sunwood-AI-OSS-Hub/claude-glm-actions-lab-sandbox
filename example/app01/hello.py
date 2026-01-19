#!/usr/bin/env python3
"""シンプルなHello Worldアプリ"""

def greet(name: str = "World") -> str:
    """挨拶を返す"""
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(greet())
