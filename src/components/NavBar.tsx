"use client"
import { EllipsisVertical, Loader2, MenuIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import ThemedImage from "./theme/ThemedImage";
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
import { ReactNode } from "react";

export default function NavBar() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav
      className="frosted fixed left-1/2 top-4 z-50 flex h-24 w-11/12 min-w-[350px] shrink-0 -translate-x-1/2 transform items-center gap-3 rounded-full border border-white border-opacity-30 bg-white bg-opacity-10 p-4 shadow-lg backdrop-blur-lg sm:w-10/12 md:w-10/12 lg:w-2/3 xl:w-1/2"
    >
      {user && session.status !== "loading" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="md:hidden lg:hidden rounded-full h-10 w-10 bg-transparent hover:bg-transparent" size="icon" variant="outline">
              <EllipsisVertical strokeWidth={1} className="h-8 w-8" />
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
      )}
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
      {user && session.status !== "loading" && (
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
      )}
      <div className="ml-auto flex items-center gap-3">
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
interface StyledLinkProps {
  href: string;
  children: ReactNode;
}
function StyledLink({ href, children } : StyledLinkProps) {
  return (
    
    <Link
      href={href}
      className="group inline-flex h-10 items-center justify-center rounded-lg px-4 py-2 text-xl font-medium transition-colors hover:bg-opacity-20 focus:bg-opacity-20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:focus:bg-opacity-20"
    >
      <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">

      {children}</div>
    </Link>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}

