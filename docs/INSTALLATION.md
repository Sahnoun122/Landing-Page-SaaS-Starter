# 📦 Installation Guide

Complete step-by-step installation guide for the Modern SaaS Landing Page Starter.

## 🔍 System Requirements

Before installation, ensure your system meets these requirements:

### **Minimum Requirements**
- **Node.js**: Version 18.0.0 or higher
- **NPM**: Version 8.0.0 or higher (comes with Node.js)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space for dependencies
- **OS**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

### **Recommended Tools**
- **Code Editor**: VS Code with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - Auto Rename Tag
- **Browser**: Chrome DevTools for debugging
- **Terminal**: Built-in terminal or Hyper/iTerm2

## 🚀 Quick Installation (5 minutes)

### Step 1: Download & Extract
```bash
# Download the project files
# Extract to your desired location
# Example: C:\projects\my-saas-project
```

### Step 2: Navigate to Project
```bash
# Windows
cd C:\projects\my-saas-project

# macOS/Linux
cd /path/to/your/project
```

### Step 3: Install Dependencies
```bash
# Install all required packages
npm install

# This will install:
# - Next.js 14+ with React 18+
# - TypeScript for type safety
# - Tailwind CSS for styling
# - Framer Motion for animations
# - Lucide React for icons
# - All development dependencies
```

### Step 4: Start Development Server
```bash
# Start the development server
npm run dev

# Your project will be available at:
# http://localhost:3000
```

### Step 5: Verify Installation
Open your browser and navigate to `http://localhost:3000`. You should see:
- ✅ Beautiful landing page with animations
- ✅ Responsive design working
- ✅ Dark/light mode toggle functional
- ✅ All navigation links working
- ✅ Dashboard accessible

## 🛠 Detailed Installation Steps

### Step 1: Check Node.js Installation

```bash
# Check if Node.js is installed
node --version
# Should show v18.0.0 or higher

# Check npm version
npm --version
# Should show 8.0.0 or higher
```

**If Node.js is not installed:**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version
3. Run the installer
4. Restart your terminal

### Step 2: Project Setup

```bash
# Create project directory (optional)
mkdir my-saas-project
cd my-saas-project

# If you have the project files, extract them here
# Your structure should look like:
# my-saas-project/
# ├── src/
# ├── public/
# ├── package.json
# ├── tailwind.config.ts
# └── tsconfig.json
```

### Step 3: Dependency Installation

```bash
# Install all dependencies
npm install

# This installs approximately 200+ packages including:
# Core dependencies (~50MB):
# - next: ^14.0.0
# - react: ^18.0.0
# - typescript: ^5.0.0
# - tailwindcss: ^3.0.0
# - framer-motion: ^10.0.0
# 
# Development dependencies (~150MB):
# - @types/node, @types/react
# - eslint, prettier
# - autoprefixer, postcss
```

**Installation Process:**
1. **Package Resolution** (30s): npm analyzes dependencies
2. **Download** (1-3 minutes): Downloads packages from registry
3. **Installation** (1-2 minutes): Installs and links packages
4. **Post-install** (30s): Runs any post-install scripts

### Step 4: Environment Configuration

```bash
# Create environment file (optional for basic setup)
touch .env.local

# Add basic configuration
echo "NEXT_PUBLIC_APP_NAME=My SaaS App" >> .env.local
echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" >> .env.local
```

### Step 5: Development Server

```bash
# Start development server with hot reloading
npm run dev

# Alternative: Start with specific port
npm run dev -- --port 3001

# Alternative: Start with turbo mode (faster builds)
npm run dev --turbo
```

**What happens when you run `npm run dev`:**
1. **TypeScript Compilation**: Checks for type errors
2. **Tailwind Processing**: Generates CSS from utility classes
3. **Bundle Creation**: Creates development bundles
4. **Server Start**: Starts local development server
5. **Hot Reload Setup**: Enables live reloading on changes

## 🔧 Alternative Installation Methods

### Using Yarn
```bash
# Install yarn globally (if not installed)
npm install -g yarn

# Install dependencies with yarn
yarn install

# Start development server
yarn dev
```

### Using pnpm (Fastest)
```bash
# Install pnpm globally
npm install -g pnpm

# Install dependencies with pnpm
pnpm install

# Start development server
pnpm dev
```

### Using Docker (Advanced)
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run with Docker
docker build -t my-saas-app .
docker run -p 3000:3000 my-saas-app
```

## 🌐 Port Configuration

### Default Port (3000)
```bash
npm run dev
# Accessible at: http://localhost:3000
```

### Custom Port
```bash
# Method 1: Command line
npm run dev -- --port 3001

# Method 2: Environment variable
PORT=3001 npm run dev

# Method 3: next.config.js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other config
  server: {
    port: 3001
  }
}
module.exports = nextConfig
```

## 🐛 Troubleshooting Common Issues

### Issue 1: Node.js Version Compatibility
```bash
# Error: "The engine "node" is incompatible with this module"
# Solution: Update Node.js to version 18+

# Check your version
node --version

# Update using Node Version Manager (recommended)
# Install nvm first, then:
nvm install 18
nvm use 18
```

### Issue 2: Port Already in Use
```bash
# Error: "Port 3000 is already in use"
# Solution 1: Kill process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Solution 2: Use different port
npm run dev -- --port 3001
```

### Issue 3: Permission Errors
```bash
# Error: "Permission denied" or "EACCES"
# Solution: Fix npm permissions

# macOS/Linux:
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Windows: Run terminal as administrator
```

### Issue 4: Module Not Found
```bash
# Error: "Module not found: Can't resolve..."
# Solution 1: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Solution 2: Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue 5: TypeScript Errors
```bash
# Error: TypeScript compilation errors
# Solution 1: Check tsconfig.json is present and valid

# Solution 2: Restart TypeScript server (in VS Code)
# Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"

# Solution 3: Clear TypeScript cache
rm -rf .next
npm run dev
```

### Issue 6: Tailwind Classes Not Working
```bash
# Error: Tailwind classes not applying styles
# Solution 1: Check tailwind.config.ts content paths

# Solution 2: Restart development server
# Ctrl + C to stop, then npm run dev

# Solution 3: Clear cache
rm -rf .next
npm run dev
```

## 📊 Installation Verification Checklist

After installation, verify these features are working:

### ✅ Core Functionality
- [ ] Homepage loads without errors
- [ ] All sections visible (Hero, Features, Testimonials, Pricing, FAQ)
- [ ] Navigation menu works
- [ ] Dark/light mode toggle functions
- [ ] Responsive design (test mobile view)

### ✅ Dashboard Features
- [ ] Dashboard page accessible (/dashboard)
- [ ] Projects page works (/projects)
- [ ] Team page works (/team)
- [ ] Analytics page works (/analytics)
- [ ] API docs page works (/api-docs)
- [ ] Profile page works (/profile)

### ✅ Performance
- [ ] Pages load quickly (< 2 seconds)
- [ ] No console errors in browser
- [ ] Animations smooth and responsive
- [ ] Images load properly

### ✅ Development Tools
- [ ] Hot reloading works (make a change and see it update)
- [ ] TypeScript compilation successful
- [ ] ESLint running without errors

## 📈 Performance Optimization

### During Development
```bash
# Enable turbo mode for faster builds
npm run dev --turbo

# Use production build for testing
npm run build
npm run start
```

### Disk Space Management
```bash
# Check node_modules size
du -sh node_modules/

# Clean unnecessary files
npm prune
npm cache clean --force

# Remove development build cache
rm -rf .next
```

## ⚙️ IDE Configuration

### VS Code Settings
Create `.vscode/settings.json`:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

### VS Code Extensions
Install these extensions for the best experience:
1. **ES7+ Snippets** - React code snippets
2. **Tailwind CSS IntelliSense** - Autocomplete for classes
3. **TypeScript and JavaScript** - Enhanced TS support
4. **Prettier** - Code formatting
5. **Auto Rename Tag** - Sync HTML/JSX tag changes

## 🚀 Next Steps

After successful installation:

1. **Read the Customization Guide**: `docs/CUSTOMIZATION.md`
2. **Explore Components**: Check `src/components/` directory
3. **Understand Project Structure**: Review `docs/PROJECT_STRUCTURE.md`
4. **Learn Deployment**: Read `docs/DEPLOYMENT.md`
5. **Start Building**: Begin customizing for your needs!

## 💡 Pro Tips

### Speed up development:
```bash
# Use npm scripts for common tasks
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Check TypeScript types
```

### Keep dependencies updated:
```bash
# Check for outdated packages
npm outdated

# Update all packages (be careful!)
npm update

# Update specific package
npm install package-name@latest
```

### Clean installation:
```bash
# Complete clean reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

---

**🎉 Installation Complete!**

You now have a fully functional SaaS landing page and dashboard. Start customizing and building your dream SaaS application!

**Need help?** Check our troubleshooting section above or reach out to support.

**Ready for the next step?** Continue with the [Customization Guide](CUSTOMIZATION.md).