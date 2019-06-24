<!-- This component is a view that will get shown based on the url ...handled in /src/router.js -->

<template>
  <div class="view-View0">
    <h2>This is View0 controlled by vue-router</h2>
    <ExampleComponent msg="this is a prop passed in to ExampleComponent"/>
  </div>
</template>

<style lang="scss" scoped>
.view-View0 {

}
</style>

<script>
// @ is an alias to /src
import ExampleComponent from "@/components/ExampleComponent.vue";

export default {
  name: "view-View0",
  components: {
    ExampleComponent
  }
};
</script>
