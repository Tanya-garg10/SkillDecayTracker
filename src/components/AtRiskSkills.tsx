import { AlertTriangle, TrendingDown, Clock, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useToast } from "@/hooks/use-toast";

const AT_RISK_SKILLS = [
  {
    name: "jQuery",
    decay: -45,
    halfLife: "1.2 years",
    urgency: "high",
    replacement: "React/Vue",
    currentDemand: 24,
  },
  {
    name: "AngularJS",
    decay: -38,
    halfLife: "1.5 years",
    urgency: "high",
    replacement: "Angular 17+",
    currentDemand: 18,
  },
  {
    name: "PHP (Legacy)",
    decay: -28,
    halfLife: "2.1 years",
    urgency: "medium",
    replacement: "Laravel/Node.js",
    currentDemand: 35,
  },
  {
    name: "CoffeeScript",
    decay: -52,
    halfLife: "0.8 years",
    urgency: "critical",
    replacement: "TypeScript",
    currentDemand: 8,
  },
  {
    name: "Objective-C",
    decay: -32,
    halfLife: "1.8 years",
    urgency: "medium",
    replacement: "Swift",
    currentDemand: 28,
  },
];

export const AtRiskSkills = () => {
  const { toast } = useToast();

  const handleReplacementClick = (skillName: string, replacement: string) => {
    const element = document.getElementById('resources');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Transition Path",
      description: `Find resources to transition from ${skillName} to ${replacement}`,
    });
  };

  const handleViewFullReport = () => {
    toast({
      title: "Full Report",
      description: "Generating comprehensive risk assessment report...",
    });
  };

  return (
    <section id="insights" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="warning" className="mb-4">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Risk Assessment
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top At-Risk Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Skills showing significant demand decline that may require immediate attention or transition planning.
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {AT_RISK_SKILLS.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass rounded-xl p-6 hover:border-warning/30 transition-all group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Skill Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <Badge 
                      variant={skill.urgency === 'critical' ? 'danger' : skill.urgency === 'high' ? 'warning' : 'info'}
                    >
                      {skill.urgency} urgency
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="w-4 h-4 text-destructive" />
                      <span>{skill.decay}% YoY</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>Half-life: {skill.halfLife}</span>
                    </div>
                  </div>
                </div>

                {/* Demand Bar */}
                <div className="w-full md:w-48">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Current Demand</span>
                    <span className="font-mono">{skill.currentDemand}%</span>
                  </div>
                  <Progress value={skill.currentDemand} className="h-2" />
                </div>

                {/* Replacement Suggestion */}
                <div 
                  className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleReplacementClick(skill.name, skill.replacement)}
                >
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <Badge variant="success" className="whitespace-nowrap">
                    {skill.replacement}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={handleViewFullReport}>
            View Full Risk Report
          </Button>
        </div>
      </div>
    </section>
  );
};
