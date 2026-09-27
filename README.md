# Advanced Next.js & TypeScript Course

Welcome to the **Next.js & TypeScript Developer Course**. This repository contains all the source code, exercises, and projects divided into four progressive levels—built entirely using Next.js (App Router) and strict TypeScript.

---

## 📚 Course Structure

### Level 1: Next.js & TypeScript Fundamentals
Master the core pillars of **Next.js** using the modern App Router integrated with **TypeScript**.
* **Routing & Layouts:** File-based routing, dynamic routes, nested layouts, and error boundaries with strictly typed props.
* **Rendering Architectures:** Deep dive into Server Components (RSC) vs. Client Components.
* **Data Fetching:** Server-side fetching, caching strategies, and data revalidation with Type safety.
* **Styling & Assets:** Optimizing images with `<Image />` and layout designing with Tailwind CSS.

### Level 2: Comprehensive Next.js Project
Put your Level 1 fundamentals into action by building a **production-ready web application**.
* Full integration of dynamic data fetching and clean TypeScript interfaces.
* Implementing responsive UI layouts based on Next.js best practices.
* Optimizing SEO, dynamic metadata, and Core Web Vitals.

### Level 3: Advanced Next.js with TypeScript
Shift gears to advanced enterprise patterns within Next.js using **strict type safety**.
* **TypeScript Integration:** Typing complex custom hooks, Server Actions, API routes, and component events.
* **State Management:** Managing complex state within Next.js client components seamlessly.
* **Component Design:** Building highly reusable, type-safe UI components and compound component patterns.

### Level 4: Advanced User Profile Project (Full-Stack Auth)
Build a complete, secure **User Profile Management System** utilizing full-stack capabilities, TypeScript, and **Auth.ts (NextAuth v5)**.
* **Authentication Flows:**
  * Credentials Provider (Strictly typed Email & Password registration, login, and logout).
  * OAuth Provider (Secure sign-in with Google integration).
* **Profile Management:** Secure user dashboards, session persistence, protected routes, and Next.js Middleware.
* **Database Integration:** Secure database connectivity for saving and managing user credentials and profiles.

---

## 🛠️ Tech Stack Used
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Authentication:** Auth.ts (NextAuth.js v5)
* **Styling:** Tailwind CSS

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18.x or later) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com
   cd nextjs-typescript-course
   ```

2. Navigate to a specific level directory (e.g., Level 4):
   ```bash
   cd level4-user-profile
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Setup (Required for Level 4)
Create a `.env.local` file in the root of your Level 4 project folder and add your credentials:
```env
AUTH_SECRET=your_auth_secret_here

# Google OAuth Credentials
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# Database URL (if applicable)
DATABASE_URL=your_database_connection_string
```

### Running the Development Server
Run the following command in any level folder to start the Next.js local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application live.

---

## 📝 License
This project is open-source and available under the MIT License.
