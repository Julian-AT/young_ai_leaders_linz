import { Hero } from "@/components/sections/hero";
import { HeroGallery } from "@/components/sections/hero-gallery";
import { HeroStickyCta } from "@/components/sections/hero-sticky-cta";
import { IdentitySection } from "@/components/sections/identity-section";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { ProgramsSwitcher } from "@/components/sections/programs-switcher";
import { StatsSection } from "@/components/sections/stats-section";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { ThemeBand } from "@/components/shared/theme-band";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="page-margins mx-auto max-w-[1280px]">
        <div>
          <Hero />
          <HeroStickyCta />
          <HeroGallery />
          <IdentitySection />
          <ThemeBand>
            <StatsSection />
          </ThemeBand>
          <ProgramsSwitcher />
          <PartnersStrip />
        </div>
      </main>
      <div className="page-margins mx-auto max-w-[1280px]">
        <Footer />
      </div>
    </>
  );
}
