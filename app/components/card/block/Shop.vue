<template>
  <CardBlockContainer>
    <CardBlockUiHeader />
    <CardBlockUiSectionGrid
      threeGrid
      imgOne="cartImage"
      imgOneFill="orange"
      imgTwo="cartImage"
      imgTwoFill="orange"
      imgThree="cartImage"
      imgThreeFill="orange"
    />
    <CardBlockUiSectionGrid
      threeGrid
      imgOne="deliveryImage"
      imgOneFill="white"
      imgTwo="sailingImage"
      imgTwoFill="white"
      imgThree="flightImage"
      imgThreeFill="white"
      textOrange
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
