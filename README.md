# TaskFlow Backend Internship: Tsegazeab Kebede's Task Roadmap

**Intern ID:** `INT-010`  
**Intern Name:** Tsegazeab Kebede  
**Mentor:** Mekuanint  
**Project:** TaskFlow Backend Ecosystem (NestJS, TypeScript, PostgreSQL, Microservices)  


## 🗓️ Structured Task List (By Milestone)

### 🧱 Milestone 1: Foundations (Weeks 1.0 – 3.0)

#### Week 1.0: Version Control with Git & PR Workflow
- **Focus Area:** Git basics, branching strategies, pull requests, and rebasing.
- **Learning Objectives:** Master `clone`, `commit`, `push`, `pull`, branch management, and conflict resolution via rebasing.
- **Reference Links:**
  - [Git Official Docs: Chapters 2.1–2.5](https://git-scm.com/doc)
  - [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
  - [GitHub Skills: Introduction to GitHub](https://skills.github.com/)
  - [Learn Git Branching (interactive)](https://learngitbranching.js.org/)
  - [Git Branching - Atlassian](https://www.atlassian.com/git/tutorials/using-branches)
  - [Git Rebase - Atlassian](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
  - [Git Rebase vs Merge - YouTube (TheNetNinja)](https://www.youtube.com/watch?v=f1wnYd0pgJ0)
- **Deliverables & Tasks:**
  - [x] Create a GitHub repository named `taskflow-backend`.
  - [x] Initialize repository with a professional `README.md` and Node.js `.gitignore`.
  - [x] Create and set up a default `develop` branch.
  - [x] Practice feature branching: create a feature branch, make commits, open a PR against `develop`, and merge it.
  - [x] Practice rebasing a feature branch onto `develop` cleanly.

#### Week 2.0: Node.js & TypeScript Fundamentals
- **Focus Area:** TypeScript setup, async programming, event loop, and file system operations.
- **Learning Objectives:** TypeScript types/interfaces, JavaScript/Node.js event loop architecture, async/await, error handling (`try...catch`), and environment management (`dotenv`).
- **Reference Links:**
  - [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [TypeScript for Node.js Developers](https://www.freecodecamp.org/news/typescript-for-node-developers/)
  - [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  - [JavaScript Event Loop - YouTube (Philip Roberts)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
  - [Node.js Event Loop - Node.js Docs](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
  - [Node.js Error Handling - Joyent](https://www.joyent.com/node-js/production/design/errors)
  - [try...catch - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
  - [Node.js fs module docs](https://nodejs.org/api/fs.html)
  - [Reading/Writing Files in Node.js - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-the-fs-module-in-node-js)
  - [dotenv package](https://www.npmjs.com/package/dotenv)
  - [Node.js process.env - Node.js Docs](https://nodejs.org/api/process.html#process_process_env)
- **Deliverables & Tasks:**
  - [x] Initialize a Node.js + TypeScript project structure (`tsconfig.json`, scripts).
  - [x] Define core TypeScript interfaces and types for application models.
  - [x] Write an asynchronous script demonstrating non-blocking file system (`fs`) operations (reading/writing JSON data).
  - [x] Implement robust error handling (`try...catch`) around asynchronous operations.
  - [x] Build a simple HTTP server serving mock data that loads configuration (like `PORT`) from a `.env` file using `dotenv`.

#### Week 3.0: Understanding the Web, HTTP & Introduction to NestJS
- **Focus Area:** Internet architecture (DNS, TCP/IP), HTTP methods/headers, client-server model, and NestJS scaffolding.
- **Learning Objectives:** HTTP status codes and REST principles; NestJS architectural philosophy (Controllers, Providers, Modules).
- **Reference Links:**
  - [How DNS Works - Cloudflare](https://www.cloudflare.com/learning/dns/what-is-dns/)
  - [TCP/IP Explained - YouTube](https://www.youtube.com/watch?v=5VAM2QAGZIc&t=5s)
  - [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  - [HTTP Status Codes - HTTP Cats](https://http.cat/)
  - [REST API Tutorial](https://restfulapi.net/)
  - [Client-Server Model - GeeksforGeeks](https://www.geeksforgeeks.org/client-server-model/)
  - [Introduction to Client Server Networks - YouTube](https://www.youtube.com/watch?v=L5BlpPU_muY)
  - [NestJS Official Docs: Introduction](https://docs.nestjs.com/)
  - [NestJS vs Express](https://dev.to/hamzakhan/nestjs-vs-express-why-structure-beats-speed-in-the-long-run-4g5o)
  - [Why NestJS? - YouTube](https://www.youtube.com/watch?v=0M8AYU_hPas)
  - [NestJS CLI Overview](https://docs.nestjs.com/cli/overview)
  - [NestJS First Steps](https://docs.nestjs.com/first-steps)
  - [NestJS Project Structure - Better Programming](https://betterprogramming.pub/nest-js-project-structure-8b9e5d2e8c3c)
- **Deliverables & Tasks:**
  - [ ] Test HTTP server endpoints using CLI tools (`curl`, `postman`).
  - [ ] Install the NestJS CLI globally (`npm i -g @nestjs/cli`) and scaffold a new application.
  - [ ] Generate starter modules using the CLI: `ProjectsModule`, `ProjectsController`, and `ProjectsService`.
  - [ ] Document the generated architectural folder structure and request lifecycle in your project `README.md`.

---

### ⚙️ Milestone 2: Core Backend Development (Weeks 4.0 – 7.0)

#### Week 4.0: Building RESTful APIs with NestJS
- **Focus Area:** Controllers, routing, Dependency Injection (DI), services, modules, and DTO validation.
- **Learning Objectives:** Route handling, providers, DI container, circular dependency prevention, and request payload validation (`class-validator`, `class-transformer`).
- **Reference Links:**
  - [NestJS Controllers](https://docs.nestjs.com/controllers)
  - [NestJS Controllers - YouTube (CodeWithMazn)](https://docs.nestjs.com/controllers)
  - [NestJS Providers](https://docs.nestjs.com/providers)
  - [Dependency Injection in NestJS - Medium](https://medium.com/@Abdelrahman_Rezk/dependency-injection-in-nestjs-a-comprehensive-guide-with-examples-ea0fe4be1256)
  - [NestJS Modules](https://docs.nestjs.com/modules)
  - [Feature Modules - NestJS](https://docs.nestjs.com/modules#feature-modules)
  - [Circular Dependency - NestJS](https://docs.nestjs.com/fundamentals/circular-dependency)
  - [NestJS Validation](https://docs.nestjs.com/techniques/validation)
  - [class-validator docs](https://github.com/typestack/class-validator)
  - [class-transformer docs](https://github.com/typestack/class-transformer)
  - [Custom Decorators - NestJS](https://docs.nestjs.com/custom-decorators)
- **Deliverables & Tasks:**
  - [ ] Create `CreateProjectDto` and `UpdateProjectDto` with strict validation decorators (`@IsString()`, `@IsNotEmpty()`, `@IsOptional()`).
  - [ ] Enable global validation across the application via `ValidationPipe` in `main.ts`.
  - [ ] Build in-memory CRUD endpoints in `ProjectsController` delegating business logic to `ProjectsService`.
  - [ ] Scaffold a `UsersModule` and create a custom `@CurrentUser()` request decorator.

#### Week 5.0: Authentication & Authorization Foundation
- **Focus Area:** DTOs, custom guards, API keys, and JSON Web Token (JWT) authentication.
- **Learning Objectives:** Implementing guards for route protection, JWT token generation, and authentication strategies.
- **Reference Links:**
  - [NestJS Guards](https://docs.nestjs.com/guards)
  - [JWT Authentication - NestJS (up to JWT section)](https://docs.nestjs.com/security/authentication#jwt-token)
- **Deliverables & Tasks:**
  - [ ] Implement a temporary API key guard to understand route protection mechanics.
  - [ ] Create `AuthModule` and `AuthService` handling user login and token generation.
  - [ ] Implement JWT authentication using Passport (`@nestjs/passport`, `@nestjs/jwt`, `JwtStrategy`).
  - [ ] Protect sensitive project endpoints using `@UseGuards(JwtAuthGuard)`.

#### Week 6.0: Databases with PostgreSQL & TypeORM
- **Focus Area:** Relational database modeling, Entities, Repositories, Query Builder, and Transactions.
- **Learning Objectives:** SQL vs NoSQL trade-offs, database schema design, entity relationships (One-to-Many, Many-to-Many), and ACID transactions.
- **Reference Links:**
  - [SQL vs NoSQL - MongoDB](https://www.mongodb.com/scale/sql-vs-nosql)
  - [When to Use NoSQL vs SQL - Medium](https://sqlinsix.medium.com/when-to-use-sql-or-nosql-b50d4a52c157)
  - [LeetCode SQL 1683](https://leetcode.com/problems/invalid-tweets/description/?envType=study-plan-v2&envId=top-sql-50)
  - [LeetCode SQL 570](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/description/?envType=study-plan-v2&envId=top-sql-50)
  - [LeetCode SQL 1193](https://leetcode.com/problems/monthly-transactions-i/description/?envType=study-plan-v2&envId=top-sql-50)
  - [LeetCode SQL 619](https://leetcode.com/problems/biggest-single-number/description/?envType=study-plan-v2&envId=top-sql-50)
  - [LeetCode SQL 810](https://leetcode.com/problems/consecutive-numbers/description/?envType=study-plan-v2&envId=top-sql-50)
  - [Leetcode 262 (GOD MODE: SQL Edition)](https://leetcode.com/problems/trips-and-users/description/)
  - [Postgres introduction](https://neon.com/postgresql/postgresql-getting-started/what-is-postgresql)
  - [TypeORM Entities](https://typeorm.io/entities)
  - [TypeORM Relations](https://typeorm.io/relations)
  - [NestJS + TypeORM](https://docs.nestjs.com/techniques/database)
  - [TypeORM Repository API](https://typeorm.io/repository-api)
  - [Query Builder](https://typeorm.io/select-query-builder)
  - [Transactions](https://typeorm.io/transactions)
  - [NestJS Database (@InjectRepository)](https://docs.nestjs.com/techniques/database#repository-pattern)
  - [MongoDB with Nest](https://docs.nestjs.com/techniques/mongodb)
- **Deliverables & Tasks:**
  - [ ] Write a brief note in your `README.md` justifying the architectural choice of PostgreSQL for TaskFlow.
  - [ ] Install TypeORM and PostgreSQL database driver (`@nestjs/typeorm`, `typeorm`, `pg`).
  - [ ] Connect NestJS to a local/Docker PostgreSQL instance using environment variables.
  - [ ] Create database entities (`User`, `Project`, `Task`) with proper relational mapping:
    - `User` has many `Projects` (owner) and many assigned `Tasks`.
    - `Project` belongs to a `User` and contains many `Tasks`.
  - [ ] Inject repositories using `@InjectRepository()` and replace in-memory storage with real database CRUD operations.
  - [ ] Utilize TypeORM Query Builder to fetch projects along with their related tasks efficiently in a single query.
  - [ ] Implement a database transaction ensuring atomic execution when creating a project alongside an initial task.

#### Week 7.0: Security, Middleware & Application Hardening
- **Focus Area:** Middleware, Pipes, Interceptors, Exception Filters, CORS, Helmet, and Rate Limiting.
- **Learning Objectives:** Request/response lifecycle interception, standardized API responses, centralized exception formatting, and defense-in-depth security.
- **Reference Links:**
  - [NestJS Middleware](https://docs.nestjs.com/middleware)
  - [NestJS Pipes](https://docs.nestjs.com/pipes)
  - [Built-in Pipes](https://docs.nestjs.com/pipes#built-in-pipes)
  - [NestJS Guards (review)](https://docs.nestjs.com/guards)
  - [NestJS Interceptors](https://docs.nestjs.com/interceptors)
  - [NestJS Exception Filters](https://docs.nestjs.com/exception-filters)
  - [What the hell is CORS?](https://medium.com/@electra_chong/what-is-cors-what-is-it-used-for-308cafa4df1a)
  - [CORS in NestJS](https://docs.nestjs.com/security/cors)
  - [Helmet](https://docs.nestjs.com/security/helmet)
  - [Rate Limiting](https://docs.nestjs.com/security/rate-limiting)
  - [NestJS Config](https://docs.nestjs.com/techniques/configuration)
- **Deliverables & Tasks:**
  - [ ] Create and register global logger middleware capturing incoming HTTP methods and URLs.
  - [ ] Apply built-in transformation pipes (`ParseIntPipe`, `ParseUUIDPipe`) to route parameters.
  - [ ] Build a custom interceptor standardizing all API responses into a clean envelope format: `{ "data": ... }`.
  - [ ] Build a global `HttpExceptionFilter` ensuring consistent, sanitized JSON error formatting.
  - [ ] Secure HTTP endpoints by enabling CORS, HTTP security headers (`helmet`), and API rate limiting (`@nestjs/throttler`).
  - [ ] Centralize configuration management securely using `@nestjs/config` (`ConfigModule`).

---

### 🛡️ Milestone 3: Advanced Concepts & Quality Assurance (Weeks 8.0 – 12.0)

#### Week 8.0: Role-Based Access Control (RBAC) & Hardening
- **Focus Area:** Advanced Passport integration, Role-Based Access Control, and resource ownership verification.
- **Learning Objectives:** Custom metadata decorators (`@SetMetadata`), declarative role authorization guards, and row-level security logic.
- **Reference Links:**
  - [NestJS Authentication (full guide)](https://docs.nestjs.com/security/authentication)
  - [Authorization - NestJS](https://docs.nestjs.com/security/authorization)
- **Deliverables & Tasks:**
  - [ ] Create a custom `@Roles()` decorator specifying required user privileges (e.g., `ADMIN`, `USER`).
  - [ ] Build a `RolesGuard` evaluating user claims against endpoint role requirements.
  - [ ] Restrict project creation endpoints exclusively to users holding the `ADMIN` role.
  - [ ] Implement resource-level ownership validation ensuring regular users can only view, modify, or delete their own data.

#### Week 9.0: Unit Testing with Jest
- **Focus Area:** Unit testing controllers, services, guards, and mocking repository dependencies.
- **Learning Objectives:** Test-Driven Development principles, unit isolation, dependency mocking, and coverage analysis.
- **Reference Links:**
  - [Jest Official Docs](https://jestjs.io/docs/getting-started)
  - [NestJS Testing](https://docs.nestjs.com/fundamentals/testing)
  - [Jest Mock Functions](https://jestjs.io/docs/mock-functions)
  - [Testing with TypeORM](https://docs.nestjs.com/recipes/sql-joins#testing)
- **Deliverables & Tasks:**
  - [ ] Write unit tests for `ProjectsService` by mocking repository methods completely.
  - [ ] Write unit tests for `ProjectsController` verifying proper HTTP code handling and service delegation.
  - [ ] Create isolated unit tests for authentication components (`JwtStrategy`, `RolesGuard`).
  - [ ] Add npm test scripts and achieve robust code coverage across core business logic.

#### Week 10.0: End-to-End (E2E) Integration Testing
- **Focus Area:** E2E testing pipelines with `supertest` and isolated test databases.
- **Learning Objectives:** Simulating full HTTP request lifecycles, test database seeding, and automated regression suite design.
- **Reference Links:**
  - [Supertest GitHub](https://github.com/visionmedia/supertest)
  - [NestJS E2E Testing](https://docs.nestjs.com/fundamentals/testing#end-to-end-testing)
- **Deliverables & Tasks:**
  - [ ] Set up an isolated test database container (Docker PostgreSQL or SQLite in-memory).
  - [ ] Write comprehensive E2E tests (`supertest`) verifying user authentication, login flows, and token validation.
  - [ ] Write E2E tests covering the complete CRUD lifecycle for projects and tasks.

#### Week 11.0: Caching & Performance Optimization
- **Focus Area:** In-memory caching, Redis integration, query indexing, pagination, sorting, and filtering.
- **Learning Objectives:** Cache invalidation strategies (`TTL`), eliminating N+1 query bottlenecks, database indexing, and query pagination algorithms.
- **Reference Links:**
  - [NestJS Caching](https://docs.nestjs.com/techniques/caching)
  - [Cache Manager Redis](https://docs.nestjs.com/techniques/caching#redis-store)
  - [Avoid N+1 in TypeORM](https://typeorm.io/eager-and-lazy-relations#eager-relations)
  - [Database Indexing - Use The Index, Luke](https://use-the-index-luke.com/)
  - [Pagination in NestJS with TypeORM](https://docs.nestjs.com/techniques/database#pagination)
- **Deliverables & Tasks:**
  - [ ] Implement in-memory response caching on `GET /projects` with a 60-second TTL using `@nestjs/cache-manager`.
  - [ ] Spin up a Redis instance via Docker and transition the caching store from in-memory to Redis.
  - [ ] Optimize database queries: ensure joins use single SQL executions to avoid N+1 query issues.
  - [ ] Add explicit database indexes on heavily queried foreign keys (e.g., `project.ownerId`).
  - [ ] Implement server-side pagination (`skip`, `take`), dynamic sorting, and multi-field filtering query parameters on list endpoints.

#### Week 12.0: Background Processing & Asynchronous Jobs
- **Focus Area:** Message queues with Bull & Redis, job producers, consumers, and async event handling.
- **Learning Objectives:** Offloading long-running operations, queue concurrency, retry backoffs, and event listeners.
- **Reference Links:**
  - [NestJS Queues](https://docs.nestjs.com/techniques/queues)
  - [Bull Documentation](https://docs.bullmq.io/)
  - [BullMQ Examples](https://docs.bullmq.io/example)
- **Deliverables & Tasks:**
  - [ ] Install `@nestjs/bull` and configure job queues backed by Redis.
  - [ ] Create a `NotificationQueue` and write a dedicated processor to handle email notifications asynchronously (logging output for local verification).
  - [ ] Enqueue a notification job automatically whenever a task gets assigned to a user.
  - [ ] Attach event listeners monitoring job lifecycles (`completed`, `failed`) for observability.

---

### 🌐 Milestone 4: Microservices Architecture (Weeks 13.0 – 15.0)

#### Week 13.0: Service Decomposition & API Gateway Pattern
- **Focus Area:** Monolithic vs. Microservices tradeoffs, message transport layers, and API Gateway design.
- **Learning Objectives:** Decoupling domain boundaries, asynchronous inter-process communication, and API routing.
- **Reference Links:**
  - [Microservices vs Monolith](https://www.ibm.com/think/topics/monolithic-vs-microservices)
  - [Martin Fowler: Microservices](https://martinfowler.com/articles/microservices.html)
  - [Microservices Communication Patterns - Medium](https://medium.com/design-microservices-architecture/communication-patterns-in-microservices-architecture-6b2f5e5f5f5c)
  - [NestJS Microservices](https://docs.nestjs.com/microservices/basics)
  - [NestJS Microservices: Transports](https://docs.nestjs.com/microservices/basics#transports)
  - [Hybrid Application](https://docs.nestjs.com/microservices/basics#hybrid-application)
- **Deliverables & Tasks:**
  - [ ] Document an architectural analysis detailing why TaskFlow benefits from decomposing into microservices.
  - [ ] Deconstruct the monolithic application into independent NestJS service projects:
    - `user-service`
    - `task-service`
    - `api-gateway`
  - [ ] Configure RabbitMQ as the central asynchronous message transport mechanism between services.
  - [ ] Set up the `api-gateway` as a hybrid application receiving client HTTP requests and proxying them to internal microservices.

#### Week 14.0: RabbitMQ Patterns & Resiliency
- **Focus Area:** Exchanges, queues, bindings, Request-Response patterns, Event-driven architecture, and error recovery.
- **Learning Objectives:** Message acknowledgements (`ACK`/`NACK`), Dead Letter Queues (DLQ), RPC messaging (`@MessagePattern`), and pub/sub events (`@EventPattern`).
- **Reference Links:**
  - [RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)
  - [RabbitMQ Explained - YouTube (Gaurav Sen)](https://www.youtube.com/watch?v=7rkeORD4jSw)
  - [NestJS RabbitMQ](https://docs.nestjs.com/microservices/rabbitmq)
  - [RabbitMQ Acknowledgements](https://www.rabbitmq.com/confirms.html)
  - [Dead Letter Queues](https://www.rabbitmq.com/dlx.html)
  - [NestJS Microservices: Message](https://docs.nestjs.com/microservices/basics#message)
  - [NestJS Microservices: Event](https://docs.nestjs.com/microservices/basics#event-based)
  - [ClientProxy](https://docs.nestjs.com/microservices/basics#client)
  - [Handling Timeouts](https://docs.nestjs.com/microservices/basics#timeouts)
- **Deliverables & Tasks:**
  - [ ] Spin up RabbitMQ via Docker and inspect exchanges/queues using the Management UI.
  - [ ] Configure manual message acknowledgements and set up a Dead Letter Queue (DLQ) for failed message handling.
  - [ ] Implement Request-Response RPC pattern: `task-service` handles `get_tasks` messages queried via `ClientProxy` in the API Gateway.
  - [ ] Implement Event-Driven pattern: emit a `task_created` event when tasks are generated; create a `notification-service` listening to this event to trigger alerts.
  - [ ] Implement client-side retry logic with exponential backoff handling temporary network or service disruptions.

#### Week 15.0: Advanced Microservices Governance
- **Focus Area:** Shared DTO/interface libraries, gateway response aggregation, and timeout handling.
- **Learning Objectives:** DRY across service boundaries, distributed error propagation, circuit breakers, and timeout resilience.
- **Reference Links:**
  - [Monorepo approach](https://docs.nestjs.com/cli/monorepo)
  - [API Gateway Pattern - NGINX](https://www.nginx.com/learn/api-gateway/)
  - [NestJS as Gateway](https://docs.nestjs.com/microservices/basics#api-gateway)
- **Deliverables & Tasks:**
  - [ ] Build a shared library or workspace package containing common DTOs, enums, and TypeScript interfaces used across services.
  - [ ] Enhance the API Gateway to aggregate responses from multiple microservices into cohesive client payloads.
  - [ ] Implement strict timeout decorators and partial failure fallback mechanisms to prevent cascading distributed outages.

---

### 🚀 Milestone 5: Final Delivery & DevOps (Week 16.0)

#### Week 16.0: Containerization, Documentation & Final Delivery
- **Focus Area:** Multi-stage Docker builds, Docker Compose orchestration, and Swagger/OpenAPI interactive documentation.
- **Learning Objectives:** Production container optimization, multi-service environment orchestration, and API specification standards.
- **Reference Links:**
  - [What is Docker?](https://medium.com/@nomannayeem/the-one-docker-tutorial-every-beginner-developer-actually-needs-f94a5774da27)
  - [Dockerizing Node.js - Docker Docs](https://docs.docker.com/language/nodejs/)
  - [NestJS Docker Example](https://docs.nestjs.com/techniques/docker)
  - [Docker Compose Overview](https://docs.docker.com/compose/)
  - [Compose for Node.js + Postgres + Redis](https://docs.docker.com/compose/express/)
  - [NestJS OpenAPI (Swagger)](https://docs.nestjs.com/openapi/introduction)
- **Deliverables & Tasks:**
  - [ ] Write optimized, multi-stage `Dockerfile` configurations for every service (`api-gateway`, `user-service`, `task-service`, `notification-service`).
  - [ ] Build a comprehensive `docker-compose.yml` orchestrating the entire production ecosystem:
    - NestJS Microservices
    - PostgreSQL database(s)
    - Redis instance
    - RabbitMQ message broker
  - [ ] Implement container health checks and startup dependency waiting (`depends_on`).
  - [ ] Integrate `@nestjs/swagger` into the API Gateway exposing interactive OpenAPI documentation at `/api`.
  - [ ] Finalize repository documentation, deployment checklists, and record a clean demonstration walk-through of the TaskFlow ecosystem.
