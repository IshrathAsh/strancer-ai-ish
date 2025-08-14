import { Button } from "./button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline Background */}
      <iframe
        src="https://my.spline.design/flowingribbon-YkP0H3oOPCTAbUpOTGMFJCRy/"
        frameBorder="0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
        title="Flowing Ribbon Background"
      ></iframe>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-up hover-scale magnetic">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Business Transformation
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 ">
            It's Time to{" "}
            <span>Transform</span>
            <br />
            Your Business with AI
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed ">
            We build AI solutions that solve real business problems and help your team work faster, smarter, and more productively.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-large hover:shadow-glow smooth-transition group hover-lift magnetic"
            >
              Discover AI Potential for Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button
  variant="outline"
  size="lg"
  className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition hover-scale magnetic"
  onClick={() => {
    const el = document.getElementById("what-we-do");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
              What We Do
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in-up delay-700 fade-in-scroll">
            <p className="text-sm text-muted-foreground mb-6">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold hover-scale hover-glow magnetic">✓ AI Native</div>
              <div className="text-lg font-semibold hover-scale hover-glow magnetic">✓ 400+ Projects</div>
              <div className="text-lg font-semibold hover-scale hover-glow magnetic">✓ 12x Faster Delivery</div>
              <div className="text-lg font-semibold hover-scale hover-glow magnetic">✓ Strategic Partner</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}