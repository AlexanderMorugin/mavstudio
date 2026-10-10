<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Преимущества" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Преимущества",
    path: "/advantage",
    content: "last",
  },
];
</script>
