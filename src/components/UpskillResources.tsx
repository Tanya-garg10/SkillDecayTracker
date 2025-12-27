import { BookOpen, ExternalLink, Star, Clock, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const RESOURCES = [
  {
    title: "Rust for JavaScript Developers",
    provider: "Exercism",
    type: "Interactive Course",
    duration: "40 hours",
    rating: 4.9,
    learners: "15.2K",
    skills: ["Rust", "Systems Programming"],
    trending: true,
    url: "https://exercism.org/tracks/rust",
  },
  {
    title: "AWS Solutions Architect",
    provider: "AWS Training",
    type: "Certification Path",
    duration: "80 hours",
    rating: 4.8,
    learners: "285K",
    skills: ["AWS", "Cloud Architecture"],
    trending: true,
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    title: "Machine Learning Engineering",
    provider: "DeepLearning.AI",
    type: "Specialization",
    duration: "120 hours",
    rating: 4.9,
    learners: "450K",
    skills: ["Python", "TensorFlow", "MLOps"],
    trending: false,
    url: "https://www.deeplearning.ai/courses/machine-learning-specialization/",
  },
  {
    title: "Modern TypeScript Patterns",
    provider: "Total TypeScript",
    type: "Video Course",
    duration: "25 hours",
    rating: 4.9,
    learners: "32K",
    skills: ["TypeScript", "Advanced Types"],
    trending: true,
    url: "https://www.totaltypescript.com/",
  },
  {
    title: "Kubernetes in Production",
    provider: "Linux Foundation",
    type: "Certification",
    duration: "60 hours",
    rating: 4.7,
    learners: "89K",
    skills: ["Kubernetes", "DevOps"],
    trending: false,
    url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  },
  {
    title: "Building LLM Applications",
    provider: "OpenAI",
    type: "Workshop Series",
    duration: "20 hours",
    rating: 4.8,
    learners: "125K",
    skills: ["AI/ML", "Python", "APIs"],
    trending: true,
    url: "https://platform.openai.com/docs/tutorials",
  },
];

export const UpskillResources = () => {
  return (
    <section id="resources" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="info" className="mb-4">
            <BookOpen className="w-3 h-3 mr-1" />
            Learning Pathways
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recommended Upskill Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated courses and certifications aligned with projected market demand and your career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {RESOURCES.map((resource, index) => (
            <div 
              key={resource.title}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all group animate-slide-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="text-xs">
                  {resource.type}
                </Badge>
                {resource.trending && (
                  <Badge variant="success" className="text-xs">
                    Trending
                  </Badge>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.provider}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning fill-warning" />
                  <span>{resource.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{resource.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{resource.learners}</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
              >
                View Course
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
