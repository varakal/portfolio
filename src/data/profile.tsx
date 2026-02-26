export interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    location: string;
    bullets: string[];
  }
  
  export interface EducationItem {
    school: string;
    degree: string;
    year: string;
  }
  
  export interface Profile {
    name: string;
    title: string;
    location: string;
    email: string;
    linkedin: string;
    summary: string;
    skills: string[];
    experience: ExperienceItem[];
    education: EducationItem[];
  }
  
  export const profile: Profile = {
    name: "Vivek Arakali Nagaraja Rao",
    title:
      "Senior Software Engineer | AI & Automation | Distributed Systems | Cloud Platforms | Mentorship & Scale",
    location: "Austin, Texas Metropolitan Area",
  
    email: "vivekan1993@gmail.com",
    linkedin: "https://www.linkedin.com/in/vivek-arakali-nagaraja-rao",
  
    summary: `
  I'm a Senior Software Engineer with 7+ years of experience building AI-driven workflows,
  distributed systems, and cloud-scale platforms.
  
  At Oracle, I've led the development of Agentic AI workflows that automate healthcare scheduling,
  generate patient summaries, and orchestrate downstream tasks while ensuring PHI/PII privacy and compliance.
  
  Before focusing on AI, I contributed to large-scale distributed systems in Terraform and Identity services,
  delivering automation, reliability, and performance improvements across global regions.
  I also mentor junior engineers through brown bags, PR/design reviews, and knowledge-sharing sessions.
  
  My core strengths include AI workflow automation, backend/frontend development, distributed systems,
  cloud platforms, and mentoring technical teams. I'm passionate about building scalable,
  reliable systems that combine AI, cloud, and operational excellence.
  `,
  
    skills: [
      "C++",
      "C#",
      "Software Development",
      "Distributed Systems",
      "Cloud Platforms",
      "AI Workflow Automation",
      "React",
      "TypeScript",
      "Terraform",
      "OCI",
    ],
  
    experience: [
      {
        company: "Oracle",
        role: "Senior Member of Technical Staff - Agentic AI",
        date: "Nov 2025 – Present",
        location: "Austin, TX",
        bullets: [
          "Developed AI agents for healthcare workflow automation, summaries, and orchestration",
          "Built clinician-facing interfaces for consuming AI outputs",
          "Designed PHI/PII-compliant AI workflows and pipelines",
          "Created feature-flag system for controlled and scalable AI rollout",
        ],
      },
      {
        company: "Oracle",
        role: "Senior Member of Technical Staff – Terraform Provider",
        date: "Jun 2024 – Nov 2025",
        location: "Austin, TX",
        bullets: [
          "Implemented Terraform upgrade metrics integrated with Grafana",
          "Rolled out auto Terraform upgrade daemon to all OCI regions",
          "Upgraded Dropwizard 3 + Wfaas 14 improving maintainability",
          "Improved oncall tooling reducing load by 30%",
        ],
      },
      {
        company: "Oracle",
        role: "Senior Member of Technical Staff – Identity and Access Management",
        date: "Sep 2022 – Jun 2024",
        location: "Seattle, WA",
        bullets: [
          "Developed network-based access control APIs used by 15 teams",
          "Built automated cross-team integration test suite",
          "Cut region build time by 50% through automation",
          "Upgraded load balancers preventing large-scale incidents",
        ],
      },
      {
        company: "Honeywell",
        role: "Software Engineer",
        date: "2018 – 2019",
        location: "Atlanta, GA",
        bullets: [
          "Built reusable React component libraries for multi-team use",
          "Developed C# REST APIs and connected them to UI functionality",
          "Deployed services and frontend apps to OpenShift using Docker",
          "Created React Native apps for Honeywell headset devices",
        ],
      },
    ],
  
    education: [
      {
        school: "Clemson University",
        degree: "Master’s in Computer Science",
        year: "2016 – 2018",
      },
      {
        school: "Dayananda Sagar College of Engineering",
        degree: "BE, Information Science",
        year: "2011 – 2015",
      },
    ],
  };
  