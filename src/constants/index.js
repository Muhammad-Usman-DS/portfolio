import {
  js,
  python,
  java,
  sql,
  R,
  numpy,
  pandas,
  pbi,
  scikit,
  reactjs,
  nodejs,
  iyyc,
  webss,
  combined,
  threejs,
  clothing,
  telus,
  ph,
  mplib,
  plotly,
  sb,
  scipy,
  Jupyter,
  Fast,
  Sl,
  Docker,
  excel,
  html,
  css,
  tailwind,
  git,
  XGB,
  LGBM,
  Azure,
  AWS,
  Postgres,
  Supa,
  BMSystem,
  tSNE,
  churniq,
  ff
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "SQL", icon: sql },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "R", icon: R },
  { title: "NumPy", icon: numpy },
  { title: "Pandas", icon: pandas },
  { title: "Power BI", icon: pbi },
  { title: "HTML 5", icon: html },
  { title: "CSS 3", icon: css },
  { title: "JavaScript", icon: js },
  { title: "Tailwind CSS", icon: tailwind },
  { title: "git", icon: git },
  { title: "XGBoost", icon: XGB },
  { title: "LightGBM", icon: LGBM },
  { title: "Azure", icon: Azure },
  { title: "AWS", icon: AWS },
  { title: "PostgreSQL", icon: Postgres },
  { title: "Supabase", icon: Supa },
];

export const technologies = [
  
  { name: "Rect JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Scikit Learn", icon: scikit },
  { name: "Matplotlib", icon: mplib },
  { name: "Plotly", icon: plotly },
  { name: "Seaborn", icon: sb },
  { name: "SciPy", icon: scipy },
  { name: "Jupyter", icon: Jupyter },
  { name: "FastAPI", icon: Fast },
  { name: "Streamlit", icon: Sl },
  { name: "Docker", icon: Docker },
  { name: "Excel", icon: excel },
];

export const experiences = [
  {
    title: "Sales Consultant – Residential Solar Solutions",
    company_name: "Firefly Solar | Solar Energy Services",
    icon: ff,
    iconBg: "white",
    date: "Aug 2025 - Oct 2025",
    points: [
      "Generated approximately $125,000 to $150,000 in monthly contract value by closing an average of 5 residential solar system sales per month, with each project valued at roughly $25,000 to $30,000.",
      "Contributed an estimated $375,000 to $450,000 in total contract value over a 3 month period through consistent sales performance and customer engagement.",
      "Conducted consultative sales conversations with homeowners, explaining solar system benefits, long term cost savings, installation timelines, and return on investment in a clear and persuasive way."
    ],
  },
  {
    title: "Data Analyst Co-op Intern",
    company_name: "PowerHouse | Data Centre Group",
    icon: ph,
    iconBg: "white",
    date: "May 2025 - Aug 2025",
    points: [
      "Acquired hands on experience analyzing large scale operational datasets using Python, SQL, and Power BI, building automated dashboards and reporting workflows that reduced manual reporting effort by 40 % and improved data accuracy by 35 %.",
      "Achieved measurable performance improvements by identifying inefficiencies and trends through exploratory data analysis and visualization, contributing to faster decision making and reducing reporting turnaround time by 25 % across multiple stakeholders.",
    ],
  },
  {
    title: "Sales Representative",
    company_name: "Smart Haven | Vendor | Telus",
    icon: telus,
    iconBg: "white",
    date: "Jan 2023 - May 2025",
    points: [
      "Generated an estimated $40.5K+ in monthly contract value by onboarding an average of 15 new home service customers per month into long term TELUS service agreements, contributing to sustained recurring revenue growth.",
      "Applied a metrics driven approach by tracking conversion rates, customer engagement outcomes, and follow ups, supporting improved close rates and customer retention across assigned territories",
      "Achieved top performer status for one month by exceeding monthly sales targets by approximately 20 %, demonstrating the ability to perform under pressure and adapt quickly to feedback and performance data.",
    ],
  },
  {
    title: "Crew Member",
    company_name: "Iyycburg Corporation",
    icon: iyyc,
    iconBg: "#1F3A63",
    date: "October 2023 - Jan 2025",
    points: [
      "Contributed to day-to-day operations in a fast paced team environment, supporting service delivery and overall workflow.",
      "Collaborated closely with team members to meet operational goals and maintain consistent service standards.",
      "Demonstrated reliability, adaptability, and strong work ethic while balancing multiple responsibilities during busy shifts."
    ],
  },
];

export const projects = [

  {
    name: "ChurnIQ – Telco Customer Churn Prediction",
    description:
      "A full-stack machine learning application that predicts telco customer churn probability using demographic and service data. Features include single and bulk predictions, prediction history, insights dashboard, and a what-if mode for real-time re-prediction as inputs change.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Churn Prediction", color: "green-text-gradient" },
      { name: "Full-stack Web App", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "MLflow", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
    ],
    image: churniq,
    source_code_link: "https://github.com/Muhammad-Usman-DS/Customer-churn---Senior-Proj",
    live_demo_link: "https://customer-churn-senior-proj.vercel.app/",
  },
  {
    name: "Data Science Career and Compensation",
    description:
      "A data driven study of data science job listings, featuring advanced exploratory analysis, feature engineering, and Machine Learning models to predict salary tiers.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Exploratory Data Analysis", color: "green-text-gradient" },
      { name: "Data Cleaning", color: "pink-text-gradient" },
    ],
    image: tSNE,
    source_code_link: "https://github.com/Muhammad-Usman-DS/Data-Roles-and-Compensation",
  },
  {
    name: "Student Performance Analytics",
    description:
      "A data analysis project focused on understanding factors that influence student performance. The project applies data cleaning, exploratory analysis, and regression modeling to examine relationships between effort, assessments, and outcomes, with results supported by visualizations and statistical evaluation.",
    tags: [
      { name: "Statistical Analysis", color: "blue-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "NumPy", color: "pink-text-gradient" },
      { name: "Matplotlib", color: "orange-text-gradient" },,
      { name: "Linear Regression", color: "blue-text-gradient" },
    ],
    image: combined,
    source_code_link: "https://github.com/Muhammad-Usman-DS/Student-Performance-ETL-Analytics",
  },
  {
    name: "Portfolio Website",
    description:
      "A responsive website created to present projects, technical skills, and work experience in a clear and structured format. The site emphasizes clean UI/UX, logical content organization, and performance, with a focus on clearly communicating project scope, tools used, and outcomes.",
    tags: [
      { name: "HTML/CSS", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" }
    ],
    image: webss,
    source_code_link: "https://github.com/Muhammad-Usman-DS/portfolio",
  },
  {
    name: "Bank Management System",
    description:
      "A Python based application that simulates core banking operations such as account creation, deposits, withdrawals, and balance tracking. The system uses object-oriented design and JSON based storage to manage persistent account data, with a simple interface to demonstrate end-to-end functionality.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "JSON", color: "pink-text-gradient" },
    ],
    image: BMSystem,
    source_code_link:
      "https://github.com/Muhammad-Usman-DS/Bank-Management-System",
    live_demo_link: "https://bank-management-system-usman.streamlit.app/",
  },
  {
    name: "Clothing Store Website",
    description:
      "A JavaScript-based web application that dynamically displays clothing products using JSON data. Product cards are generated programmatically through DOM manipulation, allowing the interface to scale with changes in data while keeping presentation and logic separated.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "JSON", color: "green-text-gradient" },
      { name: "DOM Manipulation", color: "pink-text-gradient" },
    ],

    image: clothing,
    source_code_link: "https://github.com/Muhammad-Usman-DS/Clothing-Shop-Website",
    live_demo_link: "https://muhammad-usman-ds.github.io/Clothing-Shop-Website/",
  },
];
