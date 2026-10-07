<template>
  <h1>MavStudio</h1>
  <NuxtLink to="/project">project</NuxtLink>
  <HeroBlock />
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
