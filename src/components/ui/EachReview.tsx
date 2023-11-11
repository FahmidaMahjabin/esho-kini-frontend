import { IReview } from "@/interfaces/commonType";
import { Card, Flex, Rate } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
export default function EachReview({ review }: { review: IReview }) {
  // console.log("review:", review);
  return (
    <Card
      title={review.name}
      extra={<UserOutlined />}
      style={{ width: 300, alignItems: "center" }}
    >
      <div>
        <p>{review.comment}</p>
        <p>
          Rating: <Rate allowHalf value={review.rating} />
        </p>
      </div>
    </Card>
  );
}
