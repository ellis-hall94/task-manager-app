# Task Manager Web App

## Overview
The Task Manager Web App is a full-stack application that allows users to manage tasks, projects, and users with a focus on CRUD (Create, Read, Update, Delete) operations. The application features user authentication, task assignment, and filtering capabilities, making it a robust tool for task management.

## Features
- User registration and login with JWT authentication.
- Create, edit, and delete tasks.
- Assign tasks to users.
- Filter tasks by status (to-do, in-progress, done).
- Role-based access control (e.g., Admin can manage all users).

## Tech Stack
- **Backend**: ASP.NET Core Web API
- **Frontend**: React (or Angular)
- **Database**: SQL Server (via Entity Framework Core)

## Project Structure
```
task-manager-app
├── backend
│   ├── TaskManager.API
│   │   ├── Controllers
│   │   ├── Models
│   │   ├── Data
│   │   ├── Services
│   │   ├── Program.cs
│   │   └── appsettings.json
│   └── TaskManager.API.csproj
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## Getting Started

### Prerequisites
- .NET SDK
- Node.js and npm
- SQL Server
- Docker (for deployment)

### Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```
     cd backend/TaskManager.API
     ```
   - Restore the dependencies:
     ```
     dotnet restore
     ```
   - Update the `appsettings.json` file with your SQL Server connection string.
   - Run the migrations to set up the database:
     ```
     dotnet ef database update
     ```
   - Start the backend server:
     ```
     dotnet run
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install the dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

4. **Docker Deployment**
   - Build and run the application using Docker:
     ```
     docker-compose up --build
     ```

## Bonus Features
- Implement role-based access control to enhance security and user management.

## License
This project is licensed under the MIT License. See the LICENSE file for details.