"use client";
import {
  ChevronRightIcon,
  Loader2,
  MenuIcon,
} from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import ThemedImage from "./ui/ThemedImage";
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
import { ThemeToggle } from "./theme-toggle";

export default function NavBar() {
  const session = useSession();
  const { theme } = useTheme();
  const user = session.data?.user;

  return (
    <header className="flex h-24 w-auto min-w-[350px] shrink-0 items-center gap-3 px-4">
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
              <Collapsible className="grid gap-4">
                <CollapsibleTrigger className="flex w-full items-center text-xl font-semibold [&[data-state=open]>svg]:rotate-90">
                  Contests
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="-mx-6 grid gap-6 bg-background p-6">
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                    >
                      <div className="text-xl font-medium leading-none group-hover:underline">
                        Create
                      </div>
                      <div className="line-clamp-2 text-xl leading-snug text-gray-500 dark:text-gray-400">
                        Create a new contest.
                      </div>
                    </Link>
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                    >
                      <div className="text-xl font-medium leading-none group-hover:underline">
                        Browse
                      </div>
                      <div className="line-clamp-2 text-xl leading-snug text-gray-500 dark:text-gray-400">
                        Browse and join contests created by other users.
                      </div>
                    </Link>
                    <Link
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                    >
                      <div className="text-xl font-medium leading-none group-hover:underline">
                        My Contest
                      </div>
                      <div className="line-clamp-2 text-xl leading-snug text-gray-500 dark:text-gray-400">
                        Manage contests you created.
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
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
                Dasboard
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
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                        href="#"
                      >
                        <div className="text-xl font-medium leading-none group-hover:underline">
                          Create
                        </div>
                        <div className="line-clamp-2 text-xl leading-snug text-gray-500 dark:text-gray-400">
                          Create a new contest.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                        href="#"
                      >
                        <div className="text-xl font-medium leading-none group-hover:underline">
                          Browse
                        </div>
                        <div className="line-clamp-2 text-xl leading-snug text-gray-500 dark:text-gray-400">
                          Browse and join contests created by other users.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                        href="#"
                      >
                        <div className="text-xl font-medium leading-none group-hover:underline">
                          My Contest
                        </div>
                        <div className="line-clamp-2 text-xl leading-snug text-gray-500 dark:text-gray-400">
                          Manage contests you created.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
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
      <div className="flex gap-3 ml-auto">
        <ThemeToggle/>
        {user && <UserButton user={user} />}
        {user && session.status == "loading" && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!user && session.status !== "loading" && <SignInButton />}
      </div>
    </header>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
