"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
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
import { signInFormSchema } from "../../signInFormSchema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "@/lib/services/auth.services";

export default function SignInForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(signInFormSchema),
  });
  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const handleSignIn = async (data) => {
    try {
      const res = await signIn(data);
      router.push("/dashboard");
    } catch (err) {
      console.log("Error", err);
      toast.error(err?.message);
    }
  };

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

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Submit"}
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
