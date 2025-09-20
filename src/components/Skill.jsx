import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────── SKILLS DATA ─────────── */
const skillCategoriesData = [
  {
    step: "STEP 1",
    title: "Databases (Core for IS)",
    bullets: [
      "SQL (MySQL, PostgreSQL, Microsoft SQL Server, Oracle DB)",
      "Database modeling (ERD tools: Lucidchart, draw.io)",
      "NoSQL basics (MongoDB, Cassandra)",
    ],
  },
  {
    step: "STEP 2",
    title: "Data Analysis & Visualization",
    bullets: [
      "Excel (Advanced): Pivot tables, Power Query, basic VBA",
      "BI Tools: Power BI, Tableau, Qlik",
      "Analytics: Python (pandas, NumPy, matplotlib) or R",
    ],
  },
  {
    step: "STEP 3",
    title: "Programming & APIs",
    bullets: [
      "Python: data manipulation, automation, APIs",
      "JavaScript basics for dashboards & integrations",
      "APIs / REST / JSON",
    ],
  },
  {
    step: "STEP 4",
    title: "Systems & Enterprise Software",
    bullets: [
      "ERP exposure: SAP, Oracle NetSuite, Microsoft Dynamics",
      "CRM platforms: Salesforce, HubSpot",
      "Cloud basics: AWS / Azure / GCP",
    ],
  },
  {
    step: "STEP 5",
    title: "Networking & Security Basics",
    bullets: [
      "Network fundamentals (Wireshark, Packet Tracer)",
      "Cybersecurity basics: OWASP Top 10, IAM, firewalls",
    ],
  },
  {
    step: "STEP 6",
    title: "Project & Collaboration Tools",
    bullets: [
      "Project Management: Jira, MS Project, Trello, Asana",
      "Collaboration: Confluence, Slack, Git/GitHub",
      "MS Office Suite (advanced)",
    ],
  },
  {
    step: "STEP 7",
    title: "Other Important Tools",
    bullets: [
      "Version Control: Git / GitHub / GitLab",
      "ETL & Data Workflow: Alteryx, Talend, SSIS",
      "Service Management: ServiceNow, Zendesk",
    ],
  },
];

/* ─────────── COMPONENT ─────────── */
export default function SkillsCarousel() {
  const trackRef = useRef(null);

  // Scroll exactly one card at a time
  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = track.firstElementChild?.clientWidth || 0;
    const gap = 24; // Tailwind gap-6 (6 × 4px)
    track.scrollBy({
      left: dir === "left" ? -(cardW + gap) : cardW + gap,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="skills"
      className="
        relative isolate overflow-hidden bg-[#294476] 
        rounded-[48px] sm:rounded-[64px] 
        py-24 px-4 sm:px-6 lg:px-8
      "
    >
      {/* blue gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#294476] to-[#223b68]" />

      <div className="relative mx-auto max-w-6xl">
        {/* ────── HEADING & ARROWS ROW ────── */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          {/* heading + subtitle */}
          <div className="text-center md:text-left md:max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Core Skills{" "}-
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-[#D7E056] after:rounded-sm">
                Information Systems
              </span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/80">
              Key areas I work with regularly — databases, BI, cloud fundamentals, project tools, and more.
            </p>
          </div>

          {/* arrows */}
          <div className="hidden md:flex gap-3 mt-8 md:mt-0">
            <button
              onClick={() => scrollByCard("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffffff1a] text-white hover:bg-[#ffffff33] transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffffff1a] text-white hover:bg-[#ffffff33] transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ────── CARD TRACK ────── */}
        <motion.div
          ref={trackRef}
          className="
            mt-10 flex gap-6 overflow-x-auto pb-3
            snap-x snap-mandatory scroll-smooth
            [&::-webkit-scrollbar]:hidden
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {skillCategoriesData.map(({ step, title, bullets }, idx) => (
            <div
              key={idx}
              className="
                w-[260px] sm:w-[280px] flex-shrink-0 snap-start
                rounded-xl bg-[#1f2f55]
                shadow-lg shadow-black/10 p-8
              "
            >
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[#D7E056]">
                {step}
              </h3>
              <h4 className="text-[22px] md:text-2xl font-bold text-white mt-1">
                {title}
              </h4>

              <ul className="mt-4 space-y-2 pl-4 text-white/80 text-sm leading-relaxed list-disc">
                {bullets.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}