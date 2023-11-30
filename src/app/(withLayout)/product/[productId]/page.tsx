import Product from "@/components/ui/Product";
import { Iproduct } from "@/interfaces/commonType";
import React from "react";

export default async function productDetailPage({
  params,
}: {
  params: { productId: number };
}) {
  const id = params.productId;
  console.log("productId:", id);
  const res = await fetch(`http://localhost:5000/products/${id}`);
  const product: Iproduct = await res.json();

  return (
    <div>
      <Product product={product}></Product>
    </div>
  );
}
