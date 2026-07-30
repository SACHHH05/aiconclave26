# AI Conclave 2026

React + Vite frontend.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
ai-conclave/
├─ index.html          # HTML entry
├─ vite.config.js      # Vite + React plugin
├─ package.json
└─ src/
   ├─ main.jsx         # React root
   ├─ App.jsx          # App component (build starts here)
   └─ index.css        # global reset + base styles
```

Icons: [lucide-react](https://lucide.dev). Styling is currently plain CSS /
inline styles — swap in Tailwind or CSS Modules later if preferred.
