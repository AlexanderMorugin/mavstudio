<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE_URL + route.path" />
    <TitlePage title="Преимущества" :subtitle="COMPANY_SUBTITLE" />
    <div>
      Судьба Ефремова с ранних лет была непростой. Во время Гражданской войны он
      прибился к красноармейской автороте, был контужен. После демобилизации в
      1921 году уехал в Петроград, где экстерном окончил школу, а затем учился
      на штурмана каботажных судов.
    </div>
    <div>
      Судьба Ефремова с ранних лет была непростой. Во время Гражданской войны он
      прибился к красноармейской автороте, был контужен. После демобилизации в
      1921 году уехал в Петроград, где экстерном окончил школу, а затем учился
      на штурмана каботажных судов.
    </div>
    <div>
      Судьба Ефремова с ранних лет была непростой. Во время Гражданской войны он
      прибился к красноармейской автороте, был контужен. После демобилизации в
      1921 году уехал в Петроград, где экстерном окончил школу, а затем учился
      на штурмана каботажных судов.
    </div>
    <div>
      Судьба Ефремова с ранних лет была непростой. Во время Гражданской войны он
      прибился к красноармейской автороте, был контужен. После демобилизации в
      1921 году уехал в Петроград, где экстерном окончил школу, а затем учился
      на штурмана каботажных судов.
    </div>
    <div>
      Судьба Ефремова с ранних лет была непростой. Во время Гражданской войны он
      прибился к красноармейской автороте, был контужен. После демобилизации в
      1921 году уехал в Петроград, где экстерном окончил школу, а затем учился
      на штурмана каботажных судов.
    </div>
  </ContainerPage>
</template>

<script setup lang="ts">
import {
  SITE_URL,
  COMPANY_SUBTITLE,
  ADVANTAGE_TITLE,
  SITE_AUTHOR,
  SITE_NAME,
  ADVANTAGE_DESCRIPTION,
  ADVANTAGE_IMAGE,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Преимущества",
    path: "/advantage",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE_URL}${route.path}` }],
});

useSeoMeta({
  title: `${ADVANTAGE_TITLE}`,
  description: `${ADVANTAGE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${ADVANTAGE_TITLE}`,
  ogDescription: `${ADVANTAGE_DESCRIPTION}`,
  ogImage: `${ADVANTAGE_IMAGE}`,
  ogUrl: `${SITE_URL}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
