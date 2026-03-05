import { redirect } from "next/navigation";
import React from "react";

export default function notFound() {
  redirect("/contact-us");
  // return <div>"not-Found"</div>;
}
