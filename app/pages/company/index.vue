<template>
  <ContainerPage desktopPadding>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE_URL + route.path" />
    <TitlePage title="Мастерская" :subtitle="COMPANY_SUBTITLE" />
    <!-- <div>
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
    </div> -->
  </ContainerPage>
</template>

<script setup lang="ts">
import {
  SITE_URL,
  COMPANY_SUBTITLE,
  COMPANY_TITLE,
  SITE_AUTHOR,
  SITE_NAME,
  COMPANY_DESCRIPTION,
  COMPANY_IMAGE,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Мастерская",
    path: "/company",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE_URL}${route.path}` }],
});

useSeoMeta({
  title: `${COMPANY_TITLE}`,
  description: `${COMPANY_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${COMPANY_TITLE}`,
  ogDescription: `${COMPANY_DESCRIPTION}`,
  ogImage: `${COMPANY_IMAGE}`,
  ogUrl: `${SITE_URL}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
