<template>
  <button
    class="buttonWithIcon"
    :title="props.title"
    @click="emit('handleClick')"
  >
    <div class="buttonWithIcon__spin" />
    <IconClose v-if="props.name === 'close'" class="buttonWithIcon__icon" />
    <IconMenu v-if="props.name === 'menu'" class="buttonWithIcon__icon" />
    <IconChat v-if="props.name === 'chat'" class="buttonWithIcon__icon" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
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
  // border: 2px solid $grey-one;
  background: $grey-mask-two;
  transition: 0.2s ease;

  // &:hover {
  //   border: 2px solid $grey-two;
  // }

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
    // border: 1px solid $grey-one;

    // &:hover {
    //   border: 1px solid $grey-two;
    // }
  }

  &__spin {
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;

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
  }
}

.buttonWithIcon:hover .buttonWithIcon__icon {
  fill: $orange-one;
  opacity: 1;
  animation: scale 0.25s ease-in-out;
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
