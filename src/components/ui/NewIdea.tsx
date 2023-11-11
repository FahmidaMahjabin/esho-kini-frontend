import { Button, Col, Flex, Row } from "antd";
import Image from "next/image";
import React from "react";
import idea from "@/assets/images/Creative thinking.gif";
export default function NewIdea() {
  return (
    <div
      className="aboutItem"
      style={{
        border: "1px solid gray",
      }}
    >
      {/* <Row style={{ margin: "50px 0px" }}>
        <Col sm={24} md={12} lg={12}> */}
      <Flex justify="space-around" align="center">
        <div style={{ width: "48%" }}>
          <h1 style={{ textAlign: "center", color: "#ad4e00" }}>Our Goal</h1>
          <p>
            {" "}
            we believe that clothing should be an expression of your unique
            personality. Our journey began when a group of like-minded fashion
            enthusiasts decided to create a brand that offered a blend of style,
            affordability, and comfort. From day one, our mission has been to
            help you look and feel your best, whether you are at work, relaxing
            at home, or stepping out for a night on the town.
          </p>
          <Button
            type="primary"
            style={{
              backgroundColor: "#ad4e00",

              margin: "10px",
            }}
          >
            Learn More
          </Button>
        </div>
        <Image src={idea} alt="our goal" height={500} width={500}></Image>
      </Flex>

      {/* </Col>
        <Col sm={24} md={12} lg={12}> */}

      {/* </Col>
      </Row> */}
    </div>
  );
}
