# Todo MERN App

A full-stack Todo application built with the MERN stack (MongoDB, Express, React, Node.js). This app helps users manage daily tasks by creating, updating, tracking status, setting priorities, and adding due dates.

## ✨ Features

- **Full CRUD Functionality:** Create, read, update, and delete tasks.
- **Task Prioritization:** Assign priorities to tasks (`Low`, `Medium`, `High`).
- **Status Tracking:** Monitor task progress (`Pending`, `In Progress`, `Completed`).
- **Due Dates:** Set and view due dates for tasks.
- **Interactive UI:** Responsive interface with smooth modal interactions and toast notifications.

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- CORS & dotenv

## 🚀 Setup & Installation

Follow the steps below to run the project locally.

### Prerequisites
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas connection string

### 1. Install Dependencies

Open separate terminal instances for the backend and frontend.

**Backend**
```bash
cd backend
npm install
```

**Frontend**
```bash
cd frontend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in both the `backend` and `frontend` directories.

**backend/.env**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

**frontend/.env**
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Run the Application

**Start the backend** (from the `backend` directory):
```bash
# Using nodemon for development
npx nodemon server.js
# OR
node server.js
```

**Start the frontend** (from the `frontend` directory):
```bash
npm run dev
```

The app should now be running at: `http://localhost:5173`

## 📖 API Documentation

Base URL: `http://localhost:5000/api/tasks`

### Endpoints

#### 1. Get All Tasks
- **Route:** `/`
- **Method:** `GET`
- **Description:** Retrieve all tasks.
- **Response (200 OK):**
```json
[
  {
    "_id": "60d0fe4f5311236168a109ca",
    "title": "Complete Assignment",
    "description": "Finish the math assignment by tonight.",
    "status": "pending",
    "priority": "high",
    "dueDate": "2023-12-01T00:00:00.000Z",
    "createdAt": "2023-11-20T10:30:00.000Z",
    "updatedAt": "2023-11-20T10:30:00.000Z"
  }
]
```

#### 2. Get a Single Task
- **Route:** `/:id`
- **Method:** `GET`
- **Description:** Retrieve a specific task by ID.

#### 3. Create a New Task
- **Route:** `/`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**
```json
{
  "title": "Buy Groceries",
  "description": "Milk, Bread, Eggs",
  "status": "pending",
  "priority": "medium",
  "dueDate": "2023-12-05"
}
```
- **Notes:**
  - `status` enum: `pending`, `inprogress`, `completed` (default: `pending`)
  - `priority` enum: `low`, `medium`, `high` (default: `low`)
  - `dueDate` is required and cannot be in the past.
- **Response (201 Created):** Returns the created task object.

#### 4. Update a Task
- **Route:** `/:id`
- **Method:** `PATCH`
- **Description:** Update an existing task.
- **Request Body:** Any fields from the create request can be updated.
- **Response (200 OK):** Returns the updated task object.

#### 5. Delete a Task
- **Route:** `/:id`
- **Method:** `DELETE`
- **Description:** Delete a task.
- **Response (200 OK):**
```json
{
  "message": "Task deleted successfully."
}
```
