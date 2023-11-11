import { Rate } from "antd";
import React, { useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
type IRating = {
  name: string;
  label: string;
};
export default function Rating({ name, label }: IRating) {
  const [rate, setRate] = useState<number>(2.5);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log("rate:", rate);
  return (
    <>
      <div>{label ? label : null}</div>
      <Controller
        control={control}
        name={name}
        render={(field) => (
          <Rate allowHalf {...field} value={rate} onChange={setRate} />
        )}
      ></Controller>
    </>
  );
}
