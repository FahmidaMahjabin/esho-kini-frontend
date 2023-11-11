import React from "react";
import { Layout } from "antd";
import Link from "next/link";
import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
const { Footer } = Layout;
export default function FooterComponent() {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#002329",
        color: "white",
      }}
    >
      <div></div>
      <h2
        style={{
          fontSize: "28px",
        }}
      >
        Esho kini
      </h2>
      <p>
        <Link href="https://web.facebook.com/groups/programmingherocommunity">
          <FacebookFilled />
        </Link>
        <Link href="www.twitter.com">
          <TwitterSquareFilled />
        </Link>
        <Link href="https://web.programming-hero.com/home/">
          <GoogleSquareFilled />
        </Link>
        <Link href="www.linkedin.com">
          <LinkedinFilled />
        </Link>
      </p>
      Esho Kini ©2023 Created by Fahmida
    </Footer>
  );
}
