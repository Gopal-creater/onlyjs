"use server";
import { getAllTutorials } from "@/lib/services/tutorials.services";
import React from "react";

export default async function DashboardPage() {
  await getAllTutorials();
  return <div>Dashboard Content</div>;
}
