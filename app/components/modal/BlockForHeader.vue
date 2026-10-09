<template>
  <div class="modalBlockForHeader" click.stop>
    <ContainerPage desktopPadding class="modalBlockForHeader__container">
      <div class="modalBlockForHeader__top">
        <span class="modalBlockForHeader__topTitle"> {{ props.title }}</span>
        <ButtonWithIcon
          name="close"
          title="Закрыть"
          @click="$emit('closeModal')"
        />
      </div>

      <ModalMenuForHeader
        v-if="name === 'menu'"
        @closeModal="$emit('closeModal')"
      />

      <!-- <ModalChat v-if="name === 'chat'" @closeModal="$emit('closeModal')" /> -->
    </ContainerPage>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  name: string;
}>();
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalBlockForHeader {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px) grayscale(50%);
  background: $black-mask-three;
  // overscroll-behavior: contain;
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
    // padding-left: 20px;
    // padding-right: 20px;
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
