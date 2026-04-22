import { createFileRoute } from "@tanstack/react-router";

import { AccommodationsPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/accommodations")({
  head: () => ({
    meta: [
      { title: "Accommodations | Joseph Decuis Inns" },
      { name: "description", content: "Stay overnight at Joseph Decuis with the downtown Inn at Joseph Decuis or the Farmstead Inn on the Wagyu farm near Roanoke, Indiana." },
      { property: "og:title", content: "Accommodations | Joseph Decuis Inns" },
      { property: "og:description", content: "Book overnight accommodations at Joseph Decuis, from the restored downtown inn to the Farmstead Inn on the Wagyu farm." },
    ],
  }),
  component: AccommodationsPageContent,
});