import { Roboto, Inter } from "@next/font/google";
import { DataProvider } from "./context/context";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portafolio",
  description: "Portafolio de Rodolfo Pérez Cerecedo",
};

export default function RootLayout({ children }) {
  return (
    <DataProvider>
      <html lang="en">
        <body className={`${roboto.className} `}>
          <Navbar
            links={[
              { name: "About me", id: "About" },
              { name: "Languages", id: "Languages" },
              { name: "Soft Skills", id: "Soft" },
              { name: "Projects", id: "Projects" },
            ]}
          />
          {children}
        </body>
      </html>
    </DataProvider>
  );
}
