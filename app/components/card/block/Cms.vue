<template>
  <CardBlockContainer>
    <CardBlockUiHeader cms />
    <div class="cardBlockCms">
      <CardBlockUiSidebar />
      <CardBlockUiCmsContent />
    </div>
  </CardBlockContainer>
</template>

<style lang="scss" scoped>
.cardBlockCms {
  display: grid;
  grid-template-columns: 30% 1fr;
  height: 100%;
  margin-top: 6px;
}
</style>
