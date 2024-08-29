import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "./globals.css"
import { Theme } from "@radix-ui/themes";
import TempUserSessionProvider from "@/components/TempUserSessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }} className={`${inter.className}`}>
        <main>
          <Theme>
            <TempUserSessionProvider>
              {children}
            </TempUserSessionProvider>
          </Theme>
        </main>
      </body>
    </html>
  );
}


