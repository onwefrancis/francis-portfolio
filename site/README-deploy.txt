ONWE PORTFOLIO — v5 (dist bundle)
=================================
What this is: your live portfolio (onwefrancis.pages.dev) rewritten into
the ONWE house brand. Same page, same sections, same animations
(progress bar, blueprint grid, particles, reveal-on-scroll, count-up
stats, Lagos clock, lightbox, QR verify), same portraits and project
pictorials — re-dressed in deep canopy green, blade gold and trace.

v6 additions (this build):
  - RIMS gallery now uses an EXHIBITION SET: live public landing +
    demo tenant shots (fictional company "Meridian Demo Pharmaceuticals",
    synthetic 92-row register) captured from the real app in fixture
    mode. No production data anywhere on the page.
  - New Project 04 card: Exotask/Bytestorm client document + identity
    work, with the "Nice. Well done." client quote (permission granted).
  - Section title: "Systems I Own, Work They Returned For."

What changed from the old page:
  1. Masthead now carries the house: ONWE wordmark + animated Ringswipe
     + "works that own their claims". (The Ringswipe is also the favicon.)
  2. Colours: dark green (#04100b base, #0b3527 lines) + gold #e8b84b
     + mint-trace #bfe3cf, replacing slate-navy + amber.
  3. Each project is tagged with its room: RIMS = REGULATORY (leads,
     per the Law of the first room), Aptframe = AI, ToolForge = EDITORIAL.
  4. Your contact + stats + experience + writing copy untouched. All
     links identical to the live page (Outlook mail, Notion, GitHub,
     LinkedIn). Resume page and your PDF resume included — nothing 404s.
  5. Images re-encoded PNG->JPG: 7.2 MB -> 1.7 MB total. Faster load.
  6. New favicon.svg / brand-icon.svg (Ringswipe, replaces old OF glyph).
  7. prefers-reduced-motion respected (motions switch off politely).

Deploy: drag this zip into the Cloudflare project (Workers & Pages ->
your project -> Create deployment -> Upload assets) — same as v1/v2.
It is a flat static bundle: index.html, resume.html, favicon.svg,
brand-icon.svg, assets/ (5 jpg + resume pdf). No build step, no secrets.
