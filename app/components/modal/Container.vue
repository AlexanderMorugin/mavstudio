<template>
  <div class="modalContainer" click.stop>
    <div class="modalContainer__box">
      <ButtonWithIcon
        name="close"
        title="Закрыть"
        @click="$emit('closeModal')"
        class="modalContainer__close"
      />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalContainer {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px) brightness(0.2);
  overflow-y: auto;
  z-index: 10;

  &__box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__close {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 11;
  }
}
</style>
