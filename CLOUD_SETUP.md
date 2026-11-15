# Claude Cloud Setup — Sketch Music Video

Use this document after opening this repository in a Claude Code Cloud session.

## First-time setup prompt

Paste the following into the Cloud chat:

```text
Read README.md, CLOUD_SETUP.md, and .claude/skills/sketch-music-video/SKILL.md.

Treat the skill as the project specification. First inspect this Cloud runtime and report OS, Python, Node, FFmpeg/ffprobe, Chromium, disk, RAM, GPU, writable storage, network and execution constraints.

Then build the actual reusable pencil-sketch lyric video pipeline in this repository. Do not stop at a demo SVG or documentation. Implement input validation, lyric cue JSON format, storyboard/contact sheet generation, approval gate, vector pencil drawing/line reveal, lyric reveal from explicit timestamps, FFmpeg MP4 assembly, landscape and vertical layouts, output verification, and tests.

Use a practical dependency-light architecture suitable for this Cloud runtime. Do not download large ML models until you have checked resources and asked me. If automatic Hindi/Hinglish forced alignment cannot be supported reliably here, implement a manual timing import/approval path and document the limitation.

Never invent lyrics or timestamps. Never overwrite files without asking. Never commit audio, lyrics, videos, renders, model weights or secrets. Run tests and a short end-to-end sample using generated test media only. Report what actually works and what remains blocked.
```

## After first-time setup

Once the Cloud agent has implemented and tested the renderer, commit the code to the repository. For each new song:
1. Start a Cloud session with this repository.
2. Invoke `/sketch-music-video` (or ask Claude to read the skill if slash-command discovery is unavailable).
3. Attach the audio file and paste exact lyrics.
4. Choose 16:9, 9:16, or both.
5. Review timing, story plan, and contact sheet.
6. Reply `GO` only after approving the storyboard/contact sheet.
7. Download verified MP4 outputs before the Cloud session expires.

## Important
GitHub stores project code; it does not itself render videos. A Cloud session must have the necessary runtime tools and enough resources. Cloud sessions and their temporary files may be ephemeral. This repository does not yet contain a verified production-ready end-to-end renderer until the Cloud setup prompt has been run and its tests pass.
