import { useState } from "react";
import { X, Plus, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const SUGGESTED_SKILLS = [
  "React", "TypeScript", "Python", "AWS", "Docker",
  "Kubernetes", "GraphQL", "Node.js", "Rust", "Go"
];

interface SkillInputProps {
  skills: string[];
  setSkills: (skills: string[]) => void;
}

export const SkillInput = ({ skills, setSkills }: SkillInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      toast({
        title: "Skill Added",
        description: `"${trimmed}" has been added to your skill profile.`,
      });
    } else if (skills.includes(trimmed)) {
      toast({
        title: "Skill Already Added",
        description: `"${trimmed}" is already in your skill profile.`,
        variant: "destructive",
      });
    }
    setInputValue("");
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
    toast({
      title: "Skill Removed",
      description: `"${skillToRemove}" has been removed from your profile.`,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(inputValue);
    }
  };

  const analyzeSkills = () => {
    const element = document.getElementById('trends');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Analysis Started",
      description: `Analyzing ${skills.length} skill${skills.length > 1 ? 's' : ''} against market data...`,
    });
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Skill Analysis
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enter Your Skills
            </h2>
            <p className="text-muted-foreground">
              Add your current technical skills to receive personalized decay analysis and upskilling recommendations.
            </p>
          </div>

          {/* Input Card */}
          <div className="glass rounded-2xl p-8">
            {/* Input Field */}
            <div className="flex gap-3 mb-6">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a skill and press Enter..."
                className="flex-1 bg-background/50 border-border h-12"
              />
              <Button 
                onClick={() => addSkill(inputValue)}
                disabled={!inputValue.trim()}
                size="icon"
                className="h-12 w-12"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>

            {/* Selected Skills */}
            {skills.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-3">Your skills ({skills.length})</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="skill"
                      className="pl-3 pr-2 py-1.5 gap-2"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="hover:bg-muted rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Suggested Skills */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Suggested skills</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_SKILLS.filter(s => !skills.includes(s)).map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary transition-colors"
                    onClick={() => addSkill(skill)}
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Analyze Button */}
            {skills.length > 0 && (
              <Button variant="hero" size="lg" className="w-full mt-8" onClick={analyzeSkills}>
                <Sparkles className="w-4 h-4 mr-2" />
                Analyze {skills.length} Skill{skills.length > 1 ? 's' : ''}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
