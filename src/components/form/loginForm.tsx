"use client";

import * as React from "react";

import { useForm } from "react-hook-form";
// import { SignupFormInputs } from './SignUpForm';
import { useAppDispatch } from "@/redux/hooks";
import { loginUser } from "@/redux/api/user/userSlice";
import FormInput from "./FormInput";
import Form from "./Form";
import { Button, Input } from "antd";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;
type SignupFormInputs = {
  email: string;
  password: string;
};
export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { register } = useForm<SignupFormInputs>();
  async function onSubmit(data: SignupFormInputs) {
    dispatch(loginUser({ email: data.email, password: data.password }));
  }

  return (
    <div>
      <Form submitHandler={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <FormInput
              name="email"
              placeholder="name@example.com"
              type="email"
              label="Email"
            />
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              disabled={isLoading}
              {...register("password", { required: "password is required" })}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <p>loading</p>}
            Login with Email
          </Button>
        </div>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button type="default" disabled={isLoading}>
        {isLoading ? <p>loading</p> : <p>GitHub</p>}
      </Button>
    </div>
  );
}
