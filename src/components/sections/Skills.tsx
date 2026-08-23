import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Bot,
  Braces,
  Building2,
  Cloud,
  DatabaseZap,
  Gauge,
  GitPullRequest,
  LockKeyhole,
  Network,
  ServerCog
} from "lucide-react";

const skillCategories = [
  {
    icon: Gauge,
    title: "Enterprise Architecture and Strategy",
    description: "Architecture vision, baseline and target states, transition architecture, and transformation roadmaps.",
    skills: ["EA strategy", "TOGAF ADM", "ArchiMate", "OrbusInfinity", "Reference architecture", "Architecture principles", "Technology roadmaps", "Traceability"]
  },
  {
    icon: Building2,
    title: "Business and Portfolio Architecture",
    description: "Business capability maps, operating models, value streams, and application portfolio rationalization.",
    skills: ["Capability mapping", "Value streams", "Operating models", "TIME model", "Technical debt", "Modernize", "Consolidate", "Retire"]
  },
  {
    icon: Bot,
    title: "Enterprise AI, GenAI and Agentic AI",
    description: "Governed AI platform architecture for enterprise copilots, RAG, agents, and intelligent automation.",
    skills: ["GenAI", "LLM architecture", "Enterprise RAG", "Vector search", "AI agents", "LangGraph", "CrewAI", "AI governance"]
  },
  {
    icon: DatabaseZap,
    title: "Data Architecture and Governance",
    description: "AI-ready data platforms, metadata, lineage, lakehouse architecture, and enterprise information management.",
    skills: ["Data strategy", "Data governance", "Metadata", "Lineage", "MDM", "Lakehouse", "Data mesh", "Databricks", "Snowflake"]
  },
  {
    icon: Cloud,
    title: "Cloud and Platform Engineering",
    description: "Secure, scalable AWS, Azure, hybrid-cloud, and multi-cloud architecture for enterprise workloads.",
    skills: ["AWS", "Azure", "GCP", "Landing zones", "Kubernetes", "OpenShift", "Terraform", "GitOps", "CI/CD"]
  },
  {
    icon: LockKeyhole,
    title: "Security, Risk and Resilience",
    description: "Security-by-design, Zero Trust, compliance alignment, operational resilience, and risk management.",
    skills: ["Zero Trust", "IAM", "OAuth2/OIDC", "PKI", "Encryption", "ISO 27001", "NIST", "PCI-DSS", "DR/BCP"]
  }
];

const operatingStrengths = [
  {
    icon: Braces,
    title: "Governance that scales",
    text: "Architecture Review Boards, standards, exceptions, ADRs, reusable patterns, and portfolio-level architecture assurance."
  },
  {
    icon: Network,
    title: "Integrated architecture views",
    text: "Business strategy, capabilities, applications, data, technology, transformation initiatives, and business outcomes connected end to end."
  },
  {
    icon: ServerCog,
    title: "Production operating model",
    text: "Cloud operating models, CCoE patterns, DevSecOps, observability, FinOps, SRE, and operational resilience designed together."
  },
  {
    icon: GitPullRequest,
    title: "Modernization delivery",
    text: "Legacy application modernization, API-first integration, event-driven architecture, microservices, and cloud-native platforms."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-section-gradient py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <Badge variant="outline" className="mb-5">
            Technical depth
          </Badge>
          <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl lg:text-5xl">
            Cross-domain architecture depth for complex enterprise transformation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The profile is intentionally architecture-first: strategy, governance, portfolio modernization, AI,
            data, cloud, security, integration, platform engineering, and executive technology leadership.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="rounded-lg border-border/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="mb-5 flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="rounded-md px-2.5 py-1 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {operatingStrengths.map((item) => (
            <Card key={item.title} className="rounded-lg border-border/70 bg-background/80 p-6 shadow-card">
              <item.icon className="mb-4 h-6 w-6 text-cyan-600" />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
