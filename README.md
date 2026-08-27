# Da Roça

Da Roça is a full-stack marketplace application developed as an academic project in Computer Engineering at UNIFEI.

The platform was designed to connect local producers and customers through a digital marketplace for agricultural products, while applying concepts of full-stack development, REST APIs, authentication, database modeling and software architecture.

## About the Project

The project was developed as part of a university course with the goal of building a complete web application integrating frontend, backend and database.

The system includes user authentication, product and user-related data management, database persistence, API documentation and a frontend interface for interacting with the platform.

The backend follows a modular structure with controllers, repositories, routes, middlewares and validation schemas.

## Technologies

### Frontend

- React
- TypeScript
- Vite
- Material UI
- React Hook Form
- Yup

### Backend

- Node.js
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- JWT
- Argon2
- Swagger

### Development

- Docker
- Docker Compose

## Main Features

- User registration and authentication
- Password hashing with Argon2
- JWT-based authentication
- CRUD operations
- Product management
- User-related data management
- PostgreSQL database integration
- REST API
- Interactive API documentation with Swagger
- Form validation
- Frontend and backend integration

## Project Structure

The project separates different responsibilities across the application:

```text
src/
├── components/
├── controllers/
├── lib/
├── middlewares/
├── repositories/
├── routes/
├── schemas/
├── entity.ts
├── main.tsx
└── server.ts
```

### Backend Architecture

**Controllers** handle incoming requests and application logic.

**Repositories** are responsible for data access and communication with the database through Prisma.

**Routes** define the available API endpoints.

**Middlewares** handle shared behaviors such as authentication.

**Schemas** define validation rules for incoming data.

### Frontend

The frontend was developed with React and TypeScript, using Material UI for the interface and React Hook Form with Yup for form handling and validation.

## Database

The application uses PostgreSQL as its relational database and Prisma as the ORM.

The project includes database models and Prisma configuration for managing the main entities and relationships of the marketplace.

Docker Compose is used to simplify the local database environment.

## Authentication

Authentication is implemented using JSON Web Tokens (JWT).

User passwords are hashed with Argon2 before being stored in the database, while protected backend routes can validate authentication tokens through middleware.

## API Documentation

The REST API is documented using Swagger and Swagger UI, providing an interactive interface for exploring and testing the available endpoints.

## Running Locally

### Requirements

Before running the project, make sure you have installed:

- Node.js
- npm
- Docker
- Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/lucasedglima/da-roca.git
cd da-roca
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the database

```bash
docker compose up -d
```

### 4. Configure environment variables

Create a `.env` file in the project directory and configure the required environment variables.

Example:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/database"
JWT_SECRET="your-secret-key"
```

### 5. Generate the Prisma Client

```bash
npm run prisma:generate
```

### 6. Run the database migrations

```bash
npm run prisma:migrate
```

### 7. Start the backend

```bash
npm run dev
```

### 8. Start the frontend

Open another terminal and run:

```bash
npm run dev:front
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the backend development server |
| `npm run dev:front` | Starts the frontend development server |
| `npm run build:front` | Builds the frontend |
| `npm run preview:front` | Previews the frontend production build |
| `npm run prisma:generate` | Generates the Prisma Client |
| `npm run prisma:migrate` | Runs Prisma migrations |
| `npm run prisma:studio` | Opens Prisma Studio |

## What I Practiced

This project provided practical experience with:

- Full-stack development
- REST API design
- Relational database modeling
- Authentication and authorization
- Password security
- Backend architecture
- Repository pattern
- Form handling and validation
- Frontend and backend integration
- API documentation
- Containerized development environment

## Academic Context

This project was developed as part of the Computer Engineering program at the Federal University of Itajubá (UNIFEI).

Its main purpose was to apply software development concepts in a complete application, covering the different layers involved in a full-stack system.

## Author

**Lucas Eduardo Gomes de Lima**

Computer Engineering student at UNIFEI interested in Data, Artificial Intelligence and Software Development.
