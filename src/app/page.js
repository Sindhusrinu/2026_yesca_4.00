import Image from "next/image";
import Hero from "./(sections)/Herosection";
import OurProducts from "./(sections)/OurProducts";
import TechnologyServices from "./(sections)/TechnologyServices";
import TrustedEcoSystem from "./(sections)/TrustedEcoSystem";
import FutureRoadMap from "./(sections)/FutureRoadMap";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurProducts />
      <TechnologyServices />
      <TrustedEcoSystem />
      <FutureRoadMap />
    </main>
  );
}
