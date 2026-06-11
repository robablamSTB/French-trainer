# French Trainer

Simple single-page web app to practice French verbs and phrases across tenses.

Run:

1. Open `index.html` directly in your browser.

2. If you prefer a live server, serve the folder from the project directory with:

```bash
python -m http.server 8000
# or
npx http-server .
```

3. Open `http://localhost:8000` if you run a local server.

Files:
- index.html — UI
- styles.css — styling
- app.js — front-end logic
- data.json — small JSON database with examples (optional; the app also loads embedded examples)

Notes:
- The app now embeds the example data directly in `app.js`, so opening `index.html` in a browser works without a local server.
- Comparison removes accents, strips final punctuation, and is case-insensitive.
