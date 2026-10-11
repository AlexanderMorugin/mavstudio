export interface IReview {
  id: number;
  user: string;
  firstLetter: string;
  userStatus: string;
  textOne: string;
  textTwo?: string;
  date: string;
}
