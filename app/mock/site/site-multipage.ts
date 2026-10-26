import { COMPANY_NAME } from "../meta";

const siteName = "multipage";
const siteTitle = "Многостраничный";

const priceData = {
  min: 20000,
  normal: 40000,
  full: 130000,
};

const siteMeta = {
  siteMetaTitle: `Многостраничный ${COMPANY_NAME}`,
  siteMetaDescription: `Многостраничный ${COMPANY_NAME}`,
  siteMetaImage:
    "https://mavstudio.ru/img/meta/meta-site-multipage-1200-630.jpg",
};

export const siteMultipage = {
  name: siteName,
  pageTitle: siteTitle,
  siteMeta: siteMeta,

  listCard: {
    name: siteName,
    title: siteTitle,
    subtitle: "Контентный",
    description: "Наиболее индексируемый поисковыми системами",
    route: `/site/${siteName}`,
    price: priceData.min,
  },

  cardTitle: {
    titleOne: "Разрабатываем ",
    titleOneBack: "Разрабатываем",

    titleTwo: "многостраничные сайты ",
    titleTwoBack: "многостраничные",
    titleTwoDoubleBack: "сайты",

    titleThree: "под вашу сферу деятельности.",
    titleThreeBack: "сферу",
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
