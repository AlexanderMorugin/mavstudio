<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage
      title="Панель управления"
      subtitle="мастерская авторских веб-сайтов"
    />
    <SiteCard :siteData="siteCms" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { siteCms } from "~/mock/site/site-cms";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Сайты", path: "/site", content: "2" },
  {
    name: "CMS",
    path: "/site/cms",
    content: "last",
  },
];
</script>
