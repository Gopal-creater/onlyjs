import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TutorialCard({ tutorial }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{tutorial.category}</CardTitle>
        <CardDescription>{tutorial.title}</CardDescription>
      </CardHeader>
      <CardContent>{tutorial.description}</CardContent>
      <CardFooter className="flex justify-center">
        {tutorial.createdAt}
      </CardFooter>
    </Card>
  );
}
