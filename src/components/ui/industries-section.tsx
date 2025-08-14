import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { 
  Monitor, 
  Factory, 
  Heart, 
  GraduationCap, 
  Building, 
  TrendingUp, 
  Wheat, 
  Code 
} from "lucide-react";

export function IndustriesSection() {
  const industries = [
    {
      icon: Monitor,
      name: "Media & Entertainment",
      description: "Engage audiences with AI-driven voice, video, and content personalization."
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Automate operations, reduce errors, and improve output efficiency."
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Accelerate patient services, enhance diagnostics, and offer smart assistance."
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Personalize learning paths and improve student success with AI insights."
    },
    {
      icon: Building,
      name: "Public Sector",
      description: "Improve citizen services and internal workflows with intelligent automation."
    },
    {
      icon: TrendingUp,
      name: "Marketing & Sales",
      description: "Convert better with AI-powered targeting, personalization, and automation."
    },
    {
      icon: Wheat,
      name: "Agriculture",
      description: "Monitor crop health, predict yields, and optimize outcomes."
    },
    {
      icon: Code,
      name: "IT & Software",
      description: "Integrate cutting-edge AI features into your platforms for competitive edge."
    }
  ];

  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Industries We Empower
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bringing the Power of{" "}
            <span className="text-gradient">AI</span> to Every Sector
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand that every industry has unique challenges. Our AI solutions are tailored to drive transformation across diverse sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium smooth-transition cursor-pointer border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary smooth-transition">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Don't see your industry? We work across all sectors.
          </p>
          <Badge variant="secondary" className="px-6 py-2 text-sm">
            Let's discuss your unique challenges →
          </Badge>
        </div>
      </div>
    </section>
  );
}