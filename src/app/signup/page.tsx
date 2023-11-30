"use client";
import { Button, Flex, message } from "antd";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation, useSignupMutation } from "@/redux/api/authApi";
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

const SignupPage = () => {
  const [signup, { data, isSuccess, isError, error }] = useSignupMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log("data from signup submit:", data);
      const res = await signup({ ...data, role: "user" }).unwrap();
      if (res) {
        router.push("/login");
        message.success("User created  successfully!");
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
        <h1 style={{ alignContent: "center" }}>SignUp your account</h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="userName"
                type="text"
                size="large"
                label="User Name"
              />
            </div>
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
              Sign Up
            </Button>
          </Form>
          <p style={{ marginTop: "10px" }}>
            have Account ? <Link href="/login">Log in</Link>
          </p>
        </div>
      </div>
    </Flex>
  );
};

export default SignupPage;
