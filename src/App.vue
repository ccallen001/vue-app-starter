<template>
  <div id="App">
    <!-- AppHeader and AppNav are imported components -->
    <AppHeader />
    <AppNav />
    <!-- the different views are rendered in the router-view -->
    <router-view />
  </div>
</template>

<!-- add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// import app-wide variables
@import "./styles/variables.scss";

// declare local variables
$padding: 0.5rem;

#App {
  height: 100%;
  color: $appBlack;
  overflow: auto;
}
</style>

<script>
// @ here is an alias to the src directory
import AppHeader from "@/components/AppHeader.vue";
import AppNav from "@/components/AppNav.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppNav
  }
};
</script>