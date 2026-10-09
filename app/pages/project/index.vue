<template>
  <HeroBlock />
  <div class="theme">
    <h2>White Theme</h2>
    <NuxtLink to="/" class="link">GO TO DARK</NuxtLink>
    <p>
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "white",
});
const route = useRoute();
</script>

<style lang="scss" scoped>
.theme {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-top: 20px;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid $orange-one;
  width: 150px;
  height: 30px;
  font-family: "Montserrat-SemiBold", sans-serif;
  color: $orange-one;
  text-align: center;
}
</style>
