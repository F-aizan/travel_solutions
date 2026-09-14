import type { Metadata } from "next";
import PlannerForm from "./PlannerForm";

export const metadata: Metadata = {
  title: "Plan Your Kashmir Trip",
  description:
    "Plan your perfect Kashmir trip with Royal Journey Tours Kashmir.",
  alternates: {
    canonical: "/planner",
  },
};

export default function PlannerPage() {
  return <PlannerForm />;
}