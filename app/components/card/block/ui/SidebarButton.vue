<template>
  <div
    :class="[
      'cardBlockUiSidebarButton',
      { cardBlockUiSidebarButton_multipage: props.multipage },
      { cardBlockUiSidebarButton_sidebar: props.sidebar },
    ]"
  >
    <div v-if="!props.isPage" class="cardBlockUiSidebarButton__textBlock">
      <CardBlockUiLine animateFooter />
      <CardBlockUiLine animateFooter />
    </div>

    <span v-if="props.isPage" class="cardBlockUiSidebarButton__text"
      >перейти</span
    >

    <IconArrowDouble class="cardBlockUiSidebarButton__icon" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  multipage?: boolean;
  sidebar?: boolean;
  isPage?: boolean;
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

    @media (max-width: 576px) {
      width: 18px;
      height: 18px;
    }
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__text {
    font-size: 12px;
    color: $white-mask-one;

    @media (max-width: 576px) {
      font-size: 10px;
    }
    @media (max-width: 389px) {
      font-size: 4px;
    }
  }
}
</style>
