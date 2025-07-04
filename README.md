# 🗂️ StoreIt

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Appwrite-17.0.0-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
</div>

<div align="center">
  <h3>🚀 A Modern, Secure File Storage & Management Platform</h3>
  <p>Built with Next.js 15, React 19, TypeScript, and Appwrite. Featuring a beautiful UI, advanced file management, and real-time analytics.</p>
</div>

---

## ✨ Features

### 🔐 **Authentication & Security**
- **Secure Authentication** with Appwrite backend
- **OTP Verification** for enhanced security
- **Protected Routes** and role-based access
- **Session Management** with automatic token refresh

### 📁 **File Management**
- **Drag & Drop Upload** with progress tracking
- **Multiple File Types** support (documents, images, videos, audio)
- **File Search & Filtering** with advanced search capabilities
- **File Actions** (download, delete, share, rename)
- **Thumbnail Generation** for images and videos
- **File Type Organization** with smart categorization

### 📊 **Analytics & Insights**
- **Interactive Charts** powered by Recharts 3.0
- **Storage Usage Analytics** with visual representations
- **File Type Distribution** charts
- **Upload Activity** tracking and trends
- **Real-time Statistics** dashboard

### 🎨 **User Experience**
- **Responsive Design** that works on all devices
- **Dark/Light Mode** toggle with system preference detection
- **Modern UI Components** built with ShadCN/UI
- **Smooth Animations** and transitions
- **Mobile-First** approach with touch-friendly interactions
- **Accessibility** focused design (WCAG compliant)

### 🛠️ **Developer Experience**
- **TypeScript** for type safety and better DX
- **ESLint & Prettier** for code quality
- **Modular Architecture** with reusable components
- **Custom Hooks** for state management
- **Error Boundaries** for graceful error handling

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Charts**: [Recharts 3.0](https://recharts.org/) - Composable charting library

### **Backend & Services**
- **BaaS**: [Appwrite 17.0](https://appwrite.io/) - Open-source backend server
- **Authentication**: Appwrite Auth with OTP support
- **Database**: Appwrite Database for metadata storage
- **Storage**: Appwrite Storage for file management

### **Development Tools**
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **File Upload**: [React Dropzone](https://react-dropzone.js.org/)
- **State Management**: React Context + Custom Hooks
- **Linting**: ESLint + Prettier
- **Build Tool**: Next.js built-in bundler

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** or **pnpm**
- **Appwrite** account and project setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/vaultix.git
cd vaultix
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-database-id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID=your-users-collection-id
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION_ID=your-files-collection-id
NEXT_PUBLIC_APPWRITE_BUCKET_ID=your-storage-bucket-id

# Optional: Analytics & Monitoring
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### 4. Appwrite Setup
1. Create an [Appwrite account](https://appwrite.io/)
2. Create a new project
3. Set up authentication (Email/Password + OTP)
4. Create database collections for users and files
5. Set up storage bucket with appropriate permissions
6. Configure CORS settings for your domain

### 5. Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application!

---

## 📁 Project Structure

```
vaultix/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 (Auth)/            # Authentication routes
│   │   ├── 📁 sign-in/       # Sign in page
│   │   └── 📁 sign-up/       # Sign up page
│   ├── 📁 (root)/            # Main application routes
│   │   ├── 📁 [type]/        # Dynamic file type pages
│   │   └── 📄 page.tsx       # Dashboard page
│   ├── 📄 globals.css        # Global styles
│   └── 📄 layout.tsx         # Root layout
├── 📁 components/             # Reusable UI components
│   ├── 📁 ui/                # ShadCN/UI components
│   ├── 📄 AuthForm.tsx       # Authentication form
│   ├── 📄 FileUploader.tsx   # File upload component
│   ├── 📄 Chart.tsx          # Analytics charts
│   └── 📄 ...                # Other components
├── 📁 lib/                   # Utility libraries
│   ├── 📁 actions/           # Server actions
│   ├── 📁 appwrite/          # Appwrite configuration
│   └── 📄 utils.ts           # Helper utilities
├── 📁 constants/             # App constants
├── 📁 hooks/                 # Custom React hooks
├── 📁 types/                 # TypeScript type definitions
└── 📁 public/                # Static assets
```

---

## 🎯 Key Features Explained

### 🔐 Authentication System
- **Multi-step Authentication** with email verification
- **OTP Security** for sensitive operations
- **Session Persistence** across browser sessions
- **Auto-logout** on token expiration

### 📂 File Management
- **Smart Upload** with automatic file type detection
- **Progress Tracking** for large file uploads
- **Bulk Operations** for multiple files
- **Search & Filter** with real-time results

### 📊 Analytics Dashboard
- **Storage Usage** visualization
- **File Type Distribution** pie charts
- **Upload Trends** over time
- **User Activity** metrics

---

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```
