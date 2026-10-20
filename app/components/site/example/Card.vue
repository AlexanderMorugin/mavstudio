<template>
  <section class="siteExampleCard">
    <SiteExampleHeader />
    <SiteExampleBackground />

    <!-- <img
      src="/img/bg/site-background-3840-2160.webp"
      alt="site-bg"
      class="siteExampleCard__bg"
    /> -->

    <Footer />
  </section>
</template>

<style lang="scss" scoped>
.siteExampleCard {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
  height: 700px;
  overflow: hidden;

  // &__bg {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  // }
}
</style>
