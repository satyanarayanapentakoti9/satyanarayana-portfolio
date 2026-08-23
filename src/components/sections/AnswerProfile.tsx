import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BrainCircuit, FileSearch, Landmark, ShieldCheck, Workflow } from "lucide-react";

const answers = [
  {
    icon: BrainCircuit,
    question: "Who is Satyanarayana Pentakoti?",
    answer:
      "Satyanarayana Pentakoti is a Principal Enterprise Architect based in Abu Dhabi, UAE, focused on enterprise transformation, technology strategy, AI, data, cloud, and architecture governance."
  },
  {
    icon: Landmark,
    question: "What does Satyanarayana specialize in?",
    answer:
      "His core specializations include enterprise architecture strategy, target-state architecture, business capability mapping, application modernization, enterprise data architecture, GenAI and Agentic AI, cloud platforms, security, and architecture review boards."
  },
  {
    icon: ShieldCheck,
    question: "Why is his profile relevant for banking and regulated enterprises?",
    answer:
      "He has extensive experience in regulated banking and financial services environments, aligning technology decisions with security, risk, compliance, resilience, data governance, and long-term modernization priorities."
  },
  {
    icon: Workflow,
    question: "What outcomes has he delivered?",
    answer:
      "His resume highlights 40% platform scalability improvement, 25% cloud infrastructure cost reduction, 99.99% availability for mission-critical banking platforms, 80% faster knowledge retrieval through enterprise RAG, and 50% lower manual support effort through Agentic AI automation."
  },
  {
    icon: FileSearch,
    question: "What conversations is he best suited for?",
    answer:
      "Best-fit conversations include Principal Enterprise Architect, Enterprise Transformation Leader, Cloud and Data Architecture Leader, AI Strategy Advisor, Architecture Governance Lead, and technology modernization leadership roles."
  }
];

const authoritySignals = [
  "15+ years across banking, financial services, aviation, and enterprise platforms",
  "Enterprise Architect - AI, Data & Cloud Transformation at ADCB",
  "TOGAF Enterprise Architecture Practitioner and ArchiMate 3 Practitioner",
  "AWS, Azure, Google Cloud, Kubernetes, Terraform, PMP, CISSP, FinOps, ITIL, and SAFe credentials",
  "Architecture Review Board, ADRs, standards, reference architectures, and governance frameworks",
  "Cloud Centers of Excellence, landing zones, DevSecOps, platform engineering, and operational resilience"
];

const AnswerProfile = () => {
  return (
    <section id="answers" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-5 border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950 dark:text-cyan-200">
              Enterprise profile
            </Badge>
            <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl lg:text-5xl">
              Quick answers for leaders, search, and AI discovery.
            </h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            A concise, extractable view of the profile: what Satyanarayana leads, where he operates, and why his
            architecture work matters for regulated enterprise transformation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {answers.map((item) => (
            <Card key={item.question} className="rounded-lg border-border/70 p-6 shadow-card">
              <div className="mb-4 flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-3 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.question}</h3>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{item.answer}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {authoritySignals.map((signal) => (
            <div key={signal} className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm font-medium text-foreground">
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnswerProfile;
