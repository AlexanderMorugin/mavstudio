<template>
  <section class="siteExampleCard">
    <SiteExampleHeader />
    <SiteExampleBackground />
    <SiteExampleMainBlock />
    <SiteExampleFooter />
  </section>
</template>

<style lang="scss" scoped>
.siteExampleCard {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
  min-height: 700px;
  overflow: hidden;
  padding-bottom: 40px;
}
</style>
