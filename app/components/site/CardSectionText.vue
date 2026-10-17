<template>
  <section class="siteCardSectionText">
    <TitleBlockThreeColor :siteData="props.siteData" />
    <ParagraphNormal>
      Судьба Ефремова с ранних лет была непростой. Во время Гражданской войны он
      прибился к красноармейской автороте, был контужен. После демобилизации в
      1921 году уехал в Петроград, где экстерном окончил школу, а затем учился
      на штурмана каботажных судов.
    </ParagraphNormal>
    <ParagraphNormal>
      Судьба Ефремова с ранних лет была непростой. Во время Гражданской войны он
      прибился к красноармейской автороте, был контужен. После демобилизации в
      1921 году уехал в Петроград, где экстерном окончил школу, а затем учился
      на штурмана каботажных судов.
    </ParagraphNormal>
  </section>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteCardSectionText {
  display: flex;
  flex-direction: column;
  gap: 40px;
  // border: 1px solid red;
}
</style>
