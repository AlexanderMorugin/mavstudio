<template>
  <picture>
    <source
      media="(max-width: 767px)"
      srcSet="/img/bg/site-background-768-1365.webp"
    />
    <!-- <source
      media="(max-width: 1023px)"
      srcSet="/img/bg/site-background-1080-1920.webp"
    /> -->
    <source
      media="(max-width: 1279px)"
      srcSet="/img/bg/site-background-1280-720.webp"
    />
    <source
      media="(max-width: 1919px)"
      srcSet="/img/bg/site-background-1920-1080.webp"
    />
    <source
      media="(max-width: 3840px)"
      srcSet="/img/bg/site-background-3840-2160.webp"
    />

    <img
      src="/img/bg/site-background-768-1365.webp"
      alt="site-bg"
      class="bg-picture"
    />
  </picture>
</template>

<style lang="scss" scoped>
.bg-picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
