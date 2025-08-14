import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Badge } from "./badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Free Strategy Session
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Explore How{" "}
            <span className="text-gradient">AI Can Grow</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let us analyze your business and show you where AI can make the biggest impact. Get your personalized AI strategy plan.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient border-primary/20 shadow-large">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Get Your Free AI Strategy Plan</CardTitle>
              <p className="text-muted-foreground">
                Tell us about your business and we'll create a customized AI roadmap for you.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Size */}
                <div className="space-y-2">
                  <Label htmlFor="business-size">Business Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                      <SelectItem value="small">Small Business (11-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium Business (51-200 employees)</SelectItem>
                      <SelectItem value="large">Large Enterprise (200+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="media">Media & Entertainment</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="public">Public Sector</SelectItem>
                      <SelectItem value="marketing">Marketing & Sales</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="it">IT & Software</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Goals */}
              <div className="space-y-2">
                <Label htmlFor="goals">Primary Business Goals</Label>
                <Textarea 
                  id="goals"
                  placeholder="What are your main objectives? (e.g., increase efficiency, reduce costs, improve customer experience)"
                  className="min-h-[100px] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Tech Stack */}
                <div className="space-y-2">
                  <Label htmlFor="tech-stack">Current Tech Stack</Label>
                  <Input 
                    id="tech-stack"
                    placeholder="e.g., React, Python, AWS"
                  />
                </div>

                {/* Key Challenges */}
                <div className="space-y-2">
                  <Label htmlFor="challenges">Key Challenges</Label>
                  <Input 
                    id="challenges"
                    placeholder="What problems are you trying to solve?"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input 
                  id="company"
                  placeholder="Your company name"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="w-full shadow-large hover:shadow-glow smooth-transition group"
                >
                  Get Your Free AI Strategy Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  We'll respond within 24 hours with your personalized AI roadmap.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 p-6 rounded-2xl bg-background border border-border shadow-soft">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>24h Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}