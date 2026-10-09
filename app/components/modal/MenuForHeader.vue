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

    <!-- <Logo
      v-if="props.place === 'mobile'"
      class="headerNav__logo"
      @click="emits('closeModal')"
    /> -->
  </nav>
</template>

<script setup lang="ts">
import { headerMenu } from "~/mock/header-menu";
const route = useRoute();

// const props = defineProps<{
//   place: string;
// }>();

const emits = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalMenuForHeader {
  display: flex;
  flex-direction: column;
  gap: 10px;

  // border: 1px solid red;

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 100%;
    max-width: 390px;
    background: $black-mask-one;
    border-radius: $br-xs;
    border: 1px solid $white-mask-four;
    padding: 20px;
    transition: 0.2s ease;

    // @media (max-width: 767px) {
    //   padding: 10px;
    // }

    &:hover {
      background: $white-mask-three;
    }
  }

  &__linkText {
    font-size: 18px;
    letter-spacing: 1px;
  }

  &__linkIcon {
    width: 20px;
    height: 20px;
    fill: $white-mask-two;
    transition: 0.2s ease;
  }

  // &__logo {
  //   padding-top: 1rem;
  //   padding-bottom: 2rem;
  // }
}

.modalMenuForHeader__link:hover .modalMenuForHeader__linkIcon {
  fill: $orange-one;
}
</style>
