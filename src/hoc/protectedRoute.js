"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cookie from "js-cookie";
import { getMeAction } from "@/redux/actions/authActions";
import { toast } from "react-toastify";
import TutorialCardSkeleton from "@/components/tutorialCard/tutorialCardSkeleton";

const ProtectedRoute = ({ children }) => {
  const token = cookie.get("onlyjs-jwt");
  const profile = useSelector((state) => state?.auth?.profile);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/signin");
      toast.error("User not logged in!!");
    } else if (!profile?.data) {
      dispatch(getMeAction(router));
    }
  }, []);

  if (profile?.loading) {
    return <TutorialCardSkeleton />;
  }

  return children;
};

export default ProtectedRoute;
