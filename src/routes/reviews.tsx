import { createFileRoute } from "@tanstack/react-router";

import { ReviewsPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Joseph Decuis Guest Experience" },
      { name: "description", content: "Read why guests praise Joseph Decuis for dim lighting, warm decor, spectacular food, polished service, and luxury ambience." },
      { property: "og:title", content: "Reviews | Joseph Decuis Guest Experience" },
      { property: "og:description", content: "Guest praise for ambience, service, and quality dining at Joseph Decuis in Roanoke." },
    ],
  }),
  component: ReviewsPageContent,
});
