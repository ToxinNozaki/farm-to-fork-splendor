import { createFileRoute } from "@tanstack/react-router";

import { FarmsteadPageContent } from "@/components/restaurant/LuxuryRestaurantSections";

export const Route = createFileRoute("/farmstead")({
  head: () => ({
    meta: [
      { title: "Farmstead Inn | Joseph Decuis Accommodations" },
      { name: "description", content: "Stay at the Joseph Decuis Farmstead Inn, a restored 1884 farm property with guest rooms, private dining, and farm experiences." },
      { property: "og:title", content: "Farmstead Inn | Joseph Decuis Accommodations" },
      { property: "og:description", content: "An authentic 1884 farm stay with a restored Farm House, Carriage House, Barn, private baths, and farm experiences." },
    ],
  }),
  component: FarmsteadPageContent,
});