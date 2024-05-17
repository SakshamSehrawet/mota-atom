"use client";
import { Loader2 } from "lucide-react"
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function NavBar() {
  const session = useSession();
  const { theme } = useTheme();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          <Image src={theme=="dark" ? "/logoIconDark.png" : "/logoIconLight.png"} alt="Mota.atoM" width={40} height={40} />
        </Link>
        <div className="">
          <Button variant="link">
            Weight
          </Button>
          <Button variant="link">
            Contests
          </Button>
          <Button variant="link">
            Dahboard
          </Button>
        </div>
        {user && <UserButton user={user} />}
        {user && session.status == "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!user && session.status !== "loading" && <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
