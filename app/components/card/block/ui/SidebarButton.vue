<template>
  <div
    :class="[
      'cardBlockUiSidebarButton',
      { cardBlockUiSidebarButton_multipage: props.multipage },
      { cardBlockUiSidebarButton_sidebar: props.sidebar },
    ]"
  >
    <div class="cardBlockUiSidebarButton__textBlock">
      <CardBlockUiLine animateFooter />
      <CardBlockUiLine animateFooter />
    </div>

    <IconArrowDouble class="cardBlockUiSidebarButton__icon" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  multipage?: boolean;
  sidebar?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiSidebarButton {
  display: grid;
  grid-template-columns: 1fr 20px;
  align-items: center;
  gap: 6px;
  border-radius: $br-xxs;
  padding: 8px;

  &_multipage {
    width: 90%;
    margin-top: 20px;
    background: $blue-two;
  }

  &_sidebar {
    background: $grey-mask-three;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: $white-one;
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;

    // overflow: hidden;
  }
}
</style>
