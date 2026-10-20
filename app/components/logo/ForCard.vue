<template>
  <div :class="['logoForCard', { logoForCard_example: props.isExample }]">
    <img
      src="/img/logo/logo.png"
      alt="MavStudio"
      :class="[
        'logoForCard__icon',
        { logoForCard__icon_example: props.isExample },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isExample: boolean;
}>();
</script>

<style lang="scss" scoped>
.logoForCard {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: $br-xs;
  border: 1px solid $white-mask-three;
  background: $white-mask-four;
  padding: 5px;

  @media (max-width: 1023px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 389px) {
    width: 30px;
    height: 30px;
  }

  &_example {
    width: 30px;
    height: 30px;

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }

  &__icon {
    width: 40px;
    transition: 0.2s ease;

    @media (max-width: 1023px) {
      width: 34px;
    }

    @media (max-width: 389px) {
      width: 28px;
    }

    &_example {
      width: 28px;

      @media (max-width: 767px) {
        width: 20px;
      }
    }
  }
}
</style>
