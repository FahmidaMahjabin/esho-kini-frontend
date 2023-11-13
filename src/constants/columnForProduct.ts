"use client";
import { ColumnsType } from "antd/es/table";
import { StaticImageData } from "next/image";
import React from "react";
import { products } from "./products";
import { Button } from "antd";

export type IproductColumn = {
  dataIndex: any;
  title: string;
  category: string;

  isAvailable: boolean;

  image: StaticImageData;
  balance: number;

  stock: number;
};

// const data : IproductColumn[] = products.map(product => return {
//     dataIndex : products.indexOf(product),
//     title: product.title,
//     balance : product.balance,
//     category: product.category,
//     image: product.picture,
//     stock: product.stock
// })
