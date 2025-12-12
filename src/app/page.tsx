import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { WhoWeServe } from '@/components/sections/WhoWeServe';
import { FlightPath } from '@/components/sections/FlightPath';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhoWeServe />
      <FlightPath />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
