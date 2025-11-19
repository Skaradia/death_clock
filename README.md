# Death Clock

A React application that visualizes your remaining lifespan with a countdown timer and calendar grid.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `Death_Clock` (or update the base path in `vite.config.js` if you use a different name)

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Death_Clock.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

4. **Update Base Path (if needed)**
   - If your repository name is NOT `Death_Clock`, update the `base` path in `vite.config.js`:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
   ```

5. **Automatic Deployment**
   - Every time you push to the `main` branch, GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://YOUR_USERNAME.github.io/Death_Clock/`

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🛠️ Local Development

```bash
npm install
npm run dev
```

The app will open at `http://localhost:3000`

## 📝 Features

- Countdown timer showing remaining time
- Calendar grid visualization of weeks/months/years/decades
- Persistent storage of birthday and age of death
- Responsive design that adapts to screen size
- Gothic-themed UI with subtle background patterns

