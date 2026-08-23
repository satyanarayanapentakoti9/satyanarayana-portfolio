import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Blocks, BrainCircuit, CloudCog, FileSearch, GitBranch, ShieldCheck, Workflow } from "lucide-react";

const principles = [
  {
    icon: Workflow,
    title: "Connect strategy to execution",
    description: "Business capabilities, value streams, applications, data, platforms, initiatives, and outcomes are linked into one architecture story."
  },
  {
    icon: ShieldCheck,
    title: "Govern decisions clearly",
    description: "Architecture Review Boards, ADRs, standards, reusable patterns, exceptions, and risk controls keep complex portfolios aligned."
  },
  {
    icon: BrainCircuit,
    title: "Make AI enterprise-ready",
    description: "GenAI, Agentic AI, RAG, model lifecycle, responsible AI, model risk, guardrails, and observability are designed as governed platforms."
  },
  {
    icon: CloudCog,
    title: "Modernize with operational discipline",
    description: "Cloud landing zones, Kubernetes, OpenShift, Infrastructure as Code, DevSecOps, FinOps, SRE, and resilience shape delivery."
  }
];

const focusAreas = [
  "Enterprise target-state architecture",
  "Business capability mapping",
  "Application portfolio rationalization",
  "AI-ready data platforms",
  "GenAI, RAG, and Agentic AI",
  "Cloud operating models",
  "Architecture governance",
  "Operational resilience"
];

const About = () => {
  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <Badge variant="outline" className="mb-5 border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950 dark:text-cyan-200">
            Architecture point of view
          </Badge>
          <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl lg:text-5xl">
            I turn enterprise strategy into governed architecture and measurable transformation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My work spans business, application, data, integration, cloud, security, and AI architecture. I help
            organizations understand the current state, define a pragmatic target state, and move through transition
            roadmaps with governance, resilience, and executive clarity.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-lg border-border/70 p-8 shadow-card">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-md bg-primary/10 p-3 text-primary">
                <Blocks className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Enterprise architect with delivery depth</h3>
                <p className="text-sm text-muted-foreground">AI, data, cloud, banking transformation, and architecture governance</p>
              </div>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-7">
                I operate where strategic intent meets complex technology portfolios: target-state architecture,
                transformation roadmaps, operating models, business capability maps, application rationalization,
                platform strategy, and architecture assurance.
              </p>
              <p className="leading-7">
                The strongest architecture work is practical. It reduces risk, makes modernization choices visible,
                improves reuse, strengthens security and resilience, and gives leaders a clear way to prioritize
                investment across business, technology, and regulatory constraints.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div key={area} className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm font-medium text-foreground">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-5">
            {principles.map((principle) => (
              <Card key={principle.title} className="rounded-lg border-border/70 p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-cyan-50 p-3 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="rounded-lg border-border/70 p-6 shadow-card">
            <ShieldCheck className="mb-4 h-6 w-6 text-primary" />
            <div className="text-3xl font-bold text-foreground">15+</div>
            <div className="mt-1 text-sm text-muted-foreground">years across enterprise architecture, cloud, data, AI, and engineering leadership</div>
          </Card>
          <Card className="rounded-lg border-border/70 p-6 shadow-card">
            <FileSearch className="mb-4 h-6 w-6 text-primary" />
            <div className="text-3xl font-bold text-foreground">80%</div>
            <div className="mt-1 text-sm text-muted-foreground">faster knowledge retrieval through enterprise RAG platform outcomes</div>
          </Card>
          <Card className="rounded-lg border-border/70 p-6 shadow-card">
            <GitBranch className="mb-4 h-6 w-6 text-primary" />
            <div className="text-3xl font-bold text-foreground">15+</div>
            <div className="mt-1 text-sm text-muted-foreground">delivery teams influenced through enterprise standards and architecture decisions</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
