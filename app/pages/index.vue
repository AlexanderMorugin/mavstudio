<template>
  <HeroBlock />
  <ContainerPage mobilePadding class="main">
    <EmblaListCardCarousel :siteCatalog="siteCatalog" />
  </ContainerPage>
</template>

<script setup lang="ts">
import {
  MAIN_DESCRIPTION,
  MAIN_IMAGE,
  MAIN_TITLE,
  SITE_URL,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { siteCatalog } from "~/mock/site/site-catalog";

const route = useRoute();

useHead({
  link: [{ rel: "canonical", href: `${SITE_URL}` }],
});

useSeoMeta({
  title: `${MAIN_TITLE}`,
  description: `${MAIN_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${MAIN_TITLE}`,
  ogDescription: `${MAIN_DESCRIPTION}`,
  ogImage: `${MAIN_IMAGE}`,
  ogUrl: `${SITE_URL}/`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>

<style lang="scss" scoped>
.main {
  padding-top: 60px;
}
</style>
