<template>
  <div class="formSuccess">
    <span class="formSuccess__text">Благодарим за отзыв!</span>
    <span class="formSuccess__text"
      >В скором времени он будет размещен на сайте.</span
    >

    <ButtonWithClick
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

  &__text {
    line-height: 1.5;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__button {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
