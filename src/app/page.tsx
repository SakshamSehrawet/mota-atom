import prisma from "@/lib/prisma";
import Link from "next/link";
import ThemedImage from "@/components/theme/ThemedImage";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
      <main className="flex min-h-screen flex-col items-center gap-6 px-3 py-10">
        <h1 className="text-center text-4xl font-bold"></h1>
        <ThemedImage
          darkSrc={"/logoFullDark.png"}
          lightSrc={"/logoFullLight.png"}
          alt="Mota.atoM"
          width={720}
          height={480}
        />
        <h2 className="text-center text-2xl font-semibold">Users</h2>
        <ul className="list-inside list-disc">
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`} className="hover:underline">
                {user.name || `User ${user.id}`}
              </Link>
            </li>
          ))}
        </ul>
      </main>
  );
}
