<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Отзывы" />
    <ReviewBlock :reviews="reviews.reverse()" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE } from "~/mock/meta";
import { reviews } from "~/mock/review";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Отзывы",
    path: "/review",
    content: "last",
  },
];
</script>
