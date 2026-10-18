<template>
  <div class="layout">
    <div class="layout__overlay" />
    <Header />
    <main class="content">
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
  overflow-x: hidden;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $gradient-page-primary;
    filter: blur(100px);
  }
  .content {
    position: relative;
  }
}
</style>
