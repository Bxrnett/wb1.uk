# WB1 - Lead Generation & Digital Presence Agency

A professional website for **WB1**, a digital agency offering landing pages, websites, AI tools, and social media solutions.

## 🚀 Project Overview

WB1 is a high-converting, multi-page website designed for lead generation and establishing a strong digital presence. The site is built with:

- **Static HTML/CSS/JavaScript** - Fast, lightweight, and perfect for Cloudflare Pages
- **Responsive Design** - Works beautifully on all devices
- **Modern Aesthetic** - Bold, creative design matching the vibrant WB1 brand
- **SEO Optimized** - Clean, semantic HTML structure
- **Conversion Focused** - Strategic CTAs and clear value propositions

## 📁 Project Structure

```
wb1.uk/
├── index.html           # Home page with hero and benefits
├── services.html        # Detailed services and pricing
├── about.html          # Company story and values
├── contact.html        # Contact form and inquiry page
├── styles.css          # All styling (responsive design)
├── logo.png           # WB1 logo (place your PNG here)
├── README.md          # This file
├── .gitignore         # Git ignore file
└── _redirects         # Cloudflare Pages routing
```

## 🎨 Color Scheme

The site uses the vibrant WB1 brand colors:
- **Primary Gradient**: #ff6b5b → #ee5a94 → #c747d4 (Pink/Purple)
- **Secondary**: #ff6b5b (Bright Red-Pink)
- **Accent**: #ffd93d (Gold)

## 📄 Pages

### Home (index.html)
- Hero section with main CTA
- Benefits overview
- Services preview
- Call-to-action section

### Services (services.html)
- Detailed service descriptions (6 service lines)
- Feature lists for each service
- Pricing packages
- Clear value propositions

### About (about.html)
- Mission statement
- Company approach and vision
- Core values (6 values)
- Process timeline (5 steps)

### Contact (contact.html)
- Contact information
- Inquiry form with fields for service selection, budget, etc.
- FAQ section
- Social media links

## 🛠️ Customization Guide

### Update Contact Information
Edit the email address in `contact.html`:
```html
<a href="mailto:hello@wb1.uk">hello@wb1.uk</a>
```

### Add Social Media Links
Update these placeholders in the footer and contact page:
```html
<a href="https://linkedin.com/company/wb1">LinkedIn</a>
<a href="https://twitter.com/wb1">Twitter</a>
```

### Change Brand Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #ff6b5b 0%, #ee5a94 50%, #c747d4 100%);
    --primary-color: #ee5a94;
    /* ... other colors ... */
}
```

### Logo
Replace `logo.png` with your actual WB1 logo (recommended size: 45px height).

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (769px - 1199px)
- Mobile (480px - 768px)
- Small mobile (<480px)

## 🌐 Cloudflare Pages Deployment

### Prerequisites
- GitHub account with your repository
- Cloudflare account (free tier works great)

### Deployment Steps

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: WB1 website"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to Cloudflare dashboard
   - Navigate to Pages → Create a project
   - Select "Connect to Git"
   - Choose your GitHub repository
   - Leave build settings empty (static site)
   - Set publish directory to `.` (root)
   - Click "Save and Deploy"

3. **Custom Domain (Optional)**
   - Add your domain in Cloudflare Pages settings
   - Update DNS records as needed
   - The site will be available at your custom domain

### Benefits of Cloudflare Pages
- ✅ Free SSL/TLS certificates
- ✅ Global CDN for fast delivery
- ✅ Automatic deploys on git push
- ✅ Free tier suitable for most needs
- ✅ Great performance metrics
- ✅ Easy environment management

## 📊 Features

- **Contact Form**: Client-side form with validation and success message
- **Mobile Responsive**: Works perfectly on phones, tablets, and desktops
- **Fast Loading**: Static HTML/CSS means no database or complex server setup
- **SEO Friendly**: Semantic HTML, proper meta tags, structured content
- **Accessibility**: Proper heading hierarchy, alt text, semantic elements
- **Modern Design**: Gradients, shadows, smooth transitions

## 🔧 Form Integration

The contact form currently shows a success message locally. For production, integrate with:

### Option 1: Formspree (Recommended for Static Sites)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
Add `netlify` attribute to form tag

### Option 3: Your Own Backend
Update form action to point to your backend endpoint

## 🚀 Performance Optimization

- All CSS is inline in single stylesheet for minimal requests
- No JavaScript frameworks - vanilla JS only
- Optimized assets and modern CSS techniques
- Lighthouse recommended practices followed

## 📈 Future Enhancements

Consider adding:
- Blog section for content marketing
- Case studies/portfolio projects
- Live chat widget
- Newsletter signup
- Email notification integration
- Analytics tracking
- Testimonials/reviews section
- Video content

## 📝 License

This project is proprietary to WB1.

## 📞 Support

For website updates or customizations, contact the development team.