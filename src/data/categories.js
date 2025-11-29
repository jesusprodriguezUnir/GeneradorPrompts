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
  },
  {
    id: 'dotnet-enterprise',
    name: 'Ecosistema .NET & Azure',
    icon: '🔷',
    subcategories: [
      {
        id: 'clean-architecture-dotnet',
        name: 'Clean Architecture con .NET',
        prompt: `Actúa como un Arquitecto de Software Senior experto en el ecosistema .NET y Microsoft Azure. Tienes un dominio profundo de los principios SOLID, patrones de diseño (Repository, Unit of Work, CQRS) y Clean Architecture.

Tu tarea es diseñar la estructura y el esqueleto de código para una nueva aplicación web utilizando .NET 8 (o la versión LTS más reciente). El objetivo es tener una aplicación desacoplada, testeable y escalable.

Estoy construyendo una aplicación empresarial compleja. Necesito evitar poner toda la lógica en los controladores. La solución debe seguir estrictamente los principios de "Clean Architecture" (Arquitectura de Cebolla/Hexagonal).

**Instrucciones paso a paso:**
1. **Estructura de la Solución:** Define una estructura de carpetas y proyectos clara (ej. Domain, Application, Infrastructure, WebApi). Explica qué responsabilidad tiene cada capa.
2. **Entidades del Dominio:** Crea un ejemplo de una entidad 'Producto' rica, evitando el anti-patrón de modelos anémicos.
3. **Capa de Aplicación:** Implementa el patrón CQRS (Command Query Responsibility Segregation) usando la librería MediatR. Muestra un ejemplo de un 'CreateProductCommand' y su 'Handler'.
4. **Infraestructura:** Muestra cómo configurar Entity Framework Core, separando las configuraciones de las entidades y utilizando Inyección de Dependencias.
5. **API:** Muestra un Controlador API mínimo que solo llame al Mediator, manteniendo el controlador limpio.

**Restricciones:**
- Usa C# moderno con las últimas características del lenguaje.
- Aplica inyección de dependencias en todo momento.
- No incluyas lógica de negocio en la capa de UI/API.
- Salida: Bloques de código bien comentados y explicaciones en formato Markdown.`,
        tech: {
          languages: 'C# 12, .NET 8/9',
          frameworks: 'ASP.NET Core, MediatR, FluentValidation, AutoMapper',
          architecture: 'Clean Architecture (Onion/Hexagonal), CQRS, Repository Pattern',
          database: 'SQL Server, PostgreSQL, Entity Framework Core',
          devops: 'Azure DevOps, GitHub Actions, Docker, Azure App Service/AKS',
          security: 'ASP.NET Identity, Azure AD/Entra ID, JWT Bearer, HTTPS obligatorio'
        }
      },
      {
        id: 'minimal-apis-dotnet',
        name: 'Minimal APIs de Alto Rendimiento',
        prompt: `Actúa como un Arquitecto de Software Senior experto en .NET. Diseña una API RESTful usando **Minimal APIs** de .NET 8+, optimizada para alto rendimiento y baja latencia.

**Objetivo:** Crear endpoints ligeros sin la sobrecarga de controladores MVC, ideal para microservicios y APIs de alto throughput.

**Instrucciones:**
1. **Estructura del proyecto:** Organiza endpoints usando el patrón "Vertical Slice" o por feature.
2. **Endpoints tipados:** Usa TypedResults para respuestas fuertemente tipadas.
3. **Validación:** Integra FluentValidation con filtros de endpoint.
4. **Autenticación:** Configura JWT Bearer con políticas de autorización.
5. **OpenAPI:** Genera documentación Swagger/OpenAPI automática.
6. **Rate Limiting:** Implementa limitación de tasa nativa de .NET.
7. **Caching:** Usa Output Caching y Response Caching.

**Restricciones:**
- Evita controladores MVC tradicionales.
- Maximiza el uso de Source Generators para AOT.
- Incluye ejemplos de tests de integración con WebApplicationFactory.`,
        tech: {
          languages: 'C# 12, .NET 8/9',
          frameworks: 'ASP.NET Core Minimal APIs, Carter, FastEndpoints',
          architecture: 'Vertical Slice Architecture, REPR Pattern (Request-Endpoint-Response)',
          database: 'Dapper (micro-ORM), Redis, PostgreSQL',
          devops: 'Docker, Kubernetes, Azure Container Apps',
          security: 'Rate Limiting nativo, JWT, API Keys, CORS configurado'
        }
      },
      {
        id: 'blazor-enterprise',
        name: 'Aplicaciones Blazor Empresariales',
        prompt: `Actúa como un Arquitecto de Software Senior especializado en **Blazor** y aplicaciones web empresariales .NET.

**Objetivo:** Diseñar una aplicación Blazor (Server o WebAssembly) escalable para entornos empresariales con autenticación, gestión de estado compleja y componentes reutilizables.

**Instrucciones:**
1. **Modo de hosting:** Compara Blazor Server vs WebAssembly vs Hybrid. Recomienda según el caso de uso empresarial.
2. **Arquitectura de componentes:** Diseña una librería de componentes UI reutilizables siguiendo Atomic Design.
3. **Gestión de estado:** Implementa Fluxor o un StateContainer personalizado para estado global.
4. **Autenticación:** Integra con Azure AD/Entra ID usando MSAL.
5. **Comunicación con API:** Usa HttpClientFactory con Refit o servicios tipados.
6. **Renderizado:** Optimiza con virtualization, lazy loading y streaming rendering (.NET 8+).

**Restricciones:**
- Aplica el patrón de componentes inteligentes vs presentacionales.
- Incluye manejo de errores global con ErrorBoundary.
- Documenta estrategias de testing con bUnit.`,
        tech: {
          languages: 'C# 12, .NET 8/9, HTML/CSS',
          frameworks: 'Blazor Server/WebAssembly/Hybrid, MudBlazor/Radzen, Fluxor',
          architecture: 'Component-Based Architecture, Atomic Design, Flux Pattern',
          database: 'SQL Server, Cosmos DB (para estado distribuido)',
          devops: 'Azure Static Web Apps, Azure App Service, GitHub Actions',
          security: 'MSAL, Azure AD B2C, Blazor AuthenticationStateProvider'
        }
      },
      {
        id: 'microservices-dotnet',
        name: 'Microservicios con .NET Aspire',
        prompt: `Actúa como un Arquitecto de Software Senior experto en **arquitecturas de microservicios** con .NET.

**Objetivo:** Diseñar una solución de microservicios usando **.NET Aspire** para orquestación local y producción, con comunicación asíncrona y observabilidad integrada.

**Instrucciones:**
1. **Orquestación con Aspire:** Configura el AppHost para definir servicios, bases de datos y dependencias.
2. **Comunicación:** Implementa comunicación síncrona (gRPC/REST) y asíncrona (RabbitMQ/Azure Service Bus).
3. **Patrones de resiliencia:** Usa Polly v8 con el nuevo ResiliencePipeline para retries, circuit breaker y timeouts.
4. **Service Discovery:** Configura el descubrimiento de servicios con Aspire o Consul.
5. **Observabilidad:** Integra OpenTelemetry para traces, métricas y logs distribuidos.
6. **API Gateway:** Diseña un gateway con YARP (Yet Another Reverse Proxy).

**Restricciones:**
- Cada microservicio debe tener su propia base de datos (Database per Service).
- Implementa el patrón Outbox para consistencia eventual.
- Incluye Health Checks y Readiness Probes para Kubernetes.`,
        tech: {
          languages: 'C# 12, .NET 8/9',
          frameworks: '.NET Aspire, MassTransit, gRPC, YARP, Polly v8',
          architecture: 'Microservicios, Event-Driven, Saga Pattern, Outbox Pattern',
          database: 'PostgreSQL, MongoDB, Redis, Azure Service Bus/RabbitMQ',
          devops: 'Docker Compose, Kubernetes, Azure Container Apps, Prometheus/Grafana',
          security: 'mTLS entre servicios, OAuth2 con Identity Server/Duende, API Gateway auth'
        }
      }
    ]
  },
  {
    id: 'prompt-engineering',
    name: 'Ingeniería de Prompts & IA Generativa',
    icon: '✨',
    subcategories: [
      {
        id: 'mega-prompt-dotnet',
        name: 'Mega-Prompt: Arquitectura .NET',
        prompt: `# ROL
Actúa como un Arquitecto de Software Senior experto en el ecosistema .NET y Microsoft Azure. Tienes un dominio profundo de los principios SOLID, patrones de diseño (Repository, Unit of Work, CQRS) y Clean Architecture.

# OBJETIVO
Tu tarea es diseñar la estructura y el esqueleto de código para una nueva aplicación web utilizando .NET 8 (o la versión LTS más reciente). El objetivo es tener una aplicación desacoplada, testeable y escalable.

# CONTEXTO
Estoy construyendo una aplicación empresarial compleja. Necesito evitar poner toda la lógica en los controladores. La solución debe seguir estrictamente los principios de "Clean Architecture" (Arquitectura de Cebolla/Hexagonal).

# INSTRUCCIONES PASO A PASO
1. **Estructura de la Solución:** Define una estructura de carpetas y proyectos clara (ej. Domain, Application, Infrastructure, WebApi). Explica qué responsabilidad tiene cada capa.
2. **Entidades del Dominio:** Crea un ejemplo de una entidad 'Producto' rica, evitando el anti-patrón de modelos anémicos.
3. **Capa de Aplicación:** Implementa el patrón CQRS (Command Query Responsibility Segregation) usando la librería MediatR. Muestra un ejemplo de un 'CreateProductCommand' y su 'Handler'.
4. **Infraestructura:** Muestra cómo configurar Entity Framework Core, separando las configuraciones de las entidades y utilizando Inyección de Dependencias.
5. **API:** Muestra un Controlador API mínimo que solo llame al Mediator, manteniendo el controlador limpio.

# RESTRICCIONES Y FORMATO
- Usa C# moderno.
- Aplica inyección de dependencias en todo momento.
- No incluyas lógica de negocio en la capa de UI/API.
- Salida: Bloques de código bien comentados y explicaciones en formato Markdown.`,
        tech: {
          languages: 'C# 12, .NET 8/9',
          frameworks: 'ASP.NET Core, MediatR, FluentValidation, Entity Framework Core',
          architecture: 'Clean Architecture (Onion/Hexagonal), CQRS, Repository Pattern',
          database: 'SQL Server, PostgreSQL',
          devops: 'Azure DevOps, GitHub Actions, Docker',
          security: 'ASP.NET Identity, JWT Bearer, HTTPS obligatorio'
        }
      },
      {
        id: 'mega-prompt-python',
        name: 'Mega-Prompt: API Python FastAPI',
        prompt: `# ROL
Actúa como un Ingeniero Backend Senior especializado en Python moderno. Eres experto en desarrollo de APIs RESTful de alto rendimiento, asincronía (async/await) y Type Hinting.

# OBJETIVO
Generar la estructura base profesional para una API REST utilizando Python.

# PREFERENCIA TECNOLÓGICA
- Framework: FastAPI (por su validación de datos y velocidad).
- ORM: SQLAlchemy (versión asíncrona) o Tortoise ORM.
- Validación: Pydantic v2.

# INSTRUCCIONES PASO A PASO
1. **Arquitectura del Proyecto:** Propón una estructura de directorios escalable que separe claramente: \`routers\`, \`models\` (base de datos), \`schemas\` (Pydantic DTOs), \`services\` (lógica de negocio) y \`core\` (configuración).
2. **Configuración:** Muestra cómo gestionar variables de entorno (usando \`pydantic-settings\` o \`.env\`) para la conexión a la base de datos.
3. **Inyección de Dependencias:** Muestra cómo usar el sistema de \`Depends\` de FastAPI para inyectar una sesión de base de datos en una ruta.
4. **Ejemplo de Código:** Escribe el código para un endpoint \`POST /users\` que:
   - Valide la entrada con un esquema Pydantic.
   - Llame a una capa de servicio (no lógica en la ruta).
   - Guarde en base de datos de forma asíncrona.
   - Maneje excepciones HTTP correctamente.

# RESTRICCIONES
- El código debe cumplir con PEP 8.
- Todo el código debe tener Type Hints (tipado estático).
- Evita estructuras planas (todo en un solo archivo \`main.py\`); quiero una estructura lista para producción.`,
        tech: {
          languages: 'Python 3.11+',
          frameworks: 'FastAPI, SQLAlchemy (async), Pydantic v2',
          architecture: 'Layered Architecture (routers/services/models/schemas)',
          database: 'PostgreSQL, SQLite (desarrollo)',
          devops: 'Docker, Uvicorn/Gunicorn, Poetry/uv',
          security: 'OAuth2, JWT, CORS, Rate Limiting'
        }
      },
      {
        id: 'prompt-patterns',
        name: 'Patrones de Prompts Efectivos',
        prompt: `# ROL
Actúa como un Ingeniero de Prompts experto en IA Generativa, especializado en obtener respuestas de alta calidad de LLMs (ChatGPT, Claude, Gemini).

# OBJETIVO
Enseñar los patrones fundamentales para construir prompts efectivos que generen código arquitectónicamente sólido y respuestas precisas.

# PATRONES A EXPLICAR

## 1. Persona Pattern (Asignación de Rol)
Explica cómo asignar un rol específico activa conocimiento especializado del modelo.
- Ejemplo: "Actúa como un Arquitecto Senior con 15 años de experiencia en..."

## 2. Chain of Thought (Cadena de Pensamiento)
Muestra cómo forzar al modelo a razonar paso a paso mejora la calidad.
- Ejemplo: "Piensa paso a paso antes de responder..."

## 3. Few-Shot Learning
Demuestra cómo proporcionar ejemplos guía el formato de salida.
- Incluye 2-3 ejemplos de input/output esperado.

## 4. Constraint Injection (Restricciones)
Explica cómo las restricciones específicas evitan respuestas genéricas.
- Ejemplo: "NO uses jQuery", "Usa SOLO TypeScript"

## 5. Output Formatting
Muestra cómo especificar el formato exacto de salida.
- Ejemplo: "Responde en formato JSON con la siguiente estructura..."

# FORMATO DE SALIDA
Para cada patrón:
1. Nombre y descripción
2. Cuándo usarlo
3. Ejemplo práctico
4. Anti-patrón a evitar`,
        tech: {
          languages: 'Markdown, Natural Language',
          frameworks: 'ChatGPT, Claude, Gemini, Copilot',
          architecture: 'Prompt Engineering Patterns',
          database: 'N/A',
          devops: 'N/A',
          security: 'Prompt Injection Defense, PII Protection'
        }
      },
      {
        id: 'custom-gpt-builder',
        name: 'Creador de GPTs Personalizados',
        prompt: `# ROL
Actúa como un experto en creación de GPTs personalizados (Custom GPTs) y agentes de IA especializados.

# OBJETIVO
Diseñar las instrucciones del sistema (System Prompt) para crear un GPT personalizado especializado en un dominio específico.

# CONTEXTO
Los GPTs personalizados requieren instrucciones claras que definan:
- Personalidad y tono
- Conocimiento especializado
- Restricciones de comportamiento
- Formato de respuestas
- Manejo de casos edge

# INSTRUCCIONES
1. **Define el Propósito:** ¿Qué problema específico resuelve este GPT?
2. **Establece la Persona:** Nombre, personalidad, nivel de formalidad, idioma.
3. **Conocimiento Base:** ¿Qué documentos/APIs/datos debe conocer?
4. **Instrucciones de Comportamiento:**
   - Cómo debe responder a saludos
   - Cómo manejar preguntas fuera de su dominio
   - Cuándo pedir clarificación
   - Formato preferido de respuestas
5. **Restricciones:** Qué NO debe hacer nunca.
6. **Ejemplos de Conversación:** 3 ejemplos de interacciones ideales.

# FORMATO DE SALIDA
Genera el System Prompt completo en formato Markdown, listo para copiar en la configuración del GPT.

# EJEMPLO DE DOMINIO
[Especifica aquí el dominio: ej. "Asistente de código Python", "Tutor de matemáticas", "Consultor de marketing"]`,
        tech: {
          languages: 'Natural Language, Markdown',
          frameworks: 'OpenAI GPT Builder, Custom Instructions',
          architecture: 'Agent-Based, RAG-Ready',
          database: 'Knowledge Files, Vector Stores',
          devops: 'OpenAI API, GPT Actions',
          security: 'Instruction Injection Prevention, Jailbreak Resistance'
        }
      },
      {
        id: 'code-review-prompt',
        name: 'Prompt para Code Review con IA',
        prompt: `# ROL
Actúa como un Senior Code Reviewer con experiencia en múltiples lenguajes y frameworks. Tu objetivo es proporcionar feedback constructivo, específico y accionable.

# OBJETIVO
Revisar código proporcionado identificando:
1. **Bugs potenciales** y errores lógicos
2. **Vulnerabilidades de seguridad** (OWASP Top 10)
3. **Problemas de rendimiento** y optimizaciones
4. **Violaciones de principios SOLID** y Clean Code
5. **Oportunidades de refactorización**
6. **Mejoras de legibilidad** y mantenibilidad

# FORMATO DE REVISIÓN
Para cada issue encontrado:

\`\`\`
📍 Ubicación: [archivo:línea]
🏷️ Categoría: [Bug|Security|Performance|Design|Style]
⚠️ Severidad: [Critical|High|Medium|Low]
📝 Problema: [Descripción clara del issue]
✅ Sugerencia: [Código corregido o recomendación]
📚 Referencia: [Link a documentación o best practice]
\`\`\`

# INSTRUCCIONES ADICIONALES
- Prioriza issues por severidad
- Incluye el "por qué" de cada sugerencia
- Si el código es bueno, menciona qué está bien hecho
- Sugiere tests si faltan
- Considera el contexto del proyecto

# CÓDIGO A REVISAR
[Pega aquí el código]`,
        tech: {
          languages: 'Multi-lenguaje',
          frameworks: 'Aplicable a cualquier stack',
          architecture: 'Code Review Process',
          database: 'N/A',
          devops: 'CI/CD Integration, PR Reviews',
          security: 'OWASP Top 10, SAST patterns'
        }
      },
      {
        id: 'angular-modern',
        name: 'Mega-Prompt: Angular Moderno (Signals)',
        prompt: `# ROL
Actúa como un Arquitecto Frontend Senior y experto en Angular (versiones 17/18+). Tienes un dominio total de las nuevas características reactivas (Signals), Standalone Components y optimización de rendimiento.

# OBJETIVO
Diseñar la arquitectura base y un ejemplo de implementación para una aplicación SPA (Single Page Application) escalable y modular.

# CONTEXTO TÉCNICO
La aplicación consumirá una API REST. Quiero evitar el "boilerplate" antiguo de Angular (NgModules). La arquitectura debe separar claramente la lógica de negocio de la UI.

# INSTRUCCIONES DETALLADAS
1. **Estructura de Directorios (SCAM/Modular):** Propón una estructura de carpetas organizada por "Features" (funcionalidades). Diferencia entre carpetas \`core\` (servicios singleton, interceptores), \`shared\` (componentes UI reutilizables) y \`features\` (páginas/vistas).
2. **Componentes Modernos:**
   - Todo debe ser **Standalone Components**.
   - Usa la **Nueva Sintaxis de Flujo de Control** (\`@if\`, \`@for\`, \`@switch\`) en lugar de las directivas estructurales antiguas.
   - Aplica el patrón **Smart vs. Dumb Components** (Contenedores vs. Presentacionales). Muestra un ejemplo de cómo un componente padre (Smart) pasa datos a un hijo (Dumb) mediante \`input()\` y recibe eventos con \`output()\`.
3. **Gestión de Estado (State Management):**
   - No uses librerías externas complejas (como NgRx) al inicio.
   - Implementa un **Servicio con Signals** para manejar el estado global o de una feature específica de forma reactiva y ligera.
4. **Rendimiento:** Asegúrate de que los componentes usen \`ChangeDetectionStrategy.OnPush\`.

# EJEMPLO DE CÓDIGO A GENERAR
Genera el código para una feature de "Lista de Usuarios":
   - Un \`UserService\` que use \`HttpClient\` y almacene la lista en un \`signal\`.
   - Un componente \`UserListComponent\` (Smart) que inyecte el servicio.
   - Un componente \`UserCardComponent\` (Dumb) que reciba un usuario y emita un evento al hacer click.

# RESTRICCIONES
- Tipado estricto en TypeScript (no \`any\`).
- Uso exclusivo de Signals para la reactividad (evita \`BehaviorSubject\` si no es estrictamente necesario).
- Código limpio y comentado.`,
        tech: {
          languages: 'TypeScript 5.x, HTML, SCSS',
          frameworks: 'Angular 17/18+, Angular CLI, RxJS (mínimo)',
          architecture: 'Standalone Components, Smart/Dumb Pattern, Feature-based Structure',
          database: 'N/A (Consumo de APIs REST)',
          devops: 'Angular CLI, Nx (monorepo opcional), Docker',
          security: 'HttpInterceptors, Guards, CSP, Sanitización de inputs'
        }
      },
      {
        id: 'fullstack-devops',
        name: 'Mega-Prompt: DevOps Full Stack',
        prompt: `# ROL
Actúa como un DevOps Engineer Senior con experiencia en containerización y orquestación de aplicaciones Full Stack.

# OBJETIVO
Generar la configuración completa de Docker y Docker Compose para un proyecto Full Stack que incluya:
- **Backend:** API REST (.NET Core o Python/FastAPI)
- **Frontend:** Angular/React SPA
- **Base de datos:** PostgreSQL
- **Cache:** Redis (opcional)
- **Reverse Proxy:** Nginx

# INSTRUCCIONES DETALLADAS

## 1. Dockerfile para Backend
- Multi-stage build para optimizar tamaño de imagen
- Separar etapas de build y runtime
- Incluir health checks
- Variables de entorno para configuración

## 2. Dockerfile para Frontend
- Build con Node.js
- Servir con Nginx (producción)
- Optimización de caché de capas

## 3. Docker Compose
- Definir servicios: api, frontend, db, redis, nginx
- Configurar networks para aislamiento
- Usar volumes para persistencia de datos
- Variables de entorno con archivo \`.env\`
- Dependencias entre servicios (\`depends_on\` con healthchecks)

## 4. Nginx como Reverse Proxy
- Configuración para servir frontend
- Proxy pass hacia la API (\`/api/*\`)
- Headers de seguridad (CORS, CSP)
- Compresión gzip

## 5. Scripts de Utilidad
- \`docker-compose.dev.yml\` para desarrollo (hot reload)
- \`docker-compose.prod.yml\` para producción
- Makefile con comandos comunes

# FORMATO DE SALIDA
Genera todos los archivos necesarios con comentarios explicativos:
- \`Dockerfile\` (backend)
- \`Dockerfile\` (frontend)
- \`docker-compose.yml\`
- \`nginx/nginx.conf\`
- \`.env.example\``,
        tech: {
          languages: 'Dockerfile, YAML, Bash',
          frameworks: 'Docker, Docker Compose, Nginx',
          architecture: 'Microservices Container Architecture',
          database: 'PostgreSQL, Redis',
          devops: 'Docker Hub, GitHub Actions, CI/CD pipelines',
          security: 'Non-root containers, Secrets management, Network isolation'
        }
      }
    ]
  }
];
