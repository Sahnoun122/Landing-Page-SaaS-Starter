# SaaS Landing Page Starter - ThemeForest Documentation

## 📦 What's Included

This package contains a complete SaaS landing page and dashboard built with modern technologies:

- ✅ Landing page with hero, features, pricing, testimonials, FAQ
- ✅ Complete dashboard with 15+ pages
- ✅ Dark/Light mode toggle
- ✅ Fully responsive design
- ✅ Modern animations with Framer Motion
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## 🔧 Requirements

- Node.js 18+ 
- npm or yarn package manager
- Modern web browser

## ⚡ Quick Installation

1. **Extract the downloaded ZIP file**
2. **Open terminal/command prompt in the project folder**
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start development server:**
   ```bash
   npm run dev
   ```
5. **Open http://localhost:3000 in your browser**

That's it! Your SaaS starter is now running.

## 🎨 Customization

### Change Brand Name
Edit the following files to change "FlowCraft" to your brand name:
- `src/components/sections/header.tsx` (line 45)
- `src/components/dashboard/DashboardNav.tsx` (line 32)

### Change Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Change Content
- Hero section: `src/components/sections/hero.tsx`
- Features: `src/components/sections/features.tsx`
- Pricing: `src/components/sections/pricing.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Build the project: `npm run build`
2. Install Vercel CLI: `npm i -g vercel`
3. Deploy: `vercel --prod`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify

## 📁 File Structure

```
├── src/
│   ├── app/                 # App Router pages
│   ├── components/          # Reusable components
│   │   ├── sections/        # Landing page sections
│   │   ├── dashboard/       # Dashboard components
│   │   └── ui/              # UI components
│   ├── lib/                 # Utilities and constants
│   └── types/               # TypeScript types
├── public/                  # Static assets
└── docs/                    # Additional documentation
```

## 🛠️ Technologies Used

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Themes:** next-themes for dark/light mode

## 📞 Support

For technical support or questions about this template:
- Check the included documentation files
- Review the code comments for guidance
- Contact: [Your support email]

## 📄 License

This template is licensed for commercial use. You can:
- ✅ Use for unlimited projects
- ✅ Use for client work
- ✅ Modify and customize freely
- ❌ Resell as-is
- ❌ Redistribute the source code

---

**Enjoy building your SaaS with this modern starter kit!** 🚀