# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

### Development Mode (Single Locale)

In development mode, Docusaurus serves one locale at a time:

```bash
# Serve English version (default)
npm start

# Serve Spanish version
npm start -- --locale es
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

**Note:** When running in development mode with a specific locale, only that locale will be available. To switch languages, restart the server with the desired locale.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Testing Production Build (All Locales)

To test the production build with all locales available:

```bash
npm run build
npm run serve
```

This will serve the built site at `http://localhost:3000` with both English and Spanish versions accessible:
- English: `http://localhost:3000/`
- Spanish: `http://localhost:3000/es/`

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
