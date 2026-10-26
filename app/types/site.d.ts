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

export interface ISiteExample {
  name: string;
  title: string;
  subtitle: string;
}

export interface ISiteMeta {
  siteMetaTitle: string;
  siteMetaDescription: string;
  siteMetaImage: string;
}

export interface ISite {
  name: string;
  pageTitle: string;
  siteMeta?: ISiteMeta;
  listCard: ISiteListCard;
  cardTitle: ISiteCardTitle;
  cardSubtitle: string;
  price: ISitePrice;
  advantage: ISiteAdvantage[];
  description: ISiteDescription[];
}

export interface ISiteCatalog {
  id: number;
  siteData: ISite;
}
