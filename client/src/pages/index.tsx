import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className={`text-center ${inter.className}`}>
      Welcome to my blog site
    </h1>
  );
}
