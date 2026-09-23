# MongoDB Setup for Glitter Glaze

MongoDB Community Server **v8.0.4** has been installed as a **portable (zip) installation** at:

```
C:\mongodb\mongodb-win32-x86_64-windows-8.0.4\
```

This was done because the standard MSI installer requires Administrator privileges. The portable version runs without admin rights.

## What was set up

| Item | Location / Value |
|---|---|
| MongoDB binaries (`mongod.exe`) | `C:\mongodb\mongodb-win32-x86_64-windows-8.0.4\bin\` |
| Data directory | `C:\data\db` |
| Log file | `C:\data\log\mongod.log` |
| Port | `27017` (localhost only: `127.0.0.1`) |
| Database name | `glitter-glaze` |
| MongoDB added to user PATH | `C:\mongodb\mongodb-win32-x86_64-windows-8.0.4\bin` |

## How to start everything

### Option A — One-click starter (recommended)
Double-click **`start-mongodb.bat`** at the project root.
It starts MongoDB (if not already running) and then launches the backend on `http://localhost:5000`.

### Option B — Manual start
1. Start MongoDB:
   ```
   C:\mongodb\mongodb-win32-x86_64-windows-8.0.4\bin\mongod.exe --dbpath C:\data\db --logpath C:\data\log\mongod.log --port 27017 --bind_ip 127.0.0.1
   ```
2. Start the backend:
   ```
   cd backend
   npm run dev
   ```

## Frontend
Run the React app in a separate terminal:
```
npm install
npm run dev
```
Then open the URL Vite prints (usually `http://localhost:5173`).

## Database seeding
Services were already seeded (8 services). To re-seed (drops nothing, only adds if empty):
```
cd backend
npm run seed
```
Or start the backend once with `SEED_DB=true npm run dev`.

## Connecting
- Backend connection string (default): `mongodb://127.0.0.1:27017/glitter-glaze`
- Override with a `MONGODB_URI` environment variable in `backend/.env` if needed.

## Notes
- MongoDB runs as a background process (PID visible in Task Manager as `mongod.exe`).
- The `mongosh` shell tool is NOT included in the server zip. If you want a shell, you can install it separately via `winget install MongoDB.Shell`.
- `mongod` will need to be started again after a reboot (use `start-mongodb.bat`).

