# 🏡 Prime Real Estate Platform

## 📌 Introduction

The **Real Estate Platform** is a modern web application built with the **MERN stack** that allows users to buy, sell, and manage real estate properties. The platform supports three roles:

- **User**: Can browse, wishlist, review, and purchase properties.
- **Agent**: Can add, update, and manage their listed properties.
- **Admin**: Has full control over property listings, users, and reviews.

With features like property verification, wishlist management, secure authentication, and real-time updates, this platform provides a seamless experience for both buyers and sellers.

---

## 📜 Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [User Roles](#-user-roles)
- [Dashboard Functionalities](#-dashboard-functionalities)
- [Authentication](#-authentication)

---

## 🚀 Live Demo

🔗 **[Live Website URL](#)** ( https://prime-real-estate-38ded.firebaseapp.com/)

### 🔑 Admin Credentials

- **Username:** `rizwan@gmail.com`
- **Password:** `Rizwan!`

---

## 🌟 Features

✅ Fully responsive design for **mobile, tablet, and desktop**  
✅ Secure **email/password authentication** with Firebase  
✅ **Real-time property listings** with image uploads  
✅ Users can **wishlist** properties and make offers  
✅ **Agents can add and manage** their listed properties  
✅ **Admins can verify, reject, and manage** properties  
✅ **Reviews system** for properties  
✅ **Payment integration** for property purchases  
✅ **Toast notifications** for CRUD operations  
✅ **Protected routes** with session persistence  
✅ **Role-based dashboards** for users, agents, and admins

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, TanStack Query
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Payment Gateway:** Stripe
- **State Management:** TanStack Query

---

## ⚙️ Installation

To set up the project locally, follow these steps:

1️⃣ **Clone the repository:**

```bash
git clone https://github.com/your-repo/real-estate-platform.git
cd real-estate-platform

```

**Clone the repository:**

```bash
git clone https://github.com/your-repo/real-estate-platform.git
cd real-estate-platform

```

**Clone the repository for server: **

```bash
git clone https://github.com/Md-Azad/prime-real-estate-server
cd prime-real-estate-server

```

2️⃣ Install dependencies:

# Client-side

npm install

# Server-side

npm install

3️⃣ Run the development servers:

# Client-side

npm install

🔒 Environment Variables
Create a .env file in the server and client directories and add the following:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

Server (.env):

DB_USER=yourDatabase_name

DB_PASS=your_database_accessPassword

ACCESS_TOKEN=your_secret_key

PAYMENT_SECTET_KEY=your_stripe_key

🎮 Usage
🔹 User
Browse properties and view details
Wishlist and make offers on properties
Purchase properties via secure checkout
Leave reviews for properties
🔹 Agent
Add, update, and manage properties
Track sold properties and pending offers
🔹 Admin
Approve, reject, and manage all property listings
Manage users (promote to agent/admin, mark as fraud)
Moderate user reviews

📊 Dashboard Functionalities

🏠 User Dashboard
My Profile: View personal details
Wishlist: View and manage wishlisted properties
Purchased Properties: View owned properties and payment details
My Reviews: Manage submitted reviews

🏗️ Agent Dashboard
Profile: View agent details
Add Property: List new properties for sale
My Properties: Manage active listings
Sold Properties: Track successfully sold properties
Requested Offers: Accept or reject buyer offers

🔧 Admin Dashboard
Manage Properties: Verify or reject properties
Manage Users: Promote users, mark fraud, or remove accounts
Manage Reviews: Moderate and delete reviews

🔑 Authentication
Email/password-based authentication (Firebase)
Social login option (Google)
Session persistence after page reload
