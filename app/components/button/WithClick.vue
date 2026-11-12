<template>
  <button @click="emit('handleClick')" class="buttonWithClick">
    {{ props.title }}
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
  width: fit-content;
  border: 1px solid $orange-one;
  border-radius: 8px;
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  color: $white-one;
  padding: 12px 24px;
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
  transition: 0.2s ease;

  &:hover {
    color: $blue-three;
    box-shadow: $shadow-button-black-one;
    animation: none;
    -webkit-animation: none;
    -moz-animation: none;
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
