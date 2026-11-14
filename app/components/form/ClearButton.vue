<template>
  <IconClose class="formClearButton" />
</template>

<style lang="scss" scoped>
.formClearButton {
  position: absolute;
  top: 36px;
  right: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: $black-mask-two;

  transition: 0.25s ease;

  &:hover {
    fill: $black-one;
  }
}
</style>
