<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage" />
    <div :class="props.isPage ? 'cardBlockPage' : ''">
      <CardBlockUiSectionGrid
        threeGrid
        imgOne="cartImage"
        imgOneFill="orange"
        imgTwo="cartImage"
        imgTwoFill="orange"
        imgThree="cartImage"
        imgThreeFill="orange"
        :isPage="props.isPage"
      />
    </div>
    <div :class="props.isPage ? 'cardBlockPage' : ''">
      <CardBlockUiSectionGrid
        threeGrid
        imgOne="deliveryImage"
        imgOneFill="white"
        imgTwo="sailingImage"
        imgTwoFill="white"
        imgThree="flightImage"
        imgThreeFill="white"
        textOrange
        :isPage="props.isPage"
      />
    </div>
    <CardBlockUiFooter :isPage="props.isPage" />
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
