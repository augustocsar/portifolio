import imgNotasFiscais from '../assets/NotasFiscais.jpg';
import imgChatbotTelegram from '../assets/ChatBot.jpg';
import imgFeedNoticias from '../assets/FeedNoticias.png';
import imgAgentZaia from '../assets/AgenteZaia.jpg';
import imgDreamSquad from '../assets/DreamSquad.jpg';
import imgWorkflowApi from '../assets/WorkflowApi.jpg';
import imgOciTerraform from '../assets/OciTerraform.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  tools: string[];
  githubUrl: string;
  githubUrlSecondary?: string;
  variant?: 'primary' | 'secondary';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  isPrimary?: boolean;
}

export interface UIContent {
  headerTitle: string;
  headerSubtitle: string;
  heroGreeting: string;
  heroIntro: string;
  heroContext: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  aboutText4: string;
  skillsTitle: string;
  skillsIA: string;
  skillsIAList: string[];
  skillsSoftware: string;
  skillsSoftwareList: string[];
  skillsFrontend: string;
  skillsFrontendList: string[];
  skillsMethodology: string;
  skillsMethodologyList: string[];
  experienceTitle: string;
  experiences: Experience[];
  projectsTitle: string;
  contactTitle: string;
  contactSubtitle: string;
  toolsTitle: string;
  learnMore: string;
  repoBackend: string;
  repoFrontend: string;
}

export const uiContent: Record<'PT' | 'EN', UIContent> = {
  PT: {
    headerTitle: "Portfólio de Projetos",
    headerSubtitle: "de Engenharia de IA & Sistemas Inteligentes",
    heroGreeting: "Olá, seja muito bem-vindo(a) ao meu portfólio de Engenharia de IA.",
    heroIntro: "Nesta página, eu demonstro minhas habilidades em resolver problemas complexos utilizando conceitos e ferramentas de Inteligência Artificial e Cloud Computing, através de projetos práticos e aplicações reais.",
    heroContext: "Você também irá encontrar minhas experiências profissionais, habilidades técnicas e ferramentas envolvendo o universo dos Agentes Inteligentes, LLMs e infraestrutura escalável.",
    aboutTitle: "Sobre mim",
    aboutText1: "Meu nome é <strong>Augusto César</strong>. Sou formado em Análise e Desenvolvimento de Sistemas e sigo expandindo minha base teórica na graduação em Ciência da Computação.",
    aboutText2: "Minha trajetória acadêmica é marcada pela busca constante por conhecimento profundo, o que me levou ao Mestrado em Ciência da Computação na UFS (PROCC) como aluno especial, onde foco em algoritmos e sistemas inteligentes.",
    aboutText3: "Com experiência prática em empresas como a <strong>Compass UOL</strong>, especializei-me em unir o desenvolvimento Fullstack com o poder da Engenharia de IA, criando agentes e fluxos de automação escaláveis utilizando Python, LangChain e AWS.",
    aboutText4: "Acredito que a tecnologia deve ser usada para simplificar processos complexos, e é essa mentalidade que aplico em cada solução que desenvolvo.",
    skillsTitle: "Habilidades",
    skillsIA: "IA, LLMs e Agentes",
    skillsIAList: ['Python para IA', 'LangChain', 'RAG & ChromaDB', 'AWS Bedrock', 'Prompt Engineering'],
    skillsSoftware: "Engenharia de Software e Cloud",
    skillsSoftwareList: ['FastAPI & Node.js', 'AWS (S3, Lambda)', 'Docker', 'SQL & NoSQL', 'Git/GitHub'],
    skillsFrontend: "Desenvolvimento Frontend",
    skillsFrontendList: ['React.js & TypeScript', 'Tailwind CSS', 'Dashboards', 'REST & WebSockets'],
    skillsMethodology: "Trabalho e Metodologias",
    skillsMethodologyList: ['Trabalho Colaborativo', 'Metodologias Ágeis', 'Documentação Técnica', 'Resolução de Problemas'],
    experienceTitle: "Experiência Profissional",
    experiences: [
      {
        company: "Compass UOL",
        role: "Estagiário de Software & IA",
        period: "Dez 2024 — Mai 2025",
        isPrimary: true,
        highlights: ['Desenvolvimento de APIs REST', 'Amazon Textract & NLP', 'Agentes com LangChain e Bedrock', 'Docker & AWS']
      },
      {
        company: "Jet Sales Brasil",
        role: "Estagiário de TI",
        period: "Mar 2024 — Ago 2024",
        highlights: ['Integrações com n8n', 'Automação com Python/JS', 'Manipulação de JSON']
      }
    ],
    projectsTitle: "Projetos em Engenharia de IA",
    contactTitle: "Entre em contato",
    contactSubtitle: "Sinta-se à vontade para entrar em contato.",
    toolsTitle: "As ferramentas utilizadas foram:",
    learnMore: "Saiba Mais",
    repoBackend: "Repositório Backend",
    repoFrontend: "Repositório Frontend"
  },
  EN: {
    headerTitle: "Project Portfolio",
    headerSubtitle: "in AI Engineering & Intelligent Systems",
    heroGreeting: "Hello, welcome to my AI Engineering portfolio.",
    heroIntro: "On this page, I demonstrate my skills in solving complex problems using Artificial Intelligence and Cloud Computing concepts and tools, through practical projects and real-world applications.",
    heroContext: "You will also find my professional experience, technical skills, and tools involving the universe of Intelligent Agents, LLMs, and scalable infrastructure.",
    aboutTitle: "About me",
    aboutText1: "My name is <strong>Augusto César</strong>. I have a degree in Systems Analysis and Development and continue to expand my theoretical base in Computer Science.",
    aboutText2: "My academic path is marked by a constant search for deep knowledge, which led me to the Master's in Computer Science at UFS (PROCC) as a special student, focusing on algorithms and intelligent systems.",
    aboutText3: "With practical experience at companies like <strong>Compass UOL</strong>, I specialized in merging Fullstack development with the power of AI Engineering, creating agents and scalable automation flows using Python, LangChain, and AWS.",
    aboutText4: "I believe technology should be used to simplify complex processes, and it's this mindset that I apply to every solution I develop.",
    skillsTitle: "Skills",
    skillsIA: "AI, LLMs and Agents",
    skillsIAList: ['Python for AI', 'LangChain', 'RAG & ChromaDB', 'AWS Bedrock', 'Prompt Engineering'],
    skillsSoftware: "Software Engineering and Cloud",
    skillsSoftwareList: ['FastAPI & Node.js', 'AWS (S3, Lambda)', 'Docker', 'SQL & NoSQL', 'Git/GitHub'],
    skillsFrontend: "Frontend Development",
    skillsFrontendList: ['React.js & TypeScript', 'Tailwind CSS', 'Dashboards', 'REST & WebSockets'],
    skillsMethodology: "Work and Methodologies",
    skillsMethodologyList: ['Collaborative Work', 'Agile Methodologies', 'Technical Documentation', 'Problem Solving'],
    experienceTitle: "Professional Experience",
    experiences: [
      {
        company: "Compass UOL",
        role: "Software & AI Intern",
        period: "Dec 2024 — May 2025",
        isPrimary: true,
        highlights: ['REST API Development', 'Amazon Textract & NLP', 'Agents with LangChain and Bedrock', 'Docker & AWS']
      },
      {
        company: "Jet Sales Brasil",
        role: "IT Intern",
        period: "Mar 2024 — Aug 2024",
        highlights: ['n8n Integrations', 'Automation with Python/JS', 'JSON Manipulation']
      }
    ],
    projectsTitle: "AI Engineering Projects",
    contactTitle: "Contact",
    contactSubtitle: "Feel free to reach out.",
    toolsTitle: "The tools used were:",
    learnMore: "Learn More",
    repoBackend: "Backend Repository",
    repoFrontend: "Frontend Repository"
  }
};

export const projectsData: Record<'PT' | 'EN', Project[]> = {
  PT: [
    {
      id: 'nfs-api',
      title: 'API de Extração Inteligente de Notas Fiscais',
      description: 'Desenvolvimento de uma API REST serverless para processamento automatizado de notas fiscais eletrônicas.',
      detailedDescription: 'O sistema realiza o upload de imagens para um Bucket S3, utiliza o Amazon Textract para transcrição e aplica técnicas de NLP (NLTK) e LLMs para extrair, categorizar e estruturar os dados da nota em formato JSON.',
      image: imgNotasFiscais,
      tools: ['Python (AWS Lambda)', 'Amazon Textract & S3', 'NLP (NLTK) & LLM para refinamento', 'API Gateway & CloudWatch', 'JSON para estruturação de dados'],
      githubUrl: 'https://github.com/augustocsar/APIRest-NFs'
    },
    {
      id: 'chatbot-juridico',
      title: 'Chatbot para Consulta de Documentos Jurídicos',
      description: 'Sistema inteligente de consulta jurídica via Telegram, utilizando a arquitetura RAG (Retrieval-Augmented Generation).',
      detailedDescription: 'A solução utiliza o ChromaDB como banco vetorial e o AWS Bedrock (Amazon Titan) para fundamentar as respostas nos documentos recuperados via LangChain.',
      image: imgChatbotTelegram,
      tools: ['Python & LangChain', 'AWS Bedrock (Amazon Titan)', 'ChromaDB (Vector Database)', 'AWS Lambda & API Gateway', 'Telegram Bot API'],
      githubUrl: 'https://github.com/augustocsar/Chatbot-telegram'
    },
    {
      id: 'feed-noticias',
      title: 'Feed de Notícias RSS com Docker & AWS EC2',
      description: 'Aplicação Fullstack para visualização de feeds de notícias em tempo real via RSS do portal G1.',
      detailedDescription: 'O projeto foca na portabilidade, sendo totalmente dockerizado. Implantado na nuvem utilizando Amazon EC2 e S3 para armazenamento estruturado.',
      image: imgFeedNoticias,
      tools: ['JavaScript (Node.js & Express)', 'Docker & Docker Compose', 'AWS EC2 (Hospedagem)', 'AWS S3 (Storage)', 'HTML5 & CSS3'],
      githubUrl: 'https://github.com/augustocsar/Feed-De-Noticias-Com-RSS'
    },
    {
      id: 'zaia-agent',
      title: 'Zaia Agent: Agente Inteligente Fullstack',
      description: 'Aplicação que integra um Agente ReAct de alto desempenho com uma interface de chat moderna.',
      detailedDescription: 'Backend utiliza Gemini 2.0 Flash para orquestrar ferramentas. Frontend com Streaming Real-time e upload de PDFs para análise via RAG.',
      image: imgAgentZaia,
      tools: ['Python (FastAPI) & React 19', 'LangChain & Gemini 2.0', 'RAG com FAISS', 'Streaming de respostas (SSE)', 'TypeScript'],
      githubUrl: 'https://github.com/augustocsar/backend-zaia-agent',
      githubUrlSecondary: 'https://github.com/augustocsar/zaia-frontend-web'
    },
    {
      id: 'dreamsquad',
      title: 'DreamSquad AI: API com Clean Architecture',
      description: 'API RESTful robusta para orquestração de agentes inteligentes aplicando princípios de Clean Architecture.',
      detailedDescription: 'Utiliza Llama 3.2 via Ollama para raciocínio lógico e Function Calling, construída com FastAPI e Strands Agents SDK.',
      image: imgDreamSquad,
      tools: ['Python (FastAPI)', 'Clean Architecture', 'Ollama & Llama 3.2', 'Strands Agents SDK', 'Pydantic'],
      githubUrl: 'https://github.com/augustocsar/dreamsquad-ai-agent'
    },
    {
      id: 'workflow-api',
      title: 'AI Agent Workflow: API de Alta Performance',
      description: 'Infraestrutura backend ultra-rápida utilizando Bun e o framework ElysiaJS.',
      detailedDescription: 'Utiliza GraphQL Yoga para queries complexas, versionamento de prompts e persistência com SQLite e Drizzle ORM seguindo o Service Pattern.',
      image: imgWorkflowApi,
      tools: ['Bun (Runtime) & ElysiaJS', 'GraphQL Yoga', 'Drizzle ORM & SQLite', 'Service Pattern', 'TypeScript Avançado'],
      githubUrl: 'https://github.com/augustocsar/ai-agent-workflow-api'
    },
    {
      id: 'oci-terraform',
      title: 'Cloud Infrastructure: IaC Modular com Terraform',
      description: 'Provisionamento de infraestrutura completa na Oracle Cloud Infrastructure (OCI) utilizando Terraform.',
      detailedDescription: 'Aplica conceitos de Infraestrutura como Código (IaC) modularizada, separando as camadas de rede (VCN, Subnets) e computação.',
      image: imgOciTerraform,
      tools: ['Terraform (IaC)', 'OCI (Oracle Cloud Infrastructure)', 'Módulos Terraform', 'Linux Server', 'Segurança de Rede'],
      githubUrl: 'https://github.com/augustocsar/oci-terraform-lab'
    }
  ],
  EN: [
    {
      id: 'nfs-api',
      title: 'Intelligent Invoice Extraction API',
      description: 'Development of a serverless REST API for automated processing of electronic invoices.',
      detailedDescription: 'The system uploads images to an S3 Bucket, uses Amazon Textract for transcription, and applies NLP (NLTK) and LLM techniques to extract, categorize, and structure invoice data in JSON format.',
      image: imgNotasFiscais,
      tools: ['Python (AWS Lambda)', 'Amazon Textract & S3', 'NLP (NLTK) & LLM Refinement', 'API Gateway & CloudWatch', 'JSON Data Structuring'],
      githubUrl: 'https://github.com/augustocsar/APIRest-NFs'
    },
    {
      id: 'chatbot-juridico',
      title: 'Legal Document Consultation Chatbot',
      description: 'Intelligent legal consultation system via Telegram, using RAG (Retrieval-Augmented Generation) architecture.',
      detailedDescription: 'The solution uses ChromaDB as a vector database and AWS Bedrock (Amazon Titan) to ground responses in documents retrieved via LangChain.',
      image: imgChatbotTelegram,
      tools: ['Python & LangChain', 'AWS Bedrock (Amazon Titan)', 'ChromaDB (Vector Database)', 'AWS Lambda & API Gateway', 'Telegram Bot API'],
      githubUrl: 'https://github.com/augustocsar/Chatbot-telegram'
    },
    {
      id: 'feed-noticias',
      title: 'RSS News Feed with Docker & AWS EC2',
      description: 'Fullstack application for real-time news feed visualization via RSS from the G1 portal.',
      detailedDescription: 'The project focuses on portability, being fully dockerized. Deployed in the cloud using Amazon EC2 and S3 for structured storage.',
      image: imgFeedNoticias,
      tools: ['JavaScript (Node.js & Express)', 'Docker & Docker Compose', 'AWS EC2 (Hosting)', 'AWS S3 (Storage)', 'HTML5 & CSS3'],
      githubUrl: 'https://github.com/augustocsar/Feed-De-Noticias-Com-RSS'
    },
    {
      id: 'zaia-agent',
      title: 'Zaia Agent: Fullstack Intelligent Agent',
      description: 'A complete application integrating a high-performance ReAct Agent with a modern chat interface.',
      detailedDescription: 'The backend uses Gemini 2.0 Flash to orchestrate tools. Frontend features real-time streaming and PDF upload for analysis via RAG.',
      image: imgAgentZaia,
      tools: ['Python (FastAPI) & React 19', 'LangChain & Gemini 2.0', 'RAG with FAISS', 'Streaming Responses (SSE)', 'TypeScript'],
      githubUrl: 'https://github.com/augustocsar/backend-zaia-agent',
      githubUrlSecondary: 'https://github.com/augustocsar/zaia-frontend-web'
    },
    {
      id: 'dreamsquad',
      title: 'DreamSquad AI: API with Clean Architecture',
      description: 'Robust RESTful API for intelligent agent orchestration applying Clean Architecture principles.',
      detailedDescription: 'Uses Llama 3.2 via Ollama for logical reasoning and Function Calling, built with FastAPI and the Strands Agents SDK.',
      image: imgDreamSquad,
      tools: ['Python (FastAPI)', 'Clean Architecture', 'Ollama & Llama 3.2', 'Strands Agents SDK', 'Pydantic'],
      githubUrl: 'https://github.com/augustocsar/dreamsquad-ai-agent'
    },
    {
      id: 'workflow-api',
      title: 'AI Agent Workflow: High Performance API',
      description: 'Ultra-fast backend infrastructure for AI agent management using the Bun runtime and ElysiaJS framework.',
      detailedDescription: 'Uses GraphQL Yoga for complex queries, automatic prompt versioning, and persistence with SQLite and Drizzle ORM.',
      image: imgWorkflowApi,
      tools: ['Bun (Runtime) & ElysiaJS', 'GraphQL Yoga', 'Drizzle ORM & SQLite', 'Service Pattern', 'Advanced TypeScript'],
      githubUrl: 'https://github.com/augustocsar/ai-agent-workflow-api'
    },
    {
      id: 'oci-terraform',
      title: 'Cloud Infrastructure: Modular IaC with Terraform',
      description: 'Provisioning of a complete and scalable cloud infrastructure on Oracle Cloud Infrastructure (OCI) using Terraform.',
      detailedDescription: 'Applies Infrastructure as Code (IaC) concepts through modular architecture, separating network and compute layers.',
      image: imgOciTerraform,
      tools: ['Terraform (IaC)', 'OCI (Oracle Cloud Infrastructure)', 'Terraform Modules', 'Linux Server', 'Network Security'],
      githubUrl: 'https://github.com/augustocsar/oci-terraform-lab'
    }
  ]
};