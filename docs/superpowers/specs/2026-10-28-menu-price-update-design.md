# Menu price update design

## Goal

Update the prices and presentations in the existing menu using
`D:\Descargas\menu_la_pescaderia.txt` as the source of truth.

## Scope and behavior

- Update products already present in `menu-data.js` when they can be matched to
  a TXT entry, including entries whose TXT prices are marked `[REVISAR]`.
- Match multi-presentation products by presentation so each price is updated
  independently.
- Keep existing menu items that are absent from the TXT; do not add TXT-only
  products or replace menu sections.
- Leave prices unchanged when no corresponding TXT entry can be identified.
- Bump the `menu-data.js` cache-busting version in `index.html`.

## Validation

Confirm `menu-data.js` remains valid JavaScript and verify the resulting
matched product prices against the TXT. Inspect the final diff to ensure
unmatched products and unrelated files remain unchanged.
