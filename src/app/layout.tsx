import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Mota.atoM",
    absolute: "Mota.atoM",
  },
  description:
    "Create or join contests with friends to see who losese more weight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <SessionProvider>
              <Background>
                <NavBar />
                <div className="px-10 pt-32">
                  {children}
                </div>
                <Toaster />
              </Background>
            </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
