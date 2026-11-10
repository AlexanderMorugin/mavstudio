<template>
  <div
    @click="emit('openCardModal')"
    :class="[
      'siteExampleUiMainOfferCard',
      {
        siteExampleUiMainOfferCard_active: isActive,
      },
      {
        siteExampleUiMainOfferCard_isModal: isModal,
      },
    ]"
  >
    <picture>
      <source media="(max-width: 767px)" :srcset="props.card.image768" />
      <source media="(max-width: 1279px)" :srcset="props.card.image1280" />
      <source media="(max-width: 1919px)" :srcset="props.card.image1920" />
      <source media="(max-width: 3840px)" :srcset="props.card.image3840" />

      <img
        :src="props.card.image768"
        :alt="props.card.title"
        :title="props.card.title"
        class="siteExampleUiMainOfferCard__image"
      />
    </picture>

    <div class="siteExampleUiMainOfferCard__textBox">
      <div
        :class="[
          'siteExampleUiMainOfferCard__text',
          {
            siteExampleUiMainOfferCard__text_active: isActive,
          },
        ]"
      >
        <ParagraphLarge center bold>{{ props.card.title }}</ParagraphLarge>
        <ParagraphNormal center>{{ props.card.subtitle }}</ParagraphNormal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISiteExampleOfferCard } from "~/types/site";

const props = defineProps<{
  card: ISiteExampleOfferCard;
  isActive?: boolean;
  isModal?: boolean;
}>();

const emit = defineEmits(["openCardModal"]);
</script>

<style lang="scss" scoped>
.siteExampleUiMainOfferCard {
  position: relative;
  display: flex;
  align-items: end;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 576px) {
    height: 350px;
  }

  &_active {
    animation: appear 0.8s ease;
  }

  &_isModal {
    width: 100%;
    height: 100%;
    border-radius: 0;
    cursor: default;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__textBox {
    position: relative;
    width: 100%;
    background: $gradient-black-one;
    padding: 200px 20px 20px 20px;
  }

  &__text {
    &_active {
      animation: text-up 1.2s ease;
    }
  }
}
@keyframes text-up {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  59% {
    opacity: 0;
    transform: translateY(0);
  }
  60% {
    opacity: 0;
    transform: translateY(200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes appear {
  60% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
