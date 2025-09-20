import { ExternalLink, Github } from "lucide-react";

/* ─────────── PROJECTS DATA ─────────── */
const projectsData = [
  {
    title: "Sales & Revenue Dashboard",
    desc: "Built interactive Power BI dashboard with KPIs and drill-through insights for decision-making.",
    tags: ["Power BI", "Data Analysis", "Visualization"],
    img: "https://dummyimage.com/600x400/1f2f55/ffffff&text=Dashboard+Preview",
    link: "#",
    github: "#",
  },
  {
    title: "Student Information System Database",
    desc: "Designed relational schema and ER diagrams with SQL queries, role-based access, and reports.",
    tags: ["MySQL", "PostgreSQL", "Database Design"],
    img: "https://dummyimage.com/600x400/1f2f55/ffffff&text=Database+ERD",
    link: "#",
    github: "#",
  },
  {
    title: "Agile Project Tracking",
    desc: "Simulated sprints in Jira and built Gantt charts in MS Project for planning and tracking.",
    tags: ["Jira", "MS Project", "Agile"],
    img: "https://dummyimage.com/600x400/1f2f55/ffffff&text=Jira+Board",
    link: "#",
    github: "#",
  },
  {
    title: "CRM Workflow Automation",
    desc: "Built a sales pipeline in Salesforce/HubSpot with automation and reporting.",
    tags: ["Salesforce", "HubSpot", "Automation"],
    img: "https://dummyimage.com/600x400/1f2f55/ffffff&text=CRM+Workflow",
    link: "#",
    github: "#",
  },
  {
    title: "Cloud Deployment — Web App",
    desc: "Deployed a React app to AWS S3 with CloudFront, IAM roles, SSL, and monitoring.",
    tags: ["AWS", "Cloud", "Deployment"],
    img: "https://dummyimage.com/600x400/1f2f55/ffffff&text=AWS+Deployment",
    link: "#",
    github: "#",
  },
  {
    title: "Cybersecurity Mini-Project",
    desc: "Scanned vulnerabilities with Wireshark & OWASP ZAP, documented risks and fixes.",
    tags: ["Wireshark", "OWASP", "Security"],
    img: "https://dummyimage.com/600x400/1f2f55/ffffff&text=Security+Scan",
    link: "#",
    github: "#",
  },
];

/* ─────────── COMPONENT ─────────── */
export default function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#2c487c] rounded-[48px] sm:rounded-[64px] py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* lighter background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2c487c] to-[#294476]" />

      <div className="relative mx-auto max-w-6xl">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Projects{" "}
            <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-[#D7E056] after:rounded-sm">
              & Case Studies
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Practical projects that demonstrate my skills in data, systems, cloud, and project management.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map(({ title, desc, tags, img, link, github }, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#1f2f55] hover:bg-[#27396c] transition-colors shadow-lg shadow-black/30 overflow-hidden flex flex-col"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/80 flex-1">{desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full bg-white/10 text-white/80 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#D7E056] hover:underline"
                  >
                    <ExternalLink size={14} /> View
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#D7E056] hover:underline"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}