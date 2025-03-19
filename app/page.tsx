import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Companies from "./components/Companies";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Companies />
      <Testimonials />
      <CallToAction />
    </>
  );
}

