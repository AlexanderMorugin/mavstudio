<template>
  <div class="reviewListCard">
    <div class="reviewListCard__textBlock">
      <div class="reviewListCard__user">
        <div class="reviewListCard__userIcon">
          {{ props.review.firstLetter }}
        </div>
        <div>
          <span class="reviewListCard__userName">{{ props.review.user }}</span>
          <ParagraphSmall>{{ props.review.userStatus }}</ParagraphSmall>
        </div>
      </div>
      <ParagraphNormal v-if="props.review.textOne" black>{{
        props.review.textOne
      }}</ParagraphNormal>
      <ParagraphNormal v-if="props.review.textTwo" black>{{
        props.review.textTwo
      }}</ParagraphNormal>
    </div>

    <ParagraphSmall>{{ props.review.date }}</ParagraphSmall>
  </div>
</template>

<script lang="ts" setup>
import type { IReview } from "~/types/review";

const props = defineProps<{
  review: IReview;
}>();
</script>

<style lang="scss" scoped>
.reviewListCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  height: 100%;

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__user {
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $black-mask-four;
  }

  &__userIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $gradient-blue-two;
    font-size: 24px;
    color: $white-one;
  }

  &__userName {
    font-family: "Montserrat-SemiBold", sans-serif;
    line-height: 1.5;
    letter-spacing: 1px;
    color: $black-one;
  }
}
</style>
