import { createFileRoute } from "@tanstack/react-router";

import { BlogManagerPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/blog/manage")({
  head: () => ({
    meta: [
      { title: "Manage Blog | Joseph Decuis" },
      { name: "description", content: "Owner publishing area for creating and managing Joseph Decuis blog posts." },
      { property: "og:title", content: "Manage Blog | Joseph Decuis" },
      { property: "og:description", content: "Owner publishing area for Joseph Decuis blog stories." },
    ],
  }),
  component: BlogManagerPageContent,
});