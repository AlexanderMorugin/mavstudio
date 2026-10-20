<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage" />
    <div :class="props.isPage ? 'cardBlockPage' : 'cardBlockList'">
      <CardBlockUiSectionLarge business textGreen :isPage="props.isPage" />
      <CardBlockUiSectionLarge building textOrange :isPage="props.isPage" />
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
  padding: 10px;
  border: 1px solid $orange-four;
}
.cardBlockList {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
