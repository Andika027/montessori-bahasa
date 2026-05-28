# 📚 Montessori Bahasa - Fullstack Learning Platform

Website pembelajaran interaktif **Montessori Bahasa** dengan desain premium, clean, dan warm.

## 🎯 Tujuan Platform

- Platform pembelajaran Montessori Bahasa yang premium dan professional
- Materi, video panduan, dan file download dalam satu tempat
- Komentar interaktif dengan upload gambar
- Dashboard admin untuk mengelola semua konten
- Desain responsif untuk desktop, tablet, dan mobile

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **Styling**: TailwindCSS + CSS Modules
- **State Management**: TanStack Query + Zustand
- **Rich Editor**: TipTap
- **Form**: React Hook Form
- **Image**: Next Image + Cloudinary

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL 15+
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **File Storage**: Cloudinary
- **Validation**: Joi
- **Rate Limiting**: express-rate-limit

## 📁 Project Structure

```
montessori-bahasa/
├── frontend/                    # Next.js Frontend Application
├── backend/                     # Express.js Backend API
├── database/                    # Database Schema & Migrations
└── docs/                        # Documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Sage Green (#9B9A7E) & Olive (#6B7063)
- **Secondary**: Beige (#E8DCC8) & Cream (#F5F1E8)
- **Accent**: Soft Terracotta (#C17A5C) & Warm Brown (#8B6F47)
- **Neutral**: Warm White (#FDFBF7)

### Typography
- **Heading**: Playfair Display (elegant serif)
- **Body**: Inter (modern sans-serif)

### Design Principles
- Clean, calm, warm aesthetic
- Premium, educational, minimal
- Child-friendly but professional
- Generous whitespace
- Rounded modern cards
- Smooth, light animations

## ✅ Features

### Public Features
- ✓ Homepage dengan hero section
- ✓ Browsing materi pembelajaran
- ✓ Menonton video panduan
- ✓ Download file pembelajaran
- ✓ Sistem komentar interaktif
- ✓ Upload gambar di komentar
- ✓ Responsive design (Mobile, Tablet, Desktop)
- ✓ SEO optimized

### Admin Features
- ✓ Secure login dashboard
- ✓ CRUD Materi
- ✓ CRUD Video
- ✓ CRUD File Download
- ✓ CRUD Kategori
- ✓ Moderasi komentar
- ✓ Reply komentar
- ✓ Pengaturan website
- ✓ SEO Management

## 🔐 Security Features

- JWT Authentication
- Password hashing (bcrypt)
- CSRF Protection
- XSS Prevention
- SQL Injection Prevention (Prisma ORM)
- Rate Limiting
- Image validation & compression
- HTML sanitization
- Admin route protection

## 📊 Database Tables

- `users` - Super admin accounts
- `categories` - Kategori materi
- `materials` - Konten materi
- `videos` - Video panduan
- `downloads` - File download
- `comments` - Komentar pengguna
- `comment_images` - Gambar di komentar
- `settings` - Pengaturan website

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- npm atau yarn

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Frontend akan berjalan di `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

Backend akan berjalan di `http://localhost:5000`

## 📖 Documentation

- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Design System](./docs/DESIGN_SYSTEM.md)
- [Component Library](./docs/COMPONENTS.md)
- [User Flows](./docs/USER_FLOWS.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 📝 License

Copyright © 2024 Montessori Bahasa. All rights reserved.
