<template>
  <div
    :class="[
      'cardIndicatorForPoint',
      { cardIndicatorForPoint_header: props.isHeader },
      { cardIndicatorForPoint_footer: props.isFooter },
    ]"
  >
    <div class="cardIndicatorForPoint__circle" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isHeader?: boolean;
  isFooter?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardIndicatorForPoint {
  position: absolute;
  left: -10px;
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
  }

  &_footer {
    transform: skew(-20deg);
    top: -10px;
  }

  &__circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $white-one;
  }
}
</style>
