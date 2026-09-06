# 📝 WriteBlog

WriteBlog is a modern blogging web application built with **React.js** and **Appwrite**. It allows users to create, publish, manage, and read blog posts through a clean and responsive interface.

The project demonstrates how a React frontend can be integrated with Appwrite for **authentication, database management, and file storage**, providing backend functionality without building a separate Node.js/Express server.

---

## 🚀 Features

* 🔐 User Authentication

  * User registration
  * User login/logout
  * User session management

* ✍️ Blog Management

  * Create blog posts
  * Edit existing posts
  * Delete posts
  * View published posts
  * Read individual blog posts

* 🖼️ Image/File Handling

  * Upload images for blog posts
  * Store uploaded files using Appwrite Storage

* 🗄️ Backend Services

  * Appwrite Authentication
  * Appwrite Database
  * Appwrite Storage

* ⚡ React Features

  * Reusable components
  * React Hooks
  * Client-side routing
  * State management
  * Dynamic content rendering

* 📱 Responsive Design

  * User-friendly interface
  * Responsive layout for different screen sizes

---

## 🛠️ Tech Stack

### Frontend

* **React.js** – UI development
* **JavaScript** – Application logic
* **HTML5** – Page structure
* **CSS / Tailwind CSS** – Styling
* **React Router** – Client-side navigation

### Backend / BaaS

* **Appwrite** – Backend-as-a-Service

  * Authentication
  * Database
  * Storage

### Development Tools

* **Vite** – Development and build tool
* **Git & GitHub** – Version control
* **VS Code** – Development environment

---

## 🏗️ Application Architecture

```text
                    ┌─────────────────────┐
                    │      WriteBlog      │
                    │    React Frontend   │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
        ┌──────────────┐ ┌────────────┐ ┌────────────┐
        │ Authentication│ │  Database  │ │  Storage   │
        │   Appwrite    │ │  Appwrite  │ │  Appwrite  │
        └──────────────┘ └────────────┘ └────────────┘
                │              │              │
                ▼              ▼              ▼
             Users         Blog Posts      Images
```

---

## 📂 Project Structure

```text
writeblog/
│
├── public/
│
├── src/
│   ├── appwrite/
│   │   └── config.js
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Container/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── Post.jsx
│   │
│   ├── store/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> **Note:** Update the structure above if your actual folder/file names are different.

---

## ⚙️ How It Works

### 1. User Authentication

Users can create an account and log in to the application.

Authentication is handled by **Appwrite Authentication**, which manages user accounts and sessions.

```text
User
 ↓
Signup / Login
 ↓
Appwrite Authentication
 ↓
User Session
 ↓
Access Blog Features
```

---

### 2. Creating a Blog

After logging in, users can create a new blog post.

The application sends the blog information to the Appwrite database.

```text
User writes blog
       ↓
React Form
       ↓
Appwrite Database
       ↓
Blog Post Stored
```

---

### 3. Image Upload

If a blog contains an image, the image is uploaded to **Appwrite Storage**.

The stored file can then be associated with the corresponding blog document.

```text
Image
  ↓
React Application
  ↓
Appwrite Storage
  ↓
File ID / URL
  ↓
Blog Database Document
```

---

### 4. Reading Blogs

The React application retrieves blog documents from Appwrite and displays them dynamically.

```text
Appwrite Database
       ↓
Fetch Blog Posts
       ↓
React Components
       ↓
Blog Listing
       ↓
Individual Blog
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your Appwrite configuration.

Example:

```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

**Never commit your `.env` file or expose sensitive credentials in your GitHub repository.**

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/JenishPatel84/writeblog.git
```

### 2. Navigate to the Project

```bash
cd writeblog
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Appwrite

Create your `.env` file and add the required Appwrite configuration.

Make sure your Appwrite project has the required:

* Project
* Database
* Collection
* Storage Bucket
* Authentication configuration

### 5. Start the Development Server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## 🌐 Deployment

The application can be deployed using platforms such as **Vercel** or **Netlify**.

For Vercel deployment:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy the application.
5. Configure your Appwrite project to allow requests from your deployed domain.

---

## 🔒 Security

The project uses Appwrite's authentication and permission system to control access to application resources.

Important security practices:

* Do not commit `.env` files.
* Do not expose Appwrite secrets in frontend code.
* Configure Appwrite collection permissions correctly.
* Configure storage permissions correctly.
* Restrict write/update/delete operations to authorized users.

---

## 🎯 Learning Objectives

This project demonstrates practical knowledge of:

* React.js
* React Hooks
* Component-based architecture
* React Router
* Authentication
* CRUD operations
* Appwrite Database
* Appwrite Storage
* Appwrite Authentication
* Environment variables
* Git & GitHub
* Deployment
* Frontend-backend service integration

---

## 🔮 Future Improvements

Possible improvements for future versions:

* 🔍 Blog search functionality
* 🏷️ Categories and tags
* ❤️ Like and bookmark functionality
* 💬 Comments
* 👤 User profile pages
* 📊 Author dashboard
* 🌙 Dark mode
* 📄 Pagination
* 🔔 Notifications
* 🖼️ Image optimization
* 🔎 Advanced filtering
* 📱 Improved mobile experience

---

## 👨‍💻 Author

**Jenish Patel**

GitHub:
https://github.com/JenishPatel84

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and portfolio purposes.

