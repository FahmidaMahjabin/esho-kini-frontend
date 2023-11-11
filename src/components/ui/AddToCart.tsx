"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
const product = {
  title: "Men Shirt",
  isAvailable: false,
  balance: "$1,39.00",
  picture: "/assets/images/girl-2.png",
  category: "Men Collection",
  rating: 4.8,
  stock: 2000,
  size: ["xxL", "xL", "L"],
  color: ["green", "black", "white"],
  description:
    "Brand new and stylish collection which represent our country tradition and also going with the flow.",
  review: ["very good", "we liked it"],
};
const AddToCart = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default AddToCart;
