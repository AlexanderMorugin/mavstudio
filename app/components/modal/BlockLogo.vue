<template>
  <div class="modalBlockLogo">
    <div class="modalBlockLogo__container">
      <div class="modalBlockLogo__iconBlock">
        <HeroLogoBlock modal />
        <HeroSubtitleBlock modal />
      </div>

      <div class="modalBlockLogo__textBlock">
        <span class="modalBlockLogo__text">MAVSTUDIO</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modalBlockLogo {
  border-left: 2px solid $white-mask-four;
  overflow: hidden;
  animation: fall 0.8s;

  &__container {
    display: grid;
    grid-template-columns: 85% 1fr;
    height: 100%;
    background: $black-mask-three;
    animation: from-left 1.2s;

    @media (max-width: 1279px) {
      grid-template-columns: 80% 1fr;
    }
  }

  &__iconBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  &__textBlock {
    transform: rotate(270deg);
    height: 100%;
    animation: fall-text 3s;
  }

  &__text {
    font-family: "Oswald-Bold", sans-serif;
    font-size: 170px;
    letter-spacing: -6%;
    color: $white-mask-five;
  }
}
@keyframes from-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fall {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fall-text {
  0% {
    transform: translateY(-100%) rotate(270deg);
  }
  50% {
    transform: translateY(-100%) rotate(270deg);
  }
  100% {
    transform: translateY(0) rotate(270deg);
  }
}
</style>
