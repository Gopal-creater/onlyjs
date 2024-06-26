"use client";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { deleteBlogBySlug } from "@/lib/services/blogs.services";
import { useRouter } from "next/navigation";
import Spinner from "../ui/spinner";

const DeleteBlogBtn = ({ slug }) => {
  const router = useRouter();
  const [state, setState] = React.useState({ loading: false });
  const handleDelete = () => {
    setState({ ...state, loading: true });
    deleteBlogBySlug(slug)
      .then(() => {
        toast.success("Successfully deleted the blog");
        setState({ ...state, loading: false });
        router.push("/blogs");
      })
      .catch((err) => {
        toast.error(err || "Error deleting the blog");
        setState({ ...state, loading: false });
      });
  };
  return (
    <div>
      <Button variant="outline" onClick={handleDelete} disable={state.loading}>
        {state.loading ? <Spinner /> : "Delete"}
      </Button>
    </div>
  );
};

export default DeleteBlogBtn;
