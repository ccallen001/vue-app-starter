<template>
  <div class="component-AppNav">
    <nav>
      <!-- these are links that update the url and show the different views -->
      <!-- the different views are rendered in the <router-link /> component in App.vue -->
      <router-link class="router-link" to="/">View0</router-link>
      <router-link class="router-link" to="/view1">View1</router-link>
      <router-link class="router-link" to="/store-test">StoreTest</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.component-AppNav {
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;

  .router-link {
    margin: 0 0.5rem;
  }
}
</style>
