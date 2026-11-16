<template>
  <ModalContainerWithTitle
    isMobile
    :title="props.title"
    @closeModal="$emit('closeModal')"
  >
    <!-- <ClientOnly> -->
    <FormReview @closeModal="$emit('closeModal')" />
    <!-- </ClientOnly> -->
  </ModalContainerWithTitle>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits(["closeModal"]);
</script>
