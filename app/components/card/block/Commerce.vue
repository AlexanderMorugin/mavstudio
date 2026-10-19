<template>
  <CardBlockContainer>
    <CardBlockUiHeader />
    <CardBlockUiSectionLarge commerce />
    <CardBlockUiSectionGrid
      threeGrid
      imgOne="paymentImage"
      imgOneFill="white"
      imgTwo="rubleImage"
      imgTwoFill="white"
      imgThree="paymentImage"
      imgThreeFill="white"
    />
    <CardBlockUiFooter />
  </CardBlockContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockPage {
  padding-left: 6px;
  padding-right: 6px;
}
</style>
