# To-Do API

A full-stack To-Do web application built with Node.js, Express.js, and MongoDB.

## Features
- User signup and login with JWT authentication
- Passwords encrypted with bcrypt
- Protected REST API routes
- Full CRUD operations — Create, Read, Update, Delete tasks
- Frontend connected to backend

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Frontend:** HTML, CSS, JavaScript

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/signup | Register a new user |
| POST | /auth/login | Login and get JWT token |

### Tasks (Protected — requires JWT token)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| GET | /tasks/:id | Get a single task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## Setup

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with:
