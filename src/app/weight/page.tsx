import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import WeightPage from "./WeightPage";

export const metadata: Metadata = {
  title: "Weight",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/weight");
  }

  return <WeightPage user={user} />;
}
