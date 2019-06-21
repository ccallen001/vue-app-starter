<!-- App.vue ...main/root component for the app -->

<template>
  <div id="App">
    <header id="app-header">
      <h1>Vue App Starter</h1>
    </header>
    <nav id="app-nav">
      <!-- thes are links that update the url and show different views -->
      <router-link class="router-link" to="/">View0</router-link>
      <router-link class="router-link" to="/view1">View1</router-link>
      <router-link class="router-link" to="/store-test">StoreTest</router-link>
    </nav>
    <!-- just to demonstrate the store -->
    <div class="store-count">
      Count: {{ count }}
    </div>
    <!-- the different views are rendered in router-view -->
    <router-view/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// import variables
@import "./styles/variables.scss";

#App {
  padding: 0.5rem;
  height: 100%;
  background-color: cornflowerblue;
  overflow: auto;

  #app-header {
    h1 {
      padding-bottom: 0.5rem;
      color: $appBlack;
      text-align: center;
    }
  }

  #app-nav {
    display: flex;
    justify-content: center;
    padding-bottom: 0.5rem;

    .router-link {
      margin: 0 8px;
    }
  }

  .store-count {
    padding-bottom: 0.5rem;
    text-align: center;
  }
}
</style>

<script>
export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>