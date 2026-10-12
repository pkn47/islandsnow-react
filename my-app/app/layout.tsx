import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Island Snow",
  description: "Island Snow Hawaii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}