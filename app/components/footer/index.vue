<template>
  <footer class="footer">
    <div class="footer__bottomLogoBlock">
      <span class="footer__bottomLogo">{{ COMPANY_NAME }}</span>
    </div>
    <div>
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla
    </div>
  </footer>
</template>

<script setup lang="ts">
import { COMPANY_NAME } from "~/mock/info";
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 200px;
  overflow: hidden;

  // border: 1px solid red;

  &__bottomLogoBlock {
    display: flex;
    justify-content: center;
    height: 110px;
    overflow: hidden;

    @media (max-width: 1600px) {
      height: 78px;
    }

    @media (max-width: 576px) {
      height: 54px;
    }
  }

  &__bottomLogo {
    font-family: "Geist-Bold", sans-serif;
    font-size: 140px;
    line-height: 1;
    letter-spacing: -8%;
    color: $white-mask-five;

    @media (max-width: 1600px) {
      font-size: 100px;
    }

    @media (max-width: 576px) {
      font-size: 70px;
    }
  }
}
</style>
