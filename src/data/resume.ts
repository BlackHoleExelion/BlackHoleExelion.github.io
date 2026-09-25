export const profile = {
  name: 'Ximo Liang',
  title: 'Data Science Engineer',
  tagline:
    'Building real-time data platforms, LLM systems, and ML pipelines — from streaming geospatial analytics to agentic tool orchestration.',
  email: 'summerist.l@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/ximoliang/',
  location: 'Canada/USA',
  resumePdf: 'resume.pdf', // place your PDF in /public
};

export const skillGroups = [
  {
    label: 'Languages & Query',
    skills: ['Python', 'SQL', 'R', 'Bash'],
  },
  {
    label: 'Data Engineering',
    skills: ['Kafka', 'Spark', 'ETL', 'ClickHouse', 'Elasticsearch', 'Redis', 'MSSQL', 'NoSQL', 'Snowflake'],
  },
  {
    label: 'ML / AI',
    skills: [
      'LLM',
      'RAG',
      'MCP',
      'Agentic Tool Orchestration',
      'HuggingFace',
      'vLLM',
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'AutoGluon',
      'MLflow',
    ],
  },
  {
    label: 'APIs & Backend',
    skills: ['REST', 'WebSocket', 'FastAPI', 'Flask', 'Docker', 'Kubernetes', 'Linux', 'Git'],
  },
  {
    label: 'Cloud',
    skills: ['GCP', 'AWS'],
  },
];

export type ProjectMedia = 'mockup' | 'diagram';
export type ProjectVisual = 'map' | 'agent' | 'search' | 'chat' | 'vision' | 'warehouse' | 'neuro' | 'network';

export interface Project {
  title: string;
  context: string;
  year: string;
  highlights: string[];
  stack: string[];
  metrics: string[];
  media: ProjectMedia; // placeholder type shown on the card
  visual: ProjectVisual;
  category: 'Data systems' | 'Applied ML' | 'Research';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Real-time GPS Analytics & Dispatch System',
    context: 'Public Safety',
    year: '2026',
    featured: true,
    media: 'mockup',
    visual: 'map',
    category: 'Data systems',
    highlights: [
      `Engineered a production streaming pipeline ingesting real‑time GPS tracking data from police vehicle logs via H3 hexagonal indexing, Kafka, and ClickHouse, alongside incremental ETL for occurrence data with UTM‑to‑WGS84 transformation and automated H3 enrichment—reducing end‑to‑end data latency from 2‑day batch cycles to <500ms streaming while persisting millions of GPS positions and occurrence records for millisecond queries.`,
      `Deployed an open‑source LLM via vLLM serving a quantized 3.8B model behind a streaming FastAPI proxy, enabling natural‑language hex‑area summaries and dispatch briefings on the dashboard with sub‑2‑second first‑token latency and token‑by‑token streaming to the frontend.`,
      `Built a low‑latency async FastAPI dashboard with Redis caching exposing patrol coverage heatmaps, occurrence risk maps, and AutoGluon and MLflow based time‑series predictions via REST/WebSocket endpoints, paired with a deck.gl/Mapbox GL 3D hex visualization frontend—reducing patrol blind‑spot identification time by 92% with sub‑5‑second refresh cycles across the Halton Region operational area.`,
    ],
    stack: ['Kafka', 'ClickHouse', 'H3', 'FastAPI', 'vLLM', 'Redis', 'deck.gl'],
    metrics: ['<500ms latency', '92% faster blind-spot detection', 'Millisecond queries'],
  },
  {
    title: 'LLM Trading Agent with MCP Tool Orchestration',
    context: 'Personal Project',
    year: '2025',
    featured: true,
    media: 'diagram',
    visual: 'agent',
    category: 'Data systems',
    highlights: [
      `Built an autonomous LLM agent system on DeepSeek-V3.2-Exp, orchestrating 40+ tools across three MCP servers for execution, market data, fundamentals, sentiment, and real-time web search over 10-minute decision cycles.`,
      `Engineered a custom FastMCP-based Alpaca server with 31+ reusable tools, source-prefixed tool routing, multi-round function calling, and tiktoken-based context management to keep long-running agent workflows under a 100K-token budget.`,
      `Developed a compact market-context injection pipeline and API-based reliability layer with pre-trade validation, risk controls, circuit breakers, and structured JSON audit logs, reducing LLM tool-call iterations by approximately 60%.`,
    ],
    stack: ['DeepSeek', 'MCP', 'FastMCP', 'Alpaca', 'tiktoken'],
    metrics: ['40+ tools', '~60% fewer tool-call iterations', '100K token budget'],
  },
  {
    title: 'Hybrid Search Platform for Police Reports',
    context: 'Public Safety',
    year: '2025',
    featured: true,
    media: 'mockup',
    visual: 'search',
    category: 'Data systems',
    highlights: [
      `Engineered a production-grade ETL and semantic indexing pipeline to ingest, normalize, deduplicate, enrich, and embed large-scale police reports using deep‑learning model (Sentence‑Transformers) and scalable preprocessing. Built incremental and batch ETL flows with automated monitoring and fault-tolerant, dockerized deployment that reduced regular ETL processing time by 99.9%, and persistently stores data in a distributed Elasticsearch environment to enable millisecond search at million‑document level.`,
      `Developed a low‑latency async API exposing flexible endpoints with efficient caching and pagination to support high speed hybrid (lexical + semantic) queries. Paired with a web-based frontend offering real‑time visualizations and investigator workflows, the solution expanded the searchable corpus size by 113% while preserving millisecond responses.`,
    ],
    stack: ['Elasticsearch', 'Sentence-Transformers', 'FastAPI', 'Docker'],
    metrics: ['99.9% ETL time reduction', '+113% searchable corpus', 'Millisecond search'],
  },
  {
    title: 'Online Expertise Chatbot',
    context: 'Personal Project',
    year: '2024',
    media: 'diagram',
    visual: 'chat',
    category: 'Applied ML',
    highlights: [
      `Engineered an AI-driven chatbot to respond dynamically to inquiries about expertise, projects, and skills, integrating GPT/Gemini via REST APIs and enhancing responses using LangChain-based Retrieval-Augmented Generation.`,
      `Built a responsive frontend and a real-time data visualization dashboard with Vue.js, amCharts5, and Chart.js; leveraged NoSQL database on Google Cloud Platform and a Dockerized Flask API on a GCP virtual machine to track sessions with 99.9% uptime and scalability.`,
    ],
    stack: ['LangChain', 'RAG', 'Vue.js', 'Flask', 'GCP', 'Docker'],
    metrics: ['99.9% uptime'],
  },
  {
    title: 'Cartridge Case Image Segmentation & Annotation',
    context: 'Forensic Science',
    year: '2023',
    media: 'mockup',
    visual: 'vision',
    category: 'Applied ML',
    highlights: [
      `Developed an online solution that uses image processing and unsupervised deep learning to automate segmentation and annotation of cartridge case images, for Ontario's Centre of Forensic Sciences, cutting processing time from 2 hours to 8 minutes per batch.`,
      `Utilized a tech stack including OpenCV, the SAM Model, PyTorch, and CUDA on Google Colab.`,
    ],
    stack: ['OpenCV', 'SAM', 'PyTorch', 'CUDA'],
    metrics: ['2 hours \u2192 8 minutes per batch'],
  },
  {
    title: 'Cloud Data Migration & Pipeline Design',
    context: 'Healthcare',
    year: '2020–2021',
    media: 'diagram',
    visual: 'warehouse',
    category: 'Data systems',
    highlights: [
      `Led migration of over 10 TB of data from legacy HPC systems to a scalable Snowflake data warehouse with rigorous validation and security.`,
      `Designed automated, end-to-end data pipelines in Dataiku using AWS S3, Lambda, and Glue for near real-time ingestion, reducing processing time by 25%.`,
    ],
    stack: ['Snowflake', 'Dataiku', 'AWS S3', 'Lambda', 'Glue'],
    metrics: ['10+ TB migrated', '25% faster processing'],
  },
  {
    title: 'ML for Neurological Response Analysis',
    context: 'Healthcare / Research',
    year: '2019–2022',
    media: 'diagram',
    visual: 'neuro',
    category: 'Research',
    highlights: [
      `Conducted EDA and built predictive models (78% accuracy) on high-dimensional structured and imaging data to identify brain stimulation responses.`,
      `Developed containerized data wrangling and ML pipelines (using PCA, SVM, XGBoost, Random Forests, and CNNs) to process over 50 TB of unstructured data on distributed Linux systems, cutting computational time by 75% with Spark and Oracle Grid Engine.`,
      `Visualized multi-dimensional insights using Seaborn, Matplotlib, JavaScript, Tableau, and PowerBI.`,
    ],
    stack: ['Spark', 'XGBoost', 'CNN', 'Docker', 'HPC'],
    metrics: ['50+ TB processed', '75% less compute time', '78% accuracy'],
  },
  {
    title: 'Social Network Analysis — Gaming Network',
    context: 'Video Game Industry',
    year: '2018',
    media: 'mockup',
    visual: 'network',
    category: 'Research',
    highlights: [
      `Analyzed a network of 13,000+ Electronic Arts players with Similarity measures and Logistic Regression (72% accuracy) to predict player connections.`,
      `Created interactive network graphs using Gephi and modeled data with R for strategic insights.`,
      `Developed an NLP pipeline with SAS and R, achieving 85% accuracy in classifying user feedback and sentiment.`,
    ],
    stack: ['R', 'Gephi', 'SAS', 'Logistic Regression'],
    metrics: ['13,000+ players', '72% / 85% accuracy'],
  },
];

export const experience = [
  {
    role: 'Data Science Engineer',
    org: 'Halton Regional Police Service',
    location: 'Greater Toronto Area, Canada',
    period: 'May 2025 – Present',
    bullets: [
      'Engineered real-time geospatial data pipelines (Python, Kafka, ClickHouse, Uber H3) reducing latency from 2-day batch cycles to <500ms streaming over millions of records.',
      'Built low-latency async backend services with FastAPI, Redis, and REST/WebSocket APIs serving operational dashboards with sub-5-second refresh cycles.',
      'Deployed an LLM inference layer (vLLM, quantized 3.8B model, streaming FastAPI proxy) with sub-2-second first-token latency.',
      'Developed a production hybrid search and analytics platform (Elasticsearch, Sentence-Transformers, AutoGluon, MLflow) — 99.9% ETL time reduction, +113% corpus capacity, 92% faster blind-spot identification.',
    ],
  },
  {
    role: 'Data Scientist',
    org: 'University of Pennsylvania',
    location: 'Philadelphia, USA',
    period: 'May 2019 – April 2022',
    bullets: [
      'EDA, modeling, and ML on 50+ TB of high-dimensional structured and unstructured data on HPC clusters and cloud platforms.',
      'Built 10+ data acquisition and ETL pipelines with validation and hyperparameter tuning in a distributed Linux environment.',
      'Produced 100+ publication-quality charts and interactive dashboards; research published in journals including Nature.',
    ],
  },
  {
    role: 'Data Analysis Intern',
    org: 'Electronic Arts',
    location: 'Redwood City, USA',
    period: 'June 2018 – September 2018',
    bullets: [
      'Led network analysis on 13,000+ players with similarity measures and logistic regression (72% accuracy).',
      'Built interactive network visualizations (Gephi, R) that informed game design and community engagement.',
    ],
  },
];

export const education = [
  {
    degree: 'M.S. in Business Statistics',
    school: 'Drexel University',
    location: 'Philadelphia, USA',
    period: 'March 2019',
    highlights: ['Member of Beta Gamma Sigma Honor Society', 'GPA: 3.97/4.0'],
  },
];

export const publications = [
  {
    title: 'Non-invasively targeting, probing and modulating a deep brain circuit for depression alleviation',
    venue: 'Nature Mental Health, 1(12): 1033–1042',
  },
  {
    title: 'Resting fMRI-guided TMS evokes subgenual anterior cingulate response in depression',
    venue: 'NeuroImage, 120963',
  },
  {
    title: 'How does functional connectivity relate to induced TMS effects on brain activity?',
    venue: 'Brain Stimulation, 14(6): 1722',
  },
  {
    title: 'Probing the Subgenual Anterior Cingulate Using Interleaved TMS/fMRI and Functional Connectivity Mapping',
    venue: 'Biological Psychiatry, 87(9): S434',
  },
];
