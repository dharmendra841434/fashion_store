import "./globals.css";
import CustomLayout from "@/components/layouts/CustomLayout";
import Providers from "@/redux/Providers";
import { cookies } from "next/headers";

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken");
  console.log(token);
  return (
    <html lang="en">
      <body className="font-Montserrat">
        <Providers>
          <CustomLayout token={token?.value}>{children}</CustomLayout>
        </Providers>
        <div id="modal" />
      </body>
    </html>
  );
}
