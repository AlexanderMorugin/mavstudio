import type { IAvatar } from "./avatar";

export interface IReview {
  id: number | string;
  userName: string;
  userNameFirstLetter?: string;
  userStatus: string;
  userAvatar?: IAvatar;
  text: string;
  date: any;
}
