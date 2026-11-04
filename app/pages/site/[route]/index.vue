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
  <SiteExampleLanding
    v-if="siteDataFetch!.siteData.name === 'landing'"
    :siteData="siteDataFetch!.siteData"
  />
  <SiteExampleBusiness
    v-if="siteDataFetch!.siteData.name === 'business'"
    :siteData="siteDataFetch!.siteData"
  />
  <SiteExampleMultipage
    v-if="siteDataFetch!.siteData.name === 'multipage'"
    :siteData="siteDataFetch!.siteData"
  />
  <SiteExampleInfo
    v-if="siteDataFetch!.siteData.name === 'info'"
    :siteData="siteDataFetch!.siteData"
  />
  <SiteExampleCommerce
    v-if="siteDataFetch!.siteData.name === 'commerce'"
    :siteData="siteDataFetch!.siteData"
  />
  <SiteExampleShop
    v-if="siteDataFetch!.siteData.name === 'shop'"
    :siteData="siteDataFetch!.siteData"
  />
  <SiteExampleCms
    v-if="siteDataFetch!.siteData.name === 'cms'"
    :siteData="siteDataFetch!.siteData"
  />
  <ContainerPage desktopPadding>
    <SiteDescription
      :description="siteDataFetch!.siteData.descriptionAfterExample"
    />
  </ContainerPage>

  <section>
    <ContainerPage desktopPadding>
      <TitleLink title="все сайты" route="/site" />
    </ContainerPage>
    <ContainerPage mobilePadding>
      <SiteListCarousel :catalog="siteCatalog" />
    </ContainerPage>
  </section>
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
