# Railway Deployment Guide for Blata Technology

This guide covers deploying both the backend and frontend to Railway with custom domain configuration.

## Prerequisites

1. Railway account: Sign up at [railway.app](https://railway.app)
2. GitHub repository with your code
3. GoDaddy domain: www.blatatechnology.net

## Step 1: Deploy Backend to Railway

### 1.1 Create Backend Service

1. Go to Railway dashboard and click "New Project"
2. Choose "Deploy from GitHub repo"
3. Select your repository and choose the `backend` folder
4. Railway will automatically detect it's a Node.js project

### 1.2 Configure Environment Variables

In your Railway backend service, go to Variables tab and add:

```env
DB_USER=your_database_user
DB_HOST=your_database_host  
DB_NAME=your_database_name
DB_PASS=your_database_password
DB_PORT=5432
PORT=3000
```

### 1.3 Database Setup

Option A: Use Railway PostgreSQL
1. In your project, click "New Service" 
2. Choose "Database" → "PostgreSQL"
3. Railway will provide connection details
4. Update your environment variables with Railway DB credentials

Option B: Use external database (recommended for production)
1. Use your existing database or create one on services like:
   - Amazon RDS
   - Google Cloud SQL  
   - DigitalOcean Managed Databases
2. Add the connection details to environment variables

### 1.4 Custom Domain for Backend API

1. In Railway backend service, go to Settings → Domains
2. Click "Custom Domain"
3. Add: `api.blatatechnology.net`
4. Railway will provide CNAME record details

## Step 2: Deploy Frontend to Railway

### 2.1 Create Frontend Service

1. In the same Railway project, click "New Service"
2. Choose "GitHub Repo" and select the `blatek-frontend` folder
3. Railway will detect it's a Vite React project

### 2.2 Configure Environment Variables

In your Railway frontend service, add:

```env
VITE_API_BASE_URL=https://api.blatatechnology.net
```

### 2.3 Custom Domain for Frontend

1. In Railway frontend service, go to Settings → Domains  
2. Click "Custom Domain"
3. Add: `www.blatatechnology.net`
4. Railway will provide CNAME record details

## Step 3: Configure GoDaddy DNS

### 3.1 Add CNAME Records

In your GoDaddy DNS management:

1. **For API subdomain:**
   - Type: CNAME
   - Host: api
   - Points to: [Railway backend domain from step 1.4]
   - TTL: 1 hour

2. **For main website:**
   - Type: CNAME  
   - Host: www
   - Points to: [Railway frontend domain from step 2.3]
   - TTL: 1 hour

3. **For root domain redirect (optional):**
   - Type: A
   - Host: @
   - Points to: 185.199.108.153 (GitHub Pages IP for redirect)
   - TTL: 1 hour

### 3.2 Wait for DNS Propagation

DNS changes can take up to 48 hours to propagate worldwide, but usually take 1-6 hours.

## Step 4: Update API Configuration

After getting your Railway backend URL, update the frontend:

1. Update `/blatek-frontend/.env.production`:
```env
VITE_API_BASE_URL=https://api.blatatechnology.net
```

2. Update `/blatek-frontend/src/config/api.js`:
```javascript
// Replace the production return URL with:
return 'https://api.blatatechnology.net';
```

3. Commit and push changes to trigger redeployment

## Step 5: SSL Certificate Setup

Railway automatically provides SSL certificates for custom domains. After DNS propagation:

1. Both services should show "SSL Certificate: Active" in Railway dashboard
2. Your sites will be accessible via HTTPS

## Step 6: Database Migration (if needed)

If you need to create the database table:

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Step 7: Monitoring and Logs

1. **Railway Logs**: View real-time logs in Railway dashboard
2. **Health Checks**: Backend includes `/health` endpoint
3. **Metrics**: Monitor CPU, Memory, and Network usage in Railway

## Troubleshooting

### Common Issues:

1. **CORS Errors**: 
   - Ensure frontend domain is in backend CORS allowedOrigins
   - Check environment variables are set correctly

2. **Database Connection**: 
   - Verify all DB environment variables
   - Check database is accessible from Railway

3. **Build Failures**:
   - Check build logs in Railway deployment tab
   - Ensure all dependencies are in package.json

4. **DNS Issues**:
   - Use DNS checker tools to verify propagation
   - Ensure CNAME records point to correct Railway domains

### Useful Commands:

```bash
# Test backend locally
cd backend
npm install
npm run dev

# Test frontend locally  
cd blatek-frontend
npm install
npm run dev

# Build frontend for production
npm run build
```

## Production Checklist

- [ ] Backend deployed and running on Railway
- [ ] Frontend deployed and running on Railway  
- [ ] Database configured and accessible
- [ ] Environment variables set correctly
- [ ] Custom domains configured in Railway
- [ ] DNS records added in GoDaddy
- [ ] SSL certificates active
- [ ] API endpoints working via custom domain
- [ ] Contact form submitting successfully
- [ ] All pages loading correctly

## Support

- Railway Documentation: [docs.railway.app](https://docs.railway.app)
- Railway Discord: [railway.app/discord](https://railway.app/discord)
- GoDaddy DNS Help: [godaddy.com/help](https://godaddy.com/help)

## Cost Estimation

Railway Pricing (as of 2024):
- **Hobby Plan**: $5/month per service (includes $5 usage credit)
- **Pro Plan**: $20/month per service (includes $20 usage credit)

For your setup (backend + frontend + database):
- Estimated cost: $15-20/month total
- Includes generous usage limits for small to medium traffic

This setup provides:
- Automatic deployments from GitHub
- Built-in monitoring and logging  
- Automatic SSL certificates
- Global CDN for static assets
- 99.9% uptime SLA