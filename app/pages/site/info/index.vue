<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage
      title="Информационый"
      subtitle="мастерская авторских веб-сайтов"
    />
    <SiteCard :siteData="siteInfo" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { siteInfo } from "~/mock/site/site-info";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Сайты", path: "/site", content: "2" },
  {
    name: "Информационый",
    path: "/site/info",
    content: "last",
  },
];
</script>
