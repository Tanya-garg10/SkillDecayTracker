import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SkillInput } from "@/components/SkillInput";
import { TrendChart } from "@/components/TrendChart";
import { AtRiskSkills } from "@/components/AtRiskSkills";
import { UpskillResources } from "@/components/UpskillResources";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [skills, setSkills] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SkillInput skills={skills} setSkills={setSkills} />
        <TrendChart skills={skills} />
        <AtRiskSkills />
        <UpskillResources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
