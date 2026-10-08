<template>
  <section class="heroBlock">
    <HeroLogoBlock />
    <HeroTitleBlock />
    <HeroSubtitleBlock />
  </section>
</template>

<style lang="scss" scoped>
.heroBlock {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  height: 600px;
  background: $gradient-page-dark-two;
  overflow: hidden;

  @media (max-width: 767px) {
    gap: 60px;
    height: 500px;
  }

  @media (max-width: 576px) {
    gap: 40px;
  }

  @media (max-width: 389px) {
    height: 400px;
  }
}
</style>
