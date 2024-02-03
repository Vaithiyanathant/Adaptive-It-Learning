import Image from "next/image";

import Hero from "./Components/HeroSection/hero";
import Testimonial from "./Components/Testimonials/Testimonial";

export default function Home() {
  return (
    <main >
      <Hero/>
      <Testimonial/>
    </main>
  );
}
