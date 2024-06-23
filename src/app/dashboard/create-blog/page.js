"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { toast } from "react-toastify";
import { Textarea } from "@/components/ui/textarea";
import topicServices from "@/lib/services/topic.services";
import QuillEditor from "@/components/quillEditor/quilEditor";

export default function page() {
  const [state, setState] = React.useState({
    blog: "",
  });

  const form = useForm({
    resolver: zodResolver(
      z.object({
        title: z.string(),
        description: z.string(),
        tutorial: z.string(),
      })
    ),
  });

  const { isSubmitting } = useFormState({
    control: form.control,
  });

  const handleBlogSubmit = async (data) => {
    if (!state.blog.trim()) {
      return toast.error("Blog content is required");
    }

    try {
      await topicServices.createTopic({ ...data, blog: state.blog });
      toast.success("Successfully created the blog.");
      setState({ blog: "" });
    } catch (err) {
      toast.error(`${err?.message}` || "Error creating blog.");
    }
  };

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Create - Blog
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleBlogSubmit)}
          className="w-ful space-y-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Type your title here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your description here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tutorial"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tutorial Slug</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type here tutorial slug here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="blog"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog</FormLabel>
                <FormControl>
                  <QuillEditor
                    value={state.blog}
                    onChange={(newVal) => setState({ ...state, blog: newVal })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
