"use client";
import ContentMain from "@/components/ui/Content";
import FooterComponent from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/service/auth.service";
import Layout from "antd/es/layout";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function layout({ children }: { children: React.ReactElement }) {
  // const loggedInUser = isLoggedIn();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   if (!loggedInUser) {
  //     router.push("/login");
  //   }
  //   setIsLoading(true);
  // }, [router, isLoading]);
  // if (!isLoading) {
  //   return <p>Loading..........</p>;
  // }
  return (
    <Layout>
      <Navbar></Navbar>
      <ContentMain>{children}</ContentMain>
      <FooterComponent></FooterComponent>
    </Layout>
  );
}
