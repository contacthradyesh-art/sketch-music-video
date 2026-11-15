# Sketch Music Video

A reusable Claude Code skill and project specification for creating original pencil-sketch lyric videos from user-provided audio and exact lyrics.

## Repository status

The skill and setup instructions are committed. The renderer is **not yet verified as a production-ready end-to-end MP3-to-MP4 system**. Run the first-time Cloud setup below to implement and test the actual pipeline in a suitable Claude Code Cloud runtime.

## Start in Claude Code Cloud

1. Open [Claude Code](https://claude.ai/code) and connect this GitHub repository: `contacthradyesh-art/sketch-music-video`.
2. Start a Cloud session for the repository.
3. Paste the complete first-time setup prompt from [CLOUD_SETUP.md](CLOUD_SETUP.md).
4. Ask Claude to implement the full renderer, run tests, and commit the working code.
5. Confirm the end-to-end sample test passes before using it for real songs.

## Create each new video

After the renderer is implemented:
1. Start a Cloud session with this repository.
2. Invoke `/sketch-music-video`. If slash-command discovery is unavailable, ask Claude to read `.claude/skills/sketch-music-video/SKILL.md`.
3. Attach an audio file you are authorized to use.
4. Paste exact lyrics, one sung line per row, with a blank line between verses.
5. Review timing and the original storyboard.
6. Approve the contact sheet and explicitly reply `GO` before final rendering.
7. Download verified output files before the Cloud session expires.

## Intended visual output
- Warm off-white sketchbook paper and graphite pencil illustrations
- Drawings that reveal progressively, stroke by stroke
- Handwritten lyric reveal synchronized to supplied/validated timings
- 1920x1080 landscape and 1080x1920 vertical outputs
- Optional compressed 720p copy and short highlight

## Cloud limitations

GitHub stores source code; it is not an always-on video-rendering server. Cloud sessions can be temporary and resource-limited. The runtime must be checked for Python, Node.js, FFmpeg/ffprobe, Chromium, writable disk, memory, model access and execution limits. Heavy voice separation and automatic Hindi/Hinglish forced alignment may be unavailable or impractical in a constrained session. The skill requires transparent reporting and an approved manual timing path when automatic alignment is not reliable.

## Rights and privacy

Use only audio, lyrics, and reference footage you own or are authorized to use. Credit does not replace permission. Original artwork must not copy distinctive frames or drawings from a reference music video. Never commit user media, lyrics, renders, model weights, tokens, or secrets to Git.
