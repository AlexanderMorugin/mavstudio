<template>
  <div
    :class="[
      'siteExampleUiMainHeroLogo',
      { siteExampleUiMainHeroLogo_landing: props.siteName === 'landing' },
      { siteExampleUiMainHeroLogo_business: props.siteName === 'business' },
    ]"
  >
    <div
      :class="[
        'siteExampleUiMainHeroLogo__square',
        {
          siteExampleUiMainHeroLogo__square_landing:
            props.siteName === 'landing',
        },
        {
          siteExampleUiMainHeroLogo__square_business:
            props.siteName === 'business',
        },
      ]"
    />
    <img
      src="/img/logo/logo-pencil.svg"
      alt="pencil"
      :class="[
        'siteExampleUiMainHeroLogo__pencil',
        {
          siteExampleUiMainHeroLogo__pencil_landing:
            props.siteName === 'landing',
        },
        {
          siteExampleUiMainHeroLogo__pencil_business:
            props.siteName === 'business',
        },
      ]"
    />
    <IconArrowIos
      :class="[
        'siteExampleUiMainHeroLogo__arrow',
        {
          'siteExampleUiMainHeroLogo__arrow_landing siteExampleUiMainHeroLogo__arrow_prevLanding':
            props.siteName === 'landing',
        },
        {
          'siteExampleUiMainHeroLogo__arrow_business siteExampleUiMainHeroLogo__arrow_prevBusiness':
            props.siteName === 'business',
        },
      ]"
    />
    <IconArrowIos
      :class="[
        'siteExampleUiMainHeroLogo__arrow',
        {
          'siteExampleUiMainHeroLogo__arrow_landing siteExampleUiMainHeroLogo__arrow_nextLanding':
            props.siteName === 'landing',
        },
        {
          'siteExampleUiMainHeroLogo__arrow_business siteExampleUiMainHeroLogo__arrow_nextBusiness':
            props.siteName === 'business',
        },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  siteName: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainHeroLogo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &_landing {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 576px) {
      top: 43%;
    }

    @media (max-width: 389px) {
      top: 25%;
    }

    @media (max-width: 389px) {
      width: 150px;
      height: 150px;
      margin-top: 70px;
    }
  }

  &_business {
    top: 10%;
    left: 5%;
  }

  &__square {
    border-radius: 14px;
    backdrop-filter: brightness(0.9) blur(1px);
    padding: 5px;
    animation: spin 7s linear infinite;

    &_landing {
      width: 200px;
      height: 200px;
      // animation: spin 7s linear infinite;

      @media (max-width: 576px) {
        width: 100px;
        height: 100px;
      }
    }

    &_business {
      // animation: spin-border 7s linear infinite;
      width: 90px;
      height: 90px;
      border: 1px solid $white-mask-one;

      @media (max-width: 576px) {
        width: 70px;
        height: 70px;
      }
    }
  }

  &__pencil {
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);

    &_landing {
      width: 50px;

      @media (max-width: 576px) {
        top: 55%;
        width: 35px;
      }
    }

    &_business {
      top: 55%;
      width: 35px;

      @media (max-width: 576px) {
        width: 26px;
      }
    }
  }

  &__arrow {
    position: absolute;

    fill: $white-one;

    &_landing {
      top: 50%;
      width: 40px;
      height: 40px;

      @media (max-width: 576px) {
        width: 25px;
        height: 25px;
      }

      @media (max-width: 389px) {
        top: 53%;
      }
    }

    &_business {
      top: 52%;
      width: 25px;
      height: 25px;

      @media (max-width: 576px) {
        width: 20px;
        height: 20px;
      }
    }

    &_prevLanding {
      left: 20%;
      transform: rotate(180deg);
      animation: arrow-left 3s linear infinite;

      @media (max-width: 576px) {
        left: 15%;
      }

      @media (max-width: 389px) {
        left: 25%;
      }
    }

    &_prevBusiness {
      left: 13%;
      transform: rotate(180deg);

      @media (max-width: 576px) {
        left: 14%;
      }
    }

    &_nextLanding {
      right: 26%;
      animation: arrow-right 3s linear infinite;
      animation-delay: 0.8s;

      @media (max-width: 576px) {
        right: 19%;
      }

      @media (max-width: 389px) {
        right: 27%;
      }
    }

    &_nextBusiness {
      right: 20%;

      @media (max-width: 576px) {
        right: 19%;
      }
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0);
    border: 1px solid $white-mask-one;
  }
  40% {
    border: 1px solid $orange-mask-two;
  }
  50% {
    border: 1px solid $blue-mask-three;
  }
  60% {
    border: 1px solid $green-mask-three;
  }
  100% {
    transform: rotate(180deg);
    border: 1px solid $white-mask-one;
  }
}
// @keyframes spin-border {
//   0% {
//     border: 1px solid $white-mask-one;
//   }
//   40% {
//     border: 1px solid $orange-mask-two;
//   }
//   60% {
//     border: 1px solid $green-mask-three;
//   }
//   100% {
//     border: 1px solid $white-mask-one;
//   }
// }
@keyframes arrow-left {
  0% {
    transform: rotate(180deg);
  }
  5% {
    transform: translateX(-20px) rotate(160deg) scale(0.2);
  }
  15% {
    transform: rotate(180deg);
  }
}
@keyframes arrow-right {
  5% {
    transform: translateX(10px) rotate(20deg) scale(0.2);
  }
  15% {
    transform: translateX(0) rotate(0) scale(1);
  }
}
</style>
