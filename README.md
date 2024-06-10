# TaskMaster

TaskMaster is a minimalist to-do list application built with Next.js, Tailwind CSS, and local storage for managing daily tasks.

## Features

- **Create**: Add new tasks to the list.
- **Read**: View all tasks in the list.
- **Update**: Mark tasks as completed or not completed.
- **Delete**: Remove tasks from the list.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Local Storage**: Browser storage for persisting tasks.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/taskmaster.git
   cd taskmaster
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the TaskMaster application in action.

### `src/app/globals.css`

Global styles using Tailwind CSS directives.

### `src/app/layout.js`

Defines the root layout of the application.

### `src/app/page.js`

Main page of the application that displays the task list and the form to add new tasks.

### `src/components/TaskForm.js`

Form component for adding new tasks.

### `src/components/TaskItem.js`

Component for displaying individual tasks with options to toggle completion and delete.

### `src/utils/db.js`

Utility functions for handling CRUD operations using the browser's local storage.
