"use client";

import * as React from "react";
import Link from "next/link";
import * as AppMenuPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { RimuFestLogo } from "./RimufestLogo";

const navigationLinks = [
  { label: "About", href: "/about", image: "about" },
  { label: "Gallery", href: "/gallery", image: "gallery" },
  // {
  //   label: "Holiday Programme 2025",
  //   href: "/holiday-programme",
  //   image: "holiday-programme",
  // },
  {
    label: "Annual 2026",
    href: "/annual-festival",
    image: "annual",
  },
  // {
  //   label: "Harikoa Collective: Leyendas",
  //   href: "/leyendas",
  //   image: "leyendas",
  // },
];

const AppMenuRoot = AppMenuPrimitive.Root;

const AppMenuTrigger = React.forwardRef<
  React.ElementRef<typeof AppMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AppMenuPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <AppMenuPrimitive.Trigger
    ref={ref}
    className={cn("fixed right-8 top-5 z-40 focus:outline-none", className)}
    {...props}
  >
    <HamburgerMenuIcon className="h-6 w-5 text-pink-500 focus:outline-none" />
  </AppMenuPrimitive.Trigger>
));

AppMenuTrigger.displayName = AppMenuPrimitive.Trigger.displayName;

const AppMenuClose = React.forwardRef<
  React.ElementRef<typeof AppMenuPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof AppMenuPrimitive.Close> &
    React.RefAttributes<HTMLButtonElement> & {
      setBackgroundImage: (backgroundImage: string) => void;
    }
>(({ className, children, setBackgroundImage, ...props }, ref) => (
  <AppMenuPrimitive.Close
    ref={ref}
    className={className}
    asChild
    {...props}
    onClick={() => setBackgroundImage("")}
  >
    {children}
  </AppMenuPrimitive.Close>
));

AppMenuClose.displayName = AppMenuPrimitive.Close.displayName;

const AppMenuPortal = AppMenuPrimitive.Portal;

const AppMenuOverlay = React.forwardRef<
  React.ElementRef<typeof AppMenuPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AppMenuPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AppMenuPrimitive.Overlay
    className={cn("fixed inset-0 z-40", className)}
    {...props}
    ref={ref}
  />
));
AppMenuOverlay.displayName = AppMenuPrimitive.Overlay.displayName;

type AppMenuContentProps = React.ComponentPropsWithoutRef<
  typeof AppMenuPrimitive.Content
>;

const AppMenuContent = React.forwardRef<
  React.ElementRef<typeof AppMenuPrimitive.Content>,
  AppMenuContentProps & {
    backgroundImage?: string;
    setBackgroundImage: React.Dispatch<React.SetStateAction<string>>;
  }
>(
  (
    { className, backgroundImage, setBackgroundImage, children, ...props },
    ref
  ) => {
    return (
      <AppMenuPortal>
        <AppMenuOverlay />
        <AppMenuPrimitive.Content
          ref={ref}
          className={cn(
            "fixed inset-x-0 top-0 z-40 flex h-full flex-col items-center justify-between gap-4 border-b",
            "bg-black",

            "px-10 py-20 shadow-lg transition duration-300 ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            className
          )}
          {...props}
        >
          {backgroundImage && (
            <div className="absolute inset-0 h-screen w-screen duration-1000 animate-in fade-in">
              <Image
                className={`z-[45] mx-auto h-full w-full object-cover`}
                src={`/${backgroundImage}.jpeg`}
                alt="preloaded"
                width={2000}
                height={1000}
                priority
              />
            </div>
          )}
          <AppMenuClose setBackgroundImage={setBackgroundImage}>
            <button className="fixed right-8 top-8 z-[60] rounded-sm text-pink-500 opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
              <Cross1Icon className="h-6 w-5" />
            </button>
          </AppMenuClose>
          {children}
        </AppMenuPrimitive.Content>
      </AppMenuPortal>
    );
  }
);
AppMenuContent.displayName = AppMenuPrimitive.Content.displayName;

const footerLinks = [
  { label: "instagram", href: "https://www.instagram.com/rimufest/?hl=en" },
  { label: "facebook", href: "https://www.facebook.com/RimuFest/" },
];

const AppMenuFooter = ({ className }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("z-50 flex flex-row gap-4", className)}>
    {footerLinks.map(({ label, href }) => (
      <AppMenuPrimitive.Close key={label} asChild>
        <a
          className={"text-sm font-semibold text-foreground"}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </AppMenuPrimitive.Close>
    ))}
  </div>
);
AppMenuFooter.displayName = "AppMenuFooter";

const AppMenuTitle = React.forwardRef<
  React.ElementRef<typeof AppMenuPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AppMenuPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AppMenuPrimitive.Title
    ref={ref}
    className={cn("z-50 text-xl font-semibold text-foreground", className)}
    {...props}
  >
    <AppMenuPrimitive.Close asChild>
      <Link href={"/"}>
        <RimuFestLogo />
      </Link>
    </AppMenuPrimitive.Close>
  </AppMenuPrimitive.Title>
));
AppMenuTitle.displayName = AppMenuPrimitive.Title.displayName;

interface AppMenuNavigationLinksProps
  extends React.HTMLAttributes<HTMLDivElement> {
  setBackgroundImage: (image: string) => void;
}

const AppMenuNavigationLinks = ({
  className,
  setBackgroundImage,
  ...props
}: AppMenuNavigationLinksProps) => (
  <div className={cn("z-50 flex flex-col items-center", className)} {...props}>
    {navigationLinks.map(({ href, label, image }) => (
      <AppMenuClose key={href} setBackgroundImage={setBackgroundImage}>
        <Link
          className={"group relative h-16 text-4xl text-center font-semibold text-white"}
          href={href}
          onMouseEnter={() => setBackgroundImage(image)}
          onMouseLeave={() => setBackgroundImage("")}
        >
          {label}
          <span className="absolute bottom-6 left-1/2 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:left-0 group-hover:w-full" />
        </Link>
      </AppMenuClose>
    ))}
  </div>
);
AppMenuNavigationLinks.displayName = "AppMenuNavigationLinks";

export {
  AppMenuRoot,
  AppMenuPortal,
  AppMenuOverlay,
  AppMenuTrigger,
  AppMenuClose,
  AppMenuContent,
  AppMenuFooter,
  AppMenuTitle,
  AppMenuNavigationLinks,
};
