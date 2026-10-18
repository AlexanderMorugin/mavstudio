<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage
      title="Коммерческий"
      subtitle="мастерская авторских веб-сайтов"
    />
    <SiteCard :siteData="siteCommerce" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { siteCommerce } from "~/mock/site/site-commerce";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Сайты", path: "/site", content: "2" },
  {
    name: "Коммерческий",
    path: "/site/commerce",
    content: "last",
  },
];
</script>
