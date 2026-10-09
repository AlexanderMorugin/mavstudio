<template>
  <div class="layout">
    <Header theme="white" />
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

  color: $black-one;
  background: $white-one;

  &__content {
    position: relative;
  }
}
</style>
