<template>
  <section :id="props.offerData.anchor" class="siteExampleUiMainOffer">
    <SiteExampleUiTitleBlock
      :title="props.offerData.title"
      :subtitle="props.offerData.subtitle"
    />

    <div class="siteExampleUiMainOffer__container">
      <SiteExampleUiMainOfferCard
        v-if="currentCard"
        :card="currentCard"
        :isActive="isActive"
        @openCardModal="isCardModalOpen = true"
      />

      <div class="siteExampleUiMainOffer__gridBox">
        <div class="siteExampleUiMainOffer__grid">
          <button
            v-for="item in props.offerData.card"
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
              :src="item.image200"
              :alt="item.title"
              class="siteExampleUiMainOffer__gridImage"
            />
          </button>
        </div>
        <ParagraphNormal black>{{ props.offerData.text }}</ParagraphNormal>
      </div>
    </div>
  </section>

  <ClientOnly>
    <Teleport to="#teleports">
      <Transition name="top">
        <SiteExampleUiMainOfferModal
          v-if="isCardModalOpen && currentCard"
          :card="currentCard"
          @closeModal="isCardModalOpen = false"
        />
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { ISiteExampleOffer } from "~/types/site";

const props = defineProps<{
  offerData: ISiteExampleOffer;
}>();

const currentCard = ref(props.offerData.card[0]);
const isActive = ref(false);
const isCardModalOpen = ref(false);

const setCard = (id: number) => {
  isActive.value = false;

  if (currentCard.value?.id !== id) {
    setTimeout(() => (isActive.value = true), 10);
    setTimeout(
      () =>
        (currentCard.value = props.offerData.card.find(
          (item) => item.id === id,
        )),
      100,
    );
  }
};

watch(isCardModalOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<style lang="scss" scoped>
.siteExampleUiMainOffer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;

  &__container {
    display: grid;
    grid-template-columns: auto 30%;
    gap: 20px;

    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }

  &__gridBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
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

    @media (max-width: 576px) {
      height: 60px;
    }

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
