export const profile = {
  name: 'Ximo Liang',
  title: 'Data Science Engineer',
  tagline:
    'Building real-time data platforms, LLM systems, and ML pipelines — from streaming geospatial analytics to agentic tool orchestration.',
  email: 'myemail@hotmail.com',
  phone: '(123) 456-7890',
  linkedin: 'https://www.linkedin.com/in/mylinkedin/',
  location: 'Greater Toronto Area, Canada',
  resumePdf: 'resume.pdf', // place your PDF in /public
};

export const skillGroups = [
  {
    label: 'Languages & Query',
    skills: ['Python', 'SQL', 'R', 'Bash'],
  },
  {
    label: 'Data Engineering',
    skills: ['Kafka', 'Spark', 'ETL', 'ClickHouse', 'Elasticsearch', 'Redis', 'NoSQL', 'Snowflake'],
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
    skills: ['FastAPI', 'REST', 'WebSocket', 'Flask', 'Docker', 'Kubernetes', 'Linux', 'Git'],
  },
  {
    label: 'Cloud',
    skills: ['GCP', 'AWS'],
  },
];

export type ProjectMedia = 'mockup' | 'diagram';

export interface Project {
  title: string;
  context: string;
  year: string;
  highlights: string[];
  stack: string[];
  metrics: string[];
  media: ProjectMedia; // placeholder type shown on the card
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Real-time GPS Analytics & Dispatch System',
    context: 'Public Safety',
    year: '2026',
    featured: true,
    media: 'mockup',
    highlights: [
      'Streaming pipeline ingesting real-time GPS data via H3 hexagonal indexing, Kafka, and ClickHouse — latency cut from 2-day batches to <500ms streaming.',
      'Open-source LLM served via vLLM (quantized 3.8B) behind a streaming FastAPI proxy for natural-language dispatch briefings.',
      'deck.gl / Mapbox GL 3D hex visualization dashboard with sub-5-second refresh cycles.',
    ],
    stack: ['Kafka', 'ClickHouse', 'H3', 'FastAPI', 'vLLM', 'Redis', 'deck.gl'],
    metrics: ['<500ms latency', '92% faster blind-spot detection', 'Millisecond queries'],
  },
  {
    title: 'LLM Trading Agent with MCP Tool Orchestration',
    context: 'Personal Project',
    year: '2025',
    featured: true,
    media: 'mockup',
    highlights: [
      'Autonomous LLM agent orchestrating 40+ tools across three MCP servers on 10-minute decision cycles.',
      'Custom FastMCP-based Alpaca server with 31+ reusable tools, source-prefixed routing, and tiktoken-based context management under a 100K-token budget.',
      'Pre-trade validation, risk controls, circuit breakers, and structured JSON audit logs.',
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
    highlights: [
      'Production ETL + semantic indexing pipeline (Sentence-Transformers) with incremental and batch flows, monitoring, and fault-tolerant dockerized deployment.',
      'Low-latency async API with caching and pagination for hybrid (lexical + semantic) queries over a million-document Elasticsearch cluster.',
    ],
    stack: ['Elasticsearch', 'Sentence-Transformers', 'FastAPI', 'Docker'],
    metrics: ['99.9% ETL time reduction', '+113% searchable corpus', 'Millisecond search'],
  },
  {
    title: 'Online Expertise Chatbot',
    context: 'Personal Project',
    year: '2024',
    media: 'diagram',
    highlights: [
      'AI chatbot integrating GPT/Gemini via REST APIs with LangChain-based RAG.',
      'Vue.js frontend with real-time dashboards (amCharts5, Chart.js); Dockerized Flask API on GCP.',
    ],
    stack: ['LangChain', 'RAG', 'Vue.js', 'Flask', 'GCP', 'Docker'],
    metrics: ['99.9% uptime'],
  },
  {
    title: 'Cartridge Case Image Segmentation & Annotation',
    context: 'Forensic Science',
    year: '2023',
    media: 'diagram',
    highlights: [
      'Automated segmentation and annotation of cartridge case images using image processing and unsupervised deep learning for Ontario\u2019s Centre of Forensic Sciences.',
    ],
    stack: ['OpenCV', 'SAM', 'PyTorch', 'CUDA'],
    metrics: ['2 hours \u2192 8 minutes per batch'],
  },
  {
    title: 'Cloud Data Migration & Pipeline Design',
    context: 'Healthcare',
    year: '2020–2021',
    media: 'diagram',
    highlights: [
      'Migrated 10+ TB from legacy HPC to a Snowflake data warehouse with rigorous validation and security.',
      'Automated end-to-end pipelines in Dataiku using AWS S3, Lambda, and Glue for near real-time ingestion.',
    ],
    stack: ['Snowflake', 'Dataiku', 'AWS S3', 'Lambda', 'Glue'],
    metrics: ['10+ TB migrated', '25% faster processing'],
  },
  {
    title: 'ML for Neurological Response Analysis',
    context: 'Healthcare / Research',
    year: '2019–2022',
    media: 'diagram',
    highlights: [
      'Predictive models (78% accuracy) on high-dimensional structured and imaging data for brain stimulation response.',
      'Containerized ML pipelines (PCA, SVM, XGBoost, Random Forests, CNNs) processing 50+ TB on distributed Linux systems.',
    ],
    stack: ['Spark', 'XGBoost', 'CNN', 'Docker', 'HPC'],
    metrics: ['50+ TB processed', '75% less compute time', '78% accuracy'],
  },
  {
    title: 'Social Network Analysis — Gaming Network',
    context: 'Video Game Industry',
    year: '2018',
    media: 'diagram',
    highlights: [
      'Analyzed a 13,000+ player network with similarity measures and logistic regression (72% accuracy).',
      'NLP pipeline with SAS and R achieving 85% accuracy on user feedback sentiment classification.',
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
    notes: ['Beta Gamma Sigma Honor Society', 'GPA: 3.97/4.0'],
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
