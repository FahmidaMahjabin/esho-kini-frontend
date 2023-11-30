import React, { useState } from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Button, Input, Tooltip, Flex } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { removeUserFromStore } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "Service",
      key: "service",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Category",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: <Link href="/product">Women Collection</Link>,
        },
        {
          type: "group",
          label: <Link href="/product">Men Collection</Link>,
        },
        {
          type: "group",
          label: <Link href="/product">Baby Collection</Link>,
        },
      ],
    },
    {
      label: <Link href="/profile">Profile</Link>,
      key: "alipay",
    },
    {
      type: "group",
      label: (
        <Flex justify="flex-end">
          <Input placeholder="search......... " size="small" />
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
        </Flex>
      ),
      key: "searchbar",
    },
    {
      key: "1",
      label: (
        <Button
          onClick={() => {
            removeUserFromStore();
            router.push("/login");
          }}
          style={{ marginRight: 0, marginLeft: "auto" }}
        >
          <UserOutlined />
          logOut
        </Button>
      ),
    },
  ];
  const router = useRouter();
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default Navbar;
