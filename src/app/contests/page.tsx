import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ContestsPage from "./ContestsPage";
import BrowseContestsTab from "./tabs/browse/BrowseContestsTab";

export const metadata: Metadata = {
  title: "Contests",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/contests");
  }

  return (
    <div>
      <ContestsPage user={user} />
      <BrowseContestsTab/>
    </div>
  );
}
