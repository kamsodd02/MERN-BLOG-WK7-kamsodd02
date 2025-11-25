# MERN Blog — Basic CRUD (Download)

This project contains a ready-to-run **basic CRUD** MERN blog app (posts + categories).
Folders: `server/` and `client/` with code and instructions.

## Run locally (beginner)
1. Install dependencies
   - Backend: `cd server && npm install`
   - Frontend: `cd client && npm install`
2. Create `.env` files from `.env.example` and add your MONGODB_URI
3. Start backend: `cd server && npm run dev`
4. Start frontend: `cd client && npm run dev`
5. Open http://localhost:5173

## Deploy
- Backend: deploy `server/` to Render, Heroku, or any Node hosting. Add env var `MONGODB_URI`.
- Frontend: deploy `client/` to Vercel. Add env var `VITE_API_URL` pointing to your backend (e.g. https://your-api.onrender.com/api).

- Deployment link
https://mern-stack-integration-kamsodd02-hr.vercel.app/

