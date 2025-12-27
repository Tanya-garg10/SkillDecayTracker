import { Activity, Zap } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-violet flex items-center justify-center glow-primary">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">SkillDecay</h1>
            <p className="text-xs text-muted-foreground">Tracker</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#trends" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Trends
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Your Skills
          </a>
          <a href="#insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </a>
          <a href="#resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
        </nav>

        <Button variant="glow" size="sm" className="gap-2">
          <Zap className="w-4 h-4" />
          Get Started
        </Button>
      </div>
    </header>
  );
};
