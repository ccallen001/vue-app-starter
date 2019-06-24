<!-- Just a view to test the store with -->

<template>
  <div class="view-StoreTest">
    <h2>Store Test</h2>
    <button @click="incrementCount">Increment Store's Count</button>&nbsp;
    <span>Count: {{ count }}</span>
  </div>
</template>

<style lang="scss" scoped>
.view-StoreTest {
  text-align: center;
  
  h2 {
    padding-bottom: 0.5rem;
  }

  button {
    padding: 8px 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    outline: none;
    cursor: pointer;

    &:active {
      transform: translateY(1px);
    }
  }
}
</style>

<script>
export default {
  name: "view-StoreTest",

  computed: {
    count() {
      return this.$store.state.count;
    }
  },

  methods: {
    incrementCount() {
      this.$store.commit("incrementCount");
    }
  }
};
</script>
