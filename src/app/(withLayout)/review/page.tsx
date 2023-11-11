"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import Rating from "@/components/form/Rating";
import { Button, Rate } from "antd";
import React, { useState } from "react";

export default function Review() {
  const reviewSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Form submitHandler={reviewSubmit}>
        <FormInput
          name="name"
          label="User Name"
          placeholder="enter name"
        ></FormInput>
        <FormInput
          name="email"
          type="email"
          label="email"
          placeholder="enter email"
        ></FormInput>
        <Rating name="rating" label="Rating"></Rating>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </>
  );
}
