<template>
  <div class="formReview">
    <form
      v-if="!isSubmitPrepared && !isReviewSend"
      @submit.prevent="submitReview"
    >
      <FormInput
        label="Имя * "
        type="text"
        :name="userName"
        placeholder="Ваше имя"
        v-model:value="v$.userName.$model"
        :error="v$.userName.$errors"
        @clearInput="userName = ''"
        class="formReview__one"
      />
      <FormInput
        label="Профессия * "
        type="text"
        :name="userStatus"
        placeholder="Ваша профессия"
        v-model:value="v$.userStatus.$model"
        :error="v$.userStatus.$errors"
        @clearInput="userStatus = ''"
        class="formReview__two"
      />
      <FormTextarea
        label="Отзыв * "
        type="text"
        :name="userReview"
        placeholder="Ваш отзыв"
        v-model:value="v$.userReview.$model"
        :error="v$.userReview.$errors"
        @clearInput="userReview = ''"
        class="formReview__three"
      />
      <FormAvatarChoice
        :avatars="avatars"
        :selectedAvatar="selectedAvatar"
        @handleAvatarChoice="handleAvatarChoice"
      />
      <FormButton
        type="button"
        title="Продолжить"
        :isFromEmpty="isFromEmpty"
        :isValid="isValid.length"
        @handleClick="prepareSubmition"
        class="formReview__four"
      />

      <div class="formReview__mark">* - обязательные для заполнения поля</div>
    </form>

    <FormSubmitReviewBlock
      v-if="isSubmitPrepared && reviewData && !isReviewSend"
      :reviewData="reviewData"
      @submitReview="submitReview"
      @cancelReview="isSubmitPrepared = false"
    />

    <FormSuccess v-if="isReviewSend" @closeModal="$emit('closeModal')" />
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minLength } from "@vuelidate/validators";
import { avatars } from "~/mock/avatar";
import type { IAvatar } from "~/types/avatar";
import type { IReview } from "~/types/review";

const { currentDate } = useDate();

const userName = ref("");
const userStatus = ref("");
const userReview = ref("");
const reviewData = ref<IReview>();
const isSubmitPrepared = ref(false);
const isReviewSend = ref(false);
const selectedAvatar = ref<IAvatar>();

const emit = defineEmits(["closeModal"]);

const rules = computed(() => ({
  userName: {
    required: helpers.withMessage("Напишите имя", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  userStatus: {
    required: helpers.withMessage("Напишите профессию", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  userReview: {
    required: helpers.withMessage("Напишите отзыв", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
}));

const v$ = useVuelidate(rules, {
  userName,
  userStatus,
  userReview,
});

const isFromEmpty = computed(
  () =>
    !userName.value ||
    !userStatus.value ||
    !userReview.value ||
    !selectedAvatar.value,
);

const isValid = computed(() => v$.value.$errors);

const handleAvatarChoice = (id: number) => {
  if (id) {
    selectedAvatar.value = avatars.find((item) => item.id === id);
  }
};

const prepareSubmition = () => {
  reviewData.value = {
    id: uuidv4(),
    userName: userName.value,
    userStatus: userStatus.value,
    userAvatar: selectedAvatar.value,
    text: userReview.value,
    date: currentDate,
  };
  isSubmitPrepared.value = true;
};

const submitReview = () => {
  console.log(reviewData.value);
  isReviewSend.value = true;
  userName.value = "";
  userStatus.value = "";
  userReview.value = "";
};
</script>

<style lang="scss" scoped>
.formReview {
  max-width: 800px;
  background: $blue-mask-three;
  border-radius: 14px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px;
  animation: back 1.5s cubic-bezier(0.1, 0, 0.1, 1);

  &__one {
    animation: slide 0.8s cubic-bezier(0.1, 0, 0.1, 1);
  }
  &__two {
    animation: slide 1.5s cubic-bezier(0.1, 0, 0.1, 1);
  }
  &__three {
    animation: slide 2.5s cubic-bezier(0.1, 0, 0.1, 1);
  }
  &__four {
    animation: slide 3.5s cubic-bezier(0.1, 0, 0.1, 1);
  }

  &__mark {
    font-size: 14px;
    line-height: 1.2;
    color: $white-mask-one;
    margin-top: 40px;
  }

  // &__listCard {
  //   display: flex;
  //   justify-self: center;
  //   // max-width: 450px;
  // }
}

@keyframes back {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
