# 🎨 Customization Guide

Complete guide to customize your SaaS Landing Page and Dashboard to match your brand and requirements.

## 🚀 Quick Start Customization

### 1. Brand Identity (5 minutes)
```typescript
// Update brand name throughout the app
// File: src/components/sections/header.tsx
const brandName = "YourSaaS"; // Replace "FlowCraft"

// File: src/app/layout.tsx
export const metadata: Metadata = {
  title: "YourSaaS - Your Tagline",
  description: "Your compelling description here",
};
```

### 2. Color Scheme (10 minutes)
```typescript
// File: tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#0ea5e9',  // Your main brand color
        600: '#0284c7',
        900: '#0c4a6e',
      }
    }
  }
}
```

### 3. Logo Replacement
```bash
# Replace logo files in public/
public/
├── logo.svg          # Main logo
├── logo-dark.svg     # Dark mode logo
├── favicon.ico       # Browser tab icon
└── og-image.jpg      # Social media preview
```

## 🎯 Content Customization

### Hero Section
**File:** `src/components/sections/hero.tsx`

```typescript
// Customize hero content
const heroContent = {
  title: "Your SaaS Solution",
  subtitle: "Transform your business with our powerful platform",
  description: "Build, scale, and optimize your operations with our comprehensive SaaS solution designed for modern businesses.",
  primaryCTA: "Start Free Trial",
  secondaryCTA: "View Demo"
};
```

**Advanced Hero Customization:**
```typescript
// Add custom animations
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
>
  {heroContent.title}
</motion.h1>
```

### Features Section
**File:** `src/components/sections/features.tsx`

```typescript
const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed and performance with modern technologies"
  },
  {
    icon: Shield,
    title: "Enterprise Security", 
    description: "Bank-level security with end-to-end encryption"
  },
  // Add your features here
];
```

**Custom Feature Icons:**
```typescript
// Import your icons
import { YourCustomIcon } from 'lucide-react';

// Or create custom SVG icons
const CustomIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    {/* Your SVG path */}
  </svg>
);
```

### Testimonials Section
**File:** `src/components/sections/testimonials.tsx`

```typescript
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    company: "TechCorp",
    avatar: "/testimonials/sarah.jpg",
    rating: 5,
    text: "This platform transformed our business operations completely. Highly recommended!"
  },
  // Add your real testimonials
];
```

### Pricing Section
**File:** `src/components/sections/pricing.tsx`

```typescript
const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    billing: "month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 10 users",
      "10GB storage",
      "Basic analytics",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 99,
    billing: "month", 
    description: "Best for growing businesses",
    features: [
      "Up to 100 users",
      "100GB storage", 
      "Advanced analytics",
      "Priority support",
      "API access"
    ],
    popular: true
  }
  // Add your pricing tiers
];
```

## 🎨 Visual Design Customization

### Color System
**File:** `tailwind.config.ts`

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: '#eff6ff',   // Very light
          100: '#dbeafe',  // Light
          200: '#bfdbfe',  // Light medium
          300: '#93c5fd',  // Medium light
          400: '#60a5fa',  // Medium
          500: '#3b82f6',  // Base (main brand color)
          600: '#2563eb',  // Medium dark
          700: '#1d4ed8',  // Dark
          800: '#1e40af',  // Very dark
          900: '#1e3a8a',  // Darkest
          950: '#172554'   // Ultra dark
        },
        
        // Secondary colors
        secondary: {
          500: '#8b5cf6',  // Purple
          600: '#7c3aed',
        },
        
        // Accent colors
        accent: {
          500: '#06b6d4',  // Cyan
          600: '#0891b2',
        },
        
        // Success, warning, error
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b', 
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      
      // Custom gradients
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }
    }
  }
};
```

### Typography System
**File:** `src/app/layout.tsx`

```typescript
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";

// Primary font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Secondary font for headings
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Monospace for code
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});
```

**File:** `tailwind.config.ts`
```typescript
fontFamily: {
  sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
  heading: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
  mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
},

// Typography scale
fontSize: {
  'xs': '0.75rem',     // 12px
  'sm': '0.875rem',    // 14px
  'base': '1rem',      // 16px
  'lg': '1.125rem',    // 18px
  'xl': '1.25rem',     // 20px
  '2xl': '1.5rem',     // 24px
  '3xl': '1.875rem',   // 30px
  '4xl': '2.25rem',    // 36px
  '5xl': '3rem',       // 48px
  '6xl': '3.75rem',    // 60px
}
```

### Animation System
**File:** `src/app/globals.css`

```css
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Utility classes */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
```

**File:** `tailwind.config.ts`
```typescript
animation: {
  'fade-in-up': 'fadeInUp 0.6s ease-out',
  'slide-in-right': 'slideInRight 0.6s ease-out',
  'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
  'spin-slow': 'spin 3s linear infinite',
}
```

## 🏗 Layout Customization

### Header/Navigation
**File:** `src/components/sections/header.tsx`

```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  // Add your navigation items
];

// Custom mobile menu
const MobileMenu = ({ isOpen, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
    className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2"
  >
    {/* Mobile menu content */}
  </motion.div>
);
```

### Footer Customization
**File:** `src/components/sections/footer.tsx`

```typescript
const footerData = {
  company: {
    name: "YourSaaS",
    description: "Building the future of business automation",
    logo: "/logo.svg"
  },
  
  links: {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '/api-docs' },
      { name: 'Integrations', href: '/integrations' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Status', href: '/status' },
      { name: 'Contact Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  },
  
  social: [
    { name: 'Twitter', href: 'https://twitter.com/yoursaas', icon: TwitterIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/yoursaas', icon: LinkedInIcon },
    { name: 'GitHub', href: 'https://github.com/yoursaas', icon: GitHubIcon }
  ]
};
```

## 📊 Dashboard Customization

### Dashboard Navigation
**File:** `src/components/dashboard/DashboardNav.tsx`

```typescript
const navigation = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: LayoutDashboard,
    badge: null 
  },
  { 
    name: 'Projects', 
    href: '/projects', 
    icon: FolderOpen,
    badge: '12' // Show count
  },
  { 
    name: 'Team', 
    href: '/team', 
    icon: Users,
    badge: null 
  },
  { 
    name: 'Analytics', 
    href: '/analytics', 
    icon: BarChart3,
    badge: 'NEW'
  },
  // Add your dashboard pages
];
```

### Dashboard Cards
**File:** `src/app/dashboard/page.tsx`

```typescript
const dashboardStats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    changeColor: 'text-green-600',
    icon: DollarSign,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+15.3%', 
    changeColor: 'text-green-600',
    icon: Users,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100 dark:bg-blue-900/20'
  },
  // Add your KPIs
];
```

## 🔧 Component Customization

### Creating Custom Components
**File:** `src/components/ui/custom-button.tsx`

```typescript
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define button variants
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl",
        outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
        ghost: "text-primary-600 hover:bg-primary-50",
        destructive: "bg-red-600 text-white hover:bg-red-700"
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-11 px-6 text-base", 
        lg: "h-13 px-8 text-lg",
        xl: "h-16 px-10 text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

export { CustomButton, buttonVariants };
```

### Custom Cards
**File:** `src/components/ui/custom-card.tsx`

```typescript
import { motion } from 'framer-motion';

interface CustomCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: boolean;
  hover?: boolean;
  children?: React.ReactNode;
}

export function CustomCard({ 
  title, 
  description, 
  icon, 
  gradient = false,
  hover = true,
  children 
}: CustomCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`
        p-6 rounded-xl border shadow-lg transition-all duration-300
        ${gradient 
          ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900' 
          : 'bg-white dark:bg-gray-800'
        }
        ${hover ? 'hover:shadow-xl hover:border-primary-200' : ''}
        border-gray-200 dark:border-gray-700
      `}
    >
      {icon && (
        <div className="mb-4 flex items-center gap-3">
          <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      
      {children}
    </motion.div>
  );
}
```

## 🌐 SEO & Metadata Customization

### Global Metadata
**File:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'YourSaaS - Powerful Business Solutions',
    template: '%s | YourSaaS'
  },
  description: 'Transform your business with our comprehensive SaaS platform. Streamline operations, boost productivity, and scale efficiently.',
  keywords: [
    'SaaS',
    'business automation',
    'productivity',
    'cloud software',
    'your industry keywords'
  ],
  authors: [{ name: 'Your Company' }],
  creator: 'Your Company',
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'YourSaaS',
    title: 'YourSaaS - Powerful Business Solutions',
    description: 'Transform your business with our comprehensive SaaS platform.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YourSaaS Dashboard Preview'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'YourSaaS - Powerful Business Solutions',
    description: 'Transform your business with our comprehensive SaaS platform.',
    images: ['/og-image.jpg'],
    creator: '@yoursaas'
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};
```

### Page-Specific Metadata
**File:** `src/app/pricing/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Choose the perfect plan for your business. Flexible pricing options with powerful features.',
  openGraph: {
    title: 'YourSaaS Pricing - Choose Your Plan',
    description: 'Flexible pricing options with powerful features for every business size.',
    images: ['/og-pricing.jpg']
  }
};
```

## 📱 Responsive Design Customization

### Breakpoint System
**File:** `tailwind.config.ts`

```typescript
screens: {
  'xs': '475px',    // Extra small devices
  'sm': '640px',    // Small devices (landscape phones)
  'md': '768px',    // Medium devices (tablets)
  'lg': '1024px',   // Large devices (laptops)
  'xl': '1280px',   // Extra large devices (desktops)
  '2xl': '1536px',  // Ultra wide screens
}
```

### Responsive Components
```typescript
// Example responsive component
export function ResponsiveGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      grid 
      grid-cols-1       /* Mobile: 1 column */
      sm:grid-cols-2    /* Small: 2 columns */
      lg:grid-cols-3    /* Large: 3 columns */
      xl:grid-cols-4    /* XL: 4 columns */
      gap-4 sm:gap-6 lg:gap-8
    ">
      {children}
    </div>
  );
}
```

## 🎯 Advanced Customization

### Custom Hooks
**File:** `src/hooks/useLocalStorage.ts`

```typescript
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
```

### Custom Contexts
**File:** `src/contexts/ThemeContext.tsx`

```typescript
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setActualTheme(systemTheme);
    } else {
      setActualTheme(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

## 🔧 Configuration Files

### Next.js Configuration
**File:** `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'yourdomain.com'],
    formats: ['image/webp', 'image/avif']
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ];
  },
  
  // Headers for security
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
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
```

### TypeScript Configuration
**File:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🎯 Best Practices

### 1. File Organization
```
src/
├── components/
│   ├── sections/     # Landing page sections
│   ├── dashboard/    # Dashboard components  
│   ├── ui/          # Reusable UI components
│   └── forms/       # Form components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and constants
├── types/           # TypeScript type definitions
└── styles/          # Global styles
```

### 2. Component Architecture
```typescript
// Good: Single responsibility
export function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <UserAvatar user={user} />
      <UserInfo user={user} />
      <UserActions user={user} />
    </Card>
  );
}

// Better: Compound component pattern
export function UserCard({ children }: { children: React.ReactNode }) {
  return <Card>{children}</Card>;
}

UserCard.Avatar = UserAvatar;
UserCard.Info = UserInfo;
UserCard.Actions = UserActions;
```

### 3. Performance Optimization
```typescript
// Lazy load heavy components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false
});

// Memoize expensive calculations
const expensiveValue = useMemo(() => 
  calculateExpensiveValue(data), 
  [data]
);

// Optimize re-renders
const MemoizedComponent = memo(({ data }) => {
  return <div>{data.title}</div>;
});
```

---

## 🎉 Ready to Customize!

You now have all the tools and knowledge to fully customize your SaaS landing page and dashboard. Start with the quick customizations and gradually implement more advanced features as needed.

**Next Steps:**
1. Update your brand identity
2. Customize colors and typography
3. Modify content sections
4. Add your features and pricing
5. Test across devices

**Need more help?** Check out our [Deployment Guide](DEPLOYMENT.md) when you're ready to go live!