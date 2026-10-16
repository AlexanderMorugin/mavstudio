<template>
  <h2 class="titleCard">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleCard {
  position: relative;
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 28px;
  letter-spacing: 1px;
  text-align: center;
  background-clip: text;
  background-image: linear-gradient(90deg, $blue-one 40%, $blue-two 60%);
  // animation: shine 5s linear infinite;
  // text-shadow: $shadow-text-one;

  @media (max-width: 1023px) {
    font-size: 24px;
  }

  @media (max-width: 389px) {
    font-size: 20px;
  }
}
// @keyframes shine {
//   0% {
//     color: transparent;
//   }
//   50% {
//     color: $blue-one;
//     text-shadow: none;
//   }
//   100% {
//     color: transparent;
//   }
// }
</style>
