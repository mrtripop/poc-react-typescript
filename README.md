# React Application with Typescript

This project for practice react application with Typescript, Storybook, SEO, Prettier, Project structure.
You can follow in [Github](https://github.com/mrtripop/react-bootstrap-typescript)

## Prerequisite

- NVM `0.38.0`
- Node `18.3.0`
- Yarn `1.22.19`
- Sanity cli `2.34.0`

## Structure

- .storybook

  - config file for storybook

- public

  - `robots.txt` - File enable crawler agent for optimize SEO
  - `sitemap.xml` - File map resource for optimize SEO

- src

  - `assets` - Image and other assets
  - `components` - Atom component that use in all component
  - `constants` - Import image and map to react component
  - `container` - Main component
  - `types` - Type of component
  - `wrapper` - Component that wrap section component for reuse motion

- client.ts

  - This file is main config for `Sanity`
  - Create `Sanity studio` for `ClientConfig`

## How to run on `localhost`

First, install dependency

```
yarn install
```

Second, run app in development mode.

```
yarn dev
```

Then open [localhost:5173](http://localhost:5173) in the browser.

Builds the app for production to `dist` folder.

```
yarn build
```

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Appendix

You can learn more with

- [Youtube JavascriptMastery](https://www.youtube.com/watch?v=3HNyXCPDQ7Q&ab_channel=JavaScriptMastery)
