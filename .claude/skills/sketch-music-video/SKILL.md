---
name: sketch-music-video
description: Create original pencil-sketch lyric videos from a user-provided audio file and exact lyrics. Use when asked to create a sketchbook-style lyric video, timed handwritten lyrics, or a 9:16 comparison reel.
---

# Sketch Music Video

Create an original sketchbook-style lyric video from user-provided audio and exact lyrics.

## Core rules
- Never invent, reconstruct, or guess copyrighted lyrics. Use only lyrics supplied by the user or material they have rights to use.
- Never guess word timings. Use forced alignment where supported; report alignment failures and ask for corrected lyrics/audio.
- Do not copy drawings, shot composition, or other distinctive creative elements from an official music video. Make an original storyboard inspired only by the supplied lyrics.
- Ask before overwriting any existing file.
- Ask the user to confirm they have permission to use the audio and any supplied video. Do not imply that credit alone grants rights.
- Show the storyboard and contact sheet for approval before the final render.
- Do not claim a render succeeded unless the output file exists and has been checked.

## Inputs
Request:
1. Audio file (MP3 or WAV).
2. Exact lyrics, one sung line per row, blank row between verses. Hindi script and Hinglish/Latin script are supported.
3. Optional official/reference video only for a rights-cleared comparison reel; do not copy its artwork.

## Workflow
1. Inspect the runtime: OS, Python, Node.js, FFmpeg, Chrome/Chromium, disk space, memory, and available writable directories. Report what is missing.
2. Validate audio format, duration, sample rate, and file readability.
3. Separate vocals from accompaniment with Demucs only if dependencies and compute resources are available. If not, explain and use a clearly labelled fallback only when the user approves.
4. Align the supplied lyrics to the vocal track using a supported forced-alignment model (e.g. MMS alignment implementation). Validate language support, tokenization, and output confidence. Never fabricate missing timestamps.
5. Produce a verse-by-verse story summary and one original drawing concept per verse. Wait for approval.
6. Generate a contact sheet of storyboard stills. Wait for the user's explicit "go".
7. Render a landscape 1920x1080 lyric video using code-drawn pencil strokes, paper texture, cross-hatching, and letter-by-letter lyric reveal synchronized to validated timestamps.
8. Export the original audio with the video. Optionally create a 720p compressed copy; report actual file size and do not promise a sub-20 MB result unless measured.
9. Optionally create a 9:16 comparison layout with the generated video and a rights-cleared supplied video, synchronized by audio only if a reliable matching method is available. Otherwise request a confirmed offset.
10. Verify outputs with FFprobe and inspect representative frames. Provide download links only for files actually created in the current environment.

## Output organization
Use a new per-project directory:
- work/<project-name>/inputs/
- work/<project-name>/storyboard/
- work/<project-name>/renders/
- work/<project-name>/reports/

Never commit user audio, lyrics, reference videos, generated renders, credentials, or model weights to Git by default.

## Cloud environment caution
Claude Cloud sessions may be ephemeral, resource-limited, or lack system package installation, GPU, codecs, or long-running render support. Check before work. If a dependency cannot be installed or the runtime cannot render reliably, provide an honest blocker report and a reproducible local/CI workflow; do not pretend the Cloud chat itself is a persistent render server.
