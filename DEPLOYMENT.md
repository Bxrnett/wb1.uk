# 🚀 WB1 Cloudflare Pages Deployment Guide

## Quick Start - Deploy in 5 Minutes

### Step 1: Prepare Your Repository (2 minutes)

Ensure all files are in your git repository:
```bash
# From your project root
git add .
git commit -m "WB1 website initial commit"
git push origin main
```

### Step 2: Connect to Cloudflare Pages (3 minutes)

1. **Go to Cloudflare Dashboard**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Pages** in the left sidebar
   - Click **Create a project**

2. **Connect GitHub**
   - Select **Connect to Git**
   - Authorize Cloudflare with GitHub
   - Select your `wb1` repository

3. **Configure Build Settings**
   - **Project name**: `wb1` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `.` (root directory)
   - **Environment variables**: (none needed)
   - Click **Save and Deploy**

4. **Wait for Deployment**
   - Cloudflare will build and deploy automatically
   - You'll get a URL like: `https://wb1.pages.dev`
   - Your site is now live! 🎉

## Custom Domain Setup

### Connect Your Domain

If you have a custom domain (e.g., `wb1.uk`):

1. **In Cloudflare Pages Settings**
   - Go to your project → Settings → Custom domains
   - Add your domain: `wb1.uk`
   - Add www subdomain: `www.wb1.uk`

2. **Update DNS (if domain not at Cloudflare)**
   - Update your domain registrar's DNS to point to Cloudflare
   - Or add CNAME records pointing to `deploy.pages.dev`

3. **Enable SSL**
   - Cloudflare handles SSL automatically
   - You get free HTTPS certificates

## Automatic Deployments

Once set up, every time you push to main branch:
```bash
git add .
git commit -m "Update website content"
git push origin main
```

Your site updates automatically! No manual deployment needed.

## Important Files

- `index.html` - Home page
- `services.html` - Services & pricing
- `about.html` - About page
- `contact.html` - Contact form
- `styles.css` - All styling
- `logo.png` - Your WB1 logo
- `_redirects` - Routing rules (for SPA redirects if needed)
- `.gitignore` - Files to exclude from git
- `README.md` - Project documentation

## Troubleshooting

### Page Not Found (404)
- Ensure all HTML files are committed to git
- Check that file names match links in HTML (case-sensitive)

### Styling Not Loading
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Ensure `styles.css` is in the root directory

### Form Not Working
- Contact form shows success message client-side
- To actually receive emails, integrate with Formspree, Netlify, or your backend

### Custom Domain Not Working
- DNS changes can take up to 48 hours
- Check domain settings in Cloudflare dashboard
- Verify domain nameservers are pointing to Cloudflare

## Environment Variables (if needed later)

To add environment variables:
1. Go to project Settings → Environment variables
2. Add variable name and value
3. Redeploy (git push)

## Monitoring & Analytics

In Cloudflare Pages:
- View deployment history
- Check build logs
- Monitor bandwidth and performance
- Real-time analytics available

## Form Submission Integration

To enable actual form submissions, update contact.html with one of these:

### Option 1: Formspree
1. Visit [formspree.io](https://formspree.io)
2. Create an account and new form
3. Replace form action in contact.html with your Formspree endpoint

### Option 2: Email Service
Services like SendGrid, Mailgun, or AWS SES can be integrated with Cloudflare Workers

### Option 3: Backend API
If you have your own backend, update form action and method accordingly

## Performance Tips

- ✅ Your site already loads fast (static HTML/CSS)
- ✅ Cloudflare CDN serves content globally
- ✅ No database overhead
- ✅ Images optimized where possible
- 📊 Check performance in Cloudflare Analytics

## Next Steps

1. **Update Contact Information**
   - Replace `hello@wb1.uk` with your actual email
   - Update social media links
   - Add real phone number if needed

2. **Add Logo**
   - Place your `logo.png` in the root directory
   - Size: recommended 45px height

3. **Customize Content**
   - Update company info in all pages
   - Adjust services descriptions
   - Personalize about page

4. **Set Up Email Replies**
   - Integrate a form service (Formspree recommended)
   - Get email notifications for inquiries

5. **Add Analytics (Optional)**
   - Cloudflare provides built-in analytics
   - Consider adding Google Analytics for more detail

## Useful Commands

```bash
# View git status
git status

# View commit history
git log --oneline

# Undo last commit (before push)
git reset HEAD~1

# Force push (careful!)
git push origin main --force

# Check what files will be deployed
git ls-files
```

## Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [GitHub Help](https://docs.github.com/)

## Success Checklist

- ✅ Repository at GitHub
- ✅ Connected to Cloudflare Pages
- ✅ Build and deployment successful
- ✅ Site accessible at Pages URL
- ✅ Custom domain configured (if using)
- ✅ Contact form set up
- ✅ All content updated
- ✅ Logo uploaded
- ✅ Social media links added

**Your WB1 website is now live and ready to generate leads!** 🚀
