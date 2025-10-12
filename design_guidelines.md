# Design Guidelines: National Steel & Alloys Website

## Design Approach
**Reference-Based Design** inspired by the industrial metal sector, specifically mirroring the structure of newarisemetal.com with a modern, clean, semi-industrial aesthetic that reflects the professional steel and alloys industry.

## Core Design Principles
- **Industrial Professionalism**: Clean, authoritative design that conveys quality and reliability in metal manufacturing
- **Visual Clarity**: Strong hierarchy with bold typography and clear product categorization
- **Trust & Credibility**: Professional layout with prominent company credentials (GST, CEO info, contact details)

## Color Palette

### Primary Colors
- **Primary Accent**: Yellow/Gold `#FFD200` - Used for CTAs, highlights, and brand elements
- **Blackish**: `#0B0B0B` - Primary text, headers, and dark backgrounds
- **Neutral Background**: `#FFFFFF` - Clean white for main content areas

### Color Application
- **NO BLUE** anywhere in the design
- Yellow used strategically for buttons, hover states, and accent borders
- Black for navigation bars, footer, and strong typography
- White backgrounds for product cards and content sections
- High contrast yellow/black combinations for CTAs to ensure visibility

## Typography

### Font Strategy
- **Headings**: Bold, modern sans-serif (Inter, Outfit, or Poppins) - Large hero heading (text-5xl to text-7xl)
- **Body Text**: Clean, readable sans-serif for professional content
- **Scale**: 
  - Hero: text-5xl/6xl/7xl (responsive)
  - Section Headers: text-3xl/4xl
  - Card Titles: text-xl/2xl
  - Body: text-base/lg

## Layout System

### Spacing Primitives
Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Section padding: py-16, py-20, py-24
- Card spacing: p-6, p-8
- Element gaps: gap-6, gap-8, gap-12

### Grid Structure
- **Products Grid**: 1 column (mobile) → 2 columns (tablet) → 3-4 columns (desktop)
- **Max Container Width**: max-w-7xl for main content
- **Breakpoints**: 
  - Mobile: 360px (base)
  - Tablet: 768px (md:)
  - Desktop: 1366px (lg:), 1920px (xl:)

## Component Library

### Navigation
- **Desktop**: Horizontal nav with dropdown menus for product categories, yellow underline on active/hover
- **Mobile**: Hamburger menu (sticky top), slides from right, dark background with yellow accents
- **Logo**: Left-aligned, uses assets/logo.png, links to home
- **Pages**: Home, About, Products, Services, Projects/Gallery, Downloads (if exists), Contact

### Hero Section
- **Large Background Image**: Full-width hero image (assets/hero.jpg) with dark overlay
- **Typography**: Large bold heading (text-5xl/6xl/7xl), subheading describing company
- **CTAs**: Primary yellow button ("Get Quote") + Secondary outline button ("View Products") with blurred background
- **Height**: min-h-[600px] to min-h-screen on desktop

### Product Cards
- **Layout**: White background cards with subtle shadow (shadow-md), rounded corners (rounded-lg)
- **Image**: Product image at top, aspect-ratio-square or 4:3
- **Content**: Category label (yellow badge), product title, short description
- **Hover Effect**: Lift effect (translate-y-[-4px]), yellow border appears, shadow intensifies
- **CTA**: "View Details" link in yellow text with arrow icon

### Gallery/Slider
- **Rotating Carousel**: Auto-play product images (5-second intervals)
- **Controls**: Arrow navigation (yellow), dot indicators (yellow active state)
- **Behavior**: Pause on hover, swipe-enabled on mobile
- **Images**: Local from assets/ folder with descriptive alt text

### Contact Form
- **Layout**: 2-column on desktop (form left, company info right), stacked on mobile
- **Fields**: Name, Email, Phone, Message (textarea)
- **Validation**: Client-side with yellow error states, green success states
- **Submit Button**: Full-width yellow button with loading state
- **Success**: Toast/modal notification (yellow theme)

### Footer
- **Background**: Black (#0B0B0B) with white text
- **Layout**: Multi-column grid with company info, quick links, contact details
- **Company Details**: 
  - Name: NATIONAL STEEL & ALLOYS
  - GST: 27AJJPN4917B2Z9
  - CEO: Champak Sain
  - Mobile: 9769339987, Tel: 022 6743 6635
  - Email: nationalstainless@yahoo.com
  - Address: 45/49, Gulam Mohammad Building, Mumbai-400 004
- **Accent**: Yellow divider lines, yellow hover states on links

## Responsive Behavior

### Mobile (360px - 767px)
- Single column layouts
- Stacked navigation (hamburger)
- Product cards full-width
- Hero text size reduced (text-4xl)
- Contact form stacked vertically
- Touch-optimized button sizes (min 44px)

### Tablet (768px - 1365px)
- 2-column product grids
- Horizontal navigation appears
- Larger hero with medium text (text-5xl)
- Side-by-side contact layout begins

### Desktop (1366px+)
- 3-4 column product grids
- Full navigation with dropdowns
- Large hero text (text-6xl/7xl)
- Sticky contact CTA on scroll
- Hover effects fully enabled

## Accessibility

### Semantic Structure
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on navigation ("Main Navigation")
- Form labels visible and associated with inputs
- Alt text on all images: "Stainless steel pipe - NATIONAL STEEL & ALLOYS"

### Color Contrast
- Yellow (#FFD200) on black meets WCAG AA standards
- White text on black backgrounds
- Ensure yellow CTAs have sufficient contrast (use darker yellow `#E6BD00` if needed)

## Images

### Required Images (Local - public/assets/)
1. **Logo**: `logo.png` - Yellow/black company logo (provided)
2. **Hero Image**: `hero.jpg` - Industrial metal manufacturing scene, welding, or steel products
3. **Product Images**: 
   - `stainless-steel-pipes.jpg` - Stainless steel pipes/tubes
   - `alloy-steel-plates.jpg` - Alloy steel plates
   - `carbon-steel-bars.jpg` - Carbon steel round bars
   - `mild-steel-sheets.jpg` - Mild steel sheets
   - `product-gallery-1.jpg to product-gallery-6.jpg` - Various product shots for slider
4. **About/Services**: `factory.jpg`, `quality-control.jpg`, `warehouse.jpg`

### Image Treatment
- Hero: Dark overlay (bg-black/50) for text readability
- Product cards: Clean white backgrounds or minimal product shots
- Gallery: High-quality product photography with consistent lighting

## Animations

**Use Sparingly** - Only where they enhance UX:
- Smooth scroll to top on page navigation
- Hover lift on product cards (transform transition-300)
- Gallery slide transitions (fade or slide, 500ms)
- Mobile menu slide-in (300ms ease)
- Form field focus states (border color transition)

## Content Strategy

- **Paraphrased Professional Copy**: DO NOT copy reference site text verbatim
- **Product Descriptions**: Technical but accessible language for steel grades
- **Trust Indicators**: Prominently display GST number, CEO name, contact details
- **Clear CTAs**: "Request Quote", "View Products", "Contact Us", "Download Catalog"

---

**Design Philosophy**: Create a professional, trustworthy digital presence for National Steel & Alloys that balances industrial credibility with modern web design, using bold yellow accents against clean black/white foundations to stand out in the metal industry.