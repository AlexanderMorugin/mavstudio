<template>
  <button
    :type="props.type"
    @click="$emit('handleClick')"
    :class="[
      'formButton',
      { formButton_active: !isFromEmpty && !isValid },
      { formButton_reset: props.type === 'reset' },
    ]"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: "button" | "reset" | "submit";
  title: string;
  isFromEmpty?: boolean;
  isValid?: any;
}>();

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formButton {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;
  min-width: 190px;
  height: 50px;
  background: $grey-one;
  border-radius: 6px;
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  color: $white-mask-three;
  text-transform: uppercase;
  padding-left: 40px;
  padding-right: 40px;
  transition: 0.2s ease;
  cursor: default;

  @media (max-width: 576px) {
    width: 100%;
  }

  &_active {
    color: $white-one;
    background: $red-one;
    cursor: pointer;

    &:hover {
      background: $red-two;
    }
  }

  &_reset {
    background: $grey-one;

    &:hover {
      background: $grey-mask-two;
    }
  }
}
</style>
