import { getResumeDownloadFilename, prepareResumeDownload } from "@/lib/resume";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Calendar, Download, GraduationCap, MapPin } from "lucide-react";

const experience = [
  {
    role: "Enterprise Architect - AI, Data & Cloud Transformation",
    organization: "Abu Dhabi Commercial Bank (ADCB)",
    period: "Jul 2025 - Present",
    location: "Abu Dhabi, UAE",
    focus: "Enterprise target-state architecture, AI strategy, data, cloud, integration, security, and digital banking platforms",
    highlights: [
      "Define enterprise-wide current-state, transition-state, and target-state architectures aligned to business priorities, regulation, and long-term transformation objectives.",
      "Lead architecture governance through principles, standards, reference architectures, reusable patterns, ADRs, Architecture Review Board activities, and architecture assurance.",
      "Shape enterprise AI strategy for GenAI, Agentic AI, RAG, copilots, intelligent automation, responsible AI, model risk, and AI model lifecycle management."
    ]
  },
  {
    role: "Enterprise Cloud & Solution Architect",
    organization: "HCL Technologies Ltd.",
    period: "Nov 2020 - Aug 2024",
    location: "Chennai, India",
    focus: "Cloud modernization, enterprise data architecture, AI-ready platforms, CCoE, DevSecOps, Kubernetes, and multi-cloud transformation",
    highlights: [
      "Defined enterprise cloud architecture blueprints, target-state architectures, transformation roadmaps, and Cloud Center of Excellence governance models.",
      "Architected AWS, Azure, hybrid-cloud, and multi-cloud platforms with landing zones, security, resilience, observability, FinOps, and platform engineering practices.",
      "Delivered outcomes including 60% lower infrastructure provisioning effort, 40% performance improvement, and 50% reduction in deployment failures."
    ]
  },
  {
    role: "Senior Software Engineer - Solution & Cloud Architecture",
    organization: "Emirates Group",
    period: "Jul 2018 - Apr 2020",
    location: "Dubai, UAE",
    focus: "Aviation platform modernization, cloud-native architecture, integration, resilience, and observability",
    highlights: [
      "Supported modernization of enterprise aviation platforms across airline operations, passenger services, digital channels, and global business functions.",
      "Designed cloud-native, containerized, microservices, API-first, and event-driven patterns for scalable enterprise systems.",
      "Contributed to high-availability, disaster-recovery, performance, security-by-design, monitoring, and architecture documentation practices."
    ]
  },
  {
    role: "Lead Consultant - Enterprise Cloud & Solution Architecture",
    organization: "Capgemini",
    period: "Jan 2017 - Jul 2018",
    location: "Chennai, India",
    focus: "BFSI cloud transformation, modernization strategy, architecture governance, Zero Trust, and DevSecOps",
    highlights: [
      "Led cloud architecture initiatives supporting enterprise BFSI transformation programs and hybrid-cloud modernization.",
      "Defined reference architectures, cloud migration plans, security and compliance frameworks, Kubernetes platform initiatives, and disaster-recovery architecture.",
      "Reduced cloud operational costs by 30%, improved disaster-recovery readiness, and strengthened security posture through Zero Trust implementation."
    ]
  },
  {
    role: "Project Lead - Application & Cloud Architecture",
    organization: "Tech Mahindra Ltd.",
    period: "Oct 2015 - Dec 2016",
    location: "Hyderabad, India",
    focus: "Application modernization, cloud-native architecture, Terraform, Kubernetes, CI/CD, and enterprise application delivery",
    highlights: [
      "Led cloud modernization and digital transformation initiatives for enterprise applications.",
      "Implemented Terraform-based Infrastructure as Code, Kubernetes platform deployment, monitoring, observability, and DevSecOps delivery models.",
      "Delivered scalable insurance and enterprise application capabilities using Java/J2EE, Oracle, web technologies, and structured application design."
    ]
  },
  {
    role: "Associate Consultant / Senior Associate Consultant",
    organization: "Polaris Financial Technology Ltd. and UST Global",
    period: "Jun 2010 - Sep 2015",
    location: "India",
    focus: "Banking, trade repository, core banking, insurance, Java/J2EE, integration, and full-stack enterprise delivery",
    highlights: [
      "Built financial services platforms including global trade repository, core banking, forms portal, and insurance application capabilities.",
      "Worked across Java/J2EE, Spring, Struts, Hibernate, JMS, EJB, AngularJS, Oracle, Unix, Web Services, and enterprise deployment stacks.",
      "Established hands-on engineering foundations that later expanded into solution architecture, cloud transformation, and enterprise architecture leadership."
    ]
  }
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Andhra University, India",
    year: "2010"
  }
];

const credentials = [
  "TOGAF Enterprise Architecture Practitioner",
  "ArchiMate 3 Practitioner",
  "AWS Solutions Architect Professional",
  "AWS DevOps Engineer Professional",
  "AWS Security Specialty",
  "AWS AI Practitioner",
  "AWS Machine Learning Engineer",
  "AWS Generative AI Developer",
  "Azure Solutions Architect Expert",
  "Azure Cybersecurity Architect Expert",
  "Azure AI Engineer Associate",
  "Azure DevOps Engineer Expert",
  "Google Cloud Professional Cloud Architect",
  "Google Cloud Professional Machine Learning Engineer",
  "Certified Kubernetes Administrator",
  "Certified Kubernetes Application Developer",
  "HashiCorp Terraform Associate",
  "PMI PMP",
  "CSM and CSPO",
  "CISSP",
  "FinOps Certified Practitioner",
  "ITIL 4 Strategic Leader",
  "SAFe for Architects",
  "OrbusInfinity Certification"
];

const Resume = () => {
  return (
    <section id="resume" className="bg-section-gradient py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-5">
              Leadership timeline
            </Badge>
            <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl lg:text-5xl">
              15+ years from enterprise engineering to AI, data, cloud, and banking architecture leadership.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A compact public view aligned to the resume. The PDF contains the full detailed timeline, skills matrix,
              selected projects, education, and certifications.
            </p>
          </div>
          <Button size="lg" className="w-fit rounded-md bg-primary hover:bg-primary/90" asChild>
            <a href="/resume.pdf" download={getResumeDownloadFilename()} onClick={prepareResumeDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download resume
            </a>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <Card className="rounded-lg border-border/70 p-6 shadow-card">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-md bg-primary/10 p-3 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={job.role} className="relative">
                  {index !== experience.length - 1 && (
                    <div className="absolute left-4 top-12 h-full w-px bg-border" />
                  )}
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <div className="h-3 w-3 rounded-full bg-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{job.role}</h4>
                          <p className="font-medium text-primary">{job.organization}</p>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {job.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Focus: </span>
                        {job.focus}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {job.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-lg border-border/70 p-6 shadow-card">
              <div className="mb-5 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.degree} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-semibold text-foreground">{item.degree}</h4>
                    <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.year}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-lg border-border/70 p-6 shadow-card">
              <div className="mb-5 flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Credentials</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {credentials.map((credential) => (
                  <Badge key={credential} variant="secondary" className="rounded-md px-2.5 py-1 text-xs">
                    {credential}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="rounded-lg border-border/70 bg-primary/5 p-6 shadow-card">
              <h3 className="text-xl font-bold text-foreground">Current direction</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Enterprise architecture leadership for AI, data, cloud, governance, application modernization,
                security, and operating-model transformation in regulated banking and enterprise environments.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
