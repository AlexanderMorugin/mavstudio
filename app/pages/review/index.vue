<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE_URL + route.path" />
    <TitlePage title="Отзывы" :subtitle="COMPANY_SUBTITLE" />
    <ReviewBlock :reviews="reviews.reverse()" />
  </ContainerPage>
</template>

<script setup lang="ts">
import { SITE_URL, COMPANY_SUBTITLE } from "~/mock/meta";
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
