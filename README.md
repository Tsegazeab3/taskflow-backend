# internship
my repo for my internship at pitron tech Ethiopia
Task list


1.---------------------
1. Create a GitHub repository named taskflow-backend.
2. Initialize it with a README and .gitignore for Node.js.
3. Clone the repo locally.

2-------------------
1. Create a develop branch.
2. For each feature you build later, create a feature branch and merge via pull request.

3-------------------
1. Practice rebasing a feature branch onto develop.

4-------------------
1. Set up a Node.js project with TypeScript (tsconfig.json).
2. Define interfaces for User, Project, Task.

5-------------------
1. Write an async function that reads a JSON file (e.g., mock-users.json) and logs the data.
2. Create a simple HTTP server using the http module that returns a list of mock projects.

6-------------------
1. Add error handling to your HTTP server: return proper status codes for missing routes.

1. Use fs to read a JSON file and serve its content via the HTTP server.

1. Use dotenv to load a PORT variable for your HTTP server.

1. Use nslookup or dig to query DNS for github.com.
2. Trace route to google.com using traceroute.

1. Use curl to test your HTTP server (GET, POST if implemented).
2. Inspect headers and status codes.

1. Diagram how your HTTP server fits into the client-server model.

1. Read the philosophy section.

1. Install NestJS CLI globally.
2. Generate a new NestJS project inside your taskflow-backend folder (replacing the simple HTTP server).
3. Generate a ProjectsModule, ProjectsController, and Project


1. Explore the generated files and write a short explanation of each in your README.

1. In ProjectsController, create endpoints: GET /projects, GET /projects/:id, POST /projects, PATCH /projects/:id, DELETE /projects/:id.
2. Use @Param, @Body, @Query appropriately.

1. Move business logic (e.g., storing projects in memory) to ProjectsService.
2. Inject the service into the controller.

1. Create a UsersModule with its own controller and service (similar to projects).
2. Register both modules in the root AppModule.

1. (Later, when services reference each other, you may encounter this – handle it then.)

1. Create CreateProjectDto and UpdateProjectDto with validation rules (e.g., name required, description optional).
2. Enable ValidationPipe globally in main.ts.
3. Apply DTOs to controller methods.

1. Create a @CurrentUser() decorator to extract user info from request (will be used after authentication).

1. Implement an API key guard as a simple auth mechanism (temporary).
2. Then implement JWT authentication: AuthModule with AuthService and JwtStrategy. Add login endpoint that returns a JWT.

1. Write a brief note in your README justifying the choice of PostgreSQL for TaskFlow.




1. Install TypeORM and PostgreSQL driver.
2. Configure TypeORM in app.module.ts (use environment variables for DB credentials).
3. Create User, Project, Task entities with appropriate relationships:
- User has many Projects (as owner) and many Tasks (assigned)
- Project belongs to a User (owner) and has many Tasks
- Task belongs to a Project and optionally an assigned User

1. Replace in-memory storage in services with database repositories.
2. Implement CRUD for Projects and Tasks using repositories.
3. Use query builder to fetch projects with their tasks in a single query.
4. Use a transaction when creating a project and its first task.

1. Inject repositories into services using @InjectRepository().
Create a separate branch using Mongoose for a simple feature.

1. Create a logger middleware that logs request method and URL. Apply it globally.


1. Use ParseIntPipe for id parameters.
2. Keep ValidationPipe for DTOs.

1. Create a JwtAuthGuard to protect routes.
2. Implement a RolesGuard to restrict access based on user roles (admin vs regular).

1. Create an interceptor to transform all responses into a standard { data: ... } format.

1. Create a custom HttpExceptionFilter that logs errors and returns a consistent error format.

1. Enable CORS for your API.
2. Add Helmet for security headers.
3. Set up rate limiting with @nestjs/throttler (e.g., 
1.0 requests per minute).

1. Use ConfigModule to load .env variables for database, JWT secret, etc.

1. Implement local strategy (username/password) and JWT strategy as before.
2. Add refresh token mechanism (optional).

1. Create a Roles decorator and a RolesGuard.
2. Protect project creation so only admins can create projects. Regular users can only view and update their own.

1. Write unit tests for ProjectsService (mock repository).
2. Write unit tests for ProjectsController (mock service).
3. Test the JwtStrategy and RolesGuard.

1. Set up an isolated test database (e.g., using Docker or SQLite).
2. Write e2e tests for project CRUD endpoints, including authentication.

1. Mock repository methods in unit tests.

1. Add in-memory cache to the GET /projects endpoint with a TTL of 60 seconds.

1. Replace in-memory cache with Redis (run Redis via Docker).
2. Configure cache to use Redis.

1. Use left join and select to fetch projects with their tasks in one query (avoid N+1).
2. Add indexes to frequently queried columns (e.g., project.ownerId).

1. Implement pagination for GET /projects using skip and take.
2. Add query parameters for sorting (by name, date) and filtering (by status).

1. Install Bull and Redis (if not already).
2. Create a NotificationQueue and a processor that sends email (log to console for now).

1. When a task is assigned to a user, add a job to the queue to send a notification.
2. Add event listeners for job completion and failure.

1. Write a short analysis of why TaskFlow might benefit from microservices (e.g., separate user management, project service, notification service).

1. Identify which parts could use sync (HTTP) vs async (messaging).

1. Split the monolithic app into two separate services: user-service and task-service. (Create new NestJS projects.)
2. Keep the API Gateway as a separate NestJS app that proxies requests.

1. Choose RabbitMQ as the transport between services.

1. The API Gateway will be a hybrid app (HTTP + microservice client).

1. Run RabbitMQ with Docker.
2. Use the management UI to explore queues and exchanges.

1. In user-service and task-service, set up RabbitMQ microservice listeners.
2. In API Gateway, set up ClientProxy to communicate with them.

1. Configure queues with manual acknowledgements.
2. Set up a dead-letter queue for failed messages (e.g., notification failures).

1. In task-service, implement a @MessagePattern() for get_tasks that returns tasks for a user.
2. In API Gateway, use ClientProxy.send() to request tasks.

1. When a task is created, emit an event task_created.
2. notification-service (new microservice) listens to this event and sends a notification.

1. In API Gateway, inject clients for each microservice and use them in controllers.


1. Implement retry logic with exponential backoff on the client side for transient failures.

1. Create a shared library (or a separate npm package) for DTOs and interfaces used by multiple services.

1. Build the API Gateway that routes requests to appropriate microservices and aggregates responses if needed.



1. Write a multi-stage Dockerfile for each service (API Gateway, user-service, task-service, notification-service).

1. Write a docker-compose.yml that includes:
- All NestJS services
- PostgreSQL (one instance per service, or shared with careful schema separation)
- Redis (for caching and Bull)
- RabbitMQ
2. Ensure services wait for dependencies (e.g., using depends_on or a wait script).
3. Run the entire stack with docker-compose up.


1. Install @nestjs/swagger in the API Gateway.
2. Decorate all DTOs and controllers with OpenAPI decorators.
3. Enable Swagger UI at /api.
4. Document authentication requirements (bearer token).
