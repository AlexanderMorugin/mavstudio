<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage" />
    <div :class="props.isPage ? 'cardBlockPage' : ''">
      <CardBlockUiSectionLarge commerce :isPage="props.isPage" />
    </div>
    <div :class="props.isPage ? 'cardBlockPage' : ''">
      <CardBlockUiSectionGrid
        threeGrid
        imgOne="paymentImage"
        imgOneFill="white"
        imgTwo="rubleImage"
        imgTwoFill="white"
        imgThree="paymentImage"
        imgThreeFill="white"
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
