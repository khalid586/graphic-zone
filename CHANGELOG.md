# Changelog

All notable changes to the Graphic Zone project are documented in this file.

## [Unreleased]

### Added
- Comprehensive README.md with full documentation
- Project changelog

## [0.1.0] - 2026-03-02

### Added
- Initial project setup with Next.js 16 and React 19
- TypeScript configuration with ES2022 target
- Tailwind CSS v4 integration
- Complete homepage with Hero, Services, Portfolio, Process, and Contact sections
- Project detail pages with dynamic routing
- Client authentication pages (Login/Signup)
- User profile dashboard with order history
- Payment flow with multiple payment methods
- Responsive navigation with mobile hamburger menu
- Footer with company information
- Comprehensive site configuration
- Custom hooks (useScrollPosition, useBodyScrollLock, useDebouncedValue)
- Service options configuration
- Project portfolio data
- Vitest testing setup with React Testing Library
- Component test suite
- Utility function tests

### Changed
- Migrated from deprecated middleware.ts to proxy.ts for Next.js 16
- Modernized all React patterns (removed React.* namespace imports)
- Converted all interface definitions to type for props
- Changed all default exports to named exports
- Updated TSConfig target from ES2017 to ES2022
- Optimized imports throughout the codebase
- Enhanced mobile responsiveness for contact section
- Improved form layouts with budget field

### Fixed
- Form input state management in contact form
- Mobile menu spacing issues
- Footer alignment of location icon and label
- WhatsApp links updated with correct contact number
- Contact section mobile responsiveness
- Grid layouts and spacing on various screen sizes

### Technical Stack
- **Framework**: Next.js 16.1.6 with App Router
- **UI Library**: React 19.0
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 4.1.14
- **Animation**: Motion (Framer Motion) 12.23.24
- **Components**: Radix UI, shadcn/ui patterns
- **Icons**: Lucide React 0.546.0
- **Testing**: Vitest 4.0.18 with Testing Library
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier

---

## Version Format

### [Version] - YYYY-MM-DD

#### Added
- New features or functionality

#### Changed
- Changes to existing functionality

#### Fixed
- Bug fixes

#### Removed
- Features that have been removed

