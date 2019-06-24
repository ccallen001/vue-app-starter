<!-- This is a component, it can be imported in to and used in views or other components -->

<template>
  <div class="component-ExampleComponent">
    <h3>This is ExampleComponent</h3>
    <!-- msg is a prop that was passed in to ExampleComponent as an html attribute -->
    <p>{{ msg }}</p>
  </div>
</template>


<style lang="scss" scoped>
  .component-ExampleComponent {
  
  }
</style>

<script>
export default {
  name: "component-ExampleComponent",
  props: ["msg"]
};
</script>
