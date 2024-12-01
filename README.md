# IO-TECH Frontend Task

A modern, responsive admin dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This application provides a comprehensive user management system with dynamic routing, server-side rendering, and a beautiful UI powered by Radix UI components.

## 🎯 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Development](#️-development)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

- **Modern Tech Stack**

  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Radix UI for accessible components
  - React Hook Form with Zod validation

- **Key Functionalities**
  - User Management System
    - View all users in a responsive table
    - Detailed user profiles
    - User registration with validation
  - Form Handling
    - Real-time validation with Zod
    - Error feedback via toast notifications
    - TypeScript type checking
  - Responsive Design
    - Mobile-first approach
    - Tablet and desktop optimized
  - API Integration
    - JSONPlaceholder API integration
    - Basic error handling
    - Loading states

## 📚 API Documentation

### Available Endpoints

#### Users API

```typescript
GET /api/users
- Fetches users from JSONPlaceholder API
- Returns: Array of user objects

POST /api/users
- Creates a new user
- Required fields:
  - username: string
  - email: string
  - password: string
  - phone: string
  - isAdmin: boolean

GET /api/users/[id]
- Returns specific user details from JSONPlaceholder API
```

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/HassanMostafaa/IO-TECH_FE-TASK.git
cd IO-TECH_FE-TASK
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```env
BASE_URL='https://jsonplaceholder.typicode.com'
NEXT_PUBLIC_API_URL='http://localhost:3000'
```

4. Start the development server:

```bash
npm run dev
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
IO-TECH_FE-TASK/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── user/              # User-related pages
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── json-server-dummy-db/ # Mock database for development
```

### Key Dependencies

- **UI Components**: Radix UI, Material UI Icons, Shadcn Form Builder
- **Form Handling**: React Hook Form, Zod
- **HTTP Client**: Axios

## 🔧 Configuration

The project uses various configuration files:

- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - UI components configuration

## 🌐 Routes and Pages

### Pages (Client-Facing Routes)

- `/` - Main dashboard/home page showing all users from JSONPlaceholder API
- `/register` - User registration page
- `/user/[id]` - Individual user profile page

### Internal API Routes

These are internal API endpoints used by the application, not directly accessible pages:

- `/api/users` - Internal endpoint that without a user id redirects to home dashboard
- `/api/users/[id]` - Internal endpoint to fetch specific user details from JSONPlaceholder API

The application uses Next.js App Router with server-side rendering and dynamic routing for optimal performance and SEO.

## 🎨 UI Components

The project uses a combination of custom components and Radix UI primitives:

- Custom form inputs with validation
- Toast notifications for user feedback
- Responsive data tables
- Modal dialogs
- Tooltips and popovers

## 📱 Responsive Design

The application is fully responsive and works across:

- Desktop devices
- Tablets
- Mobile devices

## 🔐 Best Practices

- TypeScript for type safety
- Server-side rendering for better performance
- API route separation for better maintainability
- Component-based architecture
- Proper error handling
- Form validation with Zod
- Consistent code style with ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

- Proper error handling
- Form validation with Zod
- Consistent code style with ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
