import { COMPANY_NAME } from "../meta";

const siteName = "landing";
const siteTitle = "Лендинг";

const priceData = {
  min: 10000,
  normal: 50000,
  full: 100000,
};

const siteMeta = {
  siteMetaTitle: `Лендинг ${COMPANY_NAME}`,
  siteMetaDescription: `Лендинг ${COMPANY_NAME}`,
  siteMetaImage: "https://mavstudio.ru/img/meta/meta-site-landing-1200-630.jpg",
};

export const siteLanding = {
  name: siteName,
  pageTitle: siteTitle,
  siteMeta: siteMeta,

  listCard: {
    name: siteName,
    title: siteTitle,
    subtitle: "Одностраничный",
    description: "Реклама, промо, рассылка",
    route: `/site/${siteName}`,
    price: priceData.min,
  },

  cardTitle: {
    titleOne: "Разрабатываем одностраничные ",
    titleOneBack: "Разрабатываем",

    titleTwo: "сайты лендинги ",
    titleTwoBack: "сайты",
    titleTwoDoubleBack: "лендинги",

    titleThree: "по вашему заказу.",
    titleThreeBack: "заказу",
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
    title: "Образец лендинга",
    subtitle: "Одностраничные сайты могут быть разного дизайна и наполнения.",

    hero: {
      title: "Hero Title лендинга",
      subtitle: "Одностраничные сайты могут быть разного дизайна и наполнения.",
    },

    cards: [
      {
        id: 1,
        title: "Card One Title",
        subtitle:
          "Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь.",
        image: "/img/bg/site-background-768-1365.webp",
        textOne:
          "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        textTwo:
          "Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",
      },
      {
        id: 2,
        title: "Card Two Title",
        subtitle:
          "Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь.",
        image: "/img/bg/site-background-768-1365.webp",
        textOne:
          "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        textTwo:
          "Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",
      },
    ],

    block: {
      title: "Block Landing Title",
      subtitle:
        "Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь.",

      cards: [
        {
          id: 1,
          title: "Card One Title",
          image: "/img/bg/site-background-768-1365.webp",
          textOne:
            "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        },
        {
          id: 2,
          title: "Card Two Title",
          image: "/img/bg/site-background-768-1365.webp",
          textOne:
            "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        },
        {
          id: 3,
          title: "Card Three Title",
          image: "/img/bg/site-background-768-1365.webp",
          textOne:
            "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        },
      ],
    },

    carousel: [
      {
        id: 0,
        image: "/img/bg/site-background-3840-2160.webp",
        title: "Slide One",
      },
      {
        id: 1,
        image: "/img/bg/site-background-3840-2160.webp",
        title: "Slide Two",
      },
      {
        id: 2,
        image: "/img/bg/site-background-3840-2160.webp",
        title: "Slide Three",
      },
      {
        id: 3,
        image: "/img/bg/site-background-3840-2160.webp",
        title: "Slide Four",
      },
      {
        id: 4,
        image: "/img/bg/site-background-3840-2160.webp",
        title: "Slide Five",
      },
    ],
  },
};
