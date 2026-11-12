<template>
  <ModalContainerWithTitle
    :title="props.title"
    @closeModal="$emit('closeModal')"
  >
    <div class="modalForHeader">
      <ModalMenuForHeader
        v-if="name === 'menu'"
        @closeModal="$emit('closeModal')"
      />
      <LogoForModal v-if="!isScreenMobile" />
      <LogoForFooter v-else modal />
    </div>

    <!-- <ModalChat v-if="name === 'chat'" @closeModal="$emit('closeModal')" /> -->
  </ModalContainerWithTitle>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  name: string;
}>();

const { isScreenMobile } = useResizeMobile();

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalForHeader {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 60%;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-bottom: 40px;
  }
}
</style>
