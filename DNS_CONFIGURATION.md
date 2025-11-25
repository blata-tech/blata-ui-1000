# DNS Configuration for www.blatatechnology.net

## Required DNS Records

After deploying to Railway, you'll get specific CNAME targets. Add these records to your DNS provider:

### Frontend (Main Website)
```
Type: CNAME
Name: www
Target: [Railway will provide this - something like: blatek-frontend-production-xxxx.up.railway.app]
TTL: 3600
```

### Backend (API)
```
Type: CNAME
Name: api  
Target: [Railway will provide this - something like: backend-production-xxxx.up.railway.app]
TTL: 3600
```

### Root Domain Redirect (Optional)
```
Type: CNAME
Name: @
Target: www.blatatechnology.net
TTL: 3600
```

## How to Get Railway Domain Targets

1. **For Backend:**
   - Go to Railway Dashboard → Your Project → Backend Service
   - Go to Settings → Domains
   - Add custom domain: `api.blatatechnology.net`
   - Railway will show you the exact CNAME target

2. **For Frontend:**
   - Go to Railway Dashboard → Your Project → Frontend Service  
   - Go to Settings → Domains
   - Add custom domain: `www.blatatechnology.net`
   - Railway will show you the exact CNAME target

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