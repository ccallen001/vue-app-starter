<!-- This is a component, it can be used in views or in other components -->

<template>
  <div class="component-ExampleComponent">
    <h3>This is ExampleComponent</h3>
    <p>{{ msg }}</p>
  </div>
</template>


<style lang="scss" scoped>
  .component-ExampleComponent {
    padding-left: 0.5rem;
    background-color: salmon;
  }
</style>

<script>
export default {
  name: "component-ExampleComponent",
  props: ["msg"]
};
</script>
