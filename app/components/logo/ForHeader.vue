<template>
  <NuxtLink to="/" title="На главную" class="logo">
    <div class="logo__circle">
      <img src="/img/logo/logo.png" alt="Лого" class="logo__icon" />
    </div>
    <div class="logo__text">{{ COMPANY_NAME }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { COMPANY_NAME } from "~/mock/info";
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  &__circle {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: $white-one;

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
    }
  }

  &__icon {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 28px;

    @media (max-width: 767px) {
      width: 24px;
    }
  }

  &__text {
    font-family: "Geist-Bold", sans-serif;
    font-size: 22px;
    letter-spacing: 1px;

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
}
</style>
