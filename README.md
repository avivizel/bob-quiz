# Bob Intro Quiz — Vibe Coding & IBM Bob Glossary

An interactive, Hebrew-language glossary quiz app built as a static website. It helps IBM teams learn and explore key Vibe Coding and IBM Bob terminology through a clean, card-style reveal interface — no frameworks, no build step, just plain HTML, CSS, and JavaScript.

🔗 **Live app: [https://ibm.biz/bob-quiz](https://ibm.biz/bob-quiz)**

---

## 📖 What Is This?

This project was created to onboard developers and stakeholders at IBM Israel to the concepts behind **Vibe Coding** and **IBM Bob** (IBM's AI-powered development environment). Instead of a static document, the glossary is interactive: terms are always visible, but their explanations, meanings, and code examples are hidden behind reveal buttons — encouraging active engagement with the material.

---

## 🗂️ Project Structure

```
├── index.html          # Vibe Coding glossary quiz (main entry point)
├── bob.html            # IBM Bob–specific glossary quiz
├── examples.html       # Standalone examples viewer
├── styles.css          # Shared stylesheet for all pages
│
├── app.js              # Core app logic (shared by all pages)
├── terms.js            # Vibe Coding term definitions + categories
├── bob-terms.js        # IBM Bob term definitions + categories
├── examples-terms.js   # Extended example content for Vibe Coding terms
├── bob-examples.js     # Extended example content for IBM Bob terms
│
├── assets/
│   └── bob-mascot.png  # Bob mascot image used in the header
│
├── vault4liliya.csv                        # Raw glossary source data (CSV)
└── מילון_ליבה_Vibe_Coding_מקוצר.xlsx      # Core glossary in Excel format
```

---

## 🚀 Getting Started

No installation or build step is required. Just open any HTML file directly in a browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally (recommended to avoid CORS on some browsers)
npx serve .
# or
python -m http.server 8080
```

Then navigate to `http://localhost:8080` (or whichever port is assigned).

---

## 📄 Pages

### `index.html` — Vibe Coding Quiz
The main landing page. Covers the foundational vocabulary of AI-assisted development:

- **Categories covered:** Foundations (AI/Vibe Coding), Agents & Tools, IBM Bob product, Bob configuration, Git & version control, Quality & security
- **Term count:** 80+ terms sorted alphabetically

### `bob.html` — IBM Bob Quiz
Dedicated to IBM Bob concepts, workflows, and best practices:

- **Categories covered:** Product & Modes, Built-in Slash Commands, Configuration & extensions, Recommended workflow, Security & control, Quality & Review, Anti-patterns
- **Term count:** 50+ IBM Bob–specific terms

### `examples.html` — Examples Viewer
A standalone page that displays all terms that have associated code/prompt examples in a browsable list format.

---

## 🧩 How the App Works

### Term Data (`terms.js` / `bob-terms.js`)

Each term is a plain JavaScript object assigned to `window.VIBE_TERMS`, with the following shape:

```js
{
  id: "vibe-coding",          // Unique slug for the term
  category: "foundations",    // Category key (maps to a label in VIBE_CATEGORIES)
  term: "Vibe Coding",        // Display name
  explanation: "...",         // Short technical explanation (revealed on click)
  meaning: "...",             // Practical meaning / "so what?" (revealed on click)
  example: "..."              // Optional: multi-line code/prompt example (opens modal)
}
```

Categories are defined as a map in `window.VIBE_CATEGORIES` and their display order in `window.VIBE_CATEGORY_ORDER`.

### Core Logic (`app.js`)

The single `app.js` file handles everything:

| Feature | How it works |
|---|---|
| **Alphabetical sort** | Terms are sorted on load using `localeCompare` with `numeric: true` |
| **Category filters** | Chip buttons rendered from `VIBE_CATEGORY_ORDER`; active filter stored in `activeCategory` |
| **Live search** | Input event filters the term list by term name, id, and category label simultaneously |
| **Reveal buttons** | Each explanation and meaning cell contains a custom `createReveal()` component with eye/eye-off SVG icons and `aria-expanded` state |
| **Example modal** | Clicking "דוגמה" opens an accessible modal dialog (`role="dialog"`, `aria-modal`, focus trap, `Escape` to close) |
| **Smart text direction** | Example content is line-by-line: code/Latin lines render LTR; Hebrew lines render RTL (detected via `isMostlyLatin()` and `isCodeLike()`) |
| **Hide All** | A toolbar button collapses all currently open reveal panels |
| **Accessible count** | `aria-live` region announces how many terms are visible |

### Styling (`styles.css`)

- Uses **IBM Plex Sans** and **IBM Plex Sans Hebrew** (loaded from Google Fonts)
- RTL layout throughout (`dir="rtl"`, `lang="he"`)
- Animated ambient background orbs (CSS-only, `aria-hidden`)
- Responsive design — works on mobile and desktop
- Category tags are colour-coded per category key via `data-category` CSS attribute selectors

---

## ➕ Adding New Terms

1. Open `terms.js` (for Vibe Coding) or `bob-terms.js` (for IBM Bob)
2. Add a new object to the `window.VIBE_TERMS` array:

```js
{
  id: "my-new-term",
  category: "foundations",        // Must match a key in VIBE_CATEGORIES
  term: "My New Term",
  explanation: "What it is.",
  meaning: "Why it matters in practice.",
  example: "Optional: a prompt or code snippet\nCan be multi-line"
}
```

3. The app sorts and renders it automatically — no other changes needed.

To add a **new category**, add a key/label pair to `window.VIBE_CATEGORIES` and insert the key into `window.VIBE_CATEGORY_ORDER` in the desired position.

---

## 📦 Data Sources

| File | Description |
|---|---|
| `vault4liliya.csv` | Source CSV export of the raw glossary content |
| `מילון_ליבה_Vibe_Coding_מקוצר.xlsx` | Condensed Hebrew core glossary in Excel format |

These files were used to author the term definitions and are kept for reference.

---

## 🌐 Deployment

The app is a pure static site — it can be hosted anywhere:

- **GitHub Pages** — push to `master` and enable Pages in repository settings
- **IBM Code Engine** — serve as a static container
- **Any CDN or static host** — no server-side logic required

---

## 👤 Author

**Avi Vizel**  
IBM Israel  
[aviv@il.ibm.com](mailto:aviv@il.ibm.com)
