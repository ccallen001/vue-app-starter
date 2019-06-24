<!-- Just a view to test the store with -->

<template>
  <div class="view-StoreTest">
    <h2>Test</h2>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.view-StoreTest {
  text-align: center;
  
  h2 {
    padding-bottom: 0.5rem;
  }

  button {
    @include buttonStyle;

    &:active {
      transform: translateY(1px);
    }
  }
}
</style>

<script>
export default {
  name: "view-StoreTest"
};
</script>
