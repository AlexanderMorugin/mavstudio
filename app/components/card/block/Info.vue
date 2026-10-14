<template>
  <CardBlockContainer>
    <CardBlockUiHeader />
    <div class="cardBlockInfo">
      <CardBlockUiCard normal info />
      <CardBlockUiCard normal info />
    </div>
    <div class="cardBlockInfo">
      <CardBlockUiCard normal info-two />
      <CardBlockUiCard normal info-two />
    </div>
    <CardBlockUiFooter />
  </CardBlockContainer>
</template>

<style lang="scss" scoped>
.cardBlockInfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
