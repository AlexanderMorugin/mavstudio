export interface ISiteCatalog {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  price: string;
  // buttonColor: string;
}

export interface ISite {
  name: string;

  titleOne: string;
  titleOneBack: string;

  titleTwo: string;
  titleTwoBack: string;
  titleTwoDoubleBack: string;

  titleThree: string;
  titleThreeBack: string;

  // imageBlock: {
  //   name: string;
  //   title: string;
  //   subtitle: string;
  //   description: string;
  //   route: string;
  //   price: string;
  //   buttonColor: string;
  // };
}
