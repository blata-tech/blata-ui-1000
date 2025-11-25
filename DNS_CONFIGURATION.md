# DNS Configuration for www.blatatechnology.net

## Required DNS Records

For GitHub Pages deployment, add these DNS records to your DNS provider:

### Frontend (Main Website)
```
Type: CNAME
Name: www
Target: blata-tech.github.io
TTL: 3600
```

### Backend (API)
```
Type: CNAME
Name: api  
Target: [Your backend deployment URL - e.g., from Heroku, Vercel, or other service]
TTL: 3600
```

### Root Domain Redirect (Optional)
```
Type: CNAME
Name: @
Target: www.blatatechnology.net
TTL: 3600
```

## GitHub Pages Configuration

1. **Frontend (GitHub Pages):**
   - Your site will be automatically deployed to: `https://blata-tech.github.io/blata-ui-1000/`
   - Custom domain: `www.blatatechnology.net` (configured via CNAME file)

2. **Backend Deployment:**
   - Deploy your backend to a service like:
     - Heroku
     - Vercel
     - Netlify Functions
     - Digital Ocean
     - AWS Lambda

## DNS Providers Instructions

### Common DNS Providers:
- **GoDaddy**: DNS Management → Add Record
- **Cloudflare**: DNS → Add Record  
- **Namecheap**: Advanced DNS → Add New Record
- **Route53**: Hosted Zones → Create Record

## Verification

After adding DNS records, test with:
```bash
# Check DNS propagation
nslookup www.blatatechnology.net
nslookup api.blatatechnology.net

# Test endpoints
curl https://api.blatatechnology.net/health
curl https://www.blatatechnology.net
```

DNS changes typically take 1-6 hours to propagate globally.