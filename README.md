# Personal Website (GitHub Pages)

One-page academic-style personal site with sticky nav, research (chronological), experience (education + work), contact, and a visitor map. Ready to publish on **GitHub Pages** (username.github.io).

## Structure

- **Sticky nav:** Home · Research · Experience · Contact (anchor links)
- **Hero:** Your name, one-line focus, short bio
- **Research:** Chronological paper list with thumbnails, “Full list on Google Scholar” link, optional “Show recent” / “Show all by date” toggle, “Show older publications” button (default: ~10 newest)
- **Experience:** Education (compact) and Work / Research Experience (with bullets)
- **Contact:** Email and links
- **Footer:** Visitor map card (ClustrMaps or MapMyVisitors)

## Local preview

Open `index.html` in a browser, or serve the folder locally:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages (github.io)

1. Create a new repository on GitHub named **`username.github.io`** (replace `username` with your GitHub username).

2. Clone it and copy this project into the repo (so the repo root contains `index.html`, `css/`, `js/`, etc.):

   ```bash
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   # Copy index.html, css/, js/, and any images into this folder
   git add .
   git commit -m "Initial personal site"
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source**: choose **Deploy from a branch**. Branch: **main** (or **master**), folder: **/ (root)**. Save.

4. After a minute or two, the site will be at **https://username.github.io**.

## Customize

- **Content:** Edit `index.html`: hero text, paper rows, education/work entries, contact links, Google Scholar URL.
- **Research:** Add/remove `.paper-row` blocks. Rows after the first 10 are “older” and hidden until “Show older publications” is clicked. Set `RECENT_COUNT` in `js/main.js` (e.g. to 8 or 12) to change how many show by default.
- **Visitor map:** Replace the placeholder in the footer with the embed code from [ClustrMaps](https://clustrmaps.com/) or [MapMyVisitors](https://www.mapmyvisitors.com/).
- **Styling:** Adjust colors and fonts in `css/style.css` (CSS variables at the top).

No build step required; plain HTML, CSS, and JS.
