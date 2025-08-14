import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { 
  Code2, 
  MessageSquare, 
  Mic, 
  Video, 
  BookOpen, 
  Phone,
  ArrowRight 
} from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: Code2,
      title: "Custom AI Development",
      description: "End-to-end AI product design and engineering tailored to your business needs.",
      features: ["MVP to Enterprise Scale", "Custom Architecture", "Full Integration"]
    },
    {
      icon: MessageSquare,
      title: "Conversational AI Bots",
      description: "Smart chat and voice bots for 24/7 customer support and engagement.",
      features: ["Multi-channel Support", "Natural Language", "Smart Routing"]
    },
    {
      icon: Mic,
      title: "Speech AI",
      description: "Voice cloning, speech translation, recognition, and dubbing solutions.",
      features: ["Voice Cloning", "Real-time Translation", "Multi-language Support"]
    },
    {
      icon: Video,
      title: "Video AI",
      description: "Dub videos in multiple languages to expand your global reach.",
      features: ["Auto Dubbing", "Lip Sync", "Content Localization"]
    },
    {
      icon: BookOpen,
      title: "Gen AI in EdTech",
      description: "Personalized quizzes and learning journeys to engage learners.",
      features: ["Adaptive Learning", "Progress Tracking", "Content Generation"]
    },
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "AI-powered voice bots that replace or assist call center agents.",
      features: ["24/7 Availability", "Natural Conversations", "CRM Integration"]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Solutions
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Build Powerful{" "}
            <span className="text-gradient">AI Systems</span> That{" "}
            <span className="text-gradient">Solve Business Problems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From MVPs to enterprise-scale products, our solutions are built to scale with your business growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large smooth-transition border-border/50 hover:border-primary/30 card-gradient"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 smooth-transition mb-4">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary-dark"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto card-gradient border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-6">
                Every business is unique. Let's discuss how we can build the perfect AI solution for your specific needs.
              </p>
              <Button size="lg" className="shadow-medium">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}