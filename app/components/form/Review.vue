<template>
  <form @submit.prevent="submitReview" class="formReview">
    <FormInput
      label="Имя"
      type="text"
      name="userName"
      placeholder="Как вас зовут?"
    />
  </form>
</template>

<script setup lang="ts">
const submitReview = () => {
  console.log("submitReview");
};
</script>

<!-- <style lang="scss" scoped>
.formReview {
}
</style> -->
