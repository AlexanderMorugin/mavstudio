<template>
  <CardBlockContainer>
    <CardBlockUiHeader />
    <div class="cardBlockLanding">
      <CardBlockUiCard normal landing />
      <CardBlockUiCard normal landing />
    </div>
    <div>
      <CardBlockUiCard large landing />
    </div>
    <CardBlockUiFooter />
  </CardBlockContainer>
</template>

<style lang="scss" scoped>
.cardBlockLanding {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
