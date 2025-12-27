import { ArrowRight, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 chart-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-violet/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
            <Badge variant="info" className="px-4 py-1.5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2" />
              Powered by Real-Time Market Data
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up leading-tight">
            Track Your{" "}
            <span className="text-gradient">Skill Relevance</span>
            <br />
            Before It Decays
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Monitor demand trajectories, identify at-risk skills, and discover 
            personalized learning pathways based on labor market intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" className="gap-2" onClick={() => scrollToSection('skills')}>
              Analyze My Skills
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" onClick={() => scrollToSection('trends')}>
              View Market Trends
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div 
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors group cursor-pointer"
              onClick={() => scrollToSection('trends')}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-3xl font-bold text-accent">+47%</span>
              </div>
              <p className="text-sm text-muted-foreground">Rust demand growth (YoY)</p>
            </div>
            
            <div 
              className="glass rounded-2xl p-6 hover:border-warning/50 transition-colors group cursor-pointer"
              onClick={() => scrollToSection('insights')}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-warning" />
                <span className="text-3xl font-bold text-warning">2.3yr</span>
              </div>
              <p className="text-sm text-muted-foreground">Average skill half-life</p>
            </div>
            
            <div 
              className="glass rounded-2xl p-6 hover:border-destructive/50 transition-colors group cursor-pointer"
              onClick={() => scrollToSection('insights')}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="text-3xl font-bold text-destructive">12</span>
              </div>
              <p className="text-sm text-muted-foreground">Skills flagged at-risk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
