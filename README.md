# To-Do App – Laravel + React

<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="300" alt="Laravel Logo">
  </a>
</p>

A **full-stack To-Do application** with a Laravel backend and a React frontend.  
The backend provides RESTful APIs, and the frontend consumes them to create, update, and delete todos.

---

## 🛠 Tech Stack

- **Backend:** Laravel, PHP >= 8.1, SQLite, Composer  
- **Frontend:** React, Axios, Vite  
- **Database:** SQLite (local), migrations included  
- **Dev Tools:** Node.js, npm/yarn, PHP built-in server

---

## 📁 Project Structure

project-root/
├── backend/ # Laravel backend
│ ├── app/
│ ├── routes/
│ ├── database/
│ │ ├── migrations/
│ │ └── database.sqlite (local only)
│ ├── .env.example
│ ├── composer.json
│ └── README.md
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
└── README.md


---

## ✅ Requirements

- PHP >= 8.1  
- Composer  
- SQLite  
- Node.js >= 18 (for frontend)  
- npm or yarn  

---

## ⚙️ Backend Setup (Laravel)

### 1️⃣ Clone the repo
```bash

git clone <repository-url>
cd backend

2️⃣ Install dependencies
composer install

3️⃣ Create environment file
copy .env.example .env   # Windows
cp .env.example .env     # macOS / Linux

4️⃣ Generate application key
php artisan key:generate

5️⃣ Create SQLite database
type nul > database/database.sqlite   # Windows
touch database/database.sqlite        # macOS / Linux

6️⃣ Run migrations
php artisan migrate

7️⃣ Start the backend server
php artisan serve
Default URL: http://127.0.0.1:8000


🌐 Backend API Endpoints
Method	Endpoint	Description
GET	/api/todos	Get all todos
POST	/api/todos	Create a new todo
PUT	/api/todos/{id}	Update a todo
DELETE	/api/todos/{id}	Delete a todo

Make sure your frontend uses http://127.0.0.1:8000/api/... as the base URL.

⚙️ Frontend Setup (React)
1️⃣ Go to frontend folder
cd frontend

2️⃣ Install dependencies
npm install
# or
yarn install

3️⃣ Run the frontend dev server
npm run dev
# or
yarn dev

React frontend will usually run on http://localhost:5173 (Vite default)

Ensure API requests point to http://127.0.0.1:8000/api/...

🚫 Git Ignore Notes

Do not commit the following:

.env → contains secrets

vendor/ → Composer dependencies

node_modules/ → frontend dependencies

database/database.sqlite → local database

logs, IDE configs, system files

.env.example is provided as a template for setup.

🧪 Development Notes

SQLite is used for local development to simplify setup.

Sessions, cache, and queues are set to file / sync drivers for local testing.

.env.example must always be used as a template when cloning.

Run php artisan migrate whenever you need to reset or create tables.


📄 License

This project is open-sourced under the MIT license.


✅ Quick Start Checklist

# Backend
cd backend
composer install
copy .env.example .env      # or cp .env.example .env
php artisan key:generate
type nul > database/database.sqlite  # or touch database/database.sqlite
php artisan migrate
php artisan serve

# Frontend
cd ../frontend
npm install
npm run dev


Open frontend in browser (usually http://localhost:5173)

Backend API is running at http://127.0.0.1:8000/api/todos
