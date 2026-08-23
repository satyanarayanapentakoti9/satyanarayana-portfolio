import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Mail, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "satyanarayana.pentakoti9@gmail.com",
    href: "mailto:satyanarayana.pentakoti9@gmail.com",
    action: "Send email"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 581973579",
    href: "tel:+971581973579",
    action: "Call"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/satyanarayanapentakoti9",
    href: "https://github.com/satyanarayanapentakoti9",
    action: "View profile"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl lg:text-5xl">
            Let us talk about enterprise transformation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Satyanarayana is positioned for Principal Enterprise Architect, enterprise transformation, AI strategy,
            cloud and data architecture, architecture governance, and regulated banking modernization conversations.
          </p>
        </div>

        <div className="mx-auto grid min-w-0 max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <Card className="min-w-0 rounded-lg border-border/70 p-6 shadow-card sm:p-8">
            <h3 className="text-2xl font-bold text-foreground">Contact</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              For professional conversations, email is the best starting point. Phone is included as listed on the resume.
            </p>

            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex min-w-0 items-start gap-4 rounded-lg border border-border p-4 transition-all duration-200 hover:border-primary/40 hover:bg-muted/50"
                >
                  <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                    <p className="break-all font-semibold text-foreground">{method.value}</p>
                  </div>
                  <span className="hidden rounded-md border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary sm:inline-flex">
                    {method.action}
                  </span>
                </a>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="min-w-0 rounded-lg border-border/70 p-6 shadow-card sm:p-8">
              <div className="mb-5 inline-flex rounded-md bg-cyan-50 p-3 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                <Download className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Resume</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Download the resume for the complete career timeline, skills matrix, selected project experience,
                education, and certifications.
              </p>
              <Button className="mt-6 w-full rounded-md" asChild>
                <a href="/resume.pdf" download="Satyanarayana_Pentakoti_Principal_Enterprise_Architect_UAE.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </Card>

            <Card className="min-w-0 rounded-lg border-border/70 p-6 shadow-card sm:p-8">
              <div className="mb-5 flex min-w-0 items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Based in Abu Dhabi, UAE, working across regulated enterprise and global delivery environments</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Best-fit conversations</h3>
              <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
                <p>Principal Enterprise Architect and Enterprise Transformation leadership</p>
                <p>AI strategy, GenAI, Agentic AI, RAG, responsible AI, and AI governance</p>
                <p>Cloud, platform engineering, CCoE, DevSecOps, SRE, and FinOps operating models</p>
                <p>Architecture governance, application rationalization, data architecture, and regulated modernization</p>
              </div>
            </Card>
          </div>
        </div>

        <footer className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Satyanarayana Pentakoti</p>
          <p className="mt-2">Principal Enterprise Architect | AI, Data, Cloud, Governance, and Enterprise Transformation</p>
          <p className="mt-2">(c) 2026 Satyanarayana Pentakoti. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
