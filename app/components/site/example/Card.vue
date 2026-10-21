<template>
  <section class="siteExampleCard">
    <SiteExampleTitlePage
      title="Образец лендинга"
      subtitle="Одностраничные сайты могут быть разного дизайна и наполнения."
    />
    <div class="siteExampleCard__container">
      <SiteExampleHeader />
      <SiteExampleBackground />
      <SiteExampleMainBlock />
      <SiteExampleFooter />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.siteExampleCard {
  // background: $white-one;
  margin-top: 100px;
  // pad
  // min-height: 700px;
  // overflow: hidden;
  padding-bottom: 40px;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
