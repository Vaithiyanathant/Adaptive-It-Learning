import Image from "next/image";

import Hero from "./Components/HeroSection/hero";
import Testimonial from "./Components/Testimonials/Testimonial";
import Rec from "./Components/Rec/Rec";
import Top from "./Components/Top/Top";

export default function Home() {
  return (
    <main >
      <Hero/> 
      <Rec/>
      <Top/>
      <Testimonial/>
     
    </main>
  );
}
