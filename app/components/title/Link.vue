<template>
  <NuxtLink :to="props.route" class="titleLink">
    <h2 class="titleLink__title">
      {{ props.title }}
    </h2>
    <IconArrowDouble class="titleLink__icon" />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  route: string;
}>();
</script>

<style lang="scss" scoped>
.titleLink {
  display: flex;
  align-items: end;
  gap: 10px;
  width: fit-content;
  padding-bottom: 20px;

  // border: 1px solid red;

  &__title {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 28px;
    letter-spacing: 1px;
    color: $orange-four;
    transition: 0.2s ease;
    // line-height: 1;

    // text-align: center;

    // @media (max-width: 1023px) {
    //   font-size: 28px;
    // }

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: $white-mask-two;
  }
}
.titleLink:hover .titleLink__title {
  color: $white-one;
}
.titleLink:hover .titleLink__icon {
  animation: next 0.4s ease-in-out;
}

@keyframes next {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
