<template>
  <div id="App">
    <header id="app-header">
      <h1>Vue App Starter</h1>
    </header>
    <nav id="app-nav">
      <!-- these are links that update the url and show the different views -->
      <router-link class="router-link" to="/">View0</router-link>
      <router-link class="router-link" to="/view1">View1</router-link>
      <router-link class="router-link" to="/store-test">StoreTest</router-link>
    </nav>
    <!-- just to demonstrate the store -->
    <div class="store-count">Count: {{ count }}</div>
    <!-- the different views are rendered in the router-view -->
    <router-view />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// import app-wide variables
@import "./styles/variables.scss";

// declare local variables
$padding: 0.5rem;

#App {
  height: 100%;
  overflow: auto;

  #app-header {
    h1 {
      padding-bottom: $padding;
      color: $appBlack;
      text-align: center;
    }
  }

  #app-nav {
    display: flex;
    justify-content: center;
    padding-bottom: $padding;

    .router-link {
      margin: 0 0.5rem;
    }
  }

  .store-count {
    padding-bottom: $padding;
    text-align: center;
  }
}
</style>

<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>