import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";

export const metadata = {
  title: "UBI Website",
  description: "Website for the University Blood Initiative.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="">
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
