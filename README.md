# Vinyl Record Collections

A React application for browsing a vinyl record catalog and managing a personal record collection. Visitors can explore records and genres, read record details and comments, and registered users can save favorites, comment, and manage records associated with their account.

## Setup and Run

### Requirements

- Node.js and npm

1. Install dependencies:

	
	npm install
	

2. Start the development server:

	
	npm run dev
	

	Open the local URL printed by Vite, usually http://localhost:5173.

Useful project commands:

npm run build    # Create the production build in dist/
npm run preview  # Preview the production build locally
npm test         # Run the Vitest suite
npm run lint     # Run ESLint

## Functional Guide

### 1. Project Overview

- *Application name:* Vinyl Record Collections
- *Category:* Vinyl catalog and personal collection management
- *Purpose:* The app lets music fans browse a network-backed catalog of vinyl records by genre and inspect record details, tracklists, and community comments. After registering, users can favorite records, post comments, and create, edit, and delete records in their own collection.

### 2. User Access and Permissions

*Guest (not authenticated)*

- *Available pages:* Home (/), About (/about), Records (/records), Record details (/records/:id), Collections (/collections), a genre collection (/collections/:categoryId), Contacts (/contacts), Sign up (/signup), and Log in (/login).
- Guests can read catalog data, record details, and comments. They can browse categories but cannot manage favorites, post comments, or access the private collection screens.
- Sign-up and login routes are guest-only. An authenticated user visiting either is redirected to the home page.

*Authenticated user*

- Public catalog and information pages remain available.
- Private pages: My Collection (/collection), Favourites (/list), and Logout (/logout).
- Users can create, edit, and delete records in their own collection, favorite/unfavorite catalog records, and post or delete their own comments.
- The interface sends the user's access token and user ID with protected operations. Supabase authorization policies must enforce ownership on the backend; client-side route guards are not a substitute for backend authorization.

### 3. Authentication and Session Handling

*Authentication flow*

1. On app startup, App reads the saved auth response from localStorage and initializes the auth context from it.
2. The app considers the user authenticated when that saved auth value exists. ProtectedGuard redirects guests to /login; PublicGuard redirects authenticated users away from /login and /signup.
3. Login and registration call the Supabase Auth API. On success, the response is saved in localStorage, shared through AuthContext, and the user is navigated to /.
4. Logout calls the Auth logout endpoint when the access token is not near expiry, then removes the saved auth value and clears context state.

*Session persistence:* The serialized auth response, including the access token and user information, is stored under the auth key in browser localStorage. On refresh, it is restored synchronously from that value. The app does not perform a separate session refresh/validation request at startup, so an expired or revoked token may only be discovered by a later backend request.

### 4. Routing Structure

- There are 12 declared route patterns: seven public routes, two guest-only auth routes, and three authenticated routes. The parameterized detail and genre routes are included in those counts.
- Routes are declared with React Router. ProtectedGuard and PublicGuard use an Outlet to render their child routes; the header and footer wrap the routed page content globally.
- There is no deeper page-layout nesting. Unknown paths redirect to /.
- URL parameters are :id for /records/:id and :categoryId for /collections/:categoryId.

### 5. List to Details Flow

*Catalog/list page:* /records fetches records from Supabase and displays cover, artist, title, category, year, and price via record cards. The sort selector supports featured order, newest, price ascending/descending, and artist A–Z. Text search and additional catalog filters are not currently implemented.

*Details page:* Selecting a record card navigates to /records/:id. The details page reads id using useParams() and requests that record from the backend. It displays the record information, tracklist, and comments; authenticated users also get favorite controls and a comment form.

### 6. Data Source and Backend

- *Backend:* Supabase, using Supabase Auth endpoints and the PostgREST REST API.
- The frontend reads VITE_SUPABASE_URL and VITE_SUPABASE_KEY from Vite environment variables. Requests are made with fetch through src/utils/request.js.
- Catalog records, categories, favorites, and comments are fetched from the backend; catalog content is not supplied by a local hardcoded data array. Genre options in the add/edit record form are currently a fixed list in the UI and should match the configured categories table.

### 7. Data Operations (CRUD)

The CRUD collection is the authenticated user's records.

- *Create (POST):* From /collection, the user opens *Add New Record*, completes the record modal, and submits. recordApi.create sends a POST to /records with the record fields and the current user ID.
- *Read (GET):* The dashboard loads the user's records from /records?user_id=eq.<userId>. Public catalog, category, detail, and comment views also issue GET requests to Supabase.
- *Update (PATCH):* The user selects Edit on one of their dashboard records, changes it in the shared add/edit modal, and submits. recordApi.update sends a PATCH request for that record. After either a successful create or update, the dashboard fetches the user's records again and updates React state.
- *Delete:* The user selects Delete and confirms in a modal. recordApi.remove sends a DELETE request; after success, the dashboard refetches the collection and closes the modal.
- *Other mutations:* Favorites and comments also use backend POST/DELETE requests. The UI updates the corresponding local state after successful requests.

### 8. Forms and Validation

*Forms in the application:* Sign-up, login, add/edit record, record comment, and contact form. Record deletion uses a confirmation modal rather than a data-entry form.

*Validation rules currently implemented:*

- first_name and last_name: required during registration.
- email: required during registration. The login form requires both email and password; email inputs use the browser's email input type.
- password: required and at least four characters; confirm_password must match it.
- terms_check: must be accepted before registration.
- Record category_id: a genre must be selected when creating or editing a record.
- Comment text: required and limited to 1,000 characters.

The contact form currently has no submit handler or backend integration; its visible fields do not send a message. Record fields other than genre do not currently have custom client-side validation rules.

### 9. React-Specific Techniques

- *Hooks:* useState manages forms, loading/error states, records, favorites, and modal visibility. useEffect loads data on mount or when route/user inputs change and performs logout behavior. useContext shares authentication data. useParams reads route IDs. useMemo derives the sorted catalog, and useCallback stabilizes the home page's category-loaded callback.
- *Lifecycle example:* Records fetches the catalog in a mount-time useEffect; when the records or sort choice changes, useMemo recalculates the displayed order. RecordDetails refetches when its id parameter changes.
- *Context API:* AuthContext provides the access token, user, authenticated status, and register/login/logout actions. App provides it; the header, route guards, record details/comments, favorites list, dashboard, and logout page consume it.
- *Styling:* Most page styles are in the global public/style.css stylesheet linked by index.html. The error disclaimer has a component stylesheet at src/components/error/error-disclaimer.css.

### 10. Typical User Flow

1. Browse the home page, records catalog, or a genre collection.
2. Open a record to review its details, tracklist, and comments.
3. Register or log in to favorite records and share comments.
4. Open Favourites to manage saved records, or My Collection to add, edit, and delete personal records.

### 11. Error and Edge Case Handling

- *Authentication errors:* API errors from registration and login are shown in an error modal. Guarded routes redirect unauthenticated users to login.
- *Network/data errors:* Catalog, category, comment, and dashboard fetch failures are displayed through an inline error disclaimer or modal. Loading indicators are used while several views fetch data.
- *Empty/missing data:* A genre page shows a no-records message when its category has no records; the comments section has a first-comment empty state. Unknown URLs redirect home. A missing/unavailable record is surfaced through the detail request's error state. The favorites and dashboard views do not currently show a dedicated empty-state message.

## Deployment

*Live application URL:* https://vinyl-record-collections.pe7kovastella.workers.dev/