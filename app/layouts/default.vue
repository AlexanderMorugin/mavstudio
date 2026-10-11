<template>
  <div class="layout">
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
}
.content {
  position: relative;
}
</style>
