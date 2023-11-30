import { StaticImageData } from "next/image";

export type Imeta = {
  page: number;
  limit: number;
  total: number;
};

export type Iresponse = {
  data: any;
  meta?: Imeta;
};

export type IDepartment = {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type IReview = {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type Iproduct = {
  id: number;
  title: string;
  category: string;
  description: string;
  picture: string;
  balance: number;
  review?: string[];
  rating: number;
  isAvailable: boolean;
  stock: number;
  sizes: string[];
  color: string[];
  // createdAt: string;
  // updatedAt: string;
  // __v: number;
};
