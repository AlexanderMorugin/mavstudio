<template>
  <div class="siteExampleUiMainHero">siteExampleUiMainHero</div>
</template>

<style lang="scss" scoped>
.siteExampleUiMainHero {
  height: 600px;
  border: 1px solid red;

  @media (max-width: 767px) {
    height: 500px;
  }

  @media (max-width: 389px) {
    height: 400px;
  }
}
</style>
