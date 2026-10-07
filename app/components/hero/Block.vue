<template>
  <section class="heroBlock">
    <!-- <div></div> -->
    <HeroLogoBlock />
    <HeroTextBlock />
  </section>
</template>

<style lang="scss" scoped>
.heroBlock {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  height: 600px;
  background: $gradient-page-dark-two;
  // border: 1px solid red;
}
</style>
