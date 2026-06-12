# BlogSphere - Modern Blogging Platform 🚀

## Overview

BlogSphere is a modern full-stack blogging platform that allows users to create, edit, delete, and interact with blog posts. The platform provides user authentication, blog management, comments, and an attractive responsive user interface.

## Features

### User Authentication

* User Registration
* User Login
* Secure Password Hashing using bcrypt
* JWT Authentication

### Blog Management

* Create Blog Posts
* Edit Blog Posts
* Delete Blog Posts
* View All Blogs
* Author Information

### User Interaction

* Comment on Blog Posts
* Like Blog Posts
* Search Blogs
* Category-Based Browsing

### UI Features

* Modern Colorful Design
* Responsive Layout
* Glassmorphism Effects
* Dark Mode Support
* Mobile Friendly

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

## Project Structure

```text
blog-platform/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   │
│   ├── middleware/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/blogsphere-modern-blog-platform.git
cd blogsphere-modern-blog-platform
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogdb
JWT_SECRET=mysecretkey
```

### Frontend Setup

Open the frontend folder and launch `index.html` using Live Server.

## API Endpoints

### User Routes

| Method | Endpoint            | Description   |
| ------ | ------------------- | ------------- |
| POST   | /api/users/register | Register User |
| POST   | /api/users/login    | Login User    |

### Post Routes

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/posts     | Get All Posts |
| POST   | /api/posts     | Create Post   |
| PUT    | /api/posts/:id | Update Post   |
| DELETE | /api/posts/:id | Delete Post   |

### Comment Routes

| Method | Endpoint              | Description  |
| ------ | --------------------- | ------------ |
| POST   | /api/comments         | Add Comment  |
| GET    | /api/comments/:postId | Get Comments |

## Future Enhancements

* Rich Text Editor
* Image Upload Support
* User Profiles
* Admin Dashboard
* Notifications
* Social Media Sharing
* Bookmark Blogs
* Trending Posts

## Learning Outcomes

* Full-Stack Web Development
* RESTful API Development
* MongoDB Database Integration
* Authentication & Authorization
* CRUD Operations
* Frontend-Backend Integration
* Responsive UI Design

## Author

Developed as a Full-Stack Development Project using Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript.
