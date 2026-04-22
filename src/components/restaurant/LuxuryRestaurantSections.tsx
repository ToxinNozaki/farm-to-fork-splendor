import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, ChefHat, Clock, ExternalLink, Leaf, MapPin, Phone, Quote, Sparkles, Star, UtensilsCrossed, Wine } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import steakImage from "@/assets/joseph-decuis-main-steak.jpg";
import diningRoomImage from "@/assets/joseph-decuis-dining-room.jpg";
import weddingFarmImage from "@/assets/joseph-decuis-wedding-farm.png";
import weddingReceptionImage from "@/assets/joseph-decuis-wedding-reception.png";
import innImage from "@/assets/joseph-decuis-inn.png";
import farmsteadImage from "@/assets/joseph-decuis-farmstead.png";

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

const innRooms = [
  { name: "The Master Suite", description: "A spacious king suite with a large private bathroom, walk-in shower and tub, separate dressing room, Victorian fainting couch, and antique dressing table." },
  { name: "Sedorah", description: "A garden-like guest room with a comfortable queen-size bed and private bathroom." },
  { name: "Happy Repose", description: "A fresh, restful room with a full-size bed and private bathroom." },
  { name: "Good Company", description: "A getaway room made for two guests, featuring twin beds and a private bathroom." },
];

const farmsteadSpaces = [
  { name: "Carriage House", description: "Home to the Decuis Suite with a private living room, wood-burning stove, two bedrooms, the panoramic Loft for meetings and receptions, and Garden Suites with a screened-in porch." },
  { name: "Farm House", description: "The restored 1884 home includes bedrooms with private baths, an 1884-style kitchen, formal dining room, sitting room, chef's kitchen, wine cellar, and root cellar massage room." },
  { name: "The Barn", description: "The farm nursery where Mangalitza pigs, chickens, rabbits, goats, turkeys, and miniature horses introduce guests to farm life and where food comes from." },
];

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_name: string;
  is_published: boolean;
  published_at: string | null;
};

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
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-primary">Spring 2026 market menu</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-foreground">Built around the farm, finished for the table.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            Open Wednesday through Saturday nights. Dietary notes: (V) vegetarian, (VG) vegan, (GF) gluten free, (DF) dairy free, with options noted on select dishes.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {menuSections.map((section) => (
            <article key={section.title} className="rounded-lg border border-border bg-background/55 p-6 backdrop-blur">
              <h3 className="font-display text-3xl text-primary">{section.title}</h3>
              <div className="mt-5 space-y-5">
                {section.items.map((item) => (
                  <div key={`${section.title}-${item.name}`} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-display text-xl text-foreground">{item.name}</p>
                      <p className="shrink-0 text-sm font-semibold text-primary">{item.price}</p>
                    </div>
                    {item.description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p> : null}
                  </div>
                ))}
              </div>
            </article>
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
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="luxury">
            <a href="https://www.yelp.com/biz/joseph-decuis-roanoke" target="_blank" rel="noreferrer">Leave a review <ExternalLink /></a>
          </Button>
          <Button asChild variant="reserve">
            <a href="https://www.yelp.com/biz/joseph-decuis-roanoke" target="_blank" rel="noreferrer">Read more reviews <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WeddingsSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-primary">Weddings & receptions</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-foreground">A farm dressed in a tuxedo.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Joseph Decuis Farm offers spectacular settings for weddings, receptions, rehearsal dinners, corporate events, charitable fundraisers, family parties, tours, farm-to-fork dinners, and chef events.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="luxury">
              <a href="tel:12606721715">Call for wedding details</a>
            </Button>
            <Button asChild variant="reserve">
              <Link to="/accommodations">Request a room</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[weddingFarmImage, weddingReceptionImage].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={index === 0 ? "Joseph Decuis Farm wedding setting" : "Joseph Decuis wedding reception setting"}
              className="aspect-[4/5] w-full rounded-lg border border-border object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReservationPolicySection() {
  return (
    <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <p className="text-sm uppercase tracking-[0.26em] text-primary">Reservation policy</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-foreground">Hours of operation.</h2>
        </div>
        <div className="grid gap-4 md:col-span-2 sm:grid-cols-2">
          <div className="luxury-panel rounded-lg border border-border p-6">
            <h3 className="font-display text-2xl text-foreground">Restaurant</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Reservations preferred. Open Wednesday through Saturday evenings with reservations available 5:00–8:00 PM.</p>
            <p className="mt-4 text-sm text-foreground">Call 260-672-1715 for reservations or inquiries.</p>
          </div>
          <div className="luxury-panel rounded-lg border border-border p-6">
            <h3 className="font-display text-2xl text-foreground">Emporium</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Open Tuesday through Saturday, 10:00 AM–5:30 PM.</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Lunch served Wednesday through Friday 10:00 AM–2:00 PM, and Saturday until 3:00 PM.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AccommodationsSection() {
  const inns = [
    {
      name: "The Inn at Joseph Decuis",
      image: innImage,
      description: "A meticulously restored 1910 home in Roanoke, within walking distance of the restaurant, with four rooms appointed in period furniture and decor.",
      href: "/inn" as const,
    },
    {
      name: "The Joseph Decuis Farmstead Inn",
      image: farmsteadImage,
      description: "A bed and breakfast six miles from the restaurant on the Wagyu farm, with a restored 1884 Farmhouse, Carriage House, Barn, six private-bath bedrooms, a loft, and private dining.",
      href: "/farmstead" as const,
    },
  ];

  return (
    <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-primary">Overnight accommodations</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-foreground">Stay close to the table.</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Extend the Joseph Decuis experience with two intimate inns: one downtown near the restaurant, and one on the farm where the Wagyu story begins.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <p className="flex items-center gap-3"><Phone className="size-5 text-primary" /> Book by calling (260) 672-1715</p>
              <p className="flex items-center gap-3"><Sparkles className="size-5 text-primary" /> Rooms from $200 per night</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {inns.map((inn) => (
              <article key={inn.name} className="overflow-hidden rounded-lg border border-border bg-background/55">
                <img src={inn.image} alt={inn.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground">{inn.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{inn.description}</p>
                  <Button asChild variant="reserve" className="mt-5">
                    <Link to={inn.href}>View inn <ArrowRight /></Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function InnPageContent() {
  return (
    <>
      <PageIntro eyebrow="The Inn at Joseph Decuis" title="A restored Main Street inn steps from dinner." description="With four beautifully appointed guest rooms, a relaxing atmosphere, and breakfast, the Inn is ideal for romantic getaways and out-of-town guests dining at Joseph Decuis." />
      <LodgingDetailSection image={innImage} imageAlt="The Inn at Joseph Decuis guest room" heading="Grandma's charm, preserved with modern comfort." body="Perched on the hillside of tree-lined Main Street, the 1912 Inn offers the slower pace of an earlier Roanoke, complete with a broad veranda, wicker furniture, hardwood floors, impressive moldings, antiques, and period furniture." items={innRooms} />
      <ReservationPanel />
    </>
  );
}

export function FarmsteadPageContent() {
  return (
    <>
      <PageIntro eyebrow="Farmstead Inn" title="Overnight on the farm in an authentic 1884 setting." description="The Joseph Decuis Farmstead Inn includes a restored Farm House, Carriage House, Barn, six bedrooms with private baths, a meeting Loft, and private dining space." />
      <LodgingDetailSection image={farmsteadImage} imageAlt="Joseph Decuis Farmstead Inn" heading="A rural getaway six miles from the restaurant." body="A quiet getaway, corporate retreat, or wedding party stay can become a full farm experience: fine dining, world-class overnight comfort, farm chores, Wagyu cattle, gardening, animal husbandry, Percheron horses, and beautiful farm grounds." items={farmsteadSpaces} />
      <ReservationPanel />
    </>
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
      <ExperienceSection />
      <ReviewsSection />
      <ReservationPolicySection />
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

export function WeddingsPageContent() {
  return (
    <>
      <PageIntro eyebrow="Weddings" title="Weddings, receptions, and private celebrations at Joseph Decuis." description="The Joseph Decuis Farm setting brings a refined farm-to-fork sense of occasion to ceremonies, receptions, rehearsal dinners, and private events." />
      <WeddingsSection />
      <ReservationPanel />
    </>
  );
}

export function AccommodationsPageContent() {
  return (
    <>
      <PageIntro eyebrow="Accommodations" title="Overnight stays at Joseph Decuis." description="Choose the downtown Inn at Joseph Decuis or the Farmstead Inn on the Wagyu farm for a refined overnight extension of dinner in Roanoke." />
      <AccommodationsSection />
      <ReservationPanel />
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

export function BlogPageContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("id,title,slug,excerpt,content,author_name,is_published,published_at")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .then(({ data }) => setPosts(data ?? []));
  }, []);

  return (
    <>
      <PageIntro eyebrow="Blog" title="Stories from the farm, table, and inns." description="Joseph Decuis is more than a restaurant: fine dining, the farm that supplies it, bed and breakfasts, the Emporium, and a team working together to create the full experience." />
      <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <blockquote className="max-w-4xl border-l border-primary pl-6 text-xl leading-9 text-foreground">
            “I am proud to have such a talented team of employees working together to create the synergy that is Joseph Decuis. It takes many to tell our story and I hope you enjoy our blog.”
            <span className="mt-4 block text-sm text-primary">Alice Eshelman, Proprietor</span>
          </blockquote>
          <div className="mt-10 flex justify-end">
            <Button asChild variant="reserve"><Link to="/blog/manage">Owner blog login <ArrowRight /></Link></Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="luxury-panel rounded-lg border border-border p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">{post.author_name}</p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-foreground">{post.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <p className="mt-5 text-sm leading-6 text-foreground">{post.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BlogManagerPageContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [message, setMessage] = useState("Sign in as an owner to create and edit blog posts.");
  const [form, setForm] = useState({ title: "", excerpt: "", content: "", author_name: "Joseph Decuis", is_published: true });

  const loadPosts = () => {
    supabase
      .from("blog_posts")
      .select("id,title,slug,excerpt,content,author_name,is_published,published_at")
      .order("created_at", { ascending: false })
      .then(({ data }) => setPosts(data ?? []));
  };

  useEffect(loadPosts, []);

  const createPost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const slug = form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const { error } = await supabase.from("blog_posts").insert({ ...form, slug, published_at: form.is_published ? new Date().toISOString() : null });
    if (error) {
      setMessage("Please sign in with an owner account before publishing.");
      return;
    }
    setForm({ title: "", excerpt: "", content: "", author_name: "Joseph Decuis", is_published: true });
    setMessage("Blog post saved.");
    loadPosts();
  };

  return (
    <>
      <PageIntro eyebrow="Blog manager" title="Write Joseph Decuis blog posts." description="Owners can publish stories about the restaurant, farm, accommodations, Emporium, events, and seasonal experiences." />
      <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={createPost} className="luxury-panel rounded-lg border border-border p-6">
            <p className="text-sm text-primary">{message}</p>
            <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="mt-5 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground" placeholder="Post title" required />
            <input value={form.author_name} onChange={(event) => setForm({ ...form, author_name: event.target.value })} className="mt-4 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground" placeholder="Author name" required />
            <textarea value={form.excerpt} onChange={(event) => setForm({ ...form, excerpt: event.target.value })} className="mt-4 min-h-24 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground" placeholder="Short excerpt" required />
            <textarea value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} className="mt-4 min-h-48 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground" placeholder="Blog content" required />
            <label className="mt-4 flex items-center gap-3 text-sm text-muted-foreground"><input type="checkbox" checked={form.is_published} onChange={(event) => setForm({ ...form, is_published: event.target.checked })} /> Publish now</label>
            <Button type="submit" variant="luxury" className="mt-6">Save post</Button>
          </form>
          <div className="grid gap-4">
            {posts.map((post) => (
              <article key={post.id} className="rounded-lg border border-border bg-background/55 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">{post.is_published ? "Published" : "Draft"}</p>
                <h2 className="mt-3 font-display text-2xl text-foreground">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ReservePageContent() {
  return (
    <>
      <PageIntro eyebrow="Reserve" title="Book a table for Joseph Decuis." description="Dinner is served Wednesday through Saturday from 5–7:30 PM. Reserve early for the best availability." />
      <ReservationPolicySection />
      <ReservationPanel />
    </>
  );
}

function LodgingDetailSection({ image, imageAlt, heading, body, items }: { image: string; imageAlt: string; heading: string; body: string; items: { name: string; description: string }[] }) {
  return (
    <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="overflow-hidden rounded-lg border border-border">
          <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="font-display text-5xl leading-tight text-foreground">{heading}</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">{body}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <p className="flex items-center gap-3 text-sm text-muted-foreground"><Phone className="size-5 text-primary" /> Book by calling (260) 672-1715</p>
            <p className="flex items-center gap-3 text-sm text-muted-foreground"><Sparkles className="size-5 text-primary" /> $200 per night · Joseph Decuis Suite $500</p>
          </div>
          <div className="mt-10 grid gap-4">
            {items.map((item) => (
              <article key={item.name} className="rounded-lg border border-border bg-background/55 p-6">
                <h3 className="font-display text-2xl text-primary">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
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
