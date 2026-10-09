<template>
  <button
    :class="[
      'buttonWithIcon',
      { buttonWithIcon_white: props.theme === 'white' },
    ]"
    :title="props.title"
    @click="emit('handleClick')"
  >
    <div class="buttonWithIcon__spin" />
    <IconClose v-if="props.name === 'close'" class="buttonWithIcon__icon" />
    <IconMenu
      v-if="props.name === 'menu'"
      :class="[
        'buttonWithIcon__icon',
        { buttonWithIcon__icon_white: props.theme === 'white' },
      ]"
    />
    <IconChat
      v-if="props.name === 'chat'"
      :class="[
        'buttonWithIcon__icon',
        { buttonWithIcon__icon_white: props.theme === 'white' },
      ]"
    />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  theme?: string;
  name: string;
  title: string;
}>();
const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.buttonWithIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid $white-mask-three;
  transition: 0.2s ease;

  &_white {
    background: $white-one;
    // border: 1px solid $black-mask-three;
  }

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
  }

  &__spin {
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border-bottom: 1px solid $white-mask-three;
    box-shadow: 2px 2px 20px $white-mask-five;
    animation: spin 2s linear infinite;

    @media (max-width: 767px) {
      width: 36px;
      height: 36px;
    }
  }

  &__icon {
    width: 32px;
    height: 32px;
    fill: $white-one;
    opacity: 0.9;
    transition: 0.2s ease;

    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
    }

    &_white {
      fill: $black-one;
    }
  }
}

.buttonWithIcon:hover .buttonWithIcon__icon {
  fill: $orange-one;
  opacity: 1;
  animation: scale 0.25s ease-in-out;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
