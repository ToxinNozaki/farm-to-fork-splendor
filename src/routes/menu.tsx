import { createFileRoute } from "@tanstack/react-router";

import { MenuPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Joseph Decuis Wagyu & Seasonal Dining" },
      { name: "description", content: "Explore Joseph Decuis menu highlights including farm Wagyu steaks, tartare, charcuterie, scallops, bone marrow, and seasonal entrées." },
      { property: "og:title", content: "Menu | Joseph Decuis Wagyu & Seasonal Dining" },
      { property: "og:description", content: "Farm-raised Wagyu, polished starters, and seasonal American dishes for a luxurious Roanoke dinner." },
    ],
  }),
  component: MenuPageContent,
});
