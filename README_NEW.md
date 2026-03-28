# B Gorgeous Beauty Academy

A modern, responsive beauty and wellness services website built with React, TypeScript, and Tailwind CSS.

## Overview

B Gorgeous Beauty Academy is a professional website showcasing beauty and wellness services including braids, eyelashes, facials, makeup, massages, microblading, nails, pedicure/manicure, body tinting, waxing, and wig installation.

## Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4 with PostCSS
- **UI Components**: Radix UI with shadcn/ui integration
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM 6
- **Data Fetching**: TanStack React Query 5
- **Testing**: Vitest 3.2 with Playwright 1.57
- **Code Quality**: ESLint with TypeScript support
- **Package Manager**: Bun

## Project Structure

```
src/
├── assets/           # Service images and media
├── components/       # Reusable React components
│   ├── ui/          # shadcn/ui component library
│   ├── AboutSection.tsx
│   ├── ContactFooter.tsx
│   ├── CoursesSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── NavLink.tsx
│   ├── TestimonialsSection.tsx
│   └── WhatsAppFloat.tsx
├── pages/           # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── test/            # Test files
├── App.tsx          # Main App component
├── main.tsx         # Entry point
├── index.css        # Global styles
├── App.css          # App-specific styles
└── vite-env.d.ts    # Vite environment types
```

## Features

-  Responsive design optimized for mobile, tablet, and desktop
-  Modern UI with Tailwind CSS animations
- WhatsApp integration for easy customer contact
- Testimonials section for social proof
-  Service showcase with high-quality images
-  Accessible components with ARIA support
-  Comprehensive test coverage
-  SEO-friendly structure

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- Node.js 18+ (if not using Bun)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd b-gorgeous-empire
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run build:dev` - Build in development mode
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint to check code quality
- `bun run test` - Run tests once
- `bun run test:watch` - Run tests in watch mode

## Configuration Files

- `vite.config.ts` - Vite build configuration
- `vitest.config.ts` - Vitest testing configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript compiler options
- `prettier.config.js` - Code formatting (if configured)
- `eslint.config.js` - ESLint rules and configurations
- `components.json` - shadcn/ui component configuration

## Dependencies

### Core Dependencies
- react - UI library
- react-dom - DOM rendering
- react-router-dom - Client-side routing
- @tanstack/react-query - Server state management
- react-hook-form - Form state management
- zod - Schema validation

### UI & Styling
- tailwindcss - Utility-first CSS framework
- @radix-ui/* - Unstyled, accessible component primitives
- shadcn/ui - Built on Radix UI
- lucide-react - Icon library
- tailwind-merge - Merge Tailwind CSS classes

### Development Tools
- typescript - Type safety
- vite - Build tool and dev server
- vitest - Unit testing framework
- @playwright/test - E2E testing
- eslint - Code linting

## Building for Production

```bash
bun run build
```

This creates an optimized production build in the `dist/` directory.

To preview the production build locally:

```bash
bun run preview
```

## Testing

### Run Tests
```bash
bun run test
```

### Watch Mode
```bash
bun run test:watch
```

### E2E Testing
```bash
bun run test:e2e
```

Test files are located in `src/test/` directory.

## Code Quality

The project uses ESLint for code quality checks:

```bash
bun run lint
```

## Deployment

The production build is fully static and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider
- Docker containers
- Traditional web servers

Steps:
1. Run `bun run build`
2. Deploy the `dist/` directory
3. Configure server for SPA routing (redirect all requests to index.html)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `bun run test`
4. Lint code: `bun run lint`
5. Submit a pull request

## License

Specify your license here (MIT, Apache 2.0, etc.)

## Contact

For inquiries about services or website issues:
- WhatsApp Integration: Available through the website
- Email: [Add email if available]
- Phone: [Add phone if available]

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies Won't Install
```bash
# Clear cache and reinstall
bun install --no-cache
```

### Build Fails
```bash
# Clean build
rm -rf dist node_modules
bun install
bun run build
```

### Tests Failing
Ensure all dependencies are properly installed and environment is correct:
```bash
bun install
bun run test
```
