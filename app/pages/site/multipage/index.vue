<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage
      title="Многостраничный"
      subtitle="мастерская авторских веб-сайтов"
    />
    <SiteCard :siteData="siteMultipage" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { siteMultipage } from "~/mock/site/site-multipage";

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
