# Glitter Glaze (Complete Bundle)

This folder contains the **whole site code** for both:
- **Frontend** (React + Vite)
- **Backend** (Express + MongoDB + Mongoose)

## Project structure
- `src/`, `public/`, `index.html`, `package.json` -> Frontend
- `backend/` -> Backend

## Setup & Run

### 1) Frontend
From this folder:
```bat
cd glitter-glaze-complete
npm install
npm run dev
```
Frontend runs on the Vite port configured in your project.

### 2) Backend (MongoDB)
```bat
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:5000` by default.

### 3) (Optional) Seed MongoDB
If your backend script supports seeding with an env var:
```bat
cd backend
set SEED_DB=true
npm run dev
```

## Notes
- The frontend calls the backend at: `http://localhost:5000`.
- Ensure your MongoDB is running and accessible.

