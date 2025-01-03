import Nav from "@/components/UI/Nav";
import "./globals.css";
import Footer from "@/components/UI/Footer";

export const metadata = {
  title: "SzlafrO.K. - Szlafroki i Piżamy dla Każdego",
  description:
    "Szlafroki Kraków. Od 1990r zapraszamy do naszych specjalistyczego sklepu ze szlafrokami w Krakowie przy ulicy Starowiślnej 19. Oprócz szlafroków w swojej ofercie posiadamy również duży wybór piżam, koszul nocnych, szlafroków i piżam dla dzieci.",
  alternates: {
    canonical: "https://www.szlafroki.krakow.pl/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.szlafroki.krakow.pl/",
    title: "SzlafrO.K.",
    description: "Szukasz przytulnego szlafroka w Krakowie?",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
