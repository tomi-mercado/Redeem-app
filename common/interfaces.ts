export interface UserData {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
  createDate: string;
}

export interface Product {
  img: {
    url: string;
    hdUrl: string;
  };
  _id: string;
  name: string;
  cost: number;
  category: string;
}
