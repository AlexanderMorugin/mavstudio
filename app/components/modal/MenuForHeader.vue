<template>
  <nav class="modalMenuForHeader">
    <NuxtLink
      v-for="item in headerMenu"
      :key="item.id"
      :to="item.route"
      class="modalMenuForHeader__link"
      @click="emits('closeModal')"
    >
      <span class="modalMenuForHeader__linkText">{{ item.title }}</span>
      <IconArrowIos class="modalMenuForHeader__linkIcon" />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { headerMenu } from "~/mock/header-menu";
const route = useRoute();

const emits = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalMenuForHeader {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 390px;
    // background: $white-one;
    background: $gradient-page-light-two;

    border-radius: $br-xs;
    border: 1px solid $white-one;
    padding: 20px;
    transition: 0.05s ease;

    @media (max-width: 767px) {
      padding: 12px 20px;
    }

    &:hover {
      // background: $white-mask-one;
      box-shadow: rgba(255, 255, 255, 0.6) 2px 2px 15px;
    }
  }

  &__linkText {
    font-size: 18px;
    letter-spacing: 1px;
    color: $blue-one;
  }

  &__linkIcon {
    width: 20px;
    height: 20px;
    // fill: $blue-mask-two;
    fill: $white-mask-one;
    transition: 0.2s ease;
  }
}

.modalMenuForHeader__link:hover .modalMenuForHeader__linkIcon {
  fill: $orange-one;
}
// .modalMenuForHeader__link:hover .modalMenuForHeader__linkText {
//   color: $orange-one;
// }
</style>
