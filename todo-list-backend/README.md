# Todo List Backend Application

## Description

This backend application powers a Todo List app, enabling users to efficiently manage daily tasks. Built using Node.js, Express, and MongoDB, it offers a RESTful API for tasks management, including adding, editing, deleting, and marking tasks as complete. This application is designed to be integrated with a frontend interface for a full-stack application experience.

## Features

- **Task Management**: Create, view, update, and delete tasks.
- **Categorization**: Assign categories to tasks for better organization.
- **Completion Status**: Mark tasks as completed or pending.
- **Deadline Management**: Set and view deadlines for tasks.

## Use Cases

- **Individuals managing daily tasks**: For personal productivity, allowing users to track daily or recurring tasks.
- **Teams tracking project progress**: Teams can manage project-related tasks, assigning categories and deadlines to track progress.
- **Event planning**: Useful for planning events or projects with multiple deadlines.

## Setup Instructions

### Prerequisites

- Node.js installed on your machine.
- MongoDB running locally on your machine or accessible via a cloud instance.

### Installation Steps

1. **Clone or download the project files** from the provided source.

2. **Navigate to the project directory**:

```sh
cd path/to/project
```

3. **Install dependencies**:

```sh
npm install
```

4. **Configure environment variables**:

Create a `.env` file in the root directory of the project and specify the following variables:

- `MONGODB_URI` - the connection string to your MongoDB database.
- `PORT` - the port number for the server to listen on (default is 5000 if not specified).

Example `.env` file:

```plaintext
MONGODB_URI=mongodb+srv://admin:Letmein123@cluster0.uqd35hz.mongodb.net/
```

5. **Start the server**:

```sh
npm start
```

After starting the server, the API will be accessible at `http://localhost:5000/api/tasks` (assuming you're using port 5000).

## Current System Status

The system currently implements 80% of the planned features, focusing on core task management functionalities such as creating, viewing, updating, and deleting tasks. Future developments will include user authentication, advanced filtering and sorting capabilities, integration with external calendars, and notifications for deadlines.

## Additional Information

- **Testing the API**: You can use tools like Postman or cURL to test the API endpoints.
- **Contribution**: While this project doesn't specify contribution guidelines here, feedback and suggestions are welcome. Feel free to reach out with your ideas or if you encounter any issues.

