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
  background: $blue-one;

  &_header {
    border: 1px solid $green-four;
    transform: skew(20deg);
    bottom: -10px;
    left: -10px;
    animation: pulse 2.5s linear infinite;
  }

  &_footer {
    border: 1px solid $blue-four;
    transform: skew(20deg);
    top: -10px;
    right: -10px;
    animation: pulse 2.5s linear infinite;
    animation-delay: 1s;
  }

  &_content {
    border: 1px solid $orange-four;
    transform: skew(-20deg);
    top: -10px;
    left: -10px;
    animation: pulse-two 2.5s linear infinite;
    animation-delay: 1.5s;
  }

  &__circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: $white-one;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1) skew(20deg);
  }
  20% {
    transform: scale(1.2) skew(20deg);
  }
  100% {
    transform: scale(1) skew(20deg);
  }
}
@keyframes pulse-two {
  0% {
    transform: scale(1) skew(-20deg);
  }
  20% {
    transform: scale(1.2) skew(-20deg);
  }
  100% {
    transform: scale(1) skew(-20deg);
  }
}
</style>
