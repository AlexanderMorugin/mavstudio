<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Визитка" subtitle="мастерская авторских веб-сайтов" />
    <SiteCard :siteData="siteBusiness" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { siteBusiness } from "~/mock/site/site-business";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Сайты", path: "/site", content: "2" },
  {
    name: "Визитка",
    path: "/site/business",
    content: "last",
  },
];
</script>
