# 🎨 Graphic Zone - Premium Printing & Design Solutions

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A modern, fully responsive web application for **Graphic Zone** - a professional printing and graphic design company based in Cumilla, Bangladesh. Built with cutting-edge technologies to deliver exceptional user experience and showcase our premium printing services.

## 📸 Preview

![Graphic Zone Homepage](https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=630&fit=crop&q=80)

## ✨ Features

### 🎯 Core Functionality
- **Interactive Portfolio** - Showcase of completed projects with detailed case studies
- **Service Catalog** - Comprehensive list of printing and design services
- **Smart Quotation System** - Budget-based quotation request form
- **Client Dashboard** - Order tracking and history for authenticated users
- **Project Detail Pages** - In-depth project breakdowns with technical specifications
- **Responsive Contact Forms** - Multi-channel communication (WhatsApp, Email, Facebook)

### 🚀 Technical Highlights
- **Modern React 19** with latest hooks and patterns
- **Next.js 16 App Router** for optimal performance and SEO
- **TypeScript Throughout** - Type-safe codebase with strict mode
- **Tailwind CSS v4** - Modern utility-first styling with responsive design
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible, unstyled component primitives
- **Vitest** - Fast unit testing with React Testing Library
- **Named Exports** - Optimized tree-shaking for minimal bundle size

### 🎨 Design Features
- **Fully Mobile Responsive** - Optimized for all screen sizes
- **Dark/Light Themes** - Support for user preferences
- **Bengali Language Support** - Native Bengali typography and content
- **Unsplash Integration** - High-resolution project imagery
- **Custom Animations** - Engaging user interactions
- **Print-Optimized Layouts** - Professional print views

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.1.6** - React framework with App Router
- **React 19.0** - UI library with modern patterns
- **TypeScript 5.8** - Static type checking

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Motion 12.23** - Animation library (Framer Motion)
- **Lucide React** - Beautiful icon library
- **CVA** - Class Variance Authority for component variants
- **TW Merge** - Tailwind class merging utility

### Development Tools
- **Vitest** - Fast unit testing framework
- **Testing Library** - React component testing
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **TSX** - TypeScript execution

## 📦 Project Structure

```
graphic-zone/
├── public/                 # Static assets
│   └── Logo.png           # Company logo
├── assets/                # Local assets
│   └── Logo.png           # Source logo file
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── login/         # Authentication
│   │   ├── payment/       # Payment flow
│   │   ├── profile/       # User dashboard
│   │   └── project/[id]/  # Dynamic project pages
│   ├── components/        # React components
│   │   ├── auth/          # Authentication components
│   │   ├── home/          # Homepage sections
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── payment/       # Payment components
│   │   ├── profile/       # Profile dashboard
│   │   ├── project/       # Project detail components
│   │   └── ui/            # Reusable UI components (shadcn)
│   ├── config/            # Configuration files
│   │   ├── site.ts        # Site metadata and constants
│   │   ├── order.ts       # Order configuration
│   │   └── payment.ts     # Payment methods
│   ├── data/              # Static data
│   │   ├── constants.ts   # App constants
│   │   ├── projects.ts    # Project portfolio data
│   │   ├── profile.ts     # User profile data
│   │   └── payment.ts     # Payment gateway data
│   ├── hooks/             # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useBodyScrollLock.ts
│   │   └── useDebouncedValue.ts
│   ├── lib/               # Utility functions
│   │   ├── utils.ts       # General utilities
│   │   ├── navigation.ts  # Navigation helpers
│   │   ├── format.ts      # Formatting functions
│   │   └── result.ts      # Result type utilities
│   ├── types/             # TypeScript types
│   │   ├── index.ts       # Shared types
│   │   ├── payment.ts     # Payment types
│   │   └── profile.ts     # Profile types
│   └── __tests__/         # Test files
├── .next/                 # Next.js build output
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.mjs     # PostCSS configuration
├── vitest.config.ts       # Vitest configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- Modern web browser

### Installation

1. **Navigate to project directory**
   ```bash
   cd graphic-zone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your configuration if needed:
   ```env
   # Add your environment variables here
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Type-check, lint, and test
npm run validate

# Build the application
npm run build

# Start production server
npm start
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production bundle |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run typecheck` | Type-check with TypeScript |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |
| `npm run validate` | Run all quality checks (typecheck + lint + test) |

## 🧪 Testing

This project uses **Vitest** for unit testing with React Testing Library.

```bash
# Run tests once
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Test files are located in `src/__tests__/` with the following structure:
- `components/` - Component tests
- `hooks/` - Custom hook tests
- `lib/` - Utility function tests
- `config/` - Configuration tests
- `data/` - Data validation tests

## 🎨 Customization

### Brand Configuration

Update brand information in `src/config/site.ts`:

```typescript
export const BRAND = {
  name: 'Graphic Zone',
  tagline: 'Your tagline here',
  contactPhone: '+880 1312594292',
  contactEmail: 'your@email.com',
  address: {
    street: 'Your street',
    area: 'Your area',
    city: 'Your city',
    postalCode: 'Your postal code',
  },
  // ... more configuration
};
```

### Services & Portfolio

Modify services in `src/data/constants.ts`:

```typescript
export const SERVICES: ServiceItem[] = [
  { id: 'service-id', title: 'Service Title', desc: 'Description', icon: 'IconName' },
  // Add more services
];
```

Update portfolio projects in `src/data/projects.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project Title',
    category: 'Category',
    client: 'Client Name',
    // ... project details
  },
];
```

### Styling

- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Typography**: Update font families in `src/app/layout.tsx`
- **Components**: Customize UI components in `src/components/ui/`

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

All components are optimized for mobile-first design with progressive enhancement.

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Color Contrast**: WCAG AA compliant contrast ratios

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ‍💼 About Graphic Zone

**Graphic Zone** is a premium printing and graphic design company located in Cumilla, Bangladesh. We specialize in:

- 🎨 Corporate Branding & Identity
- 📄 Bulk Digital Printing
- 🖼️ Large Format Signage
- 📚 Editorial & Magazine Printing
- 🏢 Business Stationery
- 🎯 Marketing Materials

### Contact Information

- **Address**: Victoria College Road, Kandirpar, Cumilla 3500, Bangladesh
- **Phone**: +৮৮ ০১৩১২৫৯৪২৯২ / +৮৮ ০১৯১২৫৯৪২৯২
- **Email**: graphiczonecumilla@gmail.com
- **WhatsApp**: [Message Us](https://wa.me/8801312594292)
- **Facebook**: [facebook.com/graphiczonecumilla](https://facebook.com/graphiczonecumilla)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Unsplash](https://unsplash.com/) - High-quality images
- [shadcn/ui](https://ui.shadcn.com/) - Component library inspiration

## 📞 Support

For support, email graphiczonecumilla@gmail.com or message us on [WhatsApp](https://wa.me/8801312594292).

---

<p align="center">Made with ❤️ by Graphic Zone</p>
<p align="center">© 2026 Graphic Zone Corporation. All Rights Reserved.</p>
