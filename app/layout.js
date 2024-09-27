import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
export const metadata = {
  title: "SzlafrO.K. - Prezenty ślubne - szlafroki damskie, męskie",
  description:
    "Szlafroki Kraków. Od 1990r zapraszamy do naszych specjalistyczego sklepu ze szlafrokami w Krakowie przy ulicy Starowiślnej 19. Oprócz szlafroków w swojej ofercie posiadamy również duży wybór pidżam, koszuli nocnych, ręczników i pościeli.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
