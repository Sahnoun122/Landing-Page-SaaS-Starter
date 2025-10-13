# 🚀 Deployment Guide

Complete guide to deploy your SaaS Landing Page to production environments.

## 🎯 Quick Deploy (Recommended)

### Deploy to Vercel (Fastest - 2 minutes)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-saas-app.git
   git push -u origin main
   ```

2. **Deploy with Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure Domain** (Optional):
   - Add custom domain in Vercel dashboard
   - Update DNS records as instructed

**✅ Your app is live!** - Usually within 2-3 minutes.

## 🌐 Deployment Platforms Comparison

| Platform | Difficulty | Speed | Cost | Features |
|----------|------------|-------|------|----------|
| **Vercel** | ⭐ Easy | ⚡ 2 min | 💰 Free tier | Auto-scaling, CDN, Analytics |
| **Netlify** | ⭐ Easy | ⚡ 3 min | 💰 Free tier | Forms, Functions, CDN |
| **Railway** | ⭐⭐ Medium | ⚡ 5 min | 💰 $5/month | Databases, Services |
| **AWS Amplify** | ⭐⭐ Medium | ⚡ 10 min | 💰 Pay per use | Full AWS integration |
| **DigitalOcean** | ⭐⭐⭐ Hard | ⚡ 30 min | 💰 $5/month | Full server control |

## 📋 Pre-Deployment Checklist

### ✅ Code Quality
- [ ] No TypeScript errors: `npm run type-check`
- [ ] No ESLint errors: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] All pages load correctly
- [ ] Responsive design tested on mobile/tablet
- [ ] Dark/light mode working
- [ ] All animations smooth

### ✅ Content & SEO
- [ ] All placeholder content replaced
- [ ] Metadata updated in `layout.tsx`
- [ ] Favicon and og-image added to `/public`
- [ ] Google Analytics/tracking added (if needed)
- [ ] Sitemap generated
- [ ] robots.txt configured

### ✅ Performance
- [ ] Images optimized and properly sized
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals passing
- [ ] No console errors

### ✅ Configuration
- [ ] Environment variables configured
- [ ] API endpoints working (if any)
- [ ] Database connected (if applicable)
- [ ] Error handling implemented

## 🚀 Detailed Deployment Instructions

### 1. Vercel Deployment (Recommended)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Serverless functions support

**Step-by-Step:**

```bash
# 1. Install Vercel CLI (optional)
npm install -g vercel

# 2. Build and test locally
npm run build
npm run start

# 3. Deploy via GitHub (recommended)
# Push your code to GitHub, then:
# - Connect GitHub to Vercel
# - Import your repository
# - Deploy automatically
```

**Environment Variables on Vercel:**
```bash
# In Vercel dashboard, add these:
NEXT_PUBLIC_APP_NAME=YourSaaS
NEXT_PUBLIC_APP_URL=https://yourdomain.com
# Add any API keys or secrets
```

**Custom Domain Setup:**
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your domain (e.g., `yourdomain.com`)
4. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### 2. Netlify Deployment

**Step-by-Step:**

```bash
# 1. Build the project
npm run build

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Deploy
netlify deploy --prod --dir=.next
```

**Via GitHub:**
1. Connect your GitHub account to Netlify
2. Import your repository
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

**Environment Variables:**
```bash
# In Netlify dashboard > Site settings > Environment variables
NEXT_PUBLIC_APP_NAME=YourSaaS
NEXT_PUBLIC_APP_URL=https://yourdomain.netlify.app
```

### 3. Railway Deployment

```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login and initialize
railway login
railway init

# 3. Deploy
railway up
```

**Railway Configuration:**
```json
// railway.json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "numReplicas": 1,
    "sleepApplication": false
  }
}
```

### 4. AWS Amplify Deployment

```bash
# 1. Install AWS CLI and Amplify CLI
npm install -g @aws-amplify/cli

# 2. Configure AWS credentials
amplify configure

# 3. Initialize Amplify project
amplify init

# 4. Add hosting
amplify add hosting

# 5. Deploy
amplify publish
```

**Amplify Build Settings:**
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

## 🔧 Environment Configuration

### Environment Variables Setup

Create `.env.local` for local development:
```bash
# App Configuration
NEXT_PUBLIC_APP_NAME="YourSaaS"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_VERSION="1.0.0"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_HOTJAR_ID="your-hotjar-id"

# API Configuration (if needed)
API_BASE_URL="https://api.yourdomain.com"
API_SECRET_KEY="your-secret-key"

# Database (if applicable)
DATABASE_URL="postgresql://username:password@localhost:5432/yourdb"

# Third-party Services
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
SENDGRID_API_KEY="SG...."
```

**Production Environment Variables:**
```bash
# Production URLs
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
API_BASE_URL="https://api.yourdomain.com"

# Production API Keys
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."

# Security
NEXTAUTH_SECRET="your-super-secret-key"
NEXTAUTH_URL="https://yourdomain.com"
```

### Environment-Specific Configuration

**File:** `src/lib/config.ts`
```typescript
export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'SaaS App',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
  },
  
  api: {
    baseUrl: process.env.API_BASE_URL || '/api',
    timeout: 10000
  },
  
  features: {
    analytics: process.env.NODE_ENV === 'production',
    debugMode: process.env.NODE_ENV === 'development'
  },
  
  integrations: {
    stripe: {
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
      secretKey: process.env.STRIPE_SECRET_KEY || ''
    },
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY || ''
    }
  }
};
```

## 🎯 Performance Optimization

### Build Optimization

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  output: 'standalone',
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['images.unsplash.com', 'yourdomain.com']
  },
  
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  
  // Compress responses
  compress: true,
  
  // PoweredBy header removal
  poweredByHeader: false,
  
  // Enable bundle analyzer in development
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src')
      };
    }
    return config;
  }
};

module.exports = nextConfig;
```

### Runtime Performance

```typescript
// src/lib/performance.ts
export const performanceConfig = {
  // Lazy load heavy components
  lazyComponents: true,
  
  // Preload critical resources  
  preloadFonts: [
    '/fonts/inter-var.woff2',
    '/fonts/inter-var-italic.woff2'
  ],
  
  // Optimize images
  imageOptimization: {
    quality: 85,
    format: 'webp'
  },
  
  // Cache configuration
  cache: {
    revalidate: 3600, // 1 hour
    staleWhileRevalidate: 86400 // 24 hours
  }
};
```

## 🔒 Security Configuration

### Security Headers

```javascript
// next.config.js - Security headers
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';"
        }
      ]
    }
  ];
}
```

### Environment Security

```bash
# Production security checklist
# ✅ Use HTTPS only
# ✅ Set secure environment variables
# ✅ Enable security headers
# ✅ Regular dependency updates
# ✅ Monitor for vulnerabilities

# Update dependencies
npm audit fix
npm update
```

## 📊 Monitoring & Analytics

### Google Analytics Setup

```typescript
// src/lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

**File:** `src/app/layout.tsx`
```typescript
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Performance Monitoring

```typescript
// src/lib/performance-monitor.ts
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log(metric);
    
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }
}
```

## 🔄 CI/CD Pipeline

### GitHub Actions Deployment

**File:** `.github/workflows/deploy.yml`
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm run test
      
    - name: Run linting
      run: npm run lint
      
    - name: Type check
      run: npm run type-check
      
    - name: Build application
      run: npm run build
      env:
        NEXT_PUBLIC_APP_NAME: ${{ secrets.APP_NAME }}
        NEXT_PUBLIC_APP_URL: ${{ secrets.APP_URL }}
        
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

### Automated Testing

```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
```

## 🌍 Domain & DNS Configuration

### Domain Setup

1. **Purchase Domain**: From providers like Namecheap, GoDaddy, or Cloudflare
2. **Configure DNS**:
   ```
   # For Vercel
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A  
   Name: @
   Value: 76.76.19.61
   ```

3. **SSL Certificate**: Automatic with most platforms
4. **WWW Redirect**: Configure www to non-www or vice versa

### Subdomain Configuration

```
# API subdomain
Type: CNAME
Name: api
Value: your-api-server.herokuapp.com

# Blog subdomain  
Type: CNAME
Name: blog
Value: yourblog.ghost.io

# App subdomain
Type: CNAME
Name: app
Value: cname.vercel-dns.com
```

## 📈 Post-Deployment

### Launch Checklist

- [ ] **Functionality Test**: All features working
- [ ] **Performance Test**: Lighthouse score > 90
- [ ] **Mobile Test**: Responsive on all devices  
- [ ] **Browser Test**: Works on Chrome, Firefox, Safari, Edge
- [ ] **SSL Certificate**: HTTPS working properly
- [ ] **Analytics**: Tracking code installed
- [ ] **SEO**: Sitemap submitted to Google Search Console
- [ ] **Monitoring**: Error tracking set up
- [ ] **Backup**: Database backup configured (if applicable)

### Ongoing Maintenance

```bash
# Regular updates (monthly)
npm update
npm audit fix

# Security updates (weekly)
npm audit
# Fix any high/critical vulnerabilities

# Performance monitoring (weekly)
# Check Core Web Vitals
# Monitor error rates
# Review analytics
```

### Rollback Plan

```bash
# Vercel rollback
vercel --prod --rollback

# GitHub rollback
git revert HEAD
git push origin main

# Manual rollback
# Keep previous build artifacts
# Quick deployment of last known good version
```

## 🆘 Troubleshooting

### Common Deployment Issues

**Build Failures:**
```bash
# TypeScript errors
npm run type-check
# Fix all TypeScript errors before deploying

# ESLint errors  
npm run lint
# Fix linting issues

# Missing dependencies
npm install
# Ensure all dependencies are installed
```

**Runtime Errors:**
```bash
# Check environment variables
# Verify all required env vars are set in production

# Check API endpoints
# Ensure all external services are accessible

# Check browser console
# Look for JavaScript errors
```

**Performance Issues:**
```bash
# Enable compression
# Check next.config.js has compress: true

# Optimize images
# Use Next.js Image component
# Enable webp format

# Check bundle size
npm run analyze
# Look for large dependencies
```

## 🎉 Deployment Complete!

Your SaaS landing page is now live and ready for users!

### Next Steps:
1. **Test everything thoroughly**
2. **Set up monitoring and analytics**
3. **Configure backups**
4. **Plan marketing launch**
5. **Monitor performance and user feedback**

### Support Resources:
- **Platform Documentation**: Check your hosting provider's docs
- **Community**: Join Next.js and platform-specific communities
- **Monitoring**: Set up alerts for downtime and errors

**🚀 Congratulations on your successful deployment!**