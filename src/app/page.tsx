import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageMotion } from "@/components/motion/PageMotion";
import { CallToAction } from "@/components/sections/CallToAction";
import { DesignSection } from "@/components/sections/DesignSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { PinnedVehicleShowcase } from "@/components/sections/PinnedVehicleShowcase";
import { VehicleGallery } from "@/components/sections/VehicleGallery";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageMotion>
          <HeroSection />
          <DesignSection />
          <PerformanceSection />
          <PinnedVehicleShowcase />
          <VehicleGallery />
          <CallToAction />
        </PageMotion>
      </main>
      <SiteFooter />
    </>
  );
}
