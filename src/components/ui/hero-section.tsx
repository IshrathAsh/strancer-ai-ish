import { Button } from "./button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 parallax-slow"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <img 
          src={heroImage} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
      </div>

      {/* Interactive floating elements */}
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60 hover-glow"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-light rounded-full animate-pulse opacity-40 delay-1000 hover-glow"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse opacity-30 delay-2000 hover-glow"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary-light rounded-full animate-pulse opacity-50 delay-500 hover-glow"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-up hover-scale magnetic">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Business Transformation
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-200 hover-lift">
            It's Time to{" "}
            <span className="text-gradient hover-glow">Transform</span>
            <br />
            Your Business with AI
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300 fade-in-scroll">
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