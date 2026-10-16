<template>
  <div class="cardBlockUiCmsContent">
    <CardBlockUiCmsContentButton image="landingImage" imageFill="white" />
    <CardBlockUiCmsContentButton image="paymentImage" imageFill="white" />
    <CardBlockUiCmsContentButton image="bookImage" imageFill="white" />
    <CardBlockUiCmsContentButton image="cartImage" imageFill="white" />
  </div>
</template>

<style lang="scss" scoped>
.cardBlockUiCmsContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: $black-mask-two;
  padding: 10px;
}
</style>
