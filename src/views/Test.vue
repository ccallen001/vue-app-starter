<!-- Just a view to test the store with -->

<template>
  <div class="view-Test">
    <h2>Test</h2>
    <button @click="showModal">Show Modal</button>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.view-Test {
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
import TestModal from '@/components/modals/TestModal.vue';

export default {
  name: "view-Test",
  components: {
    TestModal
  },
  methods: {
    showModal() {
      this.$modal.show(TestModal);
    }
  }
};
</script>
