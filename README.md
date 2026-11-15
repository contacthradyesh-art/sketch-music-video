# Sketch Music Video

A Claude Code skill and rendering scaffold for original pencil-sketch lyric videos.

## What it aims to create
- 1920x1080 landscape lyric videos
- Code-drawn pencil illustrations that reveal stroke by stroke
- User-supplied Hindi or Hinglish lyrics, lettered in sync with validated word timings
- Optional 720p compressed copy and 9:16 comparison layout

## Use in Claude Code
1. Connect this GitHub repository to Claude Code.
2. Start a Cloud session with this repository.
3. Open the skill from `.claude/skills/sketch-music-video/SKILL.md`. If skills are enabled, invoke `/sketch-music-video`.
4. Attach an audio file you are authorized to use.
5. Paste the exact lyrics, one sung line per row, with a blank line between verses.
6. Review and approve the storyboard, then the contact sheet, before rendering.

## Important: Cloud limitations
A GitHub repository stores the source code; it does not itself provide an always-on video-rendering server. Each Claude Cloud session must be checked for Python, Node.js, FFmpeg, Chrome/Chromium, writable disk, memory, execution time, and model availability. A session may not support heavy audio separation or full-resolution rendering. The skill instructs Claude to inspect and report those limits rather than claim success without an actual output.

## Repository layout
- `.claude/skills/sketch-music-video/SKILL.md` — Claude Code skill
- `renderer/` — minimal canvas-based frame renderer scaffold
- `scripts/` — environment and output validation helpers
- `.github/workflows/validate.yml` — lightweight source validation

## Local prerequisites
- Python 3.10+
- Node.js 20+
- FFmpeg with ffprobe
- Chrome or Chromium for headless rendering
- Optional: Demucs and a compatible forced-alignment model; these can be large and compute-intensive.

## Install scaffold
```bash
npm install
python -m pip install -r requirements.txt
npm run check
```

This initial repository is a scaffold, not a completed production renderer. Audio separation, forced alignment, full animation orchestration, and end-to-end export still require implementation and testing in a suitable runtime.

## Rights
Use only audio, lyrics, and reference footage you own or are authorized to use. Credit does not replace permission. Do not commit media or model weights to the repository.
