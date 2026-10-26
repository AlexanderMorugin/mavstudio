<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE_URL + route.path" />
    <TitlePage
      :title="siteDataFetch?.siteData.pageTitle"
      :subtitle="COMPANY_SUBTITLE"
    />
    <SiteCard :siteData="siteDataFetch!.siteData" />
  </ContainerPage>
  <SiteAdvantage :advantage="siteDataFetch!.siteData.advantage" />
  <ContainerPage desktopPadding>
    <SiteDescription :description="siteDataFetch!.siteData.description" />
  </ContainerPage>
  <!-- <SiteExample :example="siteLanding.example" /> -->
</template>

<script setup lang="ts">
import {
  SITE_URL,
  COMPANY_SUBTITLE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { siteCatalog } from "~/mock/site/site-catalog";

const route = useRoute();

const siteDataFetch = computed(() =>
  siteCatalog.find((item) => item.siteData.name === route.params.route),
);

const breadcrumbs = ref([
  { name: "Главная", path: "/", content: "1" },
  { name: "Сайты", path: "/site", content: "2" },
  {
    name: siteDataFetch.value?.siteData.pageTitle,
    path: route.path,
    content: "last",
  },
]);

useHead({
  link: [{ rel: "canonical", href: `${SITE_URL}${route.path}` }],
});

// console.log(siteDataFetch.value?.siteData.siteMeta.siteMetaTitle);

useSeoMeta({
  title: siteDataFetch.value?.siteData.siteMeta.siteMetaTitle,
  description: siteDataFetch.value?.siteData.siteMeta.siteMetaDescription,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: siteDataFetch.value?.siteData.siteMeta.siteMetaTitle,
  ogDescription: siteDataFetch.value?.siteData.siteMeta.siteMetaDescription,
  ogImage: siteDataFetch.value?.siteData.siteMeta.siteMetaImage,
  ogUrl: `${SITE_URL}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
