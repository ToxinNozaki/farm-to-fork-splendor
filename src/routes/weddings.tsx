import { createFileRoute } from "@tanstack/react-router";

import { WeddingsPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings | Joseph Decuis Farm Receptions" },
      { name: "description", content: "Host weddings, receptions, rehearsal dinners, private parties, and farm-to-fork events at Joseph Decuis Farm in Roanoke, Indiana." },
      { property: "og:title", content: "Weddings | Joseph Decuis Farm Receptions" },
      { property: "og:description", content: "A refined farm setting for weddings, receptions, rehearsal dinners, corporate events, and private celebrations." },
    ],
  }),
  component: WeddingsPageContent,
});