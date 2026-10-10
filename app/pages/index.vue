<template>
  <!-- <h1>MavStudio</h1>
  <NuxtLink to="/project">project</NuxtLink> -->
  <HeroBlock />
  <p>
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    bla bla bla bla bla
  </p>
  <!-- <div class="theme">
    <h2>Dark Theme</h2>
    <NuxtLink to="/project" class="link">GO TO WHITE</NuxtLink>
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
  </div> -->
</template>

<script setup lang="ts">
import {
  MAIN_DESCRIPTION,
  MAIN_IMAGE,
  MAIN_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${SITE}` }],
});

useSeoMeta({
  title: `${MAIN_TITLE}`,
  description: `${MAIN_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${MAIN_TITLE}`,
  ogDescription: `${MAIN_DESCRIPTION}`,
  ogImage: `${MAIN_IMAGE}`,
  ogUrl: `${SITE}/`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
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
