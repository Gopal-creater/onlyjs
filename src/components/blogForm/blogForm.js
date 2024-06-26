"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import QuillEditor from "@/components/quillEditor/quilEditor";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
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
import { Input } from "@/components/ui/input";

const BlogForm = ({ handleBlogSubmit, defaultVal }) => {
  const form = useForm({
    defaultValues: defaultVal || "",
    resolver: zodResolver(
      z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        keywords: z.string(),
        blog: z.string(),
      })
    ),
  });

  const { isSubmitting } = useFormState({
    control: form.control,
  });
  return (
    <div>
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a tech stack" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      <SelectGroup>
                        <SelectLabel>Tech Stack</SelectLabel>
                        <SelectItem value="Mobile Development">
                          Mobile Development
                        </SelectItem>
                        <SelectItem value="Frontend Development">
                          Frontend Development
                        </SelectItem>
                        <SelectItem value="Backend Development">
                          Backend Development
                        </SelectItem>
                        <SelectItem value="Serverless Development">
                          Serverless Development
                        </SelectItem>
                        <SelectItem value="Game Development">
                          Game Development
                        </SelectItem>
                        <SelectItem value="Internet Of Things">
                          Internet Of Things
                        </SelectItem>
                        <SelectItem value="Data Science and Machine Learning">
                          Data Science and Machine Learning
                        </SelectItem>
                        <SelectItem value="Automation and Scripting">
                          Automation and Scripting
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keywords [ Note : Comma seperated]</FormLabel>
                <FormControl>
                  <Input placeholder="Type here keywords here..." {...field} />
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
                    value={field.value}
                    onChange={(newVal) => {
                      // setState({ ...state, blog: newVal });
                      field.onChange(newVal);
                    }}
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
};

export default BlogForm;
