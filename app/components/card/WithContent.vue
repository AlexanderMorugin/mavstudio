<template>
  <NuxtLink
    :to="props.item.route"
    :title="props.item.title"
    class="cardWithContent"
  >
    <div
      :class="[
        'cardWithContent__container',
        { cardWithContent__container_landing: props.item.name === 'landing' },
        { cardWithContent__container_business: props.item.name === 'business' },
        {
          cardWithContent__container_multipage: props.item.name === 'multipage',
        },
        { cardWithContent__container_info: props.item.name === 'info' },
        { cardWithContent__container_commerce: props.item.name === 'commerce' },
        { cardWithContent__container_shop: props.item.name === 'shop' },
        { cardWithContent__container_cms: props.item.name === 'cms' },
      ]"
    >
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
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ISiteCatalog } from "~/types/site";

const props = defineProps<{
  item: ISiteCatalog;
}>();
</script>

<style lang="scss" scoped>
.cardWithContent {
  display: flex;
  flex-direction: column;
  border-radius: $br-m;
  border: 1px solid $black-mask-four;
  box-shadow: $shadow-card-one;
  padding: 3px;
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
    // background: $gradient-blue-three;
    border-top-left-radius: $br-xs;
    border-top-right-radius: $br-xs;
    overflow: hidden;
    padding: 10px;

    &_landing {
      background: $gradient-landing-one;
    }
    &_business {
      background: $gradient-business-one;
    }
    &_multipage {
      background: $gradient-multipage-one;
    }
    &_info {
      background: $gradient-info-one;
    }
    &_commerce {
      background: $gradient-commerce-one;
    }
    &_shop {
      background: $gradient-shop-one;
    }
    &_cms {
      background: $gradient-cms-one;
    }
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
