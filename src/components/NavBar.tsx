"use client";
import { EllipsisVertical, Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "@/components/UserButton";
import { Button } from "@/components/ui/button";
import ThemedImage from "@/components/theme/ThemedImage";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./theme/theme-toggle";
import React, { ReactNode } from "react";
import { Skeleton } from "./ui/skeleton";

export default function NavBar() {
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <nav className="frosted fixed left-1/2 top-4 z-50 flex h-24 w-11/12 min-w-[350px] shrink-0 -translate-x-1/2 transform items-center gap-3 rounded-full border border-white border-opacity-30 bg-white bg-opacity-10 p-4 shadow-lg backdrop-blur-lg sm:w-11/12 md:w-11/12 lg:w-2/3 xl:w-1/2">
      <Link
        className="flex flex-shrink-0 justify-center align-middle sm:flex-grow-0 md:flex-grow-0 lg:flex-grow-0"
        href="/"
      >
        <ThemedImage
          darkSrc={"/logoIconDark.png"}
          lightSrc={"/logoIconLight.png"}
          alt="Mota.atoM"
          width={40}
          height={40}
          className="items-center justify-center align-middle sm:flex"
        />
      </Link>

      {status === "loading" ? (
        <NavSkeleton />
      ) : user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-10 w-10 rounded-full bg-transparent hover:bg-transparent md:hidden lg:hidden"
                size="icon"
                variant="outline"
              >
                <EllipsisVertical strokeWidth={1} className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="frosted border border-white border-opacity-30 bg-white bg-opacity-30 p-4 shadow-lg backdrop-blur-lg">
              <div className="grid gap-5 py-6">
                <DropdownMenuItem asChild>
                  <StyledLink href="/">Home</StyledLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <StyledLink href="/weight">Weight</StyledLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <StyledLink href="/contests">Contests</StyledLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <StyledLink href="/dashboard">Dashboard</StyledLink>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden flex-1 justify-center md:flex lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink asChild>
                  <StyledLink href="/">Home</StyledLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <StyledLink href="/weight">Weight</StyledLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <StyledLink href="/contests">Contests</StyledLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <StyledLink href="/dashboard">Dashboard</StyledLink>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
        {status === "loading" ? (
          <Loader2 strokeWidth={1} className="mr-2 h-10 w-10 animate-spin" />
        ) : user ? (
          <UserButton user={user} />
        ) : (
          <SignInButton />
        )}
      </div>
    </nav>
  );
}

interface StyledLinkProps {
  href: string;
  children: ReactNode;
}
const StyledLink: React.FC<StyledLinkProps> = ({ href, children }: StyledLinkProps) => {
  return (
    <Link
      href={href}
      className="group inline-flex h-10 items-center justify-center rounded-lg px-4 py-2 text-xl font-medium transition-colors hover:bg-opacity-20 focus:bg-opacity-20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:focus:bg-opacity-20"
    >
      <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
        {children}
      </div>
    </Link>
  );
};

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}

function NavSkeleton() {
  return (
    <div className="flex-1 justify-center md:flex lg:flex">
      <div className="flex gap-10">
        <Skeleton className="h-5 w-96 rounded"></Skeleton>
      </div>
    </div>
  );
}
