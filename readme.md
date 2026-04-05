# To-Do API

A full-stack To-Do web application built with Node.js, Express.js, MongoDB, and Keycloak authentication.

## Features
- User login via Keycloak (Identity and Access Management)
- JWT token verification on all protected routes
- Full CRUD operations — Create, Read, Update, Delete tasks
- Frontend connected to backend with Keycloak auth flow
- Passwords managed by Keycloak (not stored in app database)

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Keycloak (OpenID Connect), JWT
- **Frontend:** HTML, CSS, JavaScript

## Architecture
User → Keycloak (login) → JWT Token → Express API → MongoDB

## API Endpoints

### Auth
Handled by Keycloak at `http://localhost:8080`

### Tasks (Protected — requires Keycloak JWT token)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| GET | /tasks/:id | Get a single task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## Setup

### Prerequisites
- Node.js
- MongoDB Atlas account
- Keycloak 26.x running locally on port 8080

### Steps
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file:

## API Endpoints

### Auth
Handled by Keycloak at `http://localhost:8080`

### Tasks (Protected — requires Keycloak JWT token)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| GET | /tasks/:id | Get a single task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## Setup

### Prerequisites
- Node.js
- MongoDB Atlas account
- Keycloak 26.x running locally on port 8080

### Steps
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file:

MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret
KEYCLOAK_URL=http://localhost:8080
KEYCLOAK_REALM=your_realm_name
KEYCLOAK_CLIENT_ID=your_client_id
