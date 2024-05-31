"use client";
import React, { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Spinner from "@/components/ui/spinner";
import { useSelector, useDispatch } from "react-redux";
import { signInAction } from "@/redux/actions/authActions";
import { signInFormSchema } from "../../signInFormSchema";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const auth = useSelector((state) => state?.auth?.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  const handleSignIn = useCallback(
    (values) => {
      dispatch(signInAction(values, router));
    },
    [dispatch, router]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="lorem@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Link href="#!" className="text-blue-500">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full" disabled={auth.loading}>
          {auth.loading ? <Spinner /> : "Submit"}
        </Button>

        <div className="text-center">
          <p>
            Not a member?{" "}
            <Link href="#!" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
