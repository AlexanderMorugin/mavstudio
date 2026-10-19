<template>
  <div :class="['cardBlockUiFooter', { cardBlockUiFooter_page: props.isPage }]">
    <div class="cardBlockUiFooter__textBlock">
      <CardBlockUiLine animateFooter />
      <CardBlockUiLine animateFooter />
    </div>
    <div class="cardBlockUiFooter__textBlock">
      <CardBlockUiLine animateFooter />
      <CardBlockUiLine animateFooter />
    </div>

    <IconStarKidFill class="cardBlockUiFooter__icon" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiFooter {
  display: grid;
  grid-template-columns: 1fr 1fr 40px;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background: $grey-mask-three;
  border-radius: $br-xxs;
  padding: 8px 10px 8px 20px;
  overflow: hidden;

  &_page {
    // display: flex;
    background: $grey-mask-three;
    border-radius: 0;
    border-top: 1px solid $white-mask-three;
    padding: 10px;
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: $red-mask-one;
  }
}
</style>
