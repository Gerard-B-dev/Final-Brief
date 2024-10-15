# Project Final Brief Front - Back

# Student: Gerard Borràs Alonso
# Product Management and Task Control Platform

## github link:    https://github.com/Gerard-B-dev/Final-Brief-Front-Back

## canva link: https://www.canva.com/design/DAGTrBQN3Lo/B50tGwR39fCcyuk24Endzw/edit?utm_content=DAGTrBQN3Lo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Project Description

This project is a **web application** that allows users to **register**, **log in**, and efficiently manage both **products** and **tasks**. The application is developed using **Vue.js** for the frontend and **Java Spring Boot** for the backend, providing a modern and scalable architecture.

### Main Features

1. **User Authentication**: 
   - User registration.
   - Login session initiation with validation using **JWT** (JSON Web Tokens) for secure sessions.

2. **Product Management**:
   - Create, read, update, and delete products.
   - Products include detailed information such as title, description, image, and price.

3. **Task Management**:
   - Create, read, update, and delete tasks.
   - Tasks can be marked as completed or modified at any time.

4. **Route Protection**:
   - Only authenticated users can access product and task management sections.

---

## Technologies Used

### Frontend
- **Vue.js**: Progressive framework for building user interfaces.
- **Vue Router**: For route handling and navigation between views.
- **Pinia**: For global state management in the application.
- **Axios**: HTTP client used for communication with the backend.
- **Vite**: Fast build tool for Vue.js projects.

### Backend
- **Java Spring Boot**: Framework for developing backend applications.
- **Spring Security**: For authentication and authorization.
- **JWT (JSON Web Tokens)**: For token-based authentication.
- **MySQL**: Relational database used to store users, products, and tasks.
- **Hibernate (JPA)**: For database management and interaction with entities.

---

## Installation and Configuration

### Prerequisites

1. **Node.js** and **npm** installed for the frontend.
2. **JDK 11+** and **Maven** installed for the backend.
3. **MySQL** installed and running on `localhost:3306`.

---

## Application Usage

1. **Registration**: Users can register with their email address and password from the `/register` page.
2. **Login**: After registration, users can log in at `/login`. Upon successful authentication, they will receive a JWT token to access other features.
3. **Product Management**: Once authenticated, users can add, edit, or delete products from the **Dashboard**.
4. **Task Management**: Similarly, users can manage their tasks in the **Dashboard**, adding, modifying, or deleting tasks as needed.

---

## Security Considerations

- **JWT Authentication**: Ensures that only authenticated users have access to protected routes.
- **Password Encryption**: User passwords are stored in the database using **BCrypt**.
- **CORS Policies**: The backend is configured to allow requests only from authorized origins.

---

# Base Enunciation of IronHack

To complete the final project, you must have already done your partial project in Java Spring. It doesn't matter if the Java project is the same one you'll use here, but you must have it done.
Introduction
This document will describe the requirements for your next project. You will create a simple task management application with Vue.js that allows users to create an account, register tasks, edit them, and mark them as completed. The application will be linked to a database where all user and task data will be stored. We will use Supabase as the database for this project. We will also use Vite as a build tool to compile our code and provide a development server while working.

In upcoming lessons, you will find introductory notes about databases.

You will need to use the CSS skills you learned earlier in the course to design your application. You can choose any UI library to work with, such as Bootstrap, Vue Element Plus, Vuetify, or write your own styles for extra points.

Learning Objectives
Upon completing this project, you will be able to:

Use Vue.js to create an application
Connect a Vue.js application to Supabase (database-as-a-service)
Project Requirements
Your repository should be on GitHub
Commit your work at least once a day during the project development time
Your application should be viewable in a web browser
Your application should be implemented online through a cloud service like Netlify
Adhere to the KISS (Keep It Simple, Stupid) and DRY (Don't Repeat Yourself) principles
Your application should have CSS styling
Your application should be completely integrated with a Supabase database using all CRUD operations
Use Pinia from Vue to implement full state management
Handle any asynchronous operations using Promises or Async/await
Document the characteristics, configuration, and technical specifications of the application within a README file

Deliverables
The functionality should include:

- Authentication (register, log in, log out)
- An interface showing the user's personal task list
- Ability to add new tasks
- Ability to edit existing tasks
- Ability to mark tasks as completed/incompleted
- Ability to delete existing tasks
- A store and a database from which your application can retrieve data

Vue.js
Required modules:
Router Vue

You need to configure routes for Dashboard and Auth
Pinia (for our store)

You need to configure two stores: user.js and task.js

1. Tasks

- Create a login/register screen that will be shown when the user has not logged in
- Ensure that the registration form asks for an email address, password, and confirmation of password from the user
- Ensure that the login form asks for an email address and password from the user
- Create a page where, after logging in, the user is shown the main content of the application
- The application should retrieve all the user's tasks from the task list stored in Supabase for the logged-in user
