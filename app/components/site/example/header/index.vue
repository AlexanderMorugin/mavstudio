<template>
  <div class="siteExampleHeader">
    <ContainerPage desktopPadding class="siteExampleHeader__container">
      <LogoForCard isExample icon="menu" title="Меню" />
      <LogoForHeaderExample title="Логотип компании" />
      <LogoForCard isExample icon="chat" title="Контакты" />
    </ContainerPage>
  </div>
</template>

<style lang="scss" scoped>
.siteExampleHeader {
  position: relative;
  backdrop-filter: blur(15px) brightness(80%);
  border-bottom: 1px solid $white-mask-three;
  z-index: 2;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 70px;
    // border: 1px solid red;

    @media (max-width: 767px) {
      height: 60px;
    }
  }
}
</style>
