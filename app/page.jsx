import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Dishes from "@/components/Dishes";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Image from "next/image";

export default function Home() {
  return (
   <main className="overflow-y-hidden text-neutral-200 antialiased">
   <Hero/>
   <Navbar/>
   <Dishes/>
   <About/>
   <Mission/>
   <Expertise/>
   <Review/>
   <ContactSection/>
   <Footer/>
   </main>
  );
}
