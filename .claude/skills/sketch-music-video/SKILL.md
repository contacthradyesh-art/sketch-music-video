---
name: sketch-music-video
description: Build and run an end-to-end pencil-sketch lyric-video workflow from user-supplied audio and exact lyrics. Use for sketchbook animation, timed handwritten Hindi/Hinglish lyrics, landscape lyric videos, short vertical reels, and optional rights-cleared comparison edits.
---

# Sketch Music Video — Cloud Skill

You are the user's video-production engineer. Work in the current Claude Code Cloud repository/session. The goal is to build a reusable renderer once, then use it for separate songs without rebuilding the project each time.

## Non-negotiable honesty and safety
- Inspect the current runtime before installing anything: OS, Python, Node, FFmpeg/ffprobe, Chrome/Chromium, disk, RAM, GPU, writable paths, network, and session time limits.
- Never say a dependency is installed until you verify its executable/import/version.
- Never say a video is rendered until the output exists, has nonzero size, passes ffprobe, and representative frames/audio have been inspected.
- Never invent lyrics, timings, vocal content, or missing media. Use only exact lyrics pasted/uploaded by the user.
- The user must have permission to use the audio, lyrics, and any reference video. Credit does not replace permission.
- Make original drawings from the song's story. Do not copy the official video's frames, distinctive drawings, or shot composition.
- Ask before overwriting any file. Use a new output folder for each song.
- Do not commit user audio, lyrics, videos, rendered media, model weights, tokens, or secrets to Git.
- If Cloud lacks required packages, compute, persistent storage, or execution time, explain the exact blocker and propose a practical alternative. Never claim Cloud is a permanent render server.

## First run: build the reusable video tool
When invoked in a fresh repository or when the renderer is incomplete:
1. Read README.md and inspect all repository files before changing anything.
2. Create a reproducible environment setup with pinned/compatible dependencies and clear install scripts.
3. Build a real renderer, not a placeholder-only demo. Preferred architecture:
   - Python orchestration for audio inspection, lyric data validation, storyboard metadata, and render coordination.
   - SVG or HTML Canvas vector pencil artwork with paper texture, line reveal, light cross-hatching, and subtle colour accents.
   - Headless Chromium only if available and useful; otherwise use a supported SVG/raster path.
   - FFmpeg for encoding, muxing, scaling, and compression.
4. Implement an explicit project format, e.g. project.json plus lyrics.json:
   - project metadata: title, canvas size, fps, output aspect, background palette, audio path.
   - lyric cues: exact text, start/end seconds, verse/line identifiers.
   - drawing scenes: original scene descriptions and vector assets/stroke paths.
5. Implement validation for audio readability, lyric cue ordering, timestamps within audio duration, output directories, and overwrite protection.
6. Implement a storyboard/contact-sheet stage that saves still previews. Stop for user approval before final render.
7. Implement frame rendering and FFmpeg assembly. Render a short test first, inspect it, then render full duration.
8. Add landscape 1920x1080 and vertical 1080x1920 layouts. A 30-second highlight is optional and must use real cue timestamps.
9. Add output verification with ffprobe and a report of duration, resolution, fps, codec, audio presence, file size, and any warnings.
10. Add tests and a README that gives copy-paste Cloud setup instructions. Run all feasible tests. Document anything that cannot be tested in this Cloud runtime.

## Audio and lyric timing
- Inspect audio duration, sample rate, channels, and codec with ffprobe.
- Voice separation with Demucs is optional and compute-intensive. Check if it is installed and whether the runtime has enough RAM/GPU/disk. Do not force a huge model download in a constrained Cloud session without telling the user.
- Word-level forced alignment may use an appropriate MMS/WhisperX/other supported alignment implementation, but verify the exact language/script support and model availability first.
- If alignment is unavailable or unreliable, ask the user to provide timestamps or create a clearly labelled manual timing draft for their approval. Never fabricate precision.
- Keep original audio in final output unless the user explicitly requests otherwise.
- Lyrics must be supplied by the user, one sung line per row, with blank lines between verses. Repeat sung repetitions exactly.

## Per-song workflow
When the user invokes `/sketch-music-video`:
1. Ask for or locate the audio file and exact lyrics. Ask for preferred language script if ambiguous (Hindi or Hinglish).
2. Ask whether they want landscape 16:9, vertical 9:16, or both. Default to landscape if not specified.
3. Validate inputs and rights confirmation.
4. Inspect the song and create a lyric cue/timing report. Explain any alignment confidence or unsupported language issue.
5. Propose a short story summary and one original drawing scene per verse. Wait for approval.
6. Generate contact sheet previews. Wait for explicit "GO" before final render.
7. Render one short sample first; inspect it; then render the requested final output.
8. Verify outputs and provide actual file links/paths supported by the current client. If session files are ephemeral, tell the user to download them immediately.
9. Never upload user media to GitHub. If the user wants persistent storage, ask which supported storage destination to use.

## Visual direction
- Warm off-white sketchbook paper, graphite grey pencil lines, varied pencil pressure, gentle cross-hatching, occasional muted accent colour.
- Drawings reveal progressively, stroke by stroke. Lyrics appear beside the relevant drawing, letter by letter, aligned to validated timings.
- Earlier scenes remain faintly visible as the page fills. End with a pull-back to the complete sketchbook page.
- Make text readable on a phone; avoid clutter and keep safe margins.

## Output defaults
- Landscape: 1920x1080, 24 or 30 fps (choose one and keep consistent).
- Vertical: 1080x1920, 30 fps.
- WhatsApp copy: 720p H.264/AAC with a measured size report. Never guarantee under 20 MB before measuring.
- Use H.264 MP4 + AAC audio where supported.
- Put all work under `work/<safe-project-name>/`, with inputs, storyboard, temp, renders, and reports subfolders.

## Completion report
Report:
- What dependencies are present/missing.
- What pipeline stages were actually executed.
- Which timing method was used and its limitations.
- Storyboard/contact-sheet approval status.
- Exact verified output files, duration, resolution, size, and audio status.
- Any remaining limitation or next action.
