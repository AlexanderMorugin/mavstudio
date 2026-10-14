<template>
  <CardBlockContainer>
    <CardBlockUiHeader />
    <div>
      <CardBlockUiCard large commerce />
    </div>
    <div class="cardBlockCommerce">
      <CardBlockUiCard normal payment />
      <CardBlockUiCard normal payment />
      <CardBlockUiCard normal payment />
    </div>
    <CardBlockUiFooter />
  </CardBlockContainer>
</template>

<style lang="scss" scoped>
.cardBlockCommerce {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
</style>
