# Railway Deployment Guide for Blata Technology
**Custom Domain: www.blatatechnology.net**

## Prerequisites ✅
- Railway account: [Sign up at railway.app](https://railway.app)
- GitHub repository with your code (already done ✅)
- Domain: www.blatatechnology.net (you have this ✅)
- Code ready for deployment (verified ✅)

## Step 1: Deploy Backend to Railway 🚀

### 1.1 Create Backend Service
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Choose "Deploy from GitHub repo"
4. Select your repository: `blata-tech/blata-ui-1000`
5. Choose the `backend` folder/path
6. Railway will auto-detect it's a Node.js project

### 1.2 Configure Backend Environment Variables
In your Railway backend service dashboard:

1. Go to **Variables** tab
2. Add these environment variables:

```env
# Database Configuration
DB_HOST=your_railway_postgres_host
DB_USER=your_railway_postgres_user  
DB_PASSWORD=your_railway_postgres_password
DB_NAME=your_railway_postgres_database
DB_PORT=5432

# Server Configuration
PORT=3000

# Frontend URL for CORS
FRONTEND_URL=https://www.blatatechnology.net
```

### 1.3 Add PostgreSQL Database
1. In your Railway project, click "New Service"
2. Choose "Database" → "PostgreSQL"
3. Railway will create a database and provide connection details
4. Update your backend environment variables with the Railway DB credentials
5. The database URL will be in format: `postgresql://user:password@host:port/database`

### 1.4 Create Database Table
Once your database is running, you need to create the contact table:

1. Go to your Railway PostgreSQL service
2. Open the "Query" tab or use a PostgreSQL client
3. Run this SQL:

```sql
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 1.5 Set Custom Domain for Backend (API)
1. In Railway backend service, go to **Settings** → **Domains**
2. Click "Custom Domain"
3. Add: `api.blatatechnology.net`
4. Railway will show you the CNAME record to add to your DNS

## Step 2: Deploy Frontend to Railway 🎨

### 2.1 Create Frontend Service
1. In the same Railway project, click "New Service"
2. Choose "GitHub Repo"
3. Select the `blatek-frontend` folder/path
4. Railway will detect it's a Vite React project

### 2.2 Configure Frontend Environment Variables
In your Railway frontend service:

1. Go to **Variables** tab
2. Add:

```env
VITE_API_BASE_URL=https://api.blatatechnology.net
```

### 2.3 Set Custom Domain for Frontend
1. In Railway frontend service, go to **Settings** → **Domains**
2. Click "Custom Domain"  
3. Add: `www.blatatechnology.net`
4. Railway will show you the CNAME record to add to your DNS

## Step 3: Configure DNS Records 🌐

You need to add these records to your domain DNS (wherever you manage blatatechnology.net):

### DNS Records to Add:
```
Type: CNAME
Host: api
Value: [Railway backend domain from Step 1.5]
TTL: 3600

Type: CNAME  
Host: www
Value: [Railway frontend domain from Step 2.3]
TTL: 3600
```

### If you want root domain (blatatechnology.net) to redirect to www:
```
Type: CNAME
Host: @
Value: www.blatatechnology.net
TTL: 3600
```

## Step 4: Verify Deployment 🔍

### Backend Verification:
1. Visit `https://api.blatatechnology.net/health`
2. Should return: `{"status":"OK","message":"Server is running"}`

### Frontend Verification:
1. Visit `https://www.blatatechnology.net`
2. Website should load properly
3. Test contact form to verify API connection

### Contact Form Test:
1. Fill out the contact form on your website
2. Submit it
3. Check your Railway PostgreSQL database for the new record

## Step 5: Monitor and Maintain 📊

### Railway Dashboard Monitoring:
- **Logs**: View real-time logs for both services
- **Metrics**: Monitor CPU, Memory, Network usage
- **Deployments**: See deployment history and status

### Useful Railway Features:
- **Auto-deployments**: Automatic deploys on GitHub pushes
- **Environment Variables**: Easy to update without code changes
- **SSL Certificates**: Automatic HTTPS for custom domains
- **Scaling**: Easy to scale if traffic increases

## Step 6: Troubleshooting 🔧

### Common Issues and Solutions:

#### CORS Errors:
- Verify `FRONTEND_URL` environment variable is set correctly
- Check Railway backend logs for CORS rejection messages

#### Database Connection Issues:
- Verify all database environment variables are correct
- Check Railway PostgreSQL service is running
- Ensure table `contact_messages` exists

#### Build Failures:
- Check Railway deployment logs
- Verify package.json has all required dependencies
- Ensure Node.js version compatibility

#### DNS Propagation:
- DNS changes can take 1-48 hours to propagate
- Use DNS checker tools to verify records
- Clear browser cache/DNS cache

### Testing Commands:
```bash
# Test backend locally
curl https://api.blatatechnology.net/health

# Test CORS
curl -X POST https://api.blatatechnology.net/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://www.blatatechnology.net" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test message from deployment verification."}'
```

## Cost Estimation 💰

**Railway Pricing (2024):**
- Hobby Plan: $5/month per service (includes $5 usage credit)
- Pro Plan: $20/month per service (includes $20 usage credit)

**Your Setup Cost:**
- Backend service: ~$5-10/month
- Frontend service: ~$5-10/month  
- PostgreSQL database: ~$5-10/month
- **Total: ~$15-30/month**

## Post-Deployment Checklist ✅

- [ ] Backend deployed and accessible at `api.blatatechnology.net`
- [ ] Frontend deployed and accessible at `www.blatatechnology.net`
- [ ] PostgreSQL database created and table exists
- [ ] Environment variables configured correctly
- [ ] Custom domains added to Railway services
- [ ] DNS records added to domain provider
- [ ] SSL certificates active (automatic)
- [ ] Contact form working and saving to database
- [ ] All pages loading correctly
- [ ] API endpoints responding properly

## Next Steps After Deployment 🚀

1. **Set up monitoring**: Use Railway's built-in monitoring
2. **Configure backups**: Set up database backups
3. **Add analytics**: Google Analytics, etc.
4. **Performance optimization**: Monitor and optimize as needed
5. **Security**: Regular updates and monitoring

## Support Resources 📚

- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Railway Discord**: [railway.app/discord](https://railway.app/discord)
- **PostgreSQL Docs**: [postgresql.org/docs](https://postgresql.org/docs)

---

**Ready to deploy!** 🚀 Your application is fully configured and ready for Railway deployment.