# Akash Gupta — Portfolio

A responsive personal portfolio for Akash Gupta, focused on Operations Research, Data Analytics and engineering problem-solving. The site is dependency-free and runs as a static website.

## Run locally

Open `index.html` in a modern browser, or serve the folder over HTTP:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included

- Responsive dark-first layout with a light theme toggle.
- Mobile navigation, smooth anchor navigation, reveal transitions and back-to-top control.
- Interactive project case-study dialogs.
- SEO metadata and custom SVG favicon.
- Downloadable resume at `assets/akash-gupta-resume.pdf`.
- Reduced-motion support and keyboard-accessible project cards and dialogs.

The downloadable PDF is Akash's supplied resume. Profile and project repository links on the site are taken directly from its embedded hyperlinks. Contact details are included as shown in the resume.

## Deploy

### Vercel

Import the repository in Vercel. Choose **Other** as the framework preset, leave the build command blank, and set the output directory to `.`.

### GitHub Pages

Push the project to a GitHub repository, then select **Settings → Pages → Deploy from a branch** and choose the branch and `/ (root)` folder. The site is static, so no build step is needed.

## Project files

- `index.html` — page structure and content
- `styles.css` — responsive visual design and animations
- `app.js` — theme, navigation, scroll effects and project details
- `favicon.svg` — site icon
- `assets/akash-gupta-resume.pdf` — downloadable resume

