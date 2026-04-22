import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/joseph-decuis-main-steak.jpg";
import { HomePageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Decuis | Luxury Wagyu Dining in Roanoke" },
      {
        name: "description",
        content:
          "Reserve Joseph Decuis for farm-raised Wagyu steaks, candlelit ambience, and upscale American dining in Roanoke, Indiana.",
      },
      { property: "og:title", content: "Joseph Decuis | Luxury Wagyu Dining in Roanoke" },
      {
        property: "og:description",
        content: "A refined local restaurant experience with farm Wagyu, seasonal entrées, and intimate service.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePageContent />;
}
