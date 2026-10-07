<template>
  <header class="header">
    <ContainerPage desktopPadding class="header__container">
      <div>Menu</div>
      <LogoForHeader />
      <div>Contact</div>
    </ContainerPage>
  </header>
</template>

<!-- <script setup lang="ts">
</script> -->

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(15px) brightness(80%);
  border-bottom: 1px solid $white-mask-three;
  z-index: 3;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 70px;

    @media (max-width: 767px) {
      height: 60px;
    }
  }
}
</style>
