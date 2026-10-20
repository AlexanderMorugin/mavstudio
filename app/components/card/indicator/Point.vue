<template>
  <div
    :class="[
      'cardIndicatorForPoint',
      { cardIndicatorForPoint_header: props.isHeader },
      { cardIndicatorForPoint_footer: props.isFooter },
      { cardIndicatorForPoint_content: props.isContent },
    ]"
  >
    <div class="cardIndicatorForPoint__circle" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isHeader?: boolean;
  isFooter?: boolean;
  isContent?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardIndicatorForPoint {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid $orange-one;
  background: $blue-one;

  &_header {
    transform: skew(20deg);
    bottom: -10px;
    left: -10px;
  }

  &_footer {
    // transform: skew(-20deg);
    // top: -10px;
    // left: -10px;

    transform: skew(20deg);
    top: -10px;
    right: -10px;
  }

  &_content {
    // transform: skew(30deg);
    // top: -10px;
    // right: -12px;

    // @media (max-width: 767px) {
    transform: skew(-20deg);
    top: -10px;
    left: -10px;
    // }
  }

  &__circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: $white-one;
  }
}
</style>
