import ProtectedRoute from "@/hoc/protectedRoute";
import React from "react";

export default function DashboardPage() {
  return <ProtectedRoute>Secret DashboardPage</ProtectedRoute>;
}
