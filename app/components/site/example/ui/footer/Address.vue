<template>
  <div class="siteExampleUiFooterAddress">
    <div>
      <div class="siteExampleUiFooterAddress__name">Адрес</div>
      <div class="siteExampleUiFooterAddress__text">
        Город, Название улицы, д. 100
      </div>
    </div>
    <div>
      <div class="siteExampleUiFooterAddress__name">Телефон</div>
      <div class="siteExampleUiFooterAddress__text">+7 495 000-00-00</div>
    </div>
    <div>
      <div class="siteExampleUiFooterAddress__name">Время работы</div>
      <div class="siteExampleUiFooterAddress__text">с 10:00 до 19:00</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.siteExampleUiFooterAddress {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__name {
    color: $white-mask-two;
    text-align: center;
  }

  &__text {
    font-size: 14px;
    text-align: center;
    padding-top: 10px;
  }
}
</style>
