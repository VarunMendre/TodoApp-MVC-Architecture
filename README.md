# 📝 TodoApp — MVC Architecture Practice Project

## 📌 Overview
This **TodoApp** is a simple Node.js project built to understand and implement the **MVC (Model–View–Controller)** architecture.  
It demonstrates how to structure backend applications cleanly with proper separation of concerns.  
Unlike modern setups handled by frameworks like React or Angular, this project integrates **server-side rendered JSX views** for learning purposes.

---

## 🧩 Features
- Perform **CRUD** (Create, Read, Update, Delete) operations for todos  
- Implements **MVC architecture**  
- Organized folder structure with **controllers**, **models**, **routes**, and **views**  
- Server-side rendering using **JSX templates**  
- Static files (CSS, JS) served from the **public** folder  

---

## 🗂️ Folder Structure
TODOAPP/
│
├── controllers/
│ └── todoController.js # Handles business logic
│
├── models/
│ └── todoModel.js # Defines Mongoose schema
│
├── routes/
│ └── todoRoutes.js # Route definitions
│
├── views/
│ ├── index.jsx # Home page template
│ └── Layout.jsx # Reusable layout
│
├── public/
│ ├── script.js # Client-side JS
│ └── style.css # CSS styles
│
├── db.js # MongoDB connection setup
├── app.js # Main server file
├── package.json
└── package-lock.json


---

## ⚙️ Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JSX Views** (Server-Side Rendering)  
- **HTML, CSS, JavaScript**

---

## 🎯 Learning Objectives
- Understand the **MVC pattern** in backend development  
- Learn **Express routing** and modular file organization  
- Explore **server-side rendering** using JSX  
- Manage static assets in a Node.js project  

---

## 🚀 Future Enhancements
- Add **authentication** (JWT/Passport.js)  
- Improve UI with **EJS or React**  
- Implement **error handling and validation**  
- Create **RESTful APIs** for frontend integration  

---

## 🧠 Author
**Varun Mendre**  
💻 Learning Node.js & backend development  
📚 Practicing MVC architecture through hands-on projects

---

## 📄 License
This project is created for **learning purposes** and is open for educational use.
