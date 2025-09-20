import { GraduationCap, Briefcase } from "lucide-react";

const timelineData = [
  // Latest education
  {
    type: "education",
    title: "Master’s in Information Systems",
    org: "Deakin University (Australia)",
    date: "2026 – 2028",
    details: [
      "Specialization in Project Management for IS.",
      "Focus on data systems, cloud, and enterprise tools.",
    ],
  },

  // Certifications
  {
    type: "certification",
    title: "Certified Associate in Project Management (CAPM)",
    org: "Project Management Institute (PMI)",
    date: "2025",
    details: [
      "PMI global certification covering project management fundamentals.",
      "Knowledge in scheduling, risk management, and process groups.",
    ],
  },
  {
    type: "certification",
    title: "Google Project Management",
    org: "Google / Coursera",
    date: "2025",
    details: [
      "Focused on Agile, Scrum, and hybrid project management approaches.",
      "Hands-on with tools like Jira, MS Project, and Confluence.",
    ],
  },

  // Work experience
  {
    type: "experience",
    title: "Junior Software Developer",
    org: "Technomind Solutions, Belagavi",
    date: "Apr 2024 – Jul 2025",
    details: [
      "Developed modular UI components using ReactJS for client-specific web applications.",
      "Collaborated in Agile teams, utilizing Jira and Confluence for task management and documentation.",
      "Contributed to planning and delivery timelines, gaining exposure to real-world software project workflows.",
    ],
  },
  {
    type: "experience",
    title: "Co-Founder",
    org: "Really Clothing, Pune",
    date: "Jan 2024 – Jun 2025",
    details: [
      "Managed end-to-end brand operations, including supply chain, inventory, and customer fulfillment.",
      "Oversaw budgeting, marketing campaigns, and vendor negotiations, applying core project management principles.",
      "Built and scaled a streetwear startup, coordinating cross-functional tasks under tight timelines.",
    ],
  },
  {
    type: "experience",
    title: "Intern",
    org: "S J Contracts Pvt Ltd, Baner, Pune",
    date: "Jan 2023 – Apr 2023",
    details: [
      "Supported site engineers in scheduling, material tracking, and contractor coordination.",
      "Assisted in cost estimation and project documentation aligned with construction standards.",
      "Gained practical exposure to project execution and monitoring on active construction sites.",
    ],
  },

  // Education
  {
    type: "education",
    title: "PG Diploma in Advanced Computing",
    org: "C-DAC ACTS ATC – IET, Pune",
    date: "2023 – 2024",
    details: [
      "Postgraduate diploma in advanced computing.",
      "Strengthened expertise in software development and IT systems.",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering (Civil)",
    org: "MIT Art, Design and Technology University",
    date: "2020 – 2023",
    details: [
      "Projects on database systems and retrofitting.",
      "Involved in TEDx, Rotaract, and Human Library initiatives.",
    ],
  },
  {
    type: "education",
    title: "Diploma in Civil Engineering",
    org: "AISSMS Polytechnic, Pune",
    date: "2017 – 2020",
    details: ["Completed diploma with technical foundation in engineering."],
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative isolate overflow-hidden bg-[#2c487c] rounded-[48px] sm:rounded-[64px] py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2c487c] to-[#223b68]" />

      <div className="relative mx-auto max-w-4xl">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My{" "}
            <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-[#D7E056] after:rounded-sm">
              Journey
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            A combined view of my academic path, certifications, and professional experiences.
          </p>
        </div>

        {/* timeline */}
        <div className="relative border-l border-white/20 pl-6 space-y-12">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative">
              {/* dot */}
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#D7E056] border-2 border-[#2c487c]" />

              {/* content */}
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  {item.type === "education" || item.type === "certification" ? (
                    <GraduationCap size={18} className="text-[#D7E056]" />
                  ) : (
                    <Briefcase size={18} className="text-[#D7E056]" />
                  )}
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  {item.org} • {item.date}
                </p>
                <ul className="mt-2 text-sm text-white/80 list-disc pl-5 space-y-1">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}