<template>
  <section :id="props.offer.anchor" class="siteExampleUiMainOffer">
    <SiteExampleUiTitleBlock
      :title="props.offer.title"
      :subtitle="props.offer.subtitle"
    />

    <div class="siteExampleUiMainOffer__container">
      <div v-if="currentCard" class="siteExampleUiMainOffer__product">
        <img
          :src="currentCard.image1280"
          class="siteExampleUiMainOffer__productImage"
        />
      </div>

      <div class="siteExampleUiMainOffer__gridBox">
        <div class="siteExampleUiMainOffer__grid">
          <button
            v-for="item in props.offer.card"
            :key="item.id"
            :class="[
              'siteExampleUiMainOffer__gridCard',
              {
                siteExampleUiMainOffer__gridCard_active:
                  currentCard?.id === item.id,
              },
            ]"
            @click="setCard(item.id)"
          >
            <img
              :src="item.image350"
              :alt="item.title"
              class="siteExampleUiMainOffer__gridImage"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISiteExampleOffer } from "~/types/site";

const props = defineProps<{
  offer: ISiteExampleOffer;
}>();

const currentCard = ref(props.offer.card[0]);

const setCard = (id: number) => {
  currentCard.value = props.offer.card.find((item) => item.id === id);
};
</script>

<style lang="scss" scoped>
.siteExampleUiMainOffer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 80px;

  &__container {
    display: grid;
    grid-template-columns: auto 30%;
    gap: 20px;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }

  &__product {
    display: block;
    height: 500px;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 576px) {
      height: 400px;
    }
  }

  &__productImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__gridBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  &__gridCard {
    height: 100px;
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
    transition: 0.2s ease;

    &_active {
      filter: blur(5px);
      cursor: default;
    }
  }

  &__gridImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
