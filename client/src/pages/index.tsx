import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className={`text-center ${inter.className} text-5xl my-4`}>
      Blog Site
    </h1>
  );
}
