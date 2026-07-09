/* ============================================================
   Button Hover Library — demo page logic
   Builds cards and copies HTML + CSS on click.
   ============================================================ */

// CDN URL for the library — after pushing to GitHub, jsDelivr serves it here.
// Replace <user> with your GitHub username (repo assumed "hoverkit", branch "main").
// jsDelivr auto-minifies when you add ".min" to the filename — no build step needed.
const CDN_URL = "https://cdn.jsdelivr.net/gh/shubham-ralli/hoverkit@main/hoverkit.min.css";

// All effects live in hoverkit.css. Here we only list them for the demo + copy.
const EFFECTS = [
  { name: "lift", label: "Lift", category: "2D Transitions" },
  { name: "push", label: "Push", category: "2D Transitions" },
  { name: "expand", label: "Expand", category: "2D Transitions" },
  { name: "fill", label: "Fill", category: "Background Transitions" },
  { name: "gradient", label: "Gradient", category: "Background Transitions" },
  { name: "split", label: "Split", category: "Background Transitions" },
  { name: "border", label: "Border", category: "Border Transitions" },
  { name: "underline", label: "Underline", category: "Border Transitions" },
  { name: "shine", label: "Shine", category: "Shadow & Glow" },
  { name: "glow", label: "Glow", category: "Shadow & Glow" },
  { name: "grow", label: "Grow", category: "2D Transitions" },
  { name: "skew", label: "Skew", category: "2D Transitions" },
  { name: "rotate", label: "Rotate", category: "2D Transitions" },
  { name: "slide", label: "Slide", category: "Background Transitions" },
  { name: "radial", label: "Radial", category: "Background Transitions" },
  { name: "stripes", label: "Stripes", category: "Background Transitions" },
  { name: "corners", label: "Corners", category: "Border Transitions" },
  { name: "outline", label: "Outline", category: "Border Transitions" },
  { name: "pulse", label: "Pulse", category: "Shadow & Glow" },
  { name: "neon", label: "Neon", category: "Shadow & Glow" },
  { name: "float", label: "Float", category: "2D Transitions" },
  { name: "bounce", label: "Bounce", category: "2D Transitions" },
  { name: "jelly", label: "Jelly", category: "2D Transitions" },
  { name: "flip", label: "Flip", category: "2D Transitions" },
  { name: "sweep", label: "Sweep", category: "Background Transitions" },
  { name: "shimmer", label: "Shimmer", category: "Background Transitions" },
  { name: "diagonal", label: "Diagonal", category: "Background Transitions" },
  { name: "frame", label: "Frame", category: "Border Transitions" },
  { name: "bars", label: "Bars", category: "Border Transitions" },
  { name: "inset", label: "Inset", category: "Shadow & Glow" },
  { name: "shake", label: "Shake", category: "2D Transitions" },
  { name: "pop", label: "Pop", category: "2D Transitions" },
  { name: "swing", label: "Swing", category: "2D Transitions" },
  { name: "wipe", label: "Wipe", category: "Background Transitions" },
  { name: "center", label: "Center", category: "Background Transitions" },
  { name: "dots", label: "Dots", category: "Background Transitions" },
  { name: "centerline", label: "Centerline", category: "Border Transitions" },
  { name: "pill", label: "Pill", category: "Border Transitions" },
  { name: "raise", label: "Raise", category: "Shadow & Glow" },
  { name: "long", label: "Long", category: "Shadow & Glow" },
  { name: "icon-slide", label: "Continue", icon: "→", category: "Icon Buttons" },
  { name: "icon-reveal", label: "Send", icon: "✈", category: "Icon Buttons" },
  { name: "icon-spin", label: "Settings", icon: "⚙", category: "Icon Buttons" },
  { name: "icon-bounce", label: "Download", icon: "↓", category: "Icon Buttons" },
  { name: "icon-fly", label: "Submit", icon: "↗", category: "Icon Buttons" },
  { name: "icon-pop", label: "Like", icon: "♥", category: "Icon Buttons" },
  { name: "tilt", label: "Tilt", category: "2D Transitions" },
  { name: "rubber", label: "Rubber", category: "2D Transitions" },
  { name: "uppercase", label: "Uppercase", category: "2D Transitions" },
  { name: "wave", label: "Wave", category: "Background Transitions" },
  { name: "checker", label: "Checker", category: "Background Transitions" },
  { name: "blinds", label: "Blinds", category: "Background Transitions" },
  { name: "glowborder", label: "Glow Border", category: "Border Transitions" },
  { name: "thick", label: "Thick", category: "Border Transitions" },
  { name: "soft", label: "Soft", category: "Shadow & Glow" },
  { name: "ring", label: "Ring", category: "Shadow & Glow" },
];

// Inner markup for a button — icon buttons get text + icon spans.
function btnInner(fx) {
  return fx.icon
    ? `<span class="btn__text">${fx.label}</span><span class="btn__icon">${fx.icon}</span>`
    : fx.label;
}

// Build the snippet a user copies: the CDN <link> (add once) + the button.
function buildSnippet(fx) {
  return `<!-- Add once in your <head> -->
<link rel="stylesheet" href="${CDN_URL}" />

<!-- Then use any button by class name -->
<button class="btn btn--${fx.name}">${btnInner(fx)}</button>`;
}

// Category order for display.
const CATEGORIES = [
  "2D Transitions",
  "Background Transitions",
  "Border Transitions",
  "Shadow & Glow",
  "Icon Buttons",
];

const root = document.getElementById("grid");
const filterBar = document.getElementById("filters");
let counter = 0;

// Build one card element.
function makeCard(fx) {
  counter += 1;
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <span class="card__copy">click to copy</span>
    <div class="btn-wrap">
      <button class="btn btn--${fx.name}" tabindex="-1">${btnInner(fx)}</button>
    </div>
    <div class="card__meta"><span class="num">${String(counter).padStart(2, "0")}</span> btn--${fx.name}</div>
  `;
  card.addEventListener("click", () => copySnippet(fx));
  return card;
}

// Render a section per category.
CATEGORIES.forEach((cat) => {
  const items = EFFECTS.filter((fx) => fx.category === cat);
  if (!items.length) return;

  const section = document.createElement("section");
  section.className = "section";
  section.dataset.cat = cat;

  const head = document.createElement("h2");
  head.className = "section__title";
  head.innerHTML = `${cat} <span class="section__count">${items.length}</span>`;

  const grid = document.createElement("div");
  grid.className = "grid";
  items.forEach((fx) => grid.appendChild(makeCard(fx)));

  section.appendChild(head);
  section.appendChild(grid);
  root.appendChild(section);
});

// Filter chips: All + each category.
function renderFilters() {
  const chips = ["All", ...CATEGORIES];
  chips.forEach((label, i) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (i === 0 ? " chip--active" : "");
    chip.textContent = label;
    chip.addEventListener("click", () => applyFilter(label, chip));
    filterBar.appendChild(chip);
  });
}

function applyFilter(label, chip) {
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("chip--active"));
  chip.classList.add("chip--active");
  document.querySelectorAll(".section").forEach((sec) => {
    sec.style.display = label === "All" || sec.dataset.cat === label ? "" : "none";
  });
}

renderFilters();

// Show the live effect count in the header badge.
const countEl = document.getElementById("fx-count");
if (countEl) countEl.textContent = EFFECTS.length;

// Copy + toast.
const toast = document.getElementById("toast");
let toastTimer;

async function copySnippet(fx) {
  const text = buildSnippet(fx);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback for non-secure contexts (file://).
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
  showToast(`Copied btn--${fx.name} ✓`);
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}
