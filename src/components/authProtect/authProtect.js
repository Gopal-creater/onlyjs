import React from "react";
import { redirect } from "next/navigation";

export default async function AuthProtect({ children }) {
  if (!session) {
    return redirect("/unauthorized");
  }
  return <>{children}</>;
}
