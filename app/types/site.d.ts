export interface ISiteListCard {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  price: number;
}

export interface ISiteCardTitle {
  titleOne: string;
  titleOneBack: string;

  titleTwo: string;
  titleTwoBack: string;
  titleTwoDoubleBack: string;

  titleThree: string;
  titleThreeBack: string;
}

export interface ISitePrice {
  min: number;
  normal: number;
  full: number;
}

export interface ISiteAdvantage {
  id: number;
  name: string;
  title: string;
  text: string;
}

export interface ISiteDescription {
  id: number;
  title: string;
  textOne: string;
  textTwo: string;
}

export interface ISiteExampleCard {
  id: number;
  anchor: string;
  title: string;
  subtitle?: string;
  image768: string;
  image300: string;
  textOne: string;
  textTwo?: string;
}

export interface ISiteExampleBlock {
  title: string;
  subtitle: string;
  cards: ISiteExampleCard[];
}

export interface ISiteExampleHero {
  anchor?: string;
  name: string;
  title: string;
  subtitle: string;
}

export interface ISiteExampleCarousel {
  id: number;
  image3840: string;
  image1920: string;
  image1280: string;
  image1024: string;
  image768: string;
  title: string;
}

export interface ISiteExampleNav {
  id: number;
  title: string;
  anchor: string;
}

export interface ISiteExampleBackground {
  image3840: string;
  image1920: string;
  image1280: string;
  image768: string;
  title: string;
}

export interface ISiteExampleAbout {
  anchor: string;
  title: string;
  subtitle: string;
  image: string;
  textOne: string;
  textTwo?: string;
}

export interface ISiteExamplePortfolioCard {
  id: number;
  title: string;
  image: string;
}

export interface ISiteExamplePortfolio {
  anchor: string;
  title: string;
  subtitle: string;
  card: ISiteExamplePortfolioCard[];
}

export interface ISiteExampleOfferCard {
  id: number;
  title: string;
  subtitle: string;
  image3840: string;
  image1920: string;
  image1280: string;
  image768: string;
  image350: string;
}

export interface ISiteExampleOffer {
  anchor: string;
  title: string;
  subtitle: string;
  card: ISiteExampleOfferCard[];
}

export interface ISiteExample {
  title: string;
  subtitle: string;
  background: ISiteExampleBackground;
  nav: ISiteExampleNav[];
  hero: ISiteExampleHero;
  about?: ISiteExampleAbout;
  offer?: ISiteExampleOffer;
  portfolio?: ISiteExamplePortfolio;
  cards?: ISiteExampleCard[];
  block?: ISiteExampleBlock;
  carousel?: ISiteExampleCarousel[];
}

export interface ISiteMeta {
  siteMetaTitle: string;
  siteMetaDescription: string;
  siteMetaImage: string;
}

export interface ISite {
  name: string;
  pageTitle: string;
  siteMeta: ISiteMeta;
  listCard: ISiteListCard;
  cardTitle: ISiteCardTitle;
  cardSubtitle: string;
  price: ISitePrice;
  advantage: ISiteAdvantage[];
  description: ISiteDescription[];
  example: ISiteExample;
  descriptionAfterExample: ISiteDescription[];
}

export interface ISiteCatalog {
  id: number;
  siteData: ISite;
}
