<template>
  <div class="cardWithStripe">
    <div
      v-if="props.orange"
      class="cardWithStripe__stripe cardWithStripe__stripe_orange"
    />
    <div
      v-if="props.blue"
      class="cardWithStripe__stripe cardWithStripe__stripe_blue"
    />
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  orange?: boolean;
  blue?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardWithStripe {
  position: relative;
  border: 1px solid $black-mask-four;
  padding: 10px 10px 10px 20px;

  &__stripe {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;

    &_orange {
      background: $orange-one;
    }

    &_blue {
      background: $blue-three;
    }
  }
}
</style>
