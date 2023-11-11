"use client";
import React from "react";
import { Button, Carousel, Col, Flex, Row } from "antd";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import EachReview from "./EachReview";
import { IReview } from "@/interfaces/commonType";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Reviews = () => {
  const { data } = useGetAllReviewsQuery(undefined);
  const reviews = data?.Reviews?.data;
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Flex
        justify="space-around"
        align="center"
        style={{ backgroundColor: "#fff7e6", margin: "20px", padding: "20px" }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>What People says About Us</h1>
          <h3 style={{ color: "#ad4e00", padding: "10px" }}>
            3M+ Clients Believe on Us{" "}
          </h3>
          <Button type="primary" style={{ backgroundColor: "#ad4e00" }}>
            Learn More
          </Button>
        </div>

        <Carousel autoplay style={{ width: "400px" }}>
          {reviews?.map((review: IReview) => (
            <EachReview key={review._id} review={review}></EachReview>
          ))}
        </Carousel>
      </Flex>
    </>
  );
};

export default Reviews;
