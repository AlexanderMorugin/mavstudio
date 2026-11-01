<template>
  <div class="siteExampleUiHeaderNavModal">
    <div class="siteExampleUiHeaderNavModal__container">
      <div class="siteExampleUiHeaderNavModal__top">
        <span class="siteExampleUiHeaderNavModal__topTitle">
          {{ props.title }}</span
        >
        <ButtonWithIcon
          name="close"
          title="Закрыть"
          @click="$emit('closeModal')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  name: string;
}>();

const emit = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.siteExampleUiHeaderNavModal {
  position: absolute;
  top: 0;
  left: 0;
  // right: 0;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 300px;
  background: $blue-two;
  padding: 20px;
  z-index: 20;

  &__container {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    width: 80%;
    height: 300px;
    // background: $blue-two;
    // padding: 20px;
    border: 1px solid red;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 100%;
    border: 1px solid red;
  }

  &__topTitle {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 12px;
    color: $white-one;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}
</style>
