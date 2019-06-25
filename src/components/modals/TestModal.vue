<template>
  <div class="modal-TestModal">
    <h3 class="TestModal-title">Test Modal</h3>
    <div class="TestModal-content">
      <p>body of modal</p>
    </div>
    <div class="TestModal-footer">
      <button @click="$emit('close')">Hide</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.modal-TestModal {
    position: relative;
    padding: 1rem;
    height: 100%;

    .TestModal-title {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
        width: 100%;
        background-color: black;
        color: white;
        text-align: center;
    }

    .TestModal-content {
        position: absolute;
        top: 54px;
        left: 0;
        padding: 0.5rem;
        width: 100%;
        height: calc(100% - 54px - 45px);
        padding-top: 0.5rem;
        overflow-y: auto;
    }

    .TestModal-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0.5rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
            @include buttonStyle;
        }
    }
}
</style>

<script>
export default {
  name: "modal-TestModal"
};
</script>
