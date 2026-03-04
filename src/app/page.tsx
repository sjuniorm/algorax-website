import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preview from "@/components/Preview";
import TradingModes from "@/components/TradingModes";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Preview />
      <TradingModes />
      <Features />
      <HowItWorks />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
