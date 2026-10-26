import { COMPANY_NAME } from "../meta";

const siteName = "business";
const siteTitle = "Визитка";

const priceData = {
  min: 8000,
  normal: 30000,
  full: 150000,
};

const siteMeta = {
  siteMetaTitle: `Визитка ${COMPANY_NAME}`,
  siteMetaDescription: `Визитка ${COMPANY_NAME}`,
  siteMetaImage:
    "https://mavstudio.ru/img/meta/meta-site-business-1200-630.jpg",
};

export const siteBusiness = {
  name: siteName,
  pageTitle: siteTitle,
  siteMeta: siteMeta,

  listCard: {
    name: siteName,
    title: siteTitle,
    subtitle: "Статусный",
    description: "Для компаний, организаций, персональный",
    route: `/site/${siteName}`,
    price: priceData.min,
  },

  cardTitle: {
    titleOne: "Разрабатываем  ",
    titleOneBack: "Разрабатываем",

    titleTwo: "сайты-визитки ",
    titleTwoBack: "сайты",
    titleTwoDoubleBack: "визитки",

    titleThree: "под ваш дизайн.",
    titleThreeBack: "дизайн",
  },

  cardSubtitle:
    "cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle cardSubtitle",

  price: priceData,

  advantage: [
    {
      id: 1,
      name: "isBad",
      title: "Недостатки",
      text: "Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки",
    },
    {
      id: 2,
      name: "isGood",
      title: "Достоинства",
      text: "Разрабатываем Достоинства Разрабатываем Достоинства Разрабатываем Достоинства Разрабатываем Достоинства Разрабатываем Достоинства Разрабатываем Достоинства",
    },
  ],

  description: [
    {
      id: 1,
      title: "Описание 1",
      textOne:
        "Разрабатываем Описание 1 Разрабатываем Описание 1 Разрабатываем Описание 1 Разрабатываем Описание 1",
      textTwo:
        "Разрабатываем сайты лендинги Разрабатываем сайты лендинги Разрабатываем сайты лендинги Разрабатываем сайты лендинги Разрабатываем сайты лендинги",
    },
    {
      id: 2,
      title: "Описание 2",
      textOne:
        "Разрабатываем одностраничные Описание 2 Разрабатываем одностраничные Описание 2 Разрабатываем одностраничные Описание 2",
      textTwo:
        "Разрабатываем сайты лендинги Описание 2 Разрабатываем сайты лендинги Описание 2 Разрабатываем сайты лендинги Описание 2 Разрабатываем сайты лендинги Описание 2",
    },
  ],

  example: {
    name: siteName,
    title: "Образец лендинга",
    subtitle: "Одностраничные сайты могут быть разного дизайна и наполнения.",
    textOne:
      "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
    textTwo:
      "Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",
  },
};
