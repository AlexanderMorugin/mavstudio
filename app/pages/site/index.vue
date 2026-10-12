<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Сайты" />
    <SiteBlock :catalog="siteCatalog" />
    <!-- <ParagraphLarge>Информационый сайт (для компании)</ParagraphLarge>
    <ParagraphLarge>Коммерческий сайт (продающий)</ParagraphLarge>
    <ParagraphLarge>Лендинг (одностраничный сайт)</ParagraphLarge> -->
    <!-- <ParagraphLarge>Промо сайт - Лендинг</ParagraphLarge> -->
    <!-- <ParagraphLarge>Многостраничный сайт</ParagraphLarge>
    <ParagraphLarge
      >Многостраничный сайт с каталогом товаров (услуг),
      статический</ParagraphLarge
    > -->
    <!-- <ParagraphLarge
      >Многостраничный сайт с каталогом товаров (услуг), динамический, с панелью
      управления и базой данных</ParagraphLarge
    >
    <ParagraphLarge
      >Сайт визитка, статический или динамический, с панелью управления и базой
      данных</ParagraphLarge
    >
    <ParagraphLarge
      >Сайт компании, информационный, статический или динамический, с панелью
      управления и базой данных</ParagraphLarge
    >
    <ParagraphLarge
      >Интернет магазин с каталогом товаров (услуг), с панелью управления и
      базой данных</ParagraphLarge
    > -->
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
