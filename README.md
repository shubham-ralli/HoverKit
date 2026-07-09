# HoverKit

Copy-paste CSS button hover effects. Zero dependencies, pure CSS.

Hover to preview, click any button to copy the CDN link + button markup — a growing collection, new effects added over time.

## Demo

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Usage

**Option 1 — CDN (no download, works anywhere):**

```html
<!-- Minified (recommended) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/shubham-ralli/hoverkit@main/hoverkit.min.css" />

<!-- Or the full, unminified file -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/shubham-ralli/hoverkit@main/hoverkit.css" />

<button class="btn btn--lift">Click me</button>
```

jsDelivr auto-minifies any file when you add `.min` before the extension — no build step needed. Pin a release for stability, e.g. `@v1.0.0` instead of `@main`.

**Option 2 — local file:**

```html
<link rel="stylesheet" href="hoverkit.css" />

<button class="btn btn--lift">Click me</button>
```

**Option 3 — copy from the demo:** open the demo page, click any button, and paste the copied snippet (the CDN `<link>` + the button markup).

That's it — every effect is just a class name. No JS required to use the buttons; `library.js` only powers the demo page.

## Effects

| Category | Class | Effect |
|----------|-------|--------|
| 2D Transitions | `btn--lift` | Rises up with a growing shadow |
| 2D Transitions | `btn--push` | 3D press with a hard shadow |
| 2D Transitions | `btn--expand` | Letters spread apart |
| 2D Transitions | `btn--grow` | Scales up |
| 2D Transitions | `btn--skew` | Horizontal tilt |
| 2D Transitions | `btn--rotate` | Rotates with a slight scale |
| 2D Transitions | `btn--float` | Gentle up/down float |
| 2D Transitions | `btn--bounce` | Bounces upward |
| 2D Transitions | `btn--jelly` | Squash-and-stretch wobble |
| 2D Transitions | `btn--flip` | 3D flip on the X axis |
| 2D Transitions | `btn--shake` | Quick horizontal shake |
| 2D Transitions | `btn--pop` | Quick scale pop |
| 2D Transitions | `btn--swing` | Pendulum swing |
| 2D Transitions | `btn--tilt` | Perspective tilt back |
| 2D Transitions | `btn--rubber` | Rubber-band squash & stretch |
| 2D Transitions | `btn--uppercase` | Letters spread and uppercase |
| Background Transitions | `btn--fill` | Color sweeps in from the left |
| Background Transitions | `btn--gradient` | Animated gradient slides |
| Background Transitions | `btn--split` | Accent bands grow from top & bottom |
| Background Transitions | `btn--slide` | Color slides up from the bottom |
| Background Transitions | `btn--radial` | Accent circle expands from center |
| Background Transitions | `btn--stripes` | Animated diagonal stripes |
| Background Transitions | `btn--sweep` | Color sweeps in from the right |
| Background Transitions | `btn--shimmer` | Moving light band loops across |
| Background Transitions | `btn--diagonal` | Color slides in diagonally |
| Background Transitions | `btn--wipe` | Color wipes from top to bottom |
| Background Transitions | `btn--center` | Color grows outward from center |
| Background Transitions | `btn--dots` | Animated polka-dot pattern |
| Background Transitions | `btn--wave` | Looping gradient wave |
| Background Transitions | `btn--checker` | Moving checkerboard |
| Background Transitions | `btn--blinds` | Striped curtain fills in |
| Border Transitions | `btn--border` | Outline draws itself |
| Border Transitions | `btn--underline` | Bar grows under the label |
| Border Transitions | `btn--corners` | Corner brackets appear |
| Border Transitions | `btn--outline` | Offset outline expands outward |
| Border Transitions | `btn--frame` | Inset frame appears inside |
| Border Transitions | `btn--bars` | Bars grow across top and bottom |
| Border Transitions | `btn--centerline` | Underline grows from the center |
| Border Transitions | `btn--pill` | Morphs into a pill shape |
| Border Transitions | `btn--glowborder` | Glowing outline |
| Border Transitions | `btn--thick` | Thick underline grows across |
| Shadow & Glow | `btn--shine` | Glossy light streak sweeps across |
| Shadow & Glow | `btn--glow` | Neon glow |
| Shadow & Glow | `btn--pulse` | Expanding ring pulse |
| Shadow & Glow | `btn--neon` | Cycling multi-color glow |
| Shadow & Glow | `btn--inset` | Pressed-in inner shadow |
| Shadow & Glow | `btn--raise` | Layered lift shadow |
| Shadow & Glow | `btn--long` | Stacked long shadow |
| Shadow & Glow | `btn--soft` | Soft ambient glow lift |
| Shadow & Glow | `btn--ring` | Soft halo ring |
| Icon Buttons | `btn--icon-slide` | Arrow slides right |
| Icon Buttons | `btn--icon-reveal` | Icon slides in on hover |
| Icon Buttons | `btn--icon-spin` | Icon rotates a full turn |
| Icon Buttons | `btn--icon-bounce` | Icon bounces |
| Icon Buttons | `btn--icon-fly` | Icon flies out and returns |
| Icon Buttons | `btn--icon-pop` | Icon pops |

### Icon buttons

Icon effects need a text span and an icon span inside the button:

```html
<button class="btn btn--icon-slide">
  <span class="btn__text">Continue</span>
  <span class="btn__icon">→</span>
</button>
```

The icon can be any glyph, emoji, or `<svg>` — put it inside `.btn__icon`.

## Theming

The library uses CSS variables — override them to recolor:

```css
.btn {
  --btn-bg: #6366f1;   /* button color */
  --btn-fg: #ffffff;   /* text color */
  --btn-accent: #22d3ee; /* split accent */
}
```

## Files

- `hoverkit.css` — the library (link this in your project)
- `index.html` — demo / showcase page
- `library.js` — demo page logic (cards, categories, copy-to-clipboard)

## License

MIT © 2026
