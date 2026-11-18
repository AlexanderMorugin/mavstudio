<template>
  <div class="submitReviewBlock">
    <ParagraphNormal
      >Ваш отзыв будет выглядеть так. Подтвердите отзыв кнопкой "Отправить" или
      вернитесь к редактированию кнопкой "Назад".</ParagraphNormal
    >

    <CardWithStripe v-if="reviewData" orange class="formReview__listCard">
      <ReviewListCard :review="reviewData" />
    </CardWithStripe>
    <div class="submitReviewBlock__buttons">
      <FormButton
        type="submit"
        title="Отправить"
        @handleClick="emit('submitReview')"
        class="formReview__four"
      />
      <FormButton
        type="reset"
        title="Назад"
        @handleClick="emit('cancelReview')"
        class="formReview__four"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IReview } from "~/types/review";

const props = defineProps<{
  reviewData: IReview;
}>();

const emit = defineEmits(["submitReview", "cancelReview"]);
</script>

<style lang="scss" scoped>
.submitReviewBlock {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__buttons {
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
}
</style>
