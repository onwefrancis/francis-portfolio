# francis-portfolio — build flow

- `main` → **production** (onwe-home.onwefrancis123.workers.dev)
- `preview` → **preview builds** — every correction lands here first
  (https://preview-onwe-home.onwefrancis123.workers.dev)

Static bundle lives in `site/` (loaded by `wrangler.jsonc`; custom 404
served from `site/404.html`).

Correction loop: buildhouse amends `site/` on `preview` → push →
Cloudflare previews it → on approval, fast-forward `main` from `preview`.
