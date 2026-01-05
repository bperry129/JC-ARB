// BACKUP OF ORIGINAL PAGE - DO NOT DELETE
// To restore the full site, rename this file back to page.tsx
// and delete or rename the current page.tsx

import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { FlightPath } from '@/components/sections/FlightPath';
import { WhoWeServe } from '@/components/sections/WhoWeServe';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <FlightPath />
      <WhoWeServe />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
