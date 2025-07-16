# Deployment Guide

This guide covers different deployment options for your portfolio website.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Prerequisites**
   - GitHub, GitLab, or Bitbucket account
   - Your portfolio code pushed to a repository

2. **Steps**
   ```bash
   # 1. Sign up at vercel.com
   # 2. Click "New Project"
   # 3. Import your repository
   # 4. Configure project (Vercel auto-detects Next.js)
   # 5. Deploy!
   ```

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   # Connect your repository to Netlify
   # Or drag and drop your build folder
   ```

### Option 3: GitHub Pages

1. **Setup**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run export
   npm run deploy
   ```

## 🔧 Build and Deploy Process

### Local Testing

Before deploying, always test locally:

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Test production build
npm start

# 4. Check for type errors
npm run type-check

# 5. Run linting
npm run lint
```

### Environment Variables

If you're using external services (contact forms, analytics), set up environment variables:

```bash
# .env.local (for local development)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_GA_ID=your-analytics-id

# In production, add these to your hosting platform
```

### Pre-deployment Checklist

- [ ] Update portfolio configuration with your real information
- [ ] Replace placeholder images with your actual photos
- [ ] Test all links and navigation
- [ ] Verify contact form functionality
- [ ] Check responsive design on various devices
- [ ] Test both light and dark themes
- [ ] Optimize images for web (WebP format recommended)
- [ ] Update meta tags and SEO information
- [ ] Ensure no console errors in production build

## 🌐 Custom Domain Setup

### For Vercel

1. **Add Domain**
   ```
   Project Settings → Domains → Add Domain
   ```

2. **DNS Configuration**
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

### For Netlify

1. **Add Domain**
   ```
   Site Settings → Domain Management → Add Custom Domain
   ```

2. **DNS Configuration**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

## 📊 Performance Optimization

### Image Optimization

```bash
# Install image optimization tools
npm install sharp

# Or use online tools:
# - TinyPNG
# - ImageOptim
# - Squoosh
```

### Bundle Analysis

```bash
# Add to package.json
"analyze": "cross-env ANALYZE=true next build"

# Install analyzer
npm install --save-dev @next/bundle-analyzer cross-env

# Run analysis
npm run analyze
```

### Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before uploading
   - Use appropriate sizes for different devices

2. **Code Splitting**
   - Next.js does this automatically
   - Consider dynamic imports for large components

3. **Font Optimization**
   - Use `next/font` for Google Fonts
   - Preload critical fonts

## 🔍 SEO and Analytics

### Google Analytics Setup

1. **Get Tracking ID**
   - Create account at analytics.google.com
   - Get your GA4 measurement ID

2. **Add to your site**
   ```tsx
   // In layout.tsx or _app.tsx
   import Script from 'next/script'
   
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
     strategy="afterInteractive"
   />
   ```

### Search Console Setup

1. **Verify ownership**
   - Add meta tag or upload HTML file
   - Submit sitemap

2. **Monitor performance**
   - Check indexing status
   - Monitor search performance

## 🚨 Troubleshooting

### Common Deployment Issues

1. **Build Fails**
   ```bash
   # Clear cache and rebuild
   rm -rf .next
   npm run build
   ```

2. **Images Not Loading**
   - Check file paths are correct
   - Ensure images are in `public/` directory
   - Verify case sensitivity in file names

3. **Theme Not Working**
   - Check JavaScript is enabled
   - Verify localStorage permissions
   - Test in incognito mode

4. **TypeScript Errors**
   ```bash
   # Check for type errors
   npm run type-check
   
   # Fix common issues:
   # - Import paths
   # - Missing dependencies
   # - Type definitions
   ```

### Deployment-Specific Issues

#### Vercel
- Check build logs in dashboard
- Verify Node.js version compatibility
- Check function timeout limits

#### Netlify
- Review build logs
- Check redirect rules
- Verify build command and directory

#### GitHub Pages
- Ensure repository is public (for free tier)
- Check GitHub Actions workflow
- Verify branch settings

## 📱 Mobile Optimization

### Testing on Mobile

1. **Browser DevTools**
   - Use responsive design mode
   - Test different device sizes
   - Check touch interactions

2. **Real Device Testing**
   - Test on actual phones/tablets
   - Check loading speed on mobile networks
   - Verify touch targets are large enough

### Mobile-Specific Optimizations

1. **Viewport Meta Tag** (already included)
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

2. **Touch-Friendly Design**
   - Minimum touch target size: 44px
   - Adequate spacing between interactive elements
   - Smooth scrolling and animations

## 🔒 Security Considerations

### Content Security Policy

Add to `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
          }
        ],
      },
    ]
  },
}
```

### Environment Security

- Never commit sensitive data to Git
- Use environment variables for API keys
- Enable HTTPS (handled by modern hosting platforms)

## 📈 Monitoring and Maintenance

### Performance Monitoring

1. **Core Web Vitals**
   - Use PageSpeed Insights
   - Monitor Vercel Analytics
   - Check Search Console

2. **Error Tracking**
   - Consider Sentry for error monitoring
   - Monitor 404 errors
   - Check broken links regularly

### Regular Maintenance

- Update dependencies monthly
- Monitor security alerts
- Backup your content regularly
- Test after major updates

## 🎯 Advanced Deployment

### CI/CD Pipeline

Example GitHub Actions workflow:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      # Add deployment steps
```

### Multi-Environment Setup

```bash
# Different environments
npm run build:staging
npm run build:production

# Environment-specific configs
# .env.staging
# .env.production
```

---

**Need help?** Check the main README.md or create an issue in the repository!