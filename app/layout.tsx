import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://promyshlennyepoly.net"),
  title: { default: "Промышленные бетонные полы в Беларуси", template: "%s | Промышленные полы" },
  description: "Практический блог о проектировании, устройстве, выборе покрытия и эксплуатации промышленных бетонных полов в Беларуси.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
