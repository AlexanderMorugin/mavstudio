<template>
  <ModalContainerWithTitle
    isMobile
    :title="props.title"
    @closeModal="$emit('closeModal')"
  >
    <FormReview @closeModal="$emit('closeModal')" />
  </ModalContainerWithTitle>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits(["closeModal"]);
</script>
