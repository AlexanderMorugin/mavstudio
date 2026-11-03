import { siteBusiness } from "./site-business";
import { siteCms } from "./site-cms";
import { siteCommerce } from "./site-commerce";
import { siteInfo } from "./site-info";
import { siteLanding } from "./site-landing";
import { siteMultipage } from "./site-multipage";
import { siteShop } from "./site-shop";

export const siteCatalog = [
  {
    id: 1,
    siteData: siteLanding,
  },
  {
    id: 2,
    siteData: siteBusiness,
  },
  {
    id: 3,
    siteData: siteMultipage,
  },
  {
    id: 4,
    siteData: siteInfo,
  },
  {
    id: 5,
    siteData: siteCommerce,
  },
  {
    id: 6,
    siteData: siteShop,
  },
  {
    id: 7,
    siteData: siteCms,
  },
];
