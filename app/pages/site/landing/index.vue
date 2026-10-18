<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Лендинг" subtitle="студия разработки веб-сайтов" />
    <SiteCard :siteData="siteLanding" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { siteLanding } from "~/mock/site/site-landing";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Сайты", path: "/site", content: "2" },
  {
    name: "Лендинг",
    path: "/site/landing",
    content: "last",
  },
];
</script>
