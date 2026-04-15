import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import ProductSection from "@/components/ProductSection";
import DressStyleSection from "@/components/DressStyleSection";
import HappyCustomersSection from "@/components/HappyCustomersSection";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/lib/fakestore";

export default async function Home() {
  const products = await getAllProducts();

  const newArrivals = products.slice(0, 4);
  const topSelling = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <BrandStrip />
      <ProductSection title="NEW ARRIVALS" products={newArrivals} />
      <ProductSection title="TOP SELLING" products={topSelling} showDivider />
      <DressStyleSection />
      <HappyCustomersSection />
      <Footer />
    </div>
  );
}
