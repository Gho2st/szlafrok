import Nav from "@/components/UI/Nav";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/UI/Footer";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
export const metadata = {
  title: "SzlafrO.K. - Prezenty ślubne - szlafroki damskie, męskie",
  description:
    "Szlafroki Kraków. Od 1990r zapraszamy do naszych specjalistyczego sklepu ze szlafrokami w Krakowie przy ulicy Starowiślnej 19. Oprócz szlafroków w swojej ofercie posiadamy również duży wybór pidżam, koszuli nocnych, ręczników i pościeli.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://szlafroki.krakow.pl/",
    title: "SzlafrO.K.",
    description: "Szukasz przytulnego szlafroka w Krakowie?",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
