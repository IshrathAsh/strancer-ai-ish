import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { ArrowRight, Brain, Zap, Target } from "lucide-react";
import { Button } from "./button";

export function WhatWeDoSection() {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "We evaluate your business, identify high-impact AI opportunities, and create a customized roadmap to drive growth.",
      features: ["Business Analysis", "AI Opportunity Mapping", "Strategic Roadmap", "ROI Planning"]
    },
    {
      icon: Zap,
      title: "Custom AI Product Development",
      description: "From concept to deployment, we design and build AI-powered tools tailored to your business needs.",
      features: ["End-to-end Development", "Scalable Architecture", "Custom Solutions", "Integration Support"]
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            What We Do
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Help Your Business Work{" "}
            <span className="text-gradient">Smarter</span> and{" "}
            <span className="text-gradient">Grow Faster</span> with AI
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Everything you need to win with AI—from strategy to execution.
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We partner with businesses to unlock their potential using AI. Whether you're starting fresh or optimizing existing systems, our expert team conducts deep research, builds a tailored strategy, and transforms it into scalable products that reduce costs, save time, and increase productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border-0 shadow-medium hover:shadow-large smooth-transition group hover-lift hover-slide fade-in-scroll">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 smooth-transition hover-scale hover-glow magnetic">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 hover-scale">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground hover-scale">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 hover-glow"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="text-center fade-in-scroll">
          <div className="inline-flex items-center space-x-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 hover-lift hover-glow magnetic">
            <div className="flex items-center space-x-2 hover-scale">
              <Target className="h-5 w-5 text-primary hover-glow animate-pulse" />
              <span className="font-medium">Real Business Impact</span>
            </div>
            <div className="flex items-center space-x-2 hover-scale">
              <Zap className="h-5 w-5 text-primary hover-glow animate-pulse" />
              <span className="font-medium">Scalable Solutions</span>
            </div>
            <div className="flex items-center space-x-2 hover-scale">
              <Brain className="h-5 w-5 text-primary hover-glow animate-pulse" />
              <span className="font-medium">Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}