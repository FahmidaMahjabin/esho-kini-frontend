"use client";
import { Button, Flex, message } from "antd";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/service/service.store";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/loginSchema";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import loginImg from "@/assets/images/Login-pana.png";
type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [login, { data, isSuccess, isError, error }] = useLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await login({ ...data }).unwrap();
      console.log("res from login:", res);
      if (res?.data?.accessToken) {
        router.push("/home");
        message.success("User logged in successfully!");
        storeUserInfo({ accessToken: res?.accessToken });
      }
      console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Flex justify="space-around" align="center">
      <div>
        <Image src={loginImg} alt="login" height={500} width={500}></Image>
      </div>

      <div>
        <h1 style={{ alignContent: "center" }}>Login your account</h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput name="email" type="email" size="large" label="Email" />
            </div>
            <div style={{ marginTop: "10px" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            {/* <Button type="primary" htmlType="submit">
              Login
            </Button> */}
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#ad4e00", marginTop: "10px" }}
            >
              Login
            </Button>
          </Form>
          <p style={{ marginTop: "10px" }}>
            Need Account ? <Link href="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </Flex>
  );
};

export default LoginPage;
