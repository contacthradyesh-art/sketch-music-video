#!/usr/bin/env python3
"""Report rendering prerequisites without attempting large downloads."""
from __future__ import annotations

import importlib.util
import shutil
import sys

COMMANDS = ("node", "npm", "ffmpeg", "ffprobe", "google-chrome", "chromium", "chromium-browser")
MODULES = ("numpy", "PIL", "demucs", "torch")

print(f"Python: {sys.version.split()[0]}")
for command in COMMANDS:
    print(f"{command}: {shutil.which(command) or 'NOT FOUND'}")
for module in MODULES:
    print(f"Python module {module}: {'available' if importlib.util.find_spec(module) else 'not installed'}")
