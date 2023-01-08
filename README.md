# Feathers-Pinia-Vite Example App

Vue 3 + TypeScript + Vite

This template contains a Feathers-Pinia application running on Vite. It is already pre-loaded with great Vite plugins for auto-importing components and composables.  It also uses [DaisyUI Kit](https://daisyuikit.com) with all components prefixed with `Daisy`, like `<DaisyButton>`.

In order to use this repo, you need a working FeathersJS server.  You can find one at the [feathers-pinia-api](https:github.com/marshallswain/feathers-pinia-api) repo.

The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install [feathers-pinia-api](https://github.com/marshallswain/feathers-pinia-api)
3. Install your dependencies

    ```
    cd path/to/feathers-pinia-vite
    npm install
    ```
    
    If you get a <i>404 'feathers-pinia-api-0.0.0.tgz' is not in this registry</i> error, run <i>npm run bundle:client</i> in your feathers-pinia-api install and make sure it's running when you do this install.
    
    If you get a <i>integrity checksum failed</i> error, try deleting your package-lock.json file.
    
4. Run the app

    ```
    npm run dev
    ```
    
5. Visit the web site

    ```
    http://localhost:5173
    ```

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

![Feathers-Pinia-Vite screenshot](https://user-images.githubusercontent.com/128857/202971929-78dd7ca7-111e-409a-8817-c028ebf4d3c5.jpg)
