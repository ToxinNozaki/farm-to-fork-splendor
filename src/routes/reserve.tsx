import { createFileRoute } from "@tanstack/react-router";

import { ReservePageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve | Joseph Decuis Roanoke" },
      { name: "description", content: "Reserve a table at Joseph Decuis. Dinner is served Wednesday through Saturday from 5–7:30 PM at 191 N Main St, Roanoke, Indiana." },
      { property: "og:title", content: "Reserve | Joseph Decuis Roanoke" },
      { property: "og:description", content: "Book an intimate Wagyu and seasonal American dinner at Joseph Decuis." },
    ],
  }),
  component: ReservePageContent,
});
