<template>
  <div class="layout">
    <div class="layout__overlay" />
    <Header />
    <main class="layout__content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $gradient-page-dark;
    filter: blur(100px);
  }

  &__content {
    position: relative;
  }
}
</style>
