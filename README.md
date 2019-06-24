# Vue App Starter

## Boilerplate/shell/starter code for a Vue app

*skip to the bottom if you just want to run the project

## > About the Project:

#### Project Includes:

- Vue CLI - high level project control ([guide](https://cli.vuejs.org/guide/))
- Vue.js - framework ([guide](https://vuejs.org/v2/guide/))
- Vue-Router - routing ([guide](https://router.vuejs.org/guide/)) (project file location: `/src/router.js`)
- Vuex - global state management ([guide](https://vuex.vuejs.org/guide/)) (project file location: `/src/store.js`)

#### Project Structure:

The root directory of the project contains

- `/node_modules` (after you install them ...instructions below)
- `/public` (folder in to which src files are compiled/injected)
    - `index.css` (global styles affecting the whole app go here)
    - `index.html` (Vue files get injected here)
    - `index.js` (global scripts affecting the whole app go here)
- `/src` (**you will mainly work in this folder**)
    - `/components` (all of your app components go here)
    - `/styles` (any app-wide style stuff like variables goes here)
    - `/views` (all of your app views go here)
    - `App.vue` (this is the main/root app component)
    - `main.js` (this is where the app is initiated)
    - `router.js` (vue-router - control the app's routes here)
    - `store.js` (vuex - control the app's global state here)
- `package.json`
- `README.md` (this file :))
- various config files (you probably don't need to touch these)

#### Project Philosophy:

This is a Vue app/project using Webpack (provides bundling and hot-module-reloading), ES6+, and SCSS. Vue apps are built from components and this app uses single-file components (SFCs). The SFCs in this app are `.vue` files located in the project's `/src` directory. All components should have a general code signature of:

```vue
<template>
    <div class="component-ComponentName">

    </div>
</template>

<style lang="scss" scoped>
@import '/path/to/imported/file'; 

.component-ComponentName {

}
</style>

<script>
import ImportedComponent from '/path/to/ImportedComponent';

export default {
    name: 'component-ComponentName',
    components: {
        ImportedComponent
    },
    props: ['camelCasedHtmlAttributeName'],
    data() {
        return {
            componentData: 'some component data here'
        };
    },
    methods: {
        componentMethod() {
            // do component stuff here
        }
    }
}
</script>
```

In this app, there is one main/root `App.vue` component which contains app "shell code" such as headers, navs, footers, ect. `App.vue` then contains the high level routes/views (controlled by vue-router). `App.vue` and the various views can then contain nested components. Basically, the entire app is nested components, with the high level view components controlled by the router. A generic example of the intended structure is:

- `App` (main/root component)
    - `NavBar` (nav bar within App component ...could be html or a component itself)
        - `view0` (these switch based on the route/url)
            - `component0` (any component)
            - `component1`
        - `view1`
            - `component0`

When running the dev server (instructions below), Webpack will compile everything and inject it all in to the `public/index.html` file and then serve that on localhost (default port :8080). When you're ready to build for production (instructions below), then Webpack will bundle everything and spit out a new `/dist` folder that contains an `index.html` file as an entry point.

OVERALL, as a dev on this app, you'll just make views (configure them in `/src/router.js`) and components to build the UI. You'll use the store (configured in `/src/store.js`) for global state management. Try to use native functionality for network requests and the like, but if you feel you have to pull in third-party libraries/dependencies, you can do so with npm.

Feel to fork and modify the project as you see fit.

Make something great! :)

## > How to Run the Project:

### First, install everything (node and npm required)
```
npm install
```

### to run local dev environment (hot-module-reload included)
```
npm run dev
```

### to build for production (will produce directory `root/dist`)
```
npm run build
```
