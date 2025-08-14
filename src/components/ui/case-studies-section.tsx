import { Card, CardContent, CardHeader } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { ArrowRight, Quote } from "lucide-react";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      industry: "E-commerce",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Reduced customer service costs by 60% while improving response times with intelligent chatbots and voice assistants.",
      testimonial: "Strancer AI Labs transformed our customer experience. Our support efficiency improved dramatically.",
      client: "Global Retail Chain",
      results: ["60% Cost Reduction", "24/7 Support", "85% Automation Rate"]
    },
    {
      title: "Smart Manufacturing Optimization",
      industry: "Manufacturing",
      thumbnail: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Implemented predictive maintenance and quality control systems that increased production efficiency by 40%.",
      testimonial: "The AI solution helped us predict failures before they happened, saving millions in downtime.",
      client: "Industrial Manufacturer",
      results: ["40% Efficiency Gain", "Predictive Maintenance", "Quality Automation"]
    },
    {
      title: "Personalized Learning Platform",
      industry: "Education",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Created adaptive learning system that personalized education paths, improving student outcomes by 35%.",
      testimonial: "Student engagement and completion rates have never been higher since implementing this AI solution.",
      client: "Educational Institution",
      results: ["35% Better Outcomes", "Adaptive Learning", "Engagement Boost"]
    },
    {
      title: "Multi-Language Content Localization",
      industry: "Media",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Automated video dubbing and translation service expanding global reach to 15+ languages in real-time.",
      testimonial: "We can now reach global audiences instantly. The quality of AI dubbing is incredible.",
      client: "Content Creator",
      results: ["15+ Languages", "Real-time Dubbing", "Global Reach"]
    }
  ];

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Work
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real Results from{" "}
            <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses across industries transform their operations with AI solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large smooth-transition border-border/50 hover:border-primary/30 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.thumbnail} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {study.industry}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary smooth-transition">
                  {study.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2">
                  {study.results.map((result, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                      {result}
                    </Badge>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <Quote className="h-4 w-4 text-primary mb-2" />
                  <p className="text-sm italic text-muted-foreground mb-2">
                    "{study.testimonial}"
                  </p>
                  <p className="text-xs font-medium text-primary">
                    — {study.client}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-dark"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto card-gradient border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join the businesses that have transformed their operations with our AI solutions.
              </p>
              <Button size="lg" className="shadow-medium">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}