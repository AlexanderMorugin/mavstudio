<template>
  <CardBlockContainer>
    <CardBlockUiHeader />
    <div class="cardBlockShop">
      <CardBlockUiCard shop cart />
      <CardBlockUiCard shop cart />
      <CardBlockUiCard shop cart />
    </div>
    <div class="cardBlockShop">
      <CardBlockUiCard shop delivery />
      <CardBlockUiCard shop delivery />
      <CardBlockUiCard shop delivery />
    </div>
    <CardBlockUiFooter />
  </CardBlockContainer>
</template>

<style lang="scss" scoped>
.cardBlockShop {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
</style>
