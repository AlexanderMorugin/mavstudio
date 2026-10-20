<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage" />
    <div :class="props.isPage ? 'cardBlockPage' : 'cardBlockList'">
      <CardBlockUiSectionGrid
        twoGrid
        imgOne="landingImage"
        imgOneFill="orange"
        imgTwo="landingImage"
        imgTwoFill="orange"
        :isPage="props.isPage"
      />
      <CardBlockUiSectionLarge landing :isPage="props.isPage" />
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
