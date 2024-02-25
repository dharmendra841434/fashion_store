import "./globals.css";
import CustomLayout from "@/components/layouts/CustomLayout";
import Providers from "@/redux/Providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Montserrat">
        <Providers>
          <CustomLayout>{children}</CustomLayout>
        </Providers>
        <div id="modal" />
      </body>
    </html>
  );
}
