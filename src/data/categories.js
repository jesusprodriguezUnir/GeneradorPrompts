export const categories = [
  {
    id: 'backend',
    name: 'Backend de Alto Rendimiento & Escalabilidad',
    icon: '🚀',
    subcategories: [
      {
        id: 'api-rest-concurrencia',
        name: 'API RESTful de Alta Concurrencia',
        prompt: `Actúa como un programador senior especializado en **API RESTful de Alta Concurrencia**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Explica las decisiones arquitectónicas y las limitaciones. Proporciona código base altamente robusto y escalable, enfocándote en el manejo eficiente de miles de solicitudes por segundo, uso de asincronía y caching estratégico.`,
        tech: {
          languages: 'Go (Golang), Rust, Python (Async)',
          frameworks: 'Fiber (Go), Actix-web (Rust), FastAPI (Python)',
          architecture: 'Clean Architecture con inyección de dependencias',
          database: 'PostgreSQL (con PgBouncer), Redis (Caching/PubSub)',
          devops: 'Docker, Kubernetes, Nginx (Reverse Proxy)',
          security: 'Rate limiting, JWT/OAuth2, validación estricta de esquemas (Pydantic/Validator)'
        }
      },
      {
        id: 'graphql-federada',
        name: 'Arquitectura GraphQL Federada',
        prompt: `Actúa como un programador senior especializado en **Arquitectura GraphQL Federada**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña un supergrafo que orqueste múltiples subgrafos de microservicios, optimizando la resolución de queries y evitando el problema N+1.`,
        tech: {
          languages: 'TypeScript (Node.js), Go',
          frameworks: 'Apollo Federation, GraphQL Mesh, Mercurius',
          architecture: 'Microservicios federados (Gateway + Subgraphs)',
          database: 'MongoDB (para documentos flexibles), Neo4j (grafos)',
          devops: 'AWS Lambda, Apollo Studio',
          security: 'Query depth limiting, desactivación de introspección en producción'
        }
      }
    ]
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering & Big Data',
    icon: '📊',
    subcategories: [
      {
        id: 'etl-realtime',
        name: 'Pipelines ETL/ELT en Tiempo Real',
        prompt: `Actúa como un programador senior especializado en **Pipelines ETL/ELT en Tiempo Real**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña un flujo de datos capaz de ingestar, transformar y cargar terabytes de datos con latencia sub-segundo, garantizando tolerancia a fallos y consistencia.`,
        tech: {
          languages: 'Python, Scala, Java',
          frameworks: 'Apache Spark, Apache Flink, Apache Beam, dbt',
          architecture: 'Lambda Architecture o Kappa Architecture',
          database: 'Snowflake, Databricks, ClickHouse',
          devops: 'Apache Airflow, Dagster, AWS Glue',
          security: 'Encriptación en tránsito y reposo, gestión de acceso granular (IAM)'
        }
      },
      {
        id: 'data-lakehouse',
        name: 'Data Lakehouse Moderno',
        prompt: `Actúa como un programador senior especializado en **Data Lakehouse Moderno**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Crea una solución que combine la flexibilidad de un Data Lake con la gestión ACID de un Data Warehouse, utilizando formatos de tabla abiertos.`,
        tech: {
          languages: 'Python, SQL',
          frameworks: 'Delta Lake, Apache Iceberg, Apache Hudi',
          architecture: 'Medallion Architecture (Bronze, Silver, Gold layers)',
          database: 'S3/Azure Blob Storage (Storage), Trino/Presto (Compute)',
          devops: 'Terraform para IaC, Docker',
          security: 'Data governance con Apache Ranger o AWS Lake Formation'
        }
      }
    ]
  },
  {
    id: 'ai-agents',
    name: 'Inteligencia Artificial & Agentes Autónomos',
    icon: '🤖',
    subcategories: [
      {
        id: 'rag-systems',
        name: 'Sistemas RAG (Retrieval-Augmented Generation)',
        prompt: `Actúa como un programador senior especializado en **Sistemas RAG (Retrieval-Augmented Generation)**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña un sistema que ingeste documentos, genere embeddings vectoriales y utilice un LLM para responder preguntas con contexto preciso, minimizando alucinaciones.`,
        tech: {
          languages: 'Python',
          frameworks: 'LangChain, LlamaIndex, HuggingFace Transformers',
          architecture: 'Modular (Ingestion, Retrieval, Generation)',
          database: 'Pinecone, Milvus, Weaviate, pgvector',
          devops: 'Docker, AWS SageMaker o endpoints de OpenAI/Anthropic',
          security: 'Sanitización de prompts (prompt injection defense), privacidad de datos PII'
        }
      },
      {
        id: 'autonomous-agents',
        name: 'Agentes Autónomos Multi-Rol',
        prompt: `Actúa como un programador senior especializado en **Agentes Autónomos Multi-Rol**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Crea un enjambre de agentes que puedan colaborar, planificar tareas, usar herramientas externas (navegación web, ejecución de código) y mantener memoria a largo plazo.`,
        tech: {
          languages: 'Python',
          frameworks: 'AutoGen, CrewAI, LangGraph',
          architecture: 'Arquitectura basada en eventos y orquestación de estados',
          database: 'MemGPT (memoria jerárquica), Redis',
          devops: 'Contenedores aislados para ejecución de herramientas (Sandboxing)',
          security: 'Sandboxing estricto para ejecución de código, límites de presupuesto de API'
        }
      }
    ]
  },
  {
    id: 'fullstack',
    name: 'Desarrollo Web Full-Stack Moderno',
    icon: '💻',
    subcategories: [
      {
        id: 'ssr-advanced',
        name: 'Aplicaciones Server-Side Rendering (SSR) Avanzadas',
        prompt: `Actúa como un programador senior especializado en **Aplicaciones Server-Side Rendering (SSR) Avanzadas**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Implementa renderizado híbrido (ISR/SSR/CSR), optimización de Core Web Vitals y manejo de estado global complejo.`,
        tech: {
          languages: 'TypeScript',
          frameworks: 'Next.js (App Router), Remix, Nuxt',
          architecture: 'Component-Driven Development (CDD), Atomic Design',
          database: 'Supabase, PlanetScale (MySQL serverless)',
          devops: 'Vercel, Netlify, Docker',
          security: 'Protección CSRF, Content Security Policy (CSP), validación de inputs (Zod)'
        }
      },
      {
        id: 'micro-frontends',
        name: 'Micro-Frontends Escalables',
        prompt: `Actúa como un programador senior especializado en **Micro-Frontends Escalables**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña una aplicación host que integre múltiples micro-aplicaciones desarrolladas independientemente, compartiendo dependencias críticas sin conflictos.`,
        tech: {
          languages: 'TypeScript, JavaScript',
          frameworks: 'Webpack Module Federation, Vite, Single-SPA',
          architecture: 'Shell Application + Remote Modules',
          database: 'N/A (Consumo de APIs)',
          devops: 'CI/CD independientes por micro-frontend, S3/CloudFront',
          security: 'Aislamiento de estilos (Shadow DOM o CSS Modules), gestión unificada de autenticación'
        }
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Ciberseguridad Ofensiva & Defensiva',
    icon: '🛡️',
    subcategories: [
      {
        id: 'ransomware-lab',
        name: 'Laboratorio de Simulación de Ransomware',
        prompt: `Actúa como un programador senior especializado en **Ciberseguridad y Malware Analysis**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas para un **Laboratorio de Simulación de Ransomware** con fines educativos y de investigación. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Implementa mecanismos de cifrado reversibles, propagación simulada en red aislada y un dashboard de telemetría para análisis forense.`,
        tech: {
          languages: 'C++, Python, Go',
          frameworks: 'Cryptography (Python), WinAPI (C++)',
          architecture: 'Cliente-Servidor (C2 - Command & Control simulado)',
          database: 'SQLite (local logs), Elasticsearch (SIEM simulado)',
          devops: 'VirtualBox/VMware (Red aislada obligatoria), Vagrant',
          security: 'CRÍTICO: Kill-switch obligatorio, ejecución restringida a entornos sandbox detectados, no persistencia real'
        }
      },
      {
        id: 'ids-ai',
        name: 'Sistema de Detección de Intrusos (IDS) con IA',
        prompt: `Actúa como un programador senior especializado en **Sistemas de Detección de Intrusos (IDS) con IA**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña un sistema que analice tráfico de red en tiempo real buscando anomalías y firmas de ataque utilizando modelos de Machine Learning.`,
        tech: {
          languages: 'Python, Rust (para el packet sniffer)',
          frameworks: 'Scikit-learn, TensorFlow, Zeek/Suricata (integración)',
          architecture: 'Pipeline de procesamiento de streams',
          database: 'TimeScaleDB, InfluxDB',
          devops: 'Docker, ELK Stack (Elasticsearch, Logstash, Kibana)',
          security: 'Hardening del sistema operativo host, encriptación de logs'
        }
      }
    ]
  },
  {
    id: 'distributed-systems',
    name: 'Sistemas Distribuidos & Microservicios',
    icon: '🌐',
    subcategories: [
      {
        id: 'event-driven',
        name: 'Arquitectura Event-Driven (EDA)',
        prompt: `Actúa como un programador senior especializado en **Arquitectura Event-Driven (EDA)**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña un sistema desacoplado donde los servicios se comuniquen exclusivamente a través de eventos asíncronos, garantizando entrega y ordenamiento.`,
        tech: {
          languages: 'Java (Spring Boot), Go, C# (.NET)',
          frameworks: 'Spring Cloud Stream, Watermill (Go)',
          architecture: 'Event Sourcing + CQRS',
          database: 'Apache Kafka, RabbitMQ, EventStoreDB',
          devops: 'Kubernetes (KEDA para escalado basado en eventos)',
          security: 'Autenticación de productores/consumidores, encriptación TLS en el bus de eventos'
        }
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Ecosistema Móvil & Multiplataforma',
    icon: '📱',
    subcategories: [
      {
        id: 'hybrid-apps',
        name: 'Apps Híbridas de Alto Rendimiento',
        prompt: `Actúa como un programador senior especializado en **Apps Híbridas de Alto Rendimiento**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Crea una aplicación móvil que comparta lógica de negocio entre iOS y Android, con animaciones a 60fps, gestión de estado compleja y capacidades offline-first.`,
        tech: {
          languages: 'Dart (Flutter), TypeScript (React Native)',
          frameworks: 'Bloc/Riverpod (Flutter), TanStack Query (React Native)',
          architecture: 'Clean Architecture adaptada a UI',
          database: 'Realm, SQLite (Drift/WatermelonDB)',
          devops: 'Fastlane, Firebase App Distribution, Codemagic',
          security: 'Obfuscación de código (ProGuard/R8), almacenamiento seguro (Keychain/Keystore)'
        }
      }
    ]
  },
  {
    id: 'cloud-native',
    name: 'Cloud-Native & DevOps Automation',
    icon: '☁️',
    subcategories: [
      {
        id: 'iac-gitops',
        name: 'Infraestructura como Código (IaC) y GitOps',
        prompt: `Actúa como un programador senior especializado en **Infraestructura como Código (IaC) y GitOps**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña un repositorio que defina toda la infraestructura cloud (redes, clusters, bases de datos) y pipelines que sincronicen automáticamente el estado del cluster con el repositorio git.`,
        tech: {
          languages: 'HCL (Terraform), Yaml, Go (para operadores)',
          frameworks: 'Terraform/OpenTofu, ArgoCD, Flux, Crossplane',
          architecture: 'GitOps (Pull-based deployment)',
          database: 'N/A (Estado de Terraform en S3/GCS)',
          devops: 'AWS/GCP/Azure, GitHub Actions',
          security: 'Escaneo de secretos (TruffleHog), políticas como código (OPA/Kyverno)'
        }
      }
    ]
  },
  {
    id: 'iot',
    name: 'Internet of Things (IoT) & Edge Computing',
    icon: '📡',
    subcategories: [
      {
        id: 'edge-ai',
        name: 'Procesamiento en el Borde (Edge AI)',
        prompt: `Actúa como un programador senior especializado en **Procesamiento en el Borde (Edge AI)**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Diseña un sistema para dispositivos IoT que ejecute inferencia de modelos de IA localmente (visión por computador o audio) y sincronice solo metadatos relevantes a la nube.`,
        tech: {
          languages: 'C++, Python (MicroPython/CircuitPython)',
          frameworks: 'TensorFlow Lite, Edge Impulse, OpenCV',
          architecture: 'Edge-Fog-Cloud',
          database: 'SQLite, MQTT (protocolo)',
          devops: 'AWS IoT Greengrass, Azure IoT Edge',
          security: 'Autenticación mTLS por dispositivo, Secure Boot'
        }
      }
    ]
  },
  {
    id: 'automation',
    name: 'Automatización con Python/Node',
    icon: '🤖',
    subcategories: [
      {
        id: 'web-scraping',
        name: 'Web Scraping Avanzado y Anti-Detección',
        prompt: `Actúa como un programador senior especializado en **Web Scraping Avanzado y Anti-Detección**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Crea un sistema distribuido de scrapers capaz de evadir captchas, rotar proxies residenciales, manejar huellas digitales del navegador (fingerprinting) y extraer datos estructurados a gran escala.`,
        tech: {
          languages: 'Python, TypeScript',
          frameworks: 'Playwright, Puppeteer, Scrapy, Selenium-stealth',
          architecture: 'Master-Worker distribuido (Redis Queue)',
          database: 'MongoDB, PostgreSQL',
          devops: 'Docker, Bright Data/Oxylabs (Proxies)',
          security: 'Respeto a robots.txt (ético), limitación de tasa para evitar DoS'
        }
      }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science & Dashboards',
    icon: '📈',
    subcategories: [
      {
        id: 'streamlit-advanced',
        name: 'Aplicaciones Streamlit Avanzadas',
        prompt: `Actúa como un programador senior especializado en **Streamlit y Data Science**. Genera la arquitectura óptima, estructura total del proyecto, módulos, archivos, patrones recomendados y mejores prácticas modernas. Incluye librerías avanzadas, frameworks, dependencias y un plan técnico detallado. Crea una aplicación interactiva de datos con componentes personalizados, gestión de estado eficiente (Session State), caching avanzado y despliegue optimizado.`,
        tech: {
          languages: 'Python',
          frameworks: 'Streamlit, Pandas, Plotly/Altair',
          architecture: 'Model-View-Controller (MVC) adaptado',
          database: 'DuckDB, SQLite, PostgreSQL',
          devops: 'Streamlit Cloud, Docker',
          security: 'Secrets management, Input sanitization'
        }
      }
    ]
  }
];
