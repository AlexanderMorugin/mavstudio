<template>
  <ModalContainerWithTitle
    :title="props.title"
    @closeModal="$emit('closeModal')"
  >
    <div class="modalForReview">modalForReview</div>
  </ModalContainerWithTitle>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalForReview {
}
</style>
