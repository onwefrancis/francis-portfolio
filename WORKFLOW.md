# francis-portfolio — build flow (final, 2026-10-17)

One source bundle: `site/` (static, no build step). Two Cloudflare targets
read the same repository:

| Target | Mode | Output |
|---|---|---|
| Worker `onwe-home` | Workers Builds (git-connected) | `wrangler.jsonc` → assets `./site` + assets-first 404 worker |
| Pages `onwefrancis.pages.dev` | Pages Git integration | Build command: none · **Build output directory: `site`** · native 404 from `site/404.html` |

Branches:
- `preview` → preview: https://preview-onwe-home.onwefrancis123.workers.dev
- `main` → production: onwe-home.onwefrancis123.workers.dev AND onwefrancis.pages.dev (same commit)

Correction loop: buildhouse amends `site/` on `preview` → push → review
preview → open/merge PR preview→main → production deploys on both
platforms in ~1 minute. No manual uploads anywhere.

Notes:
- `package-lock.json` must stay committed (CI runs `npm ci`).
- Do not point either platform's output at the repo root — `site/` only.
