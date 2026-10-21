<template>
  <div
    :title="props.title"
    :class="[
      'logoForCard',
      { logoForCard_example: props.isExample },
      { logoForCard_button: props.icon === 'menu' || props.icon === 'chat' },
    ]"
  >
    <img
      v-if="props.icon === 'mavLogo'"
      src="/img/logo/logo.png"
      alt="MavStudio"
      :class="[
        'logoForCard__icon',
        { logoForCard__icon_example: props.isExample },
      ]"
    />

    <IconBookFill
      v-if="props.icon === 'menu'"
      class="logoForCard__iconButton"
    />
    <IconChat v-if="props.icon === 'chat'" class="logoForCard__iconButton" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isExample?: boolean;
  icon: string;
  title?: string;
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

  &_button {
    border-radius: 50%;
  }

  &__icon {
    width: 40px;

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

  &__iconButton {
    width: 40px;
    fill: $white-one;

    @media (max-width: 1023px) {
      width: 34px;
    }

    @media (max-width: 767px) {
      width: 16px;
    }
  }
}
</style>
