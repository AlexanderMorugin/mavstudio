<template>
  <div class="cardWithStripe">
    <div class="cardWithStripe__container">
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
  height: fit-content;
  border-radius: 10px;
  border: 1px solid $white-mask-three;
  padding: 3px;

  &__container {
    position: relative;
    background: $white-one;
    border-radius: 6px;
    padding: 10px 10px 10px 25px;
    overflow: hidden;
  }

  &__stripe {
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
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
