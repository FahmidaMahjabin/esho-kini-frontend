/* eslint-disable @next/next/no-img-element */
"use client";
import { Iproduct } from "@/interfaces/commonType";
import { Button, Card, Col } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import baby from "@/assets/images/baby.jpg";
import React from "react";
const { Meta } = Card;

export default function Product({ product }: { product: Iproduct }) {
  const router = useRouter();
  const handleClick = () => {
    const id = product.id;
    router.push(`product/${id}`);
  };
  return (
    <Col sm={24} md={12} lg={8} xl={8} xxl={6}>
      <Card
        style={{ height: "900px", backgroundColor: "#fff7e6" }}
        hoverable
        // cover={<Image src={product.picture} alt="women picture" fill></Image>}
      >
        <Meta
          title={product.title}
          style={{ alignItems: "center", color: "#ad4e00" }}
        ></Meta>
        <div style={{}}>
          <img
            src={product.picture}
            alt="women picture"
            width={500}
            height={500}
            style={{ width: "100%", height: "70%" }}
          />
        </div>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
        <p>price: {product.balance}</p>
        <Button
          type="primary"
          style={{ backgroundColor: "#ad4e00" }}
          onClick={handleClick}
        >
          See Detail
        </Button>
      </Card>
    </Col>
  );
}
