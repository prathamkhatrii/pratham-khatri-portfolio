export const profile = {
  name: "Pratham Khatri",
  first: "PRATHAM",
  last: "KHATRI",
  role: "Data & AI Engineer",
  location: "Toronto, ON",
  email: "prathamkhatri0026@gmail.com",
  phone: "437-986-0464",
  linkedin: "https://www.linkedin.com/in/prathammkhatrii/",
  github: "https://github.com/prathamkhatrii",
  tagline:
    "Computer Science @ York University. I turn messy, ambiguous data into decisions that move revenue.",
};

export const heroLines = [
  "I BUILD SYSTEMS",
  "THAT TURN DATA",
  "INTO DECISIONS.",
];

export const manifesto = [
  {
    n: "01",
    title: "Data with intent",
    body: "Every pipeline I ship starts with a business question, not a dashboard. I chase the metric that actually moves (retained revenue, recovered margin, hours saved) and let the modelling serve it.",
  },
  {
    n: "02",
    title: "Rigor over hype",
    body: "I've caught data leakage inflating an AUC and reframed the target for real-world validity. Uplift over vanity metrics, causal reasoning over correlation, reproducible deployments over one-off notebooks.",
  },
  {
    n: "03",
    title: "From ETL to LLM",
    body: "Airflow ETL, star-schema BI models, gradient boosting, RAG assistants. I move fluidly across the stack so the right tool wins, whether it's a DAX measure or a retrieval-augmented agent.",
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    company: "Paperchase Business Services Ltd.",
    period: "May 2024 - Aug 2024",
    points: [
      "Processed & transformed large structured datasets with Python (Pandas, NumPy) and SQL, producing insights that informed recurring executive reporting cycles.",
      "Engineered automated ETL pipelines with SQL, Apache Airflow & VBA, cutting manual reporting effort by 30% across 5+ recurring workflows.",
      "Built Power BI & Tableau dashboards for real-time KPI tracking, translating ambiguous stakeholder needs into measurable deliverables.",
    ],
    stack: ["Python", "SQL", "Airflow", "Power BI", "Tableau"],
  },
  {
    role: "Artificial Intelligence Researcher",
    company: "AI Club, York University",
    period: "Sept 2024 - July 2025",
    points: [
      "Engineered IntelliAgent, an LLM-powered knowledge assistant combining semantic search and retrieval-augmented generation (RAG) for context-aware retrieval.",
      "Ran model experimentation across 4+ architectures; contributed to scalable system design and documentation for reproducible AI deployments.",
    ],
    stack: ["LangChain", "RAG", "Transformers", "Python"],
  },
  {
    role: "Software Engineer Intern",
    company: "Samcom Technobrains Pvt. Ltd.",
    period: "May 2022 - Sept 2022",
    points: [
      "Engineered scalable web apps and integrated REST APIs using Python, Django & FastAPI for core functionality and third-party integrations.",
      "Developed automated Python scripts (Pandas, NumPy, Matplotlib) to clean, transform & visualize datasets, reducing processing time by 30%.",
      "Optimized MySQL & PostgreSQL schemas, indexes and queries with Docker and Agile/Scrum workflows.",
    ],
    stack: ["FastAPI", "Django", "PostgreSQL", "Docker"],
  },
];

export const projects = [
  {
    id: "churn",
    title: "Customer Churn Analytics Pipeline",
    metric: "$90K",
    metricLabel: "extra retained revenue vs. standard targeting",
    tech: ["Python", "XGBoost", "SHAP", "Lifelines"],
    points: [
      "Built a churn prediction & uplift modelling pipeline that identified a targeting strategy generating $90K more retained revenue on the same budget.",
      "Applied causal / uplift modelling (X-Learner, Qini) to isolate persuadable customers, a distinction plain churn prediction misses entirely.",
      "Caught & fixed a data-leakage issue inflating AUC, reframing the target for real-world validity.",
    ],
    link: "https://github.com/prathamkhatrii/customer-churn-risk-uplift-modeling",
  },
  {
    id: "margin",
    title: "Customer Profit & Margin Leakage",
    metric: "$300K+",
    metricLabel: "margin leakage surfaced across accounts & SKUs",
    tech: ["Power BI", "DAX", "Power Query", "Python"],
    points: [
      "Engineered a star-schema model across 5 tables & 11,500+ transactions, resolving multi-grain fact relationships via a bridge dimension.",
      "Built 20+ DAX measures isolating True Net Profit from Gross Revenue, quantifying $300K+ in leakage from discounting, freight and returns.",
      "Designed a dynamic What-If simulator projecting $94K recovery from a 10% discount cap with zero volume loss.",
    ],
    link: "https://github.com/prathamkhatrii/Customer-profitability-and-margin-leakage",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "SQL", "Java", "C++", "JavaScript", "VBA"] },
  { group: "Machine Learning & AI", items: ["Scikit-learn", "XGBoost", "SHAP", "Statsmodels", "Transformers", "LangChain", "RAG"] },
  { group: "Data Engineering", items: ["Pandas", "NumPy", "Apache Airflow", "ETL Pipelines"] },
  { group: "Visualization & BI", items: ["Power BI", "Tableau", "Plotly", "Streamlit", "Excel"] },
  { group: "Web & Cloud", items: ["FastAPI", "Flask", "VueJS 3", "Docker", "GCP", "AWS", "REST APIs"] },
  { group: "GenAI Tooling", items: ["Claude", "ChatGPT", "Gemini", "Copilot", "Cursor", "Codex"] },
];

export const stats = [
  { value: "30%", label: "manual reporting effort cut" },
  { value: "11.5K+", label: "transactions modelled" },
  { value: "10+", label: "AI architectures evaluated" },
];

export const blogs = [
  {
    n: "01",
    category: "Data Engineering",
    title:
      "From Messy CSV to Business Insight: How I Cleaned and Analyzed E-Commerce Data",
    excerpt:
      "A walkthrough of my SQL e-commerce project focused on the cleaning decisions, not the syntax.",
    body: "Why I merged duplicate customers on normalized email instead of dropping them, why I filled missing cost data with a category-average ratio instead of the column mean, and what broke when orphaned foreign keys went unhandled. The post that proves you understand why you're cleaning data — not just how — which is what separates junior from senior thinking.",
    read: "8 min read",
  },
  {
    n: "02",
    category: "Opinion",
    title: "Why I Built My Portfolio Dashboard Without Tableau",
    excerpt:
      "A short, opinionated piece on why a self-hosted HTML/JS dashboard can beat a Tableau Public link.",
    body: "No viewer license needed, it shows real JS + data skills, and it's fully mine to customize. I walk through the auto-generated insight panel as the differentiator — the part that turns a chart wall into something that actually reads the data for you.",
    read: "5 min read",
  },
  {
    n: "03",
    category: "Machine Learning",
    title:
      "Churn Prediction Isn't Enough: Why I Added Uplift Modeling to My Retention Analysis",
    excerpt:
      "The risk-vs-persuadability distinction in plain English, then the policy simulation.",
    body: "Persuadables, Sure Things, Lost Causes and Sleeping Dogs — the framing that makes uplift click for non-technical readers. Then the numbers: if you target by risk you get $X back, if you target by uplift you get $Y back. The post most likely to get forwarded internally at a company you're applying to.",
    read: "10 min read",
  },
  {
    n: "04",
    category: "SQL Reference",
    title: "5 SQL Patterns I Use in Almost Every Analysis",
    excerpt:
      "An evergreen reference: the queries I reach for on nearly every dataset.",
    body: "Window functions for cohort analysis, conditional aggregation with CASE WHEN inside SUM, the classic RFM segmentation query, and more. Less about my projects, more a genuinely useful reference other analysts search for and share.",
    read: "7 min read",
  },
];

export const interests = [
  "Causal Inference & Uplift Modelling",
  "LLMs & Retrieval-Augmented Generation",
  "Data Storytelling",
  "Dashboard & BI Design",
  "Open-Source Analytics",
  "Chess & Strategy Games",
];
