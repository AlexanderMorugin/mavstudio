<template>
  <button
    type="submit"
    @click="$emit('handleClick')"
    :class="['formSubmit', { formSubmit_active: !isFromEmpty && !isValid }]"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  isFromEmpty: boolean;
  isValid: any;
}>();

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formSubmit {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;
  width: fit-content;
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
}
</style>
