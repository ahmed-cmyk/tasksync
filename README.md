# 🧠 **TaskSync**

*A Real-Time Cross-Platform Task Management App*

---

## 📌 Overview

**TaskSync** is a real-time task management application designed for collaboration across mobile and desktop platforms. It features instant task updates, offline access, and user-friendly interfaces powered by modern, cross-platform technologies.

Built using:

* **NestJS** for a scalable, modular backend
* **Memcached** for fast data caching
* **React Native** for the mobile experience
* **Avalonia UI** for a native desktop experience on Windows, macOS, and Linux

---

## 🛠 Tech Stack

| Layer       | Technology                          | Purpose                                 |
| ----------- | ----------------------------------- | --------------------------------------- |
| Backend     | NestJS                              | RESTful & WebSocket API, authentication |
| Caching     | Memcached                           | Task and session caching                |
| Mobile App  | React Native                        | Cross-platform mobile interface         |
| Desktop App | Avalonia UI                         | Cross-platform native desktop client    |
| Database    | (Your choice: PostgreSQL / MongoDB) | Persistent task/user storage            |
| Auth        | JWT / OAuth2                        | Secure login and access control         |

---

## 🎯 Features

### ✅ Core Features

* User sign-up, sign-in, and role-based access
* Create, assign, and prioritize tasks
* Real-time updates using WebSockets
* Search, filter, and tag tasks
* Project-based task organization

### 🔄 Real-Time Collaboration

* Live updates when tasks are created/updated
* WebSocket-based sync across all devices

### 📱 React Native Mobile App

* Task list and detail view
* Offline mode with sync on reconnect
* Push/local notifications for task updates

### 🖥 Avalonia UI Desktop App

* Rich interface with drag-and-drop task boards
* Manager dashboard with analytics
* Offline mode for working on the go

### 🚀 Performance

* Memcached for fast task retrieval
* Cached user sessions and frequent queries

---

## 🚧 Project Structure

```plaintext
tasksync/
│
├── backend/             # NestJS API
│   ├── src/
│   ├── main.ts
│   └── ...
│
├── mobile/              # React Native app
│   ├── App.js
│   └── ...
│
├── desktop/             # Avalonia UI app
│   ├── Views/
│   ├── ViewModels/
│   └── Program.cs
│
└── README.md
```

---

## 📦 Setup Instructions

### 1. Backend (NestJS)

```bash
cd backend
npm install
cp .env.example .env
# configure DB and Memcached
npm run start:dev
```

### 2. Memcached (Docker example)

```bash
docker run -d -p 11211:11211 memcached
```

### 3. Mobile App (React Native)

```bash
cd mobile
npm install
npx react-native run-android  # or run-ios
```

### 4. Desktop App (Avalonia UI)

```bash
cd desktop
dotnet restore
dotnet run
```

---

## 🧪 Testing

* Backend: Jest (included with NestJS)
* Mobile/Desktop: Manual testing, with unit tests where applicable

---

## 📄 License

MIT License — feel free to use, modify, and contribute.

---

## ✨ Contributions

Contributions are welcome. Feel free to fork and submit pull requests or feature ideas.

---

