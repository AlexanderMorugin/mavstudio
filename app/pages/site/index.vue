<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE_URL + route.path" />
    <TitlePage title="Сайты" :subtitle="COMPANY_SUBTITLE" />
    <SiteList :catalog="siteCatalog" />
  </ContainerPage>
</template>

<script setup lang="ts">
import {
  SITE_URL,
  COMPANY_SUBTITLE,
  SITE_TITLE,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_IMAGE,
} from "~/mock/meta";
import { siteCatalog } from "~/mock/site/site-catalog";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Сайты",
    path: route.path,
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE_URL}${route.path}` }],
});

useSeoMeta({
  title: `${SITE_TITLE}`,
  description: `${SITE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${SITE_TITLE}`,
  ogDescription: `${SITE_DESCRIPTION}`,
  ogImage: `${SITE_IMAGE}`,
  ogUrl: `${SITE_URL}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
