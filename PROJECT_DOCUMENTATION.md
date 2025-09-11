# 1000 Madleens to Gaza - Project Documentation

## 🎯 Mission & Purpose

The **1000 Madleens to Gaza** is a global civil society campaign that aims to organize a massive maritime flotilla of 1000 ships from nations worldwide. The project serves multiple interconnected purposes:

### Core Mission

- **Break the Blockade**: Challenge the blockade of Gaza through peaceful, coordinated international maritime action
- **Global Solidarity**: Unite international civil society in peaceful resistance and solidarity with Palestinian people
- **Tribute to Resilience**: Honor the courage and resilience of Palestinians and all who have sailed these waters before carrying hope across the Mediterranean
- **Legal Challenge**: Operate within international maritime law while challenging what the campaign considers violations of international law

### Campaign Goals

1. **Maritime Flotilla Coordination**: Organize 1000 ships from multiple nations to converge and sail together toward Gaza
2. **International Coalition Building**: Build a global network of civil society organizations, activists, and supporters
3. **Peaceful Resistance**: Demonstrate the power of non-violent civil disobedience on an unprecedented scale
4. **Humanitarian Focus**: Bring international attention to the humanitarian crisis and demand open borders

## 🎨 Theme & Visual Identity

### Design Philosophy

The website embodies a **powerful, purposeful, and peaceful** aesthetic that reflects the campaign's serious mission while maintaining hope and solidarity:

- **Color Palette**:

  - Primary: Deep green (#16a34a) representing hope, growth, and peace
  - Secondary: Black for strength and determination
  - Accent: White for clarity and peace
  - Supporting: Grays for balance and professionalism

- **Typography**: DM Sans font family with weights from regular (400) to black (900) for strong hierarchy
- **Visual Language**: Maritime imagery, Palestinian symbolism, and global connectivity
- **Tone**: Professional yet passionate, serious but hopeful

### Content Strategy

- **Multilingual Consideration**: Built with international audience in mind
- **Accessibility**: Clear navigation, readable fonts, and semantic structure
- **Mobile-First**: Responsive design for global accessibility
- **Content-Driven**: Comprehensive information architecture with dedicated sections for different user needs

## 🏗️ Website Architecture

### Structure Overview

The website is designed as a comprehensive single-page application (SPA) with multiple sections:

```
Website Sections:
├── Header Navigation (Fixed)
├── Hero/Mission (Combined section with background image)
├── Goals & Organization
├── Interactive Global Map
├── Live Flotilla Tracker
├── Advocacy Section
├── Roles & Contribution Tabs
├── FAQ Section
├── News Carousel
├── Social Media Integration
├── Legal Disclaimer
└── Footer
```

### Key Features

#### 1. **Content-Driven Architecture**

- All content stored in `content.json` for easy updates without code changes
- Non-technical users can update content through the JSON file
- Comprehensive Content Editing Guide provided

#### 2. **Interactive Map Component**

- Displays global departure points for flotilla ships
- Shows ship counts and organizational status per country
- Click-to-expand details for each location
- Registration links for each participating nation

#### 3. **Live Flotilla Tracker**

- Real-time GPS tracking integration with Global Sumud Flotilla system
- Animated interface with live status indicators and maritime-themed visuals
- Direct link to external tracking system (https://globalsumudflotilla.org/tracker/)
- Features real-time updates, navigation data, and vessel status information

#### 4. **Dynamic News Carousel**

- Auto-advancing news articles with manual controls
- Progress indicators and pause/resume functionality
- Responsive grid layout adapting to screen sizes
- External link handling for news sources

#### 5. **Role-Based Contribution System**

- Tabbed interface for different participant types:
  - Sailors & Crew
  - Navigators & Technical
  - Officials & Coordinators
  - Citizens & Supporters
- Tailored requirements and responsibilities for each role

#### 6. **Social Media Integration**

- Comprehensive social platform links
- Built-in sharing functionality with pre-written campaign messages
- Copy-to-clipboard and email sharing options
- Download links for campaign graphics

## 🛠️ Technical Stack

### Frontend Framework

- **Next.js 15.2.4** with App Router
- **React 19.0.0** with modern hooks and features
- **TypeScript 5** for type safety and developer experience

### Styling & UI

- **Tailwind CSS 4** for utility-first styling
- **Tailwind CSS v4** with new CSS-first approach
- **Framer Motion 12.23.12** for smooth animations and transitions
- **shadcn/ui** component library with Radix UI primitives:
  - Accordion, Button, Card, Input, Tabs, Textarea components
  - Badge and Sonner toast notifications
- **Lucide React** icons with React Icons for additional social media icons

### Development Tools

- **ESLint 9** with Next.js and TypeScript configurations
- **PostCSS** for CSS processing
- **PNPM** as package manager for efficient dependency management

### Performance & Analytics

- **Vercel Analytics** for user behavior tracking
- **Font Optimization** with Google Fonts (DM Sans)
- **Image Optimization** through Next.js built-in features
- **Turbopack** for faster development builds

### Architecture Patterns

- **Component-Based Architecture**: Modular, reusable components
- **Content Separation**: JSON-based content management
- **Type Safety**: Full TypeScript implementation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 💻 Coding Practices & Standards

### Code Organization

#### File Structure

```
thousand-madleens/
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main landing page
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── interactive-map.tsx # Map component
│   ├── news-carousel.tsx   # News section
│   └── [other-components]
├── lib/                    # Utilities and helpers
│   └── utils.ts           # Tailwind merge utilities
├── public/                 # Static assets
└── content.json           # All website content
```

#### Component Architecture

- **Feature-Based Components**: Each major section is a self-contained component
- **UI Component Library**: Consistent design system using shadcn/ui
- **Composition over Inheritance**: Components built through composition
- **Single Responsibility**: Each component has a clear, focused purpose

### Coding Standards

#### TypeScript Implementation

```typescript
// Strict type checking enabled
interface ContentStructure {
  site: SiteConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  // ... other sections
}

// Component props typing
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}
```

#### React Best Practices

- **Functional Components**: All components use function declarations
- **Hooks Usage**: useState, useEffect, and custom hooks where appropriate
- **Performance Optimization**: Framer Motion with proper animation triggers
- **Accessibility**: Semantic HTML and ARIA attributes

#### Styling Approach

- **Utility-First CSS**: Tailwind for rapid development
- **Component Variants**: Class Variance Authority for component styling
- **Responsive Design**: Mobile-first breakpoint system
- **Animation**: Framer Motion for smooth, performant animations

### Development Workflow

#### Scripts Available

```json
{
  "dev": "next dev --turbopack", // Development with Turbopack
  "build": "next build", // Production build
  "start": "next start", // Production server
  "lint": "next lint" // Code linting
}
```

#### Content Management

- **JSON-Based**: All content in `content.json` for easy updates
- **Schema Validation**: Structured content with clear hierarchies
- **Icon Mapping**: Dynamic icon rendering system with type safety
- **Multi-language Ready**: Structure supports internationalization

#### Code Quality

- **ESLint Configuration**: Next.js and TypeScript rules
- **Type Safety**: Full TypeScript coverage
- **Component Testing**: Ready for testing implementation
- **Performance Monitoring**: Vercel Analytics integration

## 🤝 Contributing Guidelines

### Getting Started

#### Prerequisites

- **Node.js** 18.17 or later
- **PNPM** package manager
- **Git** for version control

#### Development Setup

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd thousand-madleens
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Content Updates

#### For Non-Technical Contributors

1. **Locate Content File**: Edit `content.json` in the root directory
2. **Follow the Guide**: Use `CONTENT_EDITING_GUIDE.md` for detailed instructions
3. **Validate Changes**: Use online JSON validators before submitting
4. **Test Locally**: Preview changes in development mode if possible

#### Content Structure Guidelines

- **Maintain JSON Format**: Preserve structure, brackets, and commas
- **Use Double Quotes**: All strings must use `"` not `'`
- **Validate Links**: Ensure all URLs are working and properly formatted
- **Optimize Images**: Use appropriate image sizes and formats
- **Check Accessibility**: Ensure alt text for images and clear descriptions

### Code Contributions

#### Development Standards

- **Follow Existing Patterns**: Match the established code style
- **Component Structure**: Use the existing component architecture
- **TypeScript**: Maintain full type safety
- **Responsive Design**: Ensure all changes work across devices
- **Performance**: Consider animation and loading performance

#### Pull Request Process

1. **Create Feature Branch**: Branch from `main` for new features
2. **Follow Conventions**: Use clear, descriptive commit messages
3. **Test Thoroughly**: Ensure changes don't break existing functionality
4. **Update Documentation**: Include relevant documentation updates
5. **Code Review**: Submit PR for team review

#### Testing Guidelines

- **Manual Testing**: Test across different screen sizes
- **Content Validation**: Verify all content displays correctly
- **Link Testing**: Ensure all external links function properly
- **Performance**: Check for animation smoothness and load times

### Design Contributions

#### Visual Consistency

- **Color Palette**: Stick to the established green/black/white scheme
- **Typography**: Use DM Sans font family with appropriate weights
- **Spacing**: Follow Tailwind spacing conventions
- **Animation**: Maintain smooth, purposeful motion design

#### Asset Guidelines

- **Images**: Optimize for web, provide alt text
- **Icons**: Use Lucide React or React Icons consistently
- **Graphics**: Ensure high quality and appropriate licensing

### Contribution Areas

#### High-Priority Needs

1. **Content Translation**: Multi-language support implementation
2. **Accessibility Improvements**: Enhanced screen reader support
3. **Performance Optimization**: Image optimization and loading improvements
4. **SEO Enhancement**: Meta tags and structured data
5. **Analytics**: Enhanced tracking and user behavior analysis

#### Technical Enhancements

- **Testing Framework**: Unit and integration test implementation
- **CI/CD Pipeline**: Automated testing and deployment
- **Content Management**: Headless CMS integration
- **API Integration**: Dynamic content and form submissions

#### Content & Design

- **Graphic Design**: Campaign materials and visual assets
- **Video Content**: Promotional and educational videos
- **Documentation**: User guides and technical documentation
- **Localization**: Translation and cultural adaptation

### Code Review Criteria

#### Technical Requirements

- [ ] TypeScript compilation without errors
- [ ] ESLint passes without warnings
- [ ] Responsive design tested on multiple devices
- [ ] Performance impact assessed
- [ ] Accessibility guidelines followed

#### Content Requirements

- [ ] JSON structure maintained
- [ ] All links functional and appropriate
- [ ] Images optimized and accessible
- [ ] Text content reviewed for accuracy
- [ ] Multilingual considerations addressed

### Communication

#### Channels

- **Issues**: Use GitHub issues for bug reports and feature requests
- **Discussions**: GitHub discussions for questions and ideas
- **Email**: Contact campaign coordinators for sensitive matters
- **Social Media**: Follow official channels for updates

#### Documentation

- **README.md**: Basic setup and overview information
- **CONTENT_EDITING_GUIDE.md**: Comprehensive content management guide
- **This Document**: Technical and contribution overview
- **Code Comments**: Inline documentation for complex logic

---

## 📋 Quick Reference

### Key Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Run production build
pnpm lint         # Run ESLint
```

### Important Files

- `content.json` - All website content
- `app/page.tsx` - Main landing page component
- `components/` - Reusable UI components
- `CONTENT_EDITING_GUIDE.md` - Content management guide

### External Links

- **Donation**: https://chuffed.org/project/138012-a-thousand-madleens-to-gaza
- **Join Movement**: https://linktr.ee/thousand.madleens
- **Telegram Community**: https://t.me/+zSh_jAhFQZ1iNTNk
- **Ship Registration**: https://cryptpad.fr/form/#/2/form/view/7m7vHUcI3SSjvTUM5Jckhlgta5egIyZIGbYIZN1cbgo/
- **Live Flotilla Tracker**: https://globalsumudflotilla.org/tracker/

### Contact Information

- **Website**: [Current deployment URL]
- **Repository**: thousand-madleens
- **Maintainer**: BalajSaleem

---

_This documentation reflects the current state of the project as of September 2025. For the most up-to-date information, please refer to the repository and official campaign channels._
