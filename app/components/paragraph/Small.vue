<template>
  <p class="paragraphSmall">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.paragraphSmall {
  font-size: 14px;
  line-height: 1.3;
  color: $grey-three;

  @media (max-width: 767px) {
    font-size: 12px;
  }
}
</style>
