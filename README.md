# Vue App Starter

## Boilerplate/shell/starter code for a Vue app

*skip to the bottom if you just want to run the project

## > About the Project:

#### Project Includes:

- Vue CLI - high level project control ([guide](https://cli.vuejs.org/guide/))
- Vue.js - framework ([guide](https://vuejs.org/v2/guide/))
- Vue-Router - routing ([guide](https://router.vuejs.org/guide/)) (project file location: `/src/router.js`)
- Vuex - global state management ([guide](https://vuex.vuejs.org/guide/)) (project file location: `/src/store.js`)

#### Project structure:

The root directory of the project contains

- `/node_modules` (after you install them ...instructions below)
- `/public`
    - `index.css` (global styles affecting the whole app go here)
    - `index.html` (vue files get injected here)
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

This is a Vue app/project using Webpack (provides bundling and hot-module-reloading), ES6+, and SCSS. Vue apps are built from components and this app uses single-file components. The single-file components in this app are `.vue` files located in the project's `/src` folder. All components have a general code signature of:

```
<template>
    <div class="component-ComponentName">

    </div>
</template>

<style lang="scss">
@import '/path/to/imported/file'; 

.component-ComponentName {

}
</style>

<script>
import ImportedComponent from '/path/to/ImportedComponent.vue';

export default {
    name: 'ComponentName',
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

In this app, there is one main/root `App.vue` component which contains various routes/views. The App component and the various views can  contain nested components within them. A generic example of this type of structure is:

- `App` (main/root component)
    - `NavBar` (nav bar within App component ...could be html or a component itself)
        - `view0` (these switch based on the route/url)
            - `component0` (any component)
            - `component1`
        - `view1`
            - `component0`

When running the dev server (instructions below), Webpack will compile everything and inject it all in to the `public/index.html` file and then serve that on localhost (default port :8080). When you're ready to build for production (instructions below), then Webpack will bundle everything and spit out a new `/dist` folder that contains an `index.html` file as an entry point.

Basically, as a dev on this app, you'll just make views (configure them in `/src/router.js`) and components to build the UI. You'll use the store (configured in `/src/store.js`) for global state management.

Each starter file should have instructions on how to use each of the various areas. Feel free to modify them as you make the project your own!

Have fun and be safe! :)

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
