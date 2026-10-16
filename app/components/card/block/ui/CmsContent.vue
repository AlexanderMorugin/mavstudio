<template>
  <div class="cardBlockUiCmsContent">
    <CardBlockUiCmsContentButton image="personImage" imageFill="white" />
    <CardBlockUiCmsContentButton image="paymentImage" imageFill="white" />
    <CardBlockUiCmsContentButton image="rubleImage" imageFill="white" />
    <CardBlockUiCmsContentButton image="settingsImage" imageFill="white" />
  </div>
</template>

<style lang="scss" scoped>
.cardBlockUiCmsContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  row-gap: 10px;
  background: $black-mask-two;
  padding: 10px;
}
</style>
