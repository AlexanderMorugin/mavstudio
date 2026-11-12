<template>
  <div class="modalContainerWithTitle" click.stop>
    <ContainerPage desktopPadding class="modalContainerWithTitle__container">
      <div class="modalContainerWithTitle__top">
        <span class="modalContainerWithTitle__topTitle">
          {{ props.title }}</span
        >
        <ButtonWithIcon
          name="close"
          title="Закрыть"
          @click="$emit('closeModal')"
        />
      </div>

      <slot />
    </ContainerPage>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalContainerWithTitle {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px) brightness(0.4) saturate(0.4);
  overflow-y: auto;
  z-index: 10;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__topTitle {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 12px;
    color: $white-one;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}
</style>
