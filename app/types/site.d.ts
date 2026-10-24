export interface ISiteCatalog {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  price: string;
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

export interface ISite {
  name: string;
  cardTitle: ISiteCardTitle;
  cardSubtitle: string;
  price: ISitePrice;
  advantage: ISiteAdvantage[];
}
