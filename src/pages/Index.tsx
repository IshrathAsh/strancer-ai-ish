import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { WhatWeDoSection } from "@/components/ui/what-we-do-section";
import { IndustriesSection } from "@/components/ui/industries-section";
import { SolutionsSection } from "@/components/ui/solutions-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { CaseStudiesSection } from "@/components/ui/case-studies-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

const Index = () => {
  useScrollAnimation();
  useParallax();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <IndustriesSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
