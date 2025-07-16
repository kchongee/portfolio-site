# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features light/dark theme support and fully configurable content through a centralized configuration system.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Built-in theme toggle with system preference detection
- **Configurable**: Easy content customization through configuration files
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Built-in SEO optimization with meta tags
- **Accessible**: Following web accessibility best practices
- **Type Safe**: Full TypeScript support for better developer experience

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: SVG icons with proper accessibility
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # React components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Skills.tsx       # Skills section
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── config/              # Configuration files
│   │   └── portfolio.ts     # Main portfolio config
│   ├── hooks/               # Custom React hooks
│   │   └── useTheme.ts      # Theme management hook
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Portfolio types
│   └── utils/               # Utility functions
├── public/                  # Static assets
│   └── images/              # Image assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Personal Information

Edit `src/config/portfolio.ts` to customize your portfolio content:

```typescript
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio description",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567", // optional
    location: "Your Location",
    avatar: "/images/avatar.jpg",
    resume: "/resume.pdf" // optional
  },
  // ... more configuration options
}
```

### Social Links

Add your social media profiles:

```typescript
social: [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin"
  },
  // Add more social links
]
```

### Skills

Configure your skills with proficiency levels:

```typescript
skills: [
  {
    name: "React",
    level: 95, // 0-100
    category: "frontend" // frontend, backend, tools, other
  },
  // Add more skills
]
```

### Projects

Showcase your projects:

```typescript
projects: [
  {
    id: "1",
    title: "Project Name",
    description: "Project description",
    image: "/images/project1.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.vercel.app",
    featured: true // Show in featured section
  },
  // Add more projects
]
```

### Experience

Add your work experience:

```typescript
experience: [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "2020 - Present",
    description: "Description of your role and achievements",
    technologies: ["React", "Node.js", "AWS"]
  },
  // Add more experience
]
```

## 🎨 Customization

### Theme Colors

Modify theme colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... more shades
      },
    },
  },
},
```

### Typography

The portfolio uses Inter font by default. To change fonts, update `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

### Components

Each section is a separate component in `src/components/`. You can:

- Modify existing components
- Add new sections
- Rearrange sections in `src/app/page.tsx`

### Animations

Animations are implemented using Tailwind CSS classes. Custom animations are defined in `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'bounce-slow': 'bounce 2s infinite',
},
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are designed mobile-first and scale up appropriately.

## 🌓 Theme System

The theme system supports:

- **Light mode**: Default clean, professional look
- **Dark mode**: Dark background with light text
- **System preference**: Automatically detects user's system preference
- **Persistence**: Remembers user's choice in localStorage

### Theme Toggle Implementation

The theme is managed by:
- `useTheme` hook in `src/hooks/useTheme.ts`
- `ThemeToggle` component in `src/components/ThemeToggle.tsx`
- Tailwind CSS dark mode classes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📦 Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Test the production build locally**
   ```bash
   npm run start
   ```

3. **Check build output**
   The build creates an optimized `.next` folder with all necessary files.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure deployment

2. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - For contact forms, you might need API keys

### Other Deployment Options

#### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add `next export` for static deployment if needed

#### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add export script to `package.json`:
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "gh-pages -d out"
     }
   }
   ```
3. Run `npm run export && npm run deploy`

#### Custom Server
1. Build: `npm run build`
2. Upload `.next` folder and `package.json`
3. Run `npm install --production`
4. Start with `npm start`

### Deployment Checklist

Before deploying:

- [ ] Update portfolio configuration with your information
- [ ] Add your images to `public/images/`
- [ ] Test responsive design on different devices
- [ ] Verify all links work correctly
- [ ] Check dark/light theme functionality
- [ ] Optimize images for web
- [ ] Update meta tags and SEO information
- [ ] Test contact form functionality
- [ ] Run `npm run build` to check for errors

## 🎯 SEO Optimization

The portfolio includes built-in SEO features:

### Meta Tags
- Dynamic title and description based on configuration
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data for search engines

### Performance
- Next.js automatic optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts loading

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Proper color contrast ratios

## 🔍 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **TypeScript Errors**
   ```bash
   # Run type checking
   npm run type-check
   ```

3. **Styling Issues**
   ```bash
   # Rebuild Tailwind CSS
   npm run dev
   ```

4. **Theme Not Working**
   - Check if JavaScript is enabled
   - Clear browser localStorage
   - Verify dark mode classes in Tailwind config

### Getting Help

If you encounter issues:

1. Check the console for error messages
2. Verify your configuration in `src/config/portfolio.ts`
3. Ensure all required dependencies are installed
4. Check that image paths are correct

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📞 Support

If you need help or have questions:

- Create an issue in the repository
- Check the documentation
- Review the configuration examples

---

**Happy coding! 🚀**