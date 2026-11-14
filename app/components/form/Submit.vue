<template>
  <button type="submit" class="formSubmit" @click="$emit('handleClick')">
    <span class="formSubmit__title">{{ title }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits(["handleClick"]);
</script>

<style lang="scss" scoped>
.formSubmit {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;
  // width: 100%;
  width: fit-content;
  height: 50px;
  background: $grey-one;
  border-radius: 6px;
  padding-left: 40px;
  padding-right: 40px;
  transition: 0.2s ease;
  cursor: default;

  @media (max-width: 576px) {
    width: 100%;
  }

  &_active {
    background: $red-one;
    cursor: pointer;

    &:hover {
      background: $red-two;
    }
  }

  &__title {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    color: $white-one;
    text-transform: uppercase;
  }
}
</style>
