<template>
  <div class="cardBlockContainer">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.cardBlockContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 100%;

  @media (max-width: 767px) {
    width: 80%;
  }
}
</style>
