import { createFileRoute } from "@tanstack/react-router";

import { BlogPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Joseph Decuis Stories" },
      { name: "description", content: "Read Joseph Decuis stories from the restaurant, farm, bed and breakfasts, Emporium, and farm-to-fork experiences." },
      { property: "og:title", content: "Blog | Joseph Decuis Stories" },
      { property: "og:description", content: "Stories from Joseph Decuis across fine dining, the farm, accommodations, the Emporium, and seasonal experiences." },
    ],
  }),
  component: BlogPageContent,
});