import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Building2, CloudCog, FileSearch, Github, Landmark, Network, ShieldCheck } from "lucide-react";

const caseStudies = [
  {
    icon: Landmark,
    title: "Enterprise AI, Data and Cloud Transformation",
    context: "Banking enterprise architecture",
    description:
      "Defined target-state architecture across business applications, cloud, data, AI, integration, security, and digital banking platforms.",
    architecture:
      "Business capability maps, value streams, enterprise architecture principles, reference architectures, AI target architecture, cloud platform strategy, data governance, API-first integration, and architecture KPIs.",
    outcome:
      "Improved executive visibility into strategic modernization priorities, architecture risks, technology dependencies, and measurable business outcomes.",
    tags: ["Enterprise Architecture", "Banking", "AI Strategy", "Data Governance", "Cloud Transformation", "ARB"]
  },
  {
    icon: ShieldCheck,
    title: "Architecture Governance and Review Board",
    context: "Enterprise design authority",
    description:
      "Established governance practices for strategic programs across business, application, data, security, cloud, and engineering domains.",
    architecture:
      "Architecture Review Board processes, architecture assurance, ADRs, technology standards, reusable patterns, exception handling, risk management, and standards compliance.",
    outcome:
      "Drove consistent architecture decisions across 15+ delivery teams while improving alignment with security, resilience, interoperability, and regulatory expectations.",
    tags: ["Governance", "ADRs", "Standards", "Risk", "Architecture Assurance", "TOGAF"]
  },
  {
    icon: FileSearch,
    title: "Enterprise RAG and Agentic AI Outcomes",
    context: "Enterprise AI platform architecture",
    description:
      "Defined AI architecture patterns for enterprise knowledge platforms, copilots, AI agents, intelligent automation, and model lifecycle controls.",
    architecture:
      "LLM architecture, enterprise RAG, vector search, agent orchestration, MLOps, LLMOps, model monitoring, responsible AI guardrails, model risk management, and AI observability.",
    outcome:
      "Resume outcomes include 80% faster knowledge retrieval, 35% productivity improvement through AI assistants, and 50% lower manual support effort through Agentic AI automation.",
    tags: ["GenAI", "Agentic AI", "RAG", "MLOps", "Responsible AI", "Model Risk"]
  },
  {
    icon: CloudCog,
    title: "Cloud Center of Excellence and Multi-Cloud Modernization",
    context: "Enterprise cloud transformation",
    description:
      "Designed enterprise cloud blueprints, landing zones, platform engineering patterns, and operating models across AWS, Azure, hybrid-cloud, and multi-cloud environments.",
    architecture:
      "Cloud governance, landing zones, IAM, networking, security guardrails, Kubernetes, OpenShift, Terraform, GitOps, DevSecOps, observability, FinOps, and SRE practices.",
    outcome:
      "Reduced infrastructure provisioning effort by 60%, improved application performance by 40%, and reduced deployment failures by 50% through DevSecOps automation.",
    tags: ["AWS", "Azure", "Kubernetes", "OpenShift", "Terraform", "FinOps"]
  },
  {
    icon: Network,
    title: "Aviation Platform Modernization",
    context: "Mission-critical enterprise systems",
    description:
      "Contributed to modernization of aviation platforms supporting airline operations, passenger services, digital channels, and global business functions.",
    architecture:
      "Cloud-native and containerized architecture patterns, microservices, API-first integration, event-driven architecture, high availability, disaster recovery, observability, and security-by-design.",
    outcome:
      "Improved scalability, resilience, deployment consistency, and operational visibility for platforms supporting global 24x7 business operations.",
    tags: ["Aviation", "Microservices", "Event-Driven", "API First", "HA/DR", "Observability"]
  },
  {
    icon: Building2,
    title: "BFSI Application and Cloud Modernization",
    context: "Financial services delivery",
    description:
      "Led cloud architecture, digital transformation, and modernization initiatives across BFSI and enterprise application environments.",
    architecture:
      "Hybrid-cloud and multi-cloud architectures, cloud migration planning, Kubernetes platform engineering, DevSecOps operating models, Zero Trust, monitoring, and enterprise reference architectures.",
    outcome:
      "Reduced cloud operational costs by 30%, improved disaster-recovery readiness, strengthened security posture, and established reusable enterprise architecture standards.",
    tags: ["BFSI", "Cloud Migration", "DevSecOps", "Zero Trust", "DR", "Reference Architecture"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-5">
              Architecture case studies
            </Badge>
            <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl lg:text-5xl">
              Public-safe proof of enterprise architecture leadership.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              These summaries convert resume experience into portfolio-ready case studies while avoiding sensitive
              client, employer, and implementation details.
            </p>
          </div>
          <Button variant="outline" className="w-fit rounded-md" asChild>
            <a href="https://github.com/satyanarayanapentakoti9" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Public GitHub
            </a>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.title} className="rounded-lg border-border/70 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-cyan-50 p-3 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                    <study.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-3 rounded-md">
                      {study.context}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground">{study.title}</h3>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="rounded-md" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label={`Open resume details for ${study.title}`}>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>{study.description}</p>
                <p>
                  <span className="font-semibold text-foreground">Architecture: </span>
                  {study.architecture}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Outcome: </span>
                  {study.outcome}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-md px-2.5 py-1 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
