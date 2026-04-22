import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, ChefHat, Clock, Leaf, MapPin, Phone, Quote, Sparkles, Star, UtensilsCrossed, Wine } from "lucide-react";

import { Button } from "@/components/ui/button";
import steakImage from "@/assets/joseph-decuis-real-steak.jpg";
import diningRoomImage from "@/assets/joseph-decuis-dining-room.jpg";
import weddingFarmImage from "@/assets/joseph-decuis-wedding-farm.png";
import weddingReceptionImage from "@/assets/joseph-decuis-wedding-reception.png";

const highlights = [
  { icon: Leaf, label: "Farm-raised Wagyu", detail: "Sourced from the Joseph Decuis farm" },
  { icon: Wine, label: "Candlelit dining", detail: "Intimate tables, refined service, warm ambience" },
  { icon: ChefHat, label: "Seasonal American", detail: "Elegant entrées built around peak ingredients" },
];

const menuSections = [
  {
    title: "Appetizers",
    items: [
      { name: "Focaccia", price: "$8", description: "Wagyu tallow candle (V)" },
      { name: "Wagyu Tartar", price: "$30", description: "Gaufrettes, quail egg (GF)(DF)" },
      { name: "Hummus Board", price: "$12", description: "Olives, feta, chili oil, house sourdough crackers (V)(GFO)" },
      { name: "Oysters Bienville (3)", price: "$18", description: "Blue Points, shrimp, mushrooms, cream, Parmesan" },
      { name: "Charcuterie Board", price: "$26", description: "House cured Wagyu & Mangalitsa sausages, assorted cheeses and accompaniments (GFO)" },
    ],
  },
  {
    title: "Soups & Salads",
    items: [
      { name: "Carrot Ginger Bisque", price: "$12", description: "Goat cheese cream, focaccia croutons (V)(GFO)" },
      { name: "Lovely Salad", price: "$12", description: "Mixed greens, goat cheese, Marcona almonds, raspberry vinaigrette (V)(GF)(VGO)" },
      { name: "Seafood Gumbo", price: "$16", description: "A Joseph Decuis classic: shrimp, crab, peppers, onion, tomato, okra, rice & scallions" },
      { name: "Farm Kale Salad", price: "$12", description: "Warm bacon dressing, chickpeas, candied pecans, Parmesan (GF)(DFO)" },
      { name: "Farm Salad", price: "$10", description: "Mixed greens, carrots, radish, apple cider vinaigrette (GF)(VG)" },
    ],
  },
  {
    title: "Entrées",
    items: [
      { name: "100% Full Blood Wagyu Steaks", price: "$MKT", description: "Robuchon potatoes, seasonal vegetables (GF). Price determined by cut." },
      { name: "Wagyu Flank Involtini", price: "$65", description: "Panko, currants, sunflower seeds, marinara sauce, fried polenta, broccoli rabe" },
      { name: "Herbed Fettuccine Primavera", price: "$24", description: "Seasonal vegetables, pesto butter sauce (V)" },
      { name: "North Atlantic Salmon", price: "$40", description: "Lemon caper butter sauce, spring pea risotto (GF)" },
      { name: "Grilled Lamb Pops", price: "$45", description: "Chimichurri, creamy polenta, confit tomatoes, goat cheese salad (GFO)" },
      { name: "Coq au Vin", price: "$38", description: "Hoffman farm chicken leg quarter, rich gravy, Robuchon potatoes, carrots, mushrooms (GFO)" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Chocolate Bourbon Pecan Cake", price: "$12", description: "Flourless chocolate cake, crème anglaise, whipped cream (GF)" },
      { name: "Orange Dreamcicle Crème Brûlée", price: "$12", description: "(V)(GF)" },
      { name: "Seasonal Sorbet", price: "$8", description: "(VG)(GF)" },
      { name: "Bananas Foster", price: "$12", description: "Vanilla ice cream (V)(GF)" },
    ],
  },
  {
    title: "Ports",
    items: [
      { name: "Blandys Madeira 5 Year", price: "$8", description: "" },
      { name: "Ramos Pinto LBV 2012", price: "$20", description: "" },
      { name: "Ramos Pinto 10 Year Tawny", price: "$11", description: "" },
      { name: "Ramos Pinto 20 Year Tawny", price: "$18", description: "" },
      { name: "Quinta do Tedo", price: "$10", description: "" },
      { name: "Quinta do Tedo Reserve", price: "$16", description: "" },
      { name: "Sandemans Founders Reserve Ruby", price: "$10", description: "" },
      { name: "Sandeman 30 Year", price: "$29", description: "" },
      { name: "Sandeman 40 Year", price: "$42", description: "" },
      { name: "Zinfandel", price: "$9", description: "" },
    ],
  },
  {
    title: "Espresso & Coffee",
    items: [
      { name: "Espresso Martini", price: "$13", description: "" },
      { name: "Joseph Decuis Signature Blend Coffee", price: "$2.50", description: "" },
    ],
  },
];

const reviews = [
  "The atmosphere is nice with dim lighting, candles on each table, and warm decor.",
  "People like me have no problem paying for a quality dining experience.",
  "This is my all-time favorite restaurant; spectacular food, service and ambience.",
];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100vh-73px)] overflow-hidden">
      <img
        src={steakImage}
        alt="Plated Joseph Decuis steak with sauce and seasonal garnish"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        width={234}
        height={314}
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="candle-flicker absolute left-1/4 top-24 -z-10 h-48 w-48 rounded-full bg-candle/20 blur-3xl" />
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-card/55 px-3 py-2 backdrop-blur">
              <Star className="size-4 text-primary" /> 4.4 · 361 reviews
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-card/55 px-3 py-2 backdrop-blur">
              <Sparkles className="size-4 text-primary" /> $90–100 · Upscale American
            </span>
          </div>
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Farm-raised Wagyu · Roanoke, Indiana</p>
          <h1 className="font-display text-6xl leading-[0.94] text-balance text-foreground md:text-8xl">
            Joseph Decuis
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            A rare local destination for candlelit American fine dining, seasonal farm cuisine, and Wagyu steaks raised with obsessive care.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="luxury" size="xl">
              <Link to="/reserve">Reserve a table <CalendarCheck /></Link>
            </Button>
            <Button asChild variant="reserve" size="xl">
              <Link to="/menu">View the menu <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className="luxury-panel rounded-lg border border-border p-6 transition-transform duration-300 hover:-translate-y-1">
              <item.icon className="size-7 text-primary" />
              <h2 className="mt-5 font-display text-2xl text-foreground">{item.label}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MenuPreviewSection() {
  return (
    <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-primary">Menu highlights</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-foreground">Built around the farm, finished for the table.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            The experience centers on Joseph Decuis Farm Wagyu, seasonal entrées, and polished starters designed for guests ready to celebrate.
          </p>
          <Button asChild variant="luxury" className="mt-8">
            <Link to="/menu">Explore menu</Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {signatureDishes.map((dish, index) => (
            <div key={dish} className="rounded-lg border border-border bg-background/55 p-5 backdrop-blur transition-colors hover:border-primary/60">
              <p className="text-xs text-primary">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-xl text-foreground">{dish}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg border border-border">
          <img
            src={diningRoomImage}
            alt="Joseph Decuis dining room with warm lighting and white tablecloths"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
            width={170}
            height={127}
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-primary">The room</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-foreground">Warm decor, dim light, and a dinner worth planning around.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            For anniversaries, client dinners, and destination evenings, Joseph Decuis turns a historic Main Street address into a memorable luxury ritual.
          </p>
          <div className="mt-8 h-px w-full gold-line" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-display text-3xl text-primary">Wed–Sat</p>
              <p className="mt-1 text-sm text-muted-foreground">Dinner service · 5–7:30 PM</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">$90–100</p>
              <p className="mt-1 text-sm text-muted-foreground">Typical guest spend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-primary">Guest sentiment</p>
            <h2 className="mt-4 font-display text-5xl text-foreground">A reputation for ambience and occasion.</h2>
          </div>
          <div className="flex items-center gap-2 text-primary">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.4 / 5</span>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review} className="luxury-panel rounded-lg border border-border p-6">
              <Quote className="size-6 text-primary" />
              <p className="mt-5 text-lg leading-8 text-foreground">“{review}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReservationPanel() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-border luxury-panel lg:grid-cols-[1fr_0.9fr]">
        <div className="p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.26em] text-primary">Reserve</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-foreground">Make dinner the event.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Dinner service is intentionally limited. Reserve ahead for Wagyu, seasonal entrées, and an elevated night in Roanoke.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <p className="flex items-center gap-3"><MapPin className="size-5 text-primary" /> 191 N Main St, Roanoke, IN</p>
            <p className="flex items-center gap-3"><Phone className="size-5 text-primary" /> (260) 672-1715</p>
            <p className="flex items-center gap-3"><Clock className="size-5 text-primary" /> Wed–Sat · 5–7:30 PM</p>
            <p className="flex items-center gap-3"><UtensilsCrossed className="size-5 text-primary" /> Dine-in · Takeout</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="luxury" size="xl">
              <a href="https://www.opentable.com/" target="_blank" rel="noreferrer">Find a table</a>
            </Button>
            <Button asChild variant="reserve" size="xl">
              <a href="tel:12606721715">Call now</a>
            </Button>
          </div>
        </div>
        <div className="min-h-80 bg-[image:var(--gradient-gold)] p-8 md:p-12">
          <div className="flex h-full flex-col justify-between rounded-lg border border-primary-foreground/25 bg-background/28 p-6 backdrop-blur">
            <p className="font-display text-4xl leading-tight text-foreground">Wagyu, candlelight, and Indiana hospitality.</p>
            <p className="mt-10 text-sm leading-6 text-muted-foreground">Closed Sunday, Monday, and Tuesday. Wednesday through Saturday reservations are recommended.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <MenuPreviewSection />
      <ExperienceSection />
      <ReviewsSection />
      <ReservationPanel />
    </>
  );
}

export function MenuPageContent() {
  return (
    <>
      <PageIntro eyebrow="Menu" title="Farm Wagyu and seasonal American cooking." description="A premium menu designed for decisive reservations, celebratory tables, and guests who value sourcing as much as service." />
      <MenuPreviewSection />
      <ReservationPanel />
    </>
  );
}

export function StoryPageContent() {
  return (
    <>
      <PageIntro eyebrow="Story" title="A Main Street dining room with its own farm behind the flavor." description="Joseph Decuis feels local and rare at once: Roanoke warmth, estate-raised Wagyu, and refined seasonal cooking built for memorable evenings." />
      <ExperienceSection />
      <HighlightsSection />
    </>
  );
}

export function ReviewsPageContent() {
  return (
    <>
      <PageIntro eyebrow="Reviews" title="Guests remember the ambience, service, and sense of occasion." description="The restaurant's strongest sales message is the guest experience: warm decor, candlelit tables, quality dining, and spectacular food." />
      <ReviewsSection />
      <ReservationPanel />
    </>
  );
}

export function ReservePageContent() {
  return (
    <>
      <PageIntro eyebrow="Reserve" title="Book a table for Joseph Decuis." description="Dinner is served Wednesday through Saturday from 5–7:30 PM. Reserve early for the best availability." />
      <ReservationPanel />
    </>
  );
}

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl reveal-up">
        <p className="text-sm uppercase tracking-[0.26em] text-primary">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl leading-tight text-balance text-foreground md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
