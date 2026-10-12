<template>
  <p class="paragraphNormal">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.paragraphNormal {
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 389px) {
    font-size: 14px;
  }
}
</style>
