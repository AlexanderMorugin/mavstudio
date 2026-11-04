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
    title: "Образец многостраничного сайта",
    subtitle: "Одностраничные сайты могут быть разного дизайна и наполнения.",
    textOne:
      "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
    textTwo:
      "Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",

    nav: [
      {
        id: 0,
        title: "Cards-One",
        anchor: "Cards-One",
      },
      {
        id: 1,
        title: "Cards-Two",
        anchor: "Cards-Two",
      },
      {
        id: 2,
        title: "Carousel",
        anchor: "carousel",
      },
      {
        id: 3,
        title: "BlockCard-One",
        anchor: "BlockCard-One",
      },
      {
        id: 4,
        title: "BlockCard-Two",
        anchor: "BlockCard-Two",
      },
      {
        id: 5,
        title: "BlockCard-Three",
        anchor: "BlockCard-Three",
      },
    ],

    hero: {
      title: "Hero Title лендинга",
      subtitle: "Одностраничные сайты могут быть разного дизайна и наполнения.",
    },

    cards: [
      {
        id: 0,
        anchor: "Cards-One",
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
        id: 1,
        anchor: "Cards-Two",
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

    block: {
      title: "Block Landing Title",
      subtitle:
        "Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь.",

      cards: [
        {
          id: 0,
          anchor: "BlockCard-One",
          title: "Card One Title",
          image: "/img/bg/site-background-768-1365.webp",
          textOne:
            "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        },
        {
          id: 1,
          anchor: "BlockCard-Two",
          title: "Card Two Title",
          image: "/img/bg/site-background-768-1365.webp",
          textOne:
            "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        },
        {
          id: 2,
          anchor: "BlockCard-Three",
          title: "Card Three Title",
          image: "/img/bg/site-background-768-1365.webp",
          textOne:
            "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
        },
      ],
    },
  },

  descriptionAfterExample: [
    {
      id: 1,
      title: "Описание после Лендинга 1",
      textOne:
        "Разрабатываем Описание 1 Разрабатываем Описание 1 Разрабатываем Описание 1 Разрабатываем Описание 1",
      textTwo:
        "Разрабатываем сайты лендинги Разрабатываем сайты лендинги Разрабатываем сайты лендинги Разрабатываем сайты лендинги Разрабатываем сайты лендинги",
    },
    {
      id: 2,
      title: "Описание после Лендинга 2",
      textOne:
        "Разрабатываем одностраничные Описание 2 Разрабатываем одностраничные Описание 2 Разрабатываем одностраничные Описание 2",
      textTwo:
        "Разрабатываем сайты лендинги Описание 2 Разрабатываем сайты лендинги Описание 2 Разрабатываем сайты лендинги Описание 2 Разрабатываем сайты лендинги Описание 2",
    },
  ],
};
