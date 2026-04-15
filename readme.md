# To-Do API

A full-stack To-Do web application built with Node.js, Express.js, MongoDB, and secured by **Keycloak** Single Sign-On (SSO).

## Features
- Identity and Access Management through Keycloak (SSO)
- Protected REST API routes validating Keycloak access tokens
- Full CRUD operations — Create, Read, Update, Delete tasks
- Frontend connected to backend directly exchanging tokens
- Passwords managed by Keycloak (not stored in app database)

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Keycloak Server (OAuth 2.0 / OpenID Connect), express-jwt
- **Frontend:** Vanilla HTML, CSS, JavaScript

## Architecture
User → Keycloak (login) → JWT Token → Express API → MongoDB

## API Endpoints

### Auth
Handled by Keycloak at `http://localhost:8080/realms/todo-app/...`

### Tasks (Protected — requires Keycloak Bearer Token)
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
- MongoDB Atlas account (or local MongoDB)
- Keycloak server running locally on port 8080 (e.g., via Docker)

### Steps
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory based on the following variables:

```env
MONGO_URI=<your_mongo_connection_string>
PORT=3002
KEYCLOAK_URL=http://127.0.0.1:8080
KEYCLOAK_REALM=todo-app
KEYCLOAK_CLIENT_ID=c1
KEYCLOAK_CLIENT_SECRET=<your_keycloak_client_secret>
```

4. Run `npm start` or `node server.js` to start the backend.
5. Open `index.html` in your browser to access the frontend application.
