<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage" />
    <div :class="props.isPage ? 'cardBlockPage' : 'cardBlockList'">
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 10px;
  border: 1px solid $orange-four;
}
.cardBlockList {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
