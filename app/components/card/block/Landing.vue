<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage" />
    <CardBlockUiSectionGrid
      twoGrid
      imgOne="landingImage"
      imgOneFill="orange"
      imgTwo="landingImage"
      imgTwoFill="orange"
    />
    <CardBlockUiSectionLarge landing />
    <CardBlockUiFooter :isPage="props.isPage" />
  </CardBlockContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>
