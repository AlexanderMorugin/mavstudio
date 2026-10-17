<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Многостраничный сайт" />
    <SiteCard />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Сайты", path: "/site", content: "2" },
  {
    name: "Многостраничный",
    path: "/site/multipage",
    content: "last",
  },
];
</script>
