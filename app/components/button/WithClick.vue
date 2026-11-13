<template>
  <button @click="emit('handleClick')" class="buttonWithClick">
    <div class="buttonWithClick__container">
      {{ props.title }}
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.buttonWithClick {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 44px;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid $orange-one;
    border-radius: 8px;
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    color: $white-mask-one;
    padding: 14px 26px;
    background-image: linear-gradient(
      to right,
      $orange-one,
      $orange-one,
      $white-one,
      $orange-one,
      $orange-one,
      $orange-one,
      $orange-one,
      $orange-one,
      $orange-one,
      $orange-one,
      $orange-one,
      $orange-one
    );
    animation: background-fade 8s linear infinite;
    background-size: 4000%;
    -webkit-animation: background-fade 8s linear infinite;
    -moz-animation: background-fade 8s linear infinite;
    transition: 0.1s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: $white-one;
      box-shadow: $shadow-button-black-one;
      padding: 12px 24px;
      animation: none;
      -webkit-animation: none;
      -moz-animation: none;
    }
  }
}
@keyframes background-fade {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -100%;
  }
}
</style>
