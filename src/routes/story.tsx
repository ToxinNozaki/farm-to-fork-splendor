import { createFileRoute } from "@tanstack/react-router";

import { StoryPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Story | Joseph Decuis Farm-to-Table Restaurant" },
      { name: "description", content: "Discover Joseph Decuis, an upscale American restaurant in Roanoke, Indiana known for farm-raised Wagyu and candlelit hospitality." },
      { property: "og:title", content: "Story | Joseph Decuis Farm-to-Table Restaurant" },
      { property: "og:description", content: "Roanoke warmth, estate-raised Wagyu, and refined seasonal cooking in a historic Main Street dining room." },
    ],
  }),
  component: StoryPageContent,
});
