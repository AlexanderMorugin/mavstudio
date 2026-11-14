<template>
  <form @submit.prevent="submitReview" class="formReview">
    <FormInput
      label="Имя * "
      type="text"
      :name="userName"
      placeholder="Ваше имя"
      v-model:value="userName"
      @clearInput="userName = ''"
      class="formReview__one"
    />
    <FormInput
      label="Профессия * "
      type="text"
      :name="userStatus"
      placeholder="Ваше имя"
      v-model:value="userStatus"
      @clearInput="userStatus = ''"
      class="formReview__two"
    />
    <FormTextarea
      label="Отзыв * "
      :name="userReview"
      placeholder="Ваш отзыв"
      v-model:value="userReview"
      @clearInput="userReview = ''"
      class="formReview__three"
    />

    <div class="formReview__mark">* - обязательные для заполнения поля</div>
  </form>
</template>

<script setup lang="ts">
const userName = ref("");
const userStatus = ref("");
const userReview = ref("");

const submitReview = () => {
  const formData = {
    userName: userName.value,
    userStatus: userStatus.value,
    userReview: userReview.value,
  };

  console.log(formData);
};
</script>

<style lang="scss" scoped>
.formReview {
  width: 100%;
  max-width: 700px;
  background: $blue-mask-three;
  border-radius: 14px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px;
  animation: back 1.5s cubic-bezier(0.1, 0, 0.1, 1);

  &__one {
    animation: slide 0.8s cubic-bezier(0.1, 0, 0.1, 1);
  }
  &__two {
    animation: slide 1.5s cubic-bezier(0.1, 0, 0.1, 1);
  }
  &__three {
    animation: slide 2.5s cubic-bezier(0.1, 0, 0.1, 1);
  }

  &__mark {
    font-size: 14px;
    color: $white-mask-one;
    margin-top: 40px;
  }
}
@keyframes back {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
