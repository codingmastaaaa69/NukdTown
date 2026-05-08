# GetNukd Town 🏡

An 8-bit cozy town-themed unblocked games portal.

## 🚀 How to deploy to GitHub Pages

If your GitHub page is blank, it's likely because you are serving the source files instead of the built application. Follow these steps:

1. **Build the project**: Run `npm run build` in your terminal. This will create a `dist/` folder.
2. **Deploy the `dist` folder**: 
   - **Option A (Manual)**: Upload the contents of the `dist/` folder (not the folder itself) to your repository's `main` branch or a `gh-pages` branch.
   - **Option B (GitHub Actions)**: Use a GitHub Action to automatically build and deploy the `dist` folder on every push.
   - **Option C (Simple)**: If you use the GitHub Desktop app, copy the contents of `dist/` to your root directory before pushing (but be careful not to overwrite your source code).

### ⚠️ Important Note
The `index.html` in the root of this project is for **development** only. The `index.html` generated inside the `dist/` folder after running `npm run build` is what actually works on GitHub Pages!

## 🏠 Features
- 8-bit aesthetic (Tomodachi / Animal Crossing vibes)
- Responsive house-grid layout
- Games stored in `src/games.json`
- Fullscreen mode support
