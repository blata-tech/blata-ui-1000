# Railway Deployment Guide - Specific Instructions
**Your Railway Project ID: 163a4cc8-5f02-4aca-bc02-44e9c4b0a583**
**Custom Domain: www.blatatechnology.net**

## Current Status Check

You already have a Railway project with one service. Let's identify what it is and set up both services properly.

## Step 1: Check Your Current Service 🔍

1. **Go to your Railway project**: https://railway.com/project/163a4cc8-5f02-4aca-bc02-44e9c4b0a583
2. **Check the current service**: Service ID `93a869fb-2d63-4364-9d70-22bc222890d0`
3. **Determine if it's frontend or backend**:
   - Look at the build logs
   - Check the repository path it's using
   - See if it's building Node.js (backend) or Vite (frontend)

## Step 2: Deploy Backend Service 🚀

### If your current service is NOT the backend, create a new backend service:

1. **In your Railway project dashboard**:
   - Click "New Service"
   - Choose "GitHub Repo"
   - Select your repository: `blata-tech/blata-ui-1000`
   - **Important**: Set the root directory to `backend`

2. **Configure Backend Environment Variables**:
   Go to the backend service → Variables tab → Add these:

   ```env
   # Database Configuration (will be updated after database creation)
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=password
   DB_NAME=railway
   DB_PORT=5432

   # Server Configuration  
   PORT=3000

   # Frontend URL for CORS
   FRONTEND_URL=https://www.blatatechnology.net
   ```

### If your current service IS the backend:

1. **Check the root directory**:
   - Go to Settings → Deploy
   - Ensure "Root Directory" is set to `backend`
   - If not, change it to `backend`

2. **Add the environment variables above**

## Step 3: Add PostgreSQL Database 🗄️

1. **In your Railway project**:
   - Click "New Service"
   - Choose "Database" → "PostgreSQL"
   - Wait for it to deploy

2. **Get database credentials**:
   - Go to the PostgreSQL service
   - Go to "Connect" tab
   - Copy the connection details

3. **Update backend environment variables**:
   Replace the database variables in your backend service with the real values:
   ```env
   DB_HOST=[PostgreSQL_HOST_from_Railway]
   DB_USER=[PostgreSQL_USER_from_Railway]  
   DB_PASSWORD=[PostgreSQL_PASSWORD_from_Railway]
   DB_NAME=[PostgreSQL_DATABASE_from_Railway]
   DB_PORT=5432
   ```

4. **Create the contact table**:
   - In PostgreSQL service, go to "Query" tab
   - Run this SQL:

   ```sql
   CREATE TABLE contact_messages (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(200) NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## Step 4: Deploy Frontend Service 🎨

### Create frontend service:

1. **Add new service**:
   - Click "New Service"  
   - Choose "GitHub Repo"
   - Select your repository: `blata-tech/blata-ui-1000`
   - **Important**: Set the root directory to `blatek-frontend`

2. **Configure Frontend Environment Variables**:
   ```env
   VITE_API_BASE_URL=https://api.blatatechnology.net
   ```

3. **Verify build configuration**:
   - Railway should detect it's a Vite project
   - Build command should be: `npm run build`  
   - Start command should be: `npm run preview`

## Step 5: Configure Custom Domains 🌐

### Backend API Domain:
1. **Go to backend service** → Settings → Domains
2. **Add custom domain**: `api.blatatechnology.net`
3. **Copy the CNAME target** Railway provides

### Frontend Website Domain:
1. **Go to frontend service** → Settings → Domains  
2. **Add custom domain**: `www.blatatechnology.net`
3. **Copy the CNAME target** Railway provides

### Update DNS Records:
Add these to your domain DNS provider:

```
Type: CNAME
Host: api
Target: [Railway backend CNAME target]
TTL: 3600

Type: CNAME
Host: www  
Target: [Railway frontend CNAME target]
TTL: 3600
```

## Step 6: Verify Everything Works ✅

### Test Backend:
```bash
# Test health endpoint
curl https://api.blatatechnology.net/health

# Should return: {"status":"OK","message":"Server is running"}
```

### Test Frontend:
1. Visit: https://www.blatatechnology.net
2. Website should load
3. Test contact form

### Test Contact Form:
```bash
curl -X POST https://api.blatatechnology.net/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://www.blatatechnology.net" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test message"}'
```

## Troubleshooting Common Issues 🔧

### Build Errors:
1. **Check Railway logs** in each service
2. **Verify root directories** are set correctly
3. **Ensure dependencies** are in package.json

### Database Connection Issues:
1. **Check environment variables** match PostgreSQL service
2. **Verify table exists** in database
3. **Check backend logs** for connection errors

### Domain Issues:
1. **DNS propagation** can take 1-24 hours
2. **Verify CNAME records** are added correctly
3. **Check Railway domain status** in Settings → Domains

## Current Project Structure

After completing these steps, your Railway project should have:

```
Railway Project: 163a4cc8-5f02-4aca-bc02-44e9c4b0a583
├── Backend Service (Node.js)
│   ├── Domain: api.blatatechnology.net
│   ├── Root Directory: backend
│   └── Database connection configured
├── Frontend Service (Vite/React)  
│   ├── Domain: www.blatatechnology.net
│   ├── Root Directory: blatek-frontend
│   └── API URL configured
└── PostgreSQL Database
    └── contact_messages table created
```

## Next Steps

1. **Follow the steps above** in order
2. **Test each service** as you deploy it
3. **Configure DNS** once domains are added
4. **Verify end-to-end** functionality

Let me know if you encounter any issues with specific steps!