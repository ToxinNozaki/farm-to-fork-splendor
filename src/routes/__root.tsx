import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { MapPin, Phone, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl text-primary">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-foreground">This table is no longer set</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild variant="luxury" className="mt-6">
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Joseph Decuis | Luxury Wagyu Dining in Roanoke" },
      {
        name: "description",
        content:
          "Reserve an intimate farm-to-table dinner at Joseph Decuis, Roanoke's luxurious American restaurant for Wagyu steaks and seasonal cuisine.",
      },
      { name: "author", content: "Joseph Decuis" },
      { property: "og:title", content: "Joseph Decuis | Luxury Wagyu Dining in Roanoke" },
      {
        property: "og:description",
        content: "Upscale American dining, farm-raised Wagyu, candlelit service, and seasonal tasting experiences in Roanoke, Indiana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Joseph Decuis | Luxury Wagyu Dining in Roanoke" },
      { name: "description", content: "Decuis Digital Experience is a luxurious website designed to attract new customers and increase sales for an upscale American restaurant." },
      { property: "og:description", content: "Decuis Digital Experience is a luxurious website designed to attract new customers and increase sales for an upscale American restaurant." },
      { name: "twitter:description", content: "Decuis Digital Experience is a luxurious website designed to attract new customers and increase sales for an upscale American restaurant." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b5bf71b-a33d-4bb0-a4aa-d87ab723d687/id-preview-78a10a3b--c41ae884-62ef-452d-885f-aa22117882f8.lovable.app-1776817136119.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b5bf71b-a33d-4bb0-a4aa-d87ab723d687/id-preview-78a10a3b--c41ae884-62ef-452d-885f-aa22117882f8.lovable.app-1776817136119.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  const navItems = [
    { to: "/" as const, label: "Home" },
    { to: "/menu" as const, label: "Menu" },
    { to: "/story" as const, label: "Story" },
    { to: "/reviews" as const, label: "Reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-secondary font-display text-lg text-primary transition-transform group-hover:-translate-y-0.5">
            JD
          </span>
          <span className="min-w-0">
            <span className="block font-display text-xl leading-none text-foreground">Joseph Decuis</span>
            <span className="block truncate text-xs text-muted-foreground">Roanoke, Indiana</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="luxury" size="sm">
          <Link to="/reserve">Reserve</Link>
        </Button>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-3xl text-foreground">Joseph Decuis</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Upscale American dining with farm-raised Wagyu, seasonal entrées, and a candlelit sense of occasion.
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-2 text-foreground"><MapPin className="size-4 text-primary" /> 191 N Main St, Roanoke, IN</p>
          <p className="flex items-center gap-2 text-foreground"><Phone className="size-4 text-primary" /> (260) 672-1715</p>
          <p className="flex items-center gap-2"><Star className="size-4 text-primary" /> 4.4 from 361 guest reviews</p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="text-foreground">Dinner Hours</p>
          <p>Wednesday–Saturday · 5–7:30 PM</p>
          <p>Closed Sunday–Tuesday</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
