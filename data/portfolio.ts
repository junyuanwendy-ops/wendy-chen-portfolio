import {
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  ClipboardCheck,
  Database,
  FileSpreadsheet,
  Landmark,
  LineChart,
  Network,
  PenLine,
  Scale,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Junyuan (Wendy) Chen",
  shortName: "Wendy Chen",
  positioning: "Accounting, finance, and data analytics candidate",
  summary:
    "I connect accounting evidence, business context, and data workflows to make decisions easier to review, explain, and improve.",
  location: "San Diego, CA",
  email: "jycwendy0311@gmail.com",
  linkedin: "https://www.linkedin.com/in/wendy-chen0311",
  resumePath: "/Junyuan_Chen_Resume.pdf",
};

export const thinkingModes = [
  {
    title: "Evidence",
    label: "Audit and tax readiness",
    copy: "Tracing source documents, controls, and assumptions into workpapers that stand up to review.",
    icon: ClipboardCheck,
  },
  {
    title: "Models",
    label: "Finance and valuation",
    copy: "Building valuation, LBO, sensitivity, and scenario logic that turns uncertainty into ranges.",
    icon: LineChart,
  },
  {
    title: "Systems",
    label: "Data and automation",
    copy: "Using Excel, Python, R, Stata, Tableau, and SQL to clean, connect, and communicate information.",
    icon: Database,
  },
  {
    title: "Operations",
    label: "People and process",
    copy: "Improving workflows through on-site execution, cross-functional coordination, and clear training.",
    icon: Network,
  },
];

export const experience = [
  {
    role: "Incoming Core Tax Intern",
    organization: "BDO USA",
    place: "San Jose, CA",
    date: "Jun 2026 - Sep 2026",
    highlights: [
      "Analyze client financial data to support tax compliance and year-end filing projections.",
      "Research tax rules and client developments to identify reporting impacts.",
      "Prepare tax workpapers that connect source documentation to return inputs.",
    ],
  },
  {
    role: "Student Assistant",
    organization: "RRSS Human Resources, UCSD",
    place: "La Jolla, CA",
    date: "Sep 2025 - Present",
    highlights: [
      "Handle high-volume HR requests, assisting 100+ employees weekly.",
      "Support UCPath, Blink, UCRAYS, payroll, insurance, and financial-aid inquiries.",
      "Perform data entry, electronic filing, and support for employee relations processes.",
    ],
  },
  {
    role: "Research Assistant",
    organization: "Economics Research Lab, UCSD",
    place: "La Jolla, CA",
    date: "Sep 2025 - Jan 2026",
    highlights: [
      "Clean, merge, and validate large-scale mutual fund financial databases.",
      "Replicate empirical finance research results to evaluate benchmark alignment and performance dispersion.",
      "Analyze risk exposure mismatches and portfolio construction inefficiencies.",
    ],
  },
  {
    role: "Project Manager Intern",
    organization: "Amazon",
    place: "Bakersfield, CA",
    date: "Jun 2025 - Sep 2025",
    highlights: [
      "Led a cross-functional Quantity Stow process improvement initiative with a 30-person team.",
      "Increased throughput by 5%+ through workflow redesign, coaching, and station improvements.",
      "Built Excel macros to automate staffing plans and visualize associate rates and hours.",
    ],
  },
  {
    role: "Product Management Intern",
    organization: "Intellisia Institute",
    place: "China",
    date: "Jun 2023 - Sep 2023",
    highlights: [
      "Analyzed AI B2B chatbot performance data and provided feedback on dialogue generation and UX.",
      "Supported a medical lecturer chatbot using facial modeling and voice synthesis from short videos.",
      "Coordinated daily interactions with domestic and international clients.",
    ],
  },
];

export const education = [
  {
    school: "University of Southern California",
    degree: "Master of Accounting (MAcc), Data & Analytics Track",
    meta: "Expected June 2027",
    place: "Los Angeles, CA",
    coursework: ["IT Audit and Data Applications", "Business Analytics", "Financial Statement Analysis"],
  },
  {
    school: "University of California, San Diego",
    degree: "Economics and accounting/finance preparation",
    meta: "2024 - 2026",
    place: "San Diego, CA",
    coursework: ["Research methods", "Accounting", "Finance"],
  },
  {
    school: "University of California, Davis",
    degree: "B.A. Economics; Minor in Accounting & Finance",
    meta: "2022 - 2024 · GPA 3.748",
    place: "Davis, CA",
    coursework: ["Economics", "Accounting", "Finance"],
  },
];

export const leadership = [
  {
    role: "VP of Professional Development",
    organization: "Beta Alpha Psi (BAP), UCSD",
    date: "Jan 2025 - Present",
  },
  {
    role: "Vice President",
    organization: "Chinese Students and Scholars Association (CSSA), UC Davis",
    date: "Jun 2023 - Sep 2023",
  },
];

export const skills = {
  technical: ["Python", "R Studio", "Stata", "Tableau", "SQL", "Microsoft Excel"],
  languages: ["English", "Mandarin", "Cantonese", "Korean (Beginner)"],
};

export const evidenceLinks = [
  {
    title: "Celsius Holdings valuation work",
    discipline: "Financial modeling",
    icon: FileSpreadsheet,
    summary:
      "DCF, comparable companies, precedent transactions, WACC, and LBO return logic for an investment banking course.",
    artifacts: ["DCF", "LBO", "WACC", "Comps"],
    href: "https://drive.google.com/drive/folders/1sszMUz-_zSfEsS8HusmIGYq6EQINkQ6w",
  },
  {
    title: "Qualcomm audit planning project",
    discipline: "Audit judgment",
    icon: Scale,
    summary:
      "Risk assessment covering seasonality, equity price risk, foreign exchange risk, and substantive evidence planning.",
    artifacts: ["Risk", "Evidence", "Cutoff", "Valuation"],
    href: "https://drive.google.com/file/d/1zW3Uarg280Fc4pTd1riN7cLQjS1ag9Bf/view?usp=drive_web",
  },
  {
    title: "Target / Maxoman analysis",
    discipline: "Cost accounting",
    icon: Calculator,
    summary:
      "Financial and cost analysis of Target Corp for an M&A department training program with Excel deliverables.",
    artifacts: ["Ratios", "Margins", "Costs", "Excel"],
    href: "https://drive.google.com/drive/folders/14Me9TNpzQnj-um5wSw6NerwUF6p18RCI",
  },
  {
    title: "Storely seed financing",
    discipline: "Venture finance",
    icon: BriefcaseBusiness,
    summary:
      "Pitch and term sheet for a local peer-to-peer storage marketplace connecting hosts, students, and small businesses.",
    artifacts: ["Pitch", "Term Sheet", "$1M", "$5M Post"],
    href: "https://drive.google.com/drive/folders/1oqPU-YcLYuyLZIJ9hcswNstnV0pb02Cp",
  },
];

export const narrativeStats = [
  { value: "100+", label: "employees assisted weekly", icon: Sparkles },
  { value: "5%+", label: "throughput improvement at Amazon", icon: BarChart3 },
  { value: "30", label: "person process team led", icon: Network },
  { value: "4", label: "working languages", icon: PenLine },
];

export const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Evidence", href: "#evidence" },
  { label: "Contact", href: "#contact" },
];
