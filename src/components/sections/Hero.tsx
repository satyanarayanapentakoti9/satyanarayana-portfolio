import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import profilePicture from "@/assets/profile-picture.jpg";

interface HeroProps {
  onSectionClick: (section: string) => void;
}

const proofPoints = [
  "Enterprise Architecture",
  "AI Strategy",
  "Data Architecture",
  "Cloud Transformation",
  "Architecture Governance",
  "Banking Platforms",
  "TOGAF"
];

const Hero = ({ onSectionClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-[92svh] overflow-hidden bg-[#07121a]">
      <img
        src={profilePicture}
        alt="Satyanarayana Pentakoti, Principal Enterprise Architect"
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] opacity-[0.26] md:opacity-[0.36]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,26,0.99)_0%,rgba(7,18,26,0.9)_47%,rgba(7,18,26,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(7,18,26,0)_0%,hsl(var(--background))_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className={`max-w-4xl space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Badge className="border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-cyan-100 hover:bg-white/10">
            Principal Enterprise Architect | Abu Dhabi, UAE
          </Badge>

          <div className="space-y-5">
            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl">
              Enterprise transformation leader for AI, data, cloud, and banking modernization.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Satyanarayana Pentakoti brings 15+ years across enterprise architecture, solution architecture, cloud
              transformation, GenAI, data platforms, governance, and mission-critical digital modernization across
              banking, financial services, aviation, and global enterprise environments.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-md border border-white/[0.12] bg-white/[0.08] px-3 py-2 text-sm font-medium text-slate-100"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => onSectionClick("projects")} className="bg-cyan-400 px-7 font-semibold text-slate-950 hover:bg-cyan-300">
              View case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 px-7 font-semibold text-white hover:bg-white/[0.12]" asChild>
              <a href="https://github.com/satyanarayanapentakoti9" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="ghost" onClick={() => onSectionClick("contact")} className="px-7 font-semibold text-slate-100 hover:bg-white/10 hover:text-white">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-slate-300">
            <a className="inline-flex items-center gap-2 transition-colors hover:text-white" href="/resume.pdf" download="Satyanarayana_Pentakoti_Principal_Enterprise_Architect_UAE.pdf">
              <Download className="h-4 w-4" />
              Download resume
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Abu Dhabi, United Arab Emirates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
