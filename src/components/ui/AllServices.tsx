"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import React from "react";
import Product from "./Product";
import { Iproduct } from "@/interfaces/commonType";
import { products } from "@/constants/products";
import { Col, Row } from "antd";
export default function AllServices() {
  // const { data, isLoading } = useGetAllProductsQuery({});
  // const products = data?.Products?.data;
  console.log("products from AllService:", products);

  // const products = await fetch("data.json")
  //   .then((res) => res.json())
  //   .then((data) => console.log("data:", data));

  return (
    <Row gutter={[16, 16]} style={{ margin: "20px 0px" }}>
      {products?.map((product: Iproduct) => (
        <Product product={product} key={products.indexOf(product)}></Product>
      ))}
    </Row>
  );
}
