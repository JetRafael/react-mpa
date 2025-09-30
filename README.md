# React Multi-Page Application (MPA)

A React-based multi-page application built with Webpack, featuring CSS Modules support and custom font integration.

## Features

- ⚛️ React 18
- 📦 Webpack 5 bundler
- 🎨 CSS Modules support
- 🔤 Custom font integration (Open Sans)
- 🚀 Development server with hot reload
- 📱 Production-ready build configuration
- 🌐 GitHub Pages deployment ready

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/JetRafael/react-mpa.git
cd react-mpa
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
react-mpa/
├── src/
│   ├── pages/           # Page components
│   │   └── main.jsx     # Main entry point
│   ├── templates/       # HTML templates
│   │   └── index.html
│   └── styles/          # CSS files
│       └── fonts.css    # Font definitions
├── public/
│   ├── fonts/          # Font files
│   └── media/          # Media assets
├── dist/               # Build output (generated)
├── webpack.config.js   # Webpack configuration
└── package.json
```

## Available Scripts

### Development

Start the development server with hot reload:
```bash
npm run dev
```
The application will open at `http://localhost:3000`

### Production Build

Create an optimized production build:
```bash
npm run build
```
Output will be in the `dist/` directory.

### Deploy to GitHub Pages

Deploy the application to GitHub Pages:
```bash
npm run deploy
```

This will:
1. Build the project for production
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://JetRafael.github.io/react-mpa`

## Configuration

### Webpack

The project uses Webpack 5 with the following configurations:
- **Babel** for transpiling JavaScript/JSX
- **CSS Modules** for scoped styling (`.module.css` files)
- **Global CSS** support for regular `.css` files
- **Asset management** for fonts and media files
- **Development server** on port 3000

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Webpack](https://webpack.js.org/) - Module bundler
- [Babel](https://babeljs.io/) - JavaScript compiler
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped CSS

## Author

**JetRafael**
- GitHub: [@JetRafael](https://github.com/JetRafael)
