"use client";
import AddToCart from "@/components/ui/AddToCart";
import TableforProducts from "@/components/ui/Table";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { products } from "@/constants/products";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { Button, Flex, Select } from "antd";
import React, { useState } from "react";
import Column from "antd/es/table/Column";
import Image from "next/image";
import { useDebounce } from "@uidotdev/usehooks";
import { Input } from "antd";
import { useDebounced } from "@/redux/hooks";
import FormSelectInput, { IOption } from "@/components/form/FormSelectInput";
import { Iproduct } from "@/interfaces/commonType";
const { Search } = Input;
export const columns = [
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Balance",
    dataIndex: "balance",
  },
  {
    title: "Category",
    dataIndex: "title",
  },
  {
    title: "Picture",
    dataIndex: "picture",
  },
  {
    title: "Stock",
    dataIndex: "stock",
  },

  {
    title: "Action",

    render: function (data: any) {
      return (
        <>
          <Button type="primary">
            {" "}
            <ShoppingCartOutlined />
          </Button>
        </>
      );
    },
  },
];

export default function Product() {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("title");
  const [sortOrder, setSortOrder] = useState<string>("Asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("Women Collection");
  query["size"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;
  query["category"] = category;
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const { data, isLoading } = useGetAllProductsQuery({ ...query });
  console.log("data from product page:", data);
  // @ts-ignore
  const Products = data?.Products?.data;
  const meta = data?.meta;
  console.log("Products:", Products, meta);

  // const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  const categoryOptions: IOption[] = [
    { label: "wemen collection", value: "Women Collection" },
    { label: "men collection", value: "Men Collection" },
  ];
  // Products?.map((product: Iproduct) =>
  // if (!categoryOptions.includes(product.category) ){
  //   categoryOptions.push({
  //     label: product.category,
  //     value: product.category,
  //   })

  // }

  // );

  const handleChange = (value: string) => {
    setCategory(value);
    console.log("category:", category);
  };
  return (
    <div>
      <h1>Choose your best attire</h1>
      <Flex justify="space-between">
        <div>
          <label>Select Category</label>
          <br></br>
          <Select
            defaultValue="Women Collection"
            style={{ width: 120 }}
            onChange={handleChange}
            options={categoryOptions}
          />
        </div>
        <div>
          <Search
            placeholder="input search text"
            enterButton
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log("searchterm:", searchTerm);
            }}
          />
        </div>
      </Flex>
      <TableforProducts
        loading={isLoading}
        columns={columns}
        dataSource={Products}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <Column
        title="Picture"
        dataIndex="picture"
        render={(image) => (
          <>
            <Image src={image} alt="image" />
          </>
        )}
      />

      <AddToCart />
    </div>
  );
}
