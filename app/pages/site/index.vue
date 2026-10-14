<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Сайты" />
    <SiteBlock :catalog="siteCatalog" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { siteCatalog } from "~/mock/site-catalog";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Сайты",
    path: "/site",
    content: "last",
  },
];
</script>
