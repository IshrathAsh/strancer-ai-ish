import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { 
  Target, 
  Users, 
  Zap, 
  Brain, 
  HandHeart, 
  CheckCircle 
} from "lucide-react";

export function WhyChooseUsSection() {
  const differentiators = [
    {
      icon: Target,
      title: "Business-Driven Solutions",
      description: "We solve real business problems, not just tech challenges. Every solution is designed for measurable impact."
    },
    {
      icon: Users,
      title: "End-to-End Partnership",
      description: "From strategy to launch, we walk with you every step. Your success is our commitment."
    },
    {
      icon: Zap,
      title: "Agile Execution",
      description: "Focused team, rapid development cycles, and powerful results delivered on time."
    },
    {
      icon: Brain,
      title: "Deep AI Expertise",
      description: "Specialized knowledge in Speech AI, Computer Vision, and Generative AI technologies."
    },
    {
      icon: HandHeart,
      title: "Transparent Approach",
      description: "Client-first methodology with clear communication and collaborative development process."
    }
  ];

  const achievements = [
    { number: "400+", label: "Projects Delivered" },
    { number: "12x", label: "Faster Delivery" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "50+", label: "Industries Served" }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AI-First.</span>{" "}
            <span className="text-gradient">Business-Driven.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another tech company. We're your strategic partner in AI transformation.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium smooth-transition border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 smooth-transition mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary smooth-transition">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Our Proven Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discover & Analyze", description: "Deep dive into your business challenges and opportunities" },
              { step: "02", title: "Design & Strategy", description: "Create tailored AI solutions and implementation roadmap" },
              { step: "03", title: "Develop & Deploy", description: "Build, test, and launch your AI-powered solutions" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <span className="text-xl font-bold text-primary">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary smooth-transition">
                  {process.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}