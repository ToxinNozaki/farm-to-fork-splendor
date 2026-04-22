import { createFileRoute } from "@tanstack/react-router";

import { InnPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/inn")({
  head: () => ({
    meta: [
      { title: "The Inn | Joseph Decuis Accommodations" },
      { name: "description", content: "Stay at The Inn at Joseph Decuis, a restored Main Street inn with four guest rooms near the restaurant in Roanoke, Indiana." },
      { property: "og:title", content: "The Inn | Joseph Decuis Accommodations" },
      { property: "og:description", content: "A restored 1912 Main Street inn with four guest rooms, breakfast, antiques, and period charm steps from Joseph Decuis." },
    ],
  }),
  component: InnPageContent,
});