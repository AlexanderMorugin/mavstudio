<template>
  <p class="paragraphLarge">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.paragraphLarge {
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 18px;
  }
}
</style>
