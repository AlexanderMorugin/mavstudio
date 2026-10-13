<template>
  <NuxtLink :to="props.item.route" class="cardLinkWithImage">
    <div class="cardLinkWithImage__container">
      <div class="cardLinkWithImage__pictureBlock">
        <img
          v-if="props.item.title === 'Сайт-визитка'"
          src="/img/cards/business.svg"
          class="cardLinkWithImage__image"
        />

        <img
          v-if="props.item.title === 'Лендинг'"
          src="/img/cards/landing.svg"
          class="cardLinkWithImage__image"
        />
      </div>

      <div class="cardLinkWithImage__logoBox">
        <img
          src="/img/logo/logo.png"
          alt="logo"
          class="cardLinkWithImage__logo"
        />
      </div>

      <h2 class="cardLinkWithImage__title">{{ props.item.title }}</h2>
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
.cardLinkWithImage {
  display: flex;
  flex-direction: column;
  border-radius: $br-m;
  border: 1px solid $black-mask-four;
  box-shadow: $shadow-card-one;
  padding: 3px 3px 10px 3px;
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
    background: $gradient-blue-three;
    border-top-left-radius: $br-xs;
    border-top-right-radius: $br-xs;
    overflow: hidden;
    padding: 20px;
  }

  &__logoBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: $br-xs;
    border: 1px solid $white-mask-three;
    background: $white-mask-four;
    padding: 5px;
  }

  &__logo {
    width: 40px;
    transition: 0.2s ease;
  }

  &__pictureBlock {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    position: relative;
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 28px;
    letter-spacing: 1px;
    text-align: center;
    background-clip: text;
    background-image: linear-gradient(90deg, $white-one 40%, $blue-three 60%);
    animation: shine 5s linear infinite;
    text-shadow: $shadow-text-one;

    @media (max-width: 1023px) {
      font-size: 24px;
    }

    @media (max-width: 389px) {
      font-size: 20px;
    }
  }

  &__image {
    width: 70%;
  }
}
@keyframes shine {
  0% {
    color: transparent;
  }
  50% {
    color: $white-one;
    text-shadow: none;
  }
  100% {
    color: transparent;
  }
}
</style>
