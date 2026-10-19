<template>
  <NuxtLink
    :to="props.item.route"
    :title="props.item.title"
    class="cardWithContent"
  >
    <div class="cardWithContent__container">
      <div class="cardWithContent__block">
        <CardBlockLanding v-if="props.item.name === 'landing'" />
        <CardBlockBusiness v-if="props.item.name === 'business'" />
        <CardBlockMultipage v-if="props.item.name === 'multipage'" />
        <CardBlockInfo v-if="props.item.name === 'info'" />
        <CardBlockCommerce v-if="props.item.name === 'commerce'" />
        <CardBlockShop v-if="props.item.name === 'shop'" />
        <CardBlockCms v-if="props.item.name === 'cms'" />
      </div>
      <LogoForCard />
    </div>
    <slot />
    <CardBlockUiPrice :price="props.item.price" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ISite, ISiteCatalog } from "~/types/site";

const props = defineProps<{
  // item: ISiteCatalog | any;
  item: ISiteCatalog;
}>();
</script>

<style lang="scss" scoped>
.cardWithContent {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: $white-one;
  box-shadow: $shadow-card-one;
  padding: 2px;
  transition: 0.2s ease;

  &:hover {
    box-shadow: $shadow-card-two;
    transform: translateY(-1%);
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    background: $gradient-hero-one;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    padding: 10px;
  }

  &__block {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 389px) {
      height: 82%;
    }
  }
}
</style>
