<!-- # Setup
 1. Copy .env as .env.local and fill env varaibles `cp .env .env.local`

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 -->


# Vinyl Record Collections

A React web application for browsing vinyl records, managing favourites, viewing record details, and interacting with a collection of music releases. The application uses Supabase for authentication and database operations.

## Setup

### Prerequisites

- Node.js
- npm
- A configured Supabase project

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd vinyl-record-collections
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file:

```bash
cp .env .env.local
```

Fill in the required environment variables in `.env.local`.

Make sure the variable names match those used in your application code. Do not commit files containing private credentials.

### 4. Run the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### 5. Build the application

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## Technologies

- React
- Vite
- React Router
- JavaScript
- CSS
- Supabase Authentication
- Supabase PostgreSQL and REST API

## Live Demo

<YOUR_DEPLOYED_APP_URL>

## Functional Guide

### 1. Project Overview

**Application name:** Vinyl Record Collections

**Category:** Music catalog and record collection management.

The application allows visitors to browse vinyl records, view detailed release information, and explore music collections. Authenticated users can manage their favourites, comment on records, and access record-management functionality.

### 2. User Access and Permissions

**Guests can:**
- Browse the home page and records catalog.
- View record details and collections.
- Access the About and Contacts pages.
- Register or log in.

**Authenticated users can:**
- Add and remove favourites.
- View their favourites list.
- Create comments on records.
- Delete their own comments.
- Manage their own records through the administrative dashboard.

### 3. Authentication and Session Handling

Supabase Authentication handles registration and login. The application uses React Context to share authentication information, including the current user, access token, and authentication status.

The application sends authentication requests to Supabase and uses the returned credentials for protected operations. Session restoration and persistence depend on the final authentication implementation.

### 4. Routing

The application uses React Router for client-side navigation.

Main routes include:

- `/` — Home
- `/newin` — New arrivals
- `/records` — Records catalog
- `/records/:id` — Record details
- `/collections` — Collections
- `/collections/:id` — Collection details
- `/about` — About
- `/contacts` — Contacts
- `/signup` — Registration
- `/login` — Login
- `/logout` — Logout
- `/list` — Favourites
- `/admin` — Record management

Parameterized routes use IDs to identify individual records and collections.

### 5. Catalog and Details

The records catalog retrieves records from Supabase and allows users to sort them by featured status, newest, and price.

Selecting a record opens its details page, which displays available information such as the artist, title, cover image, release year, format, price, description, and tracklist.

### 6. Backend and Data Source

Supabase provides authentication, a PostgreSQL database, and a REST API.

Application data is retrieved from the backend rather than being stored as a hardcoded catalog.

The application uses database tables for records, categories, favourites, and comments.

### 7. CRUD Operations

**Create:** Authenticated users can create records through the administrative dashboard and submit comments.

**Read:** The application retrieves records, categories, favourites, and comments through API requests.

**Update:** Users can edit records they own through the administrative dashboard.

**Delete:** Users can delete their own records, remove their comments, and remove records from favourites.

### 8. Forms and Validation

The application includes registration, login, record creation/editing, and comment forms.

Validation includes required registration fields, password confirmation, email and password checks, and prevention of empty comments. Record fields are validated according to their requirements.

### 9. React Techniques and Styling

The application uses React hooks such as `useState`, `useEffect`, and `useContext` to manage component state, fetch data, and share authentication information.

CSS files provide global and component styling. The application uses the Inter font family and a minimal visual style.

### 10. Typical User Flow

1. Visit the home page and browse new arrivals.
2. Open the records catalog and sort the records.
3. Select a record to view its details.
4. Register or log in to use authenticated features.
5. Save favourites or comment on records.
6. Use the administrative dashboard to manage records, where authorized.

### 11. Error Handling

The application handles API errors through error messages or error components. Loading states are shown while data is fetched, and empty states are displayed when lists contain no results.

Authentication and database permissions should be configured to prevent unauthorized operations.

## Deployment

The application can be deployed to a static hosting provider that supports Vite.

- Build command: `npm run build`
- Output directory: `dist`

**Live application:** <YOUR_DEPLOYED_APP_URL>
