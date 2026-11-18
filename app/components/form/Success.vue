<template>
  <div class="formSuccess">
    <ParagraphNormal center>Благодарим за отзыв!</ParagraphNormal>
    <ParagraphNormal center
      >В скором времени он будет размещен на сайте.</ParagraphNormal
    >

    <FormButton
      type="button"
      title="Закрыть"
      @handleClick="emit('closeModal')"
      class="formSuccess__button"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.formSuccess {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &__button {
    margin-top: 20px;
  }
}
</style>
