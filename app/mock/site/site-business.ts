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
      id: 0,
      name: "isBad",
      title: "Недостатки",
      text: "Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки Разрабатываем Недостатки",
    },
    {
      id: 1,
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
    title: "Образец сайта-визитки",
    subtitle: "Одностраничные сайты могут быть разного дизайна и наполнения.",

    background: {
      image3840: "/img/business/business-bg-3840-700.webp",
      image1920: "/img/business/business-bg-1920-700.webp",
      image1280: "/img/business/business-bg-1280-500.webp",
      image768: "/img/business/business-bg-768-500.webp",
      title: "Slide One",
    },

    nav: [
      {
        id: 0,
        title: "главная",
        anchor: "main-page",
      },
      {
        id: 1,
        title: "о нас",
        anchor: "about-page",
      },
      {
        id: 2,
        title: "предлагаем",
        anchor: "offer-page",
      },
      {
        id: 3,
        title: "наши работы",
        anchor: "portfolio-page",
      },
      {
        id: 4,
        title: "отзывы",
        anchor: "review-page",
      },
      {
        id: 5,
        title: "контакты",
        anchor: "contact-page",
      },
    ],

    hero: {
      anchor: "main-page",
      name: siteName,
      title: "Сайт-визитка",
      subtitle: "Одностраничные сайты могут быть разного дизайна и наполнения.",
    },

    about: {
      anchor: "about-page",
      title: "Ваша-Фирма",
      subtitle: "Краткое описание вашей компании.",
      image: "/img/landing/landing-card-768-300.webp",
      textOne:
        "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки. Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",
      textTwo:
        "Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много. Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",
    },

    offer: {
      anchor: "offer-page",
      title: "Ваши-предложения",
      subtitle: "Представляем наши наиболее достойные работы.",

      card: [
        {
          id: 0,
          title: "Продукт 1",
          subtitle: "Представляем наши наиболее достойные работы.",
          image3840: "/img/business/offer/offer-1-3840-2160.webp",
          image1920: "/img/business/offer/offer-1-1920-1080.webp",
          image1280: "/img/business/offer/offer-1-1280-720.webp",
          image1080: "/img/business/offer/offer-1-1080-1920.webp",
          image768: "/img/business/offer/offer-1-768-432.webp",
          image200: "/img/business/offer/offer-1-200-113.webp",
        },
        {
          id: 1,
          title: "Продукт 2",
          subtitle: "Представляем наши наиболее достойные работы.",
          image3840: "/img/business/offer/offer-2-3840-2160.webp",
          image1920: "/img/business/offer/offer-2-1920-1080.webp",
          image1280: "/img/business/offer/offer-2-1280-720.webp",
          image1080: "/img/business/offer/offer-2-1080-1920.webp",
          image768: "/img/business/offer/offer-2-768-432.webp",
          image200: "/img/business/offer/offer-2-200-113.webp",
        },
        {
          id: 2,
          title: "Продукт 3",
          subtitle: "Представляем наши наиболее достойные работы.",
          image3840: "/img/business/offer/offer-3-3840-2160.webp",
          image1920: "/img/business/offer/offer-3-1920-1080.webp",
          image1280: "/img/business/offer/offer-3-1280-720.webp",
          image1080: "/img/business/offer/offer-3-1080-1920.webp",
          image768: "/img/business/offer/offer-3-768-432.webp",
          image200: "/img/business/offer/offer-3-200-113.webp",
        },
        {
          id: 3,
          title: "Продукт 4",
          subtitle: "Представляем наши наиболее достойные работы.",
          image3840: "/img/business/offer/offer-4-3840-2160.webp",
          image1920: "/img/business/offer/offer-4-1920-1080.webp",
          image1280: "/img/business/offer/offer-4-1280-720.webp",
          image1080: "/img/business/offer/offer-4-1080-1920.webp",
          image768: "/img/business/offer/offer-4-768-432.webp",
          image200: "/img/business/offer/offer-4-200-113.webp",
        },
        {
          id: 4,
          title: "Продукт 5",
          subtitle: "Представляем наши наиболее достойные работы.",
          image3840: "/img/business/offer/offer-5-3840-2160.webp",
          image1920: "/img/business/offer/offer-5-1920-1080.webp",
          image1280: "/img/business/offer/offer-5-1280-720.webp",
          image1080: "/img/business/offer/offer-5-1080-1920.webp",
          image768: "/img/business/offer/offer-5-768-432.webp",
          image200: "/img/business/offer/offer-5-200-113.webp",
        },
        {
          id: 5,
          title: "Продукт 6",
          subtitle: "Представляем наши наиболее достойные работы.",
          image3840: "/img/business/offer/offer-6-3840-2160.webp",
          image1920: "/img/business/offer/offer-6-1920-1080.webp",
          image1280: "/img/business/offer/offer-6-1280-720.webp",
          image1080: "/img/business/offer/offer-6-1080-1920.webp",
          image768: "/img/business/offer/offer-6-768-432.webp",
          image200: "/img/business/offer/offer-6-200-113.webp",
        },
      ],
    },

    portfolio: {
      anchor: "portfolio-page",
      title: "Ваши-работы",
      subtitle: "Представляем наши наиболее достойные работы.",

      card: [
        {
          id: 0,
          title: "Работа 1",
          image: "/img/landing/landing-card-768-300.webp",
        },
        {
          id: 1,
          title: "Работа 2",
          image: "/img/landing/landing-card-768-300.webp",
        },
        {
          id: 2,
          title: "Работа 3",
          image: "/img/landing/landing-card-768-300.webp",
        },
        {
          id: 3,
          title: "Работа 4",
          image: "/img/landing/landing-card-768-300.webp",
        },
        {
          id: 4,
          title: "Работа 5",
          image: "/img/landing/landing-card-768-300.webp",
        },
        {
          id: 5,
          title: "Работа 6",
          image: "/img/landing/landing-card-768-300.webp",
        },
      ],
    },

    // cards: [
    //   {
    //     id: 0,
    //     anchor: "Cards-One",
    //     title: "Card One Title",
    //     subtitle:
    //       "Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь.",
    //     image768: "/img/landing/landing-card-768-300.webp",
    //     image300: "/img/landing/landing-card-300-300.webp",
    //     textOne:
    //       "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
    //     textTwo:
    //       "Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",
    //   },
    //   {
    //     id: 1,
    //     anchor: "Cards-Two",
    //     title: "Card Two Title",
    //     subtitle:
    //       "Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь.",
    //     image768: "/img/landing/landing-card-768-300.webp",
    //     image300: "/img/landing/landing-card-300-300.webp",
    //     textOne:
    //       "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
    //     textTwo:
    //       "Конечно же возможно использование разной анимации, не мешающей восприятию информации. Примеры анимации смотрите на страницах нашего сайта. Их много.",
    //   },
    // ],

    // carousel: [
    //   {
    //     id: 0,
    //     image3840: "/img/landing/landing-carousel-3840-700.webp",
    //     image1920: "/img/landing/landing-carousel-1920-700.webp",
    //     image1280: "/img/landing/landing-carousel-1280-500.webp",
    //     image1024: "/img/landing/landing-carousel-1024-500.webp",
    //     image768: "/img/landing/landing-carousel-768-500.webp",
    //     title: "Slide One",
    //   },
    //   {
    //     id: 1,
    //     image3840: "/img/landing/landing-carousel-3840-700.webp",
    //     image1920: "/img/landing/landing-carousel-1920-700.webp",
    //     image1280: "/img/landing/landing-carousel-1280-500.webp",
    //     image1024: "/img/landing/landing-carousel-1024-500.webp",
    //     image768: "/img/landing/landing-carousel-768-500.webp",
    //     title: "Slide Two",
    //   },
    //   {
    //     id: 2,
    //     image3840: "/img/landing/landing-carousel-3840-700.webp",
    //     image1920: "/img/landing/landing-carousel-1920-700.webp",
    //     image1280: "/img/landing/landing-carousel-1280-500.webp",
    //     image1024: "/img/landing/landing-carousel-1024-500.webp",
    //     image768: "/img/landing/landing-carousel-768-500.webp",
    //     title: "Slide Three",
    //   },
    //   {
    //     id: 3,
    //     image3840: "/img/landing/landing-carousel-3840-700.webp",
    //     image1920: "/img/landing/landing-carousel-1920-700.webp",
    //     image1280: "/img/landing/landing-carousel-1280-500.webp",
    //     image1024: "/img/landing/landing-carousel-1024-500.webp",
    //     image768: "/img/landing/landing-carousel-768-500.webp",
    //     title: "Slide Four",
    //   },
    //   {
    //     id: 4,
    //     image3840: "/img/landing/landing-carousel-3840-700.webp",
    //     image1920: "/img/landing/landing-carousel-1920-700.webp",
    //     image1280: "/img/landing/landing-carousel-1280-500.webp",
    //     image1024: "/img/landing/landing-carousel-1024-500.webp",
    //     image768: "/img/landing/landing-carousel-768-500.webp",
    //     title: "Slide Five",
    //   },
    // ],

    // block: {
    //   title: "Block Landing Title",
    //   subtitle:
    //     "Краткое описание в нескольких словах, чтобы не вчитываясь в весь блок было бы немного понятно о чём идет речь.",

    //   cards: [
    //     {
    //       id: 0,
    //       anchor: "BlockCard-One",
    //       title: "Card One Title",
    //       image768: "/img/landing/landing-card-768-300.webp",
    //       image300: "/img/landing/landing-card-300-300.webp",
    //       textOne:
    //         "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
    //     },
    //     {
    //       id: 1,
    //       anchor: "BlockCard-Two",
    //       title: "Card Two Title",
    //       image768: "/img/landing/landing-card-768-300.webp",
    //       image300: "/img/landing/landing-card-300-300.webp",
    //       textOne:
    //         "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
    //     },
    //     {
    //       id: 2,
    //       anchor: "BlockCard-Three",
    //       title: "Card Three Title",
    //       image768: "/img/landing/landing-card-768-300.webp",
    //       image300: "/img/landing/landing-card-300-300.webp",
    //       textOne:
    //         "Блоки, так же как другие элементы лендинга, могут быть различного дизайна и наполнения. Фото на сайте рекомендуется использовать свои и без компьютерной обработки.",
    //     },
    //   ],
    // },
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
