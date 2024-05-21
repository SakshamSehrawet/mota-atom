import ThemedImage from "@/components/theme/ThemedImage";

export default async function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center gap-6 px-3 py-10">
        <ThemedImage
          darkSrc={"/logoFullDark.png"}
          lightSrc={"/logoFullLight.png"}
          alt="Mota.atoM"
          width={720}
          height={480}
        />
      </main>
  );
}
