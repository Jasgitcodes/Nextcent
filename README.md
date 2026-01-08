# Nextcent

A modern React application built with Vite and Tailwind CSS, featuring authentication and a protected dashboard system.

## 🚀 Features

- **Authentication**: Real-time authentication using Firebase Auth.
- **Backend Services**: Firebase integration for data and auth management.
- **Protected Routes**: Dashboard and other private pages are protected from unauthorized access.
- **Modern UI**: Styled with Tailwind CSS for a responsive and sleek design.
- **Navigation**: Client-side routing with React Router DOM.
- **Dashboard**: User dashboard with sidebar navigation.
- **User & Post Management**: Dedicated pages for managing users and posts.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Backend/Auth**: [Firebase](https://firebase.google.com/) (Authentication & Firestore)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🔌 Backend & Services

### Firebase Integration

The application uses **Firebase** for backend services:

- **Authentication**: Handles user sign-up, login, and session management (`firebase/auth`).
- **Firestore**: Database instance initialized for future data storage (`firebase/firestore`).

### External APIs

Some features utilize public APIs for demonstration purposes:

- **JSONPlaceholder**: Source for user data and posts (`/users`, `/posts`).
- **DummyJSON**: Fetches random quotes for the Post page.

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nextcent
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory if required for Firebase configuration.

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── app/            # Application pages (Home, Auth, Dashboard, etc.)
├── components/     # Reusable UI components (Navbar, Footer, Sidebar, etc.)
├── config/         # Configuration files (e.g., Firebase setup)
├── context/        # React Context providers
├── assets/         # Static assets
└── App.jsx         # Main application component with routing
```
