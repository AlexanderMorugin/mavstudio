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
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  user-select: none;

  @media (max-width: 576px) {
    height: fit-content;
    border-radius: 6px;
    padding-left: 0;
    padding-right: 0;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-height: 50px;
    border: 1px solid $orange-mask-two;
    // border-radius: 6px;
    // font-family: "Montserrat-SemiBold", sans-serif;
    // font-size: 13px;
    // letter-spacing: 1px;
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    color: $white-mask-one;
    text-transform: uppercase;
    // padding: 14px 26px;
    border-radius: 6px;
    padding-left: 40px;
    padding-right: 40px;
    box-shadow: $shadow-button-black-one;
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
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: $white-one;
      padding-left: 24px;
      padding-right: 24px;
      // padding: 12px 24px;
      animation: none;
      -webkit-animation: none;
      -moz-animation: none;
    }

    @media (max-width: 576px) {
      box-shadow: none;
      // padding: 12px 24px;
      padding-left: 24px;
      padding-right: 24px;
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
