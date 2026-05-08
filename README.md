# pepsican Town 🏡

An 8-bit cozy town-themed unblocked games portal.

## 🚀 How to fix the "Blank Page" on GitHub Pages

If your GitHub page is blank, it's because **GitHub Pages does not know how to run TypeScript/React code directly**. You must transform it into standard JavaScript using the "Build" command.

### 1. Run the Build Command
In your terminal, run:
```bash
npm run build
```
This will create a new folder called `dist`.

### 2. Move files to root (The "Simple" Way)
If you want to just push files and have them work:
1. Delete everything in your repository except the `.git` folder (locally).
2. Copy **everything inside** the `dist` folder and paste it into your repository root.
3. Push to GitHub.

### 3. The Professional Way (GitHub Actions)
Create a file at `.github/workflows/deploy.yml` with this content:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

## 🏠 Features
- 8-bit aesthetic (Tomodachi / Animal Crossing vibes)
- Responsive house-grid layout
- Games stored in `src/games.json`
- Fullscreen mode support
