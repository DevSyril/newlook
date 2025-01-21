import { ProductsDisplay } from "@/components/includes/articles/ProductsDisplay";
import { Banner } from "@/components/includes/home/Banner";
import { Brands } from "@/components/includes/home/Brands";
import { Offer } from "@/components/includes/home/Offer";
import TopList from "@/components/includes/topProducts/TopList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[50px] ">
        <Banner />
        <TopList />
        <ProductsDisplay />
        <Brands />
        <Offer />
    </div>
  );
}
