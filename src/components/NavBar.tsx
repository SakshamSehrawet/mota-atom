"use client";
import { ChevronRightIcon, Loader2, MenuIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import ThemedImage from "./theme/ThemedImage";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import {
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme/theme-toggle";

export default function NavBar() {
  const session = useSession();
  const { theme } = useTheme();
  const user = session.data?.user;

  return (
    <nav
      className="frosted fixed left-1/2 top-4 z-50 flex h-24
    w-11/12 min-w-[350px] shrink-0 -translate-x-1/2 transform items-center gap-3 rounded-lg border border-white border-opacity-30 bg-white bg-opacity-10 p-4 shadow-lg backdrop-blur-lg sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2"
    >
      {user && session.status !== "loading" && (
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden lg:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-9 w-9" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="flex items-center gap-2" href="/">
              <ThemedImage
                darkSrc={"/logoIconDark.png"}
                lightSrc={"/logoIconLight.png"}
                alt="Mota.atoM"
                width={40}
                height={40}
              />
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                className="flex w-full items-center py-2 text-xl font-semibold"
                href="#"
              >
                Home
              </Link>
              <Link
                className="flex w-full items-center py-2 text-xl font-semibold"
                href="#"
              >
                Contests
              </Link>
              <Link
                className="flex w-full items-center py-2 text-xl font-semibold"
                href="#"
              >
                Weight
              </Link>
              <Link
                className="flex w-full items-center py-2 text-xl font-semibold"
                href="#"
              >
                Dashboard
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      )}
      <Link
        className="flex-grow justify-center align-middle sm:flex-grow-0 md:flex-grow-0 lg:flex-grow-0"
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
      {user && session.status !== "loading" && (
        <div className="hidden flex-1 justify-center md:flex lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  className="data-[state=open]:bg-accent-100/50 group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Contests
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Weight
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Dashboard
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
      <div className="ml-auto flex gap-3">
        <ThemeToggle />
        {user && <UserButton user={user} />}
        {user && session.status == "loading" && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!user && session.status !== "loading" && <SignInButton />}
      </div>
    </nav>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
