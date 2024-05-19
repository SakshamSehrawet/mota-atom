import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import DashboardPage from "./DashboardPage";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return <DashboardPage user={user} />;
}
