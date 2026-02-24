# Ramadan Special Website Requirements Document

## 1. Application Overview

### 1.1 Application Name
Ramadan Mubarak

### 1.2 Application Description
A premium-quality, spiritually calming Ramadan-themed website that serves as a peaceful digital space dedicated to the beauty and blessings of Ramadan. The website reflects modern, minimal, elegant, and clean design while providing Islamic spiritual content and Ramadan tracking features.

### 1.3 Core Purpose
To create a serene digital experience that combines modern UI design with Islamic tradition, offering users daily spiritual content, Ramadan progress tracking, and prayer time management in a visually stunning and emotionally resonant interface.

## 2. Design Language & Visual Identity

### 2.1 Overall Feel & Style
- Visual atmosphere: calm Ramadan night with moonlight, stars, and lanterns
- Design approach: blend of modern UI and Islamic tradition
- Aesthetic: luxurious but minimal, peaceful and spiritual
- Signature elements: soft animations, gentle glows, smooth transitions
- Brand identity: modern, minimal, elegant, clean, emotional

### 2.2 Color Palette
- Midnight Blue: #0A0F1F
- Ramadan Purple: #3A2F55
- Emerald Green: #0C4A38
- Gold Accent: #F7D081
- Soft White: #F3F4F6
- Teal: #1BA3A3

### 2.3 Typography
- Headings: elegant Arabic-inspired display font with mild text shadow for glow effect
- Body text: clean sans-serif (Inter or Urbanist)
- Urdu text: crisp and readable font

### 2.4 UI Elements
- Crescent moon icons
- Lantern shapes
- Floating sparkles and star particles
- Rounded cards with glassmorphism effects
- Soft shadows and hover effects
- Soft aurora-style gradients

## 3. Page Structure & Sections

### 3.1 Homepage - Hero Section
**Visual Elements:**
- Glowing crescent moon graphic
- Slow-moving star particles (React component)
- Soft aurora-style gradient background

**Content:**
- Main heading: Ramadan Kareem — A Month of Light & Mercy
- Subheading with spiritual message
- Call-to-action button: Start Your Ramadan Journey

**Animations:**
- Framer Motion animations for smooth entrance effects

### 3.2 Section 1: Spiritual Welcome
- Short text explaining the meaning and significance of Ramadan
- Subtle background pattern
- Clean, minimal layout

### 3.3 Section 2: Daily Quran & Hadith
- Display cards with smooth animations
- Refresh button to load new content
- Elegant presentation of Islamic texts

### 3.4 Section 3: Ramadan Goals
- Grid layout with 4–6 goal cards
- Each goal card shows progress saved in localStorage
- Hover animations on cards
- Visual progress indicators

### 3.5 Section 4: Ramadan Countdown
- Large countdown component displaying time until Ramadan or Eid
- Moon phase icon
- Soft glowing border effect

### 3.6 Section 5: Islamic Reflection Quotes
- Display quotes in both Urdu and English
- Scrolling fade-up animations
- Rotating collection of inspirational quotes

### 3.7 Section 6: Dua of the Day
- Highlighted card with beautiful border design
- Smooth reveal animations
- Featured daily supplication

### 3.8 Section 7: About Author
- Brief introduction about the website creator
- Personal message or motivation behind creating the website
- Contact information or social media links (optional)
- Clean, elegant card design consistent with overall theme

### 3.9 Footer
- Simple, clean design
- Crescent moon icon
- Copyright or attribution text

## 4. Core Features & Components

### 4.1 Quran & Hadith Cards Component
**Layout:**
- Two cards displayed side-by-side on desktop
- Stacked vertically on mobile devices

**Content Display:**
- Arabic text in elegant typography
- Urdu translation
- English translation

**Functionality:**
- Next Verse button to load new content
- Smooth fade transitions between verses

**Important Note:**
- All Quran verses and Hadith must be 100% accurate with zero mistakes
- All translations (Urdu and English) must be verified and completely accurate

### 4.2 Islamic Quote Generator Component
**Content:**
- Random quotes from Quran, Hadith, or Islamic wisdom

**Design:**
- Card with soft glowing border
- Elegant typography

**Functionality:**
- Shuffle button to generate new quote
- Smooth transition animations

### 4.3 Ramadan Tracker Component
**Storage:**
- All data stored in localStorage

**Tracking Features:**
- Fasting days checklist
- Quran reading progress
- Taraweeh prayers tracker
- Charity tracker

**UI Elements:**
- Progress bars for each tracking category
- Reset button to clear all progress
- Visual indicators for completed items

### 4.4 Dua of the Day Component
**Content Display:**
- Arabic dua text
- Transliteration (Roman script)
- Urdu meaning
- English meaning

**Design:**
- Elegant card with gold-accented design
- Clear hierarchy of text elements

### 4.5 Sehri & Iftar Timings Component
**Data Source:**
- Use the timing data from the uploaded image (image.jpeg) showing Ramadan 2026 schedule
- Data is hardcoded into the application based on the image

**Display Format:**
- Table layout showing complete Ramadan schedule
- Columns: Ramadan Date, Gregorian Date, Sehri Time, Iftar Time
- Current day highlighted in the table

**Table Data (extracted from image.jpeg):**
- Ramadan dates from 1st to 30th
- Corresponding Gregorian dates
- Daily Sehri timings
- Daily Iftar timings

**Countdown Timer:**
- Real-time countdown showing: Time left for Sehri or Time left for Iftar
- Timer automatically references the table data based on current date
- Automatic switching between Sehri and Iftar based on current time
- Timer syncs with the hardcoded schedule from the table

**Important Notes:**
- No location input or selection required
- All timing data is pre-populated from image.jpeg
- Table is static and does not require API calls

### 4.6 Moon Mode (Dark/Light Theme Toggle)
**Light Mode:**
- Suhoor sunrise theme with warm, bright colors

**Dark Mode:**
- Deep blue background with golden moonlight accents

**Toggle Control:**
- Switch with moon and sun icons
- Smooth transition between themes

## 5. Special Signature Features

### 5.1 Floating Particles
- Animated particles on hero section
- Subtle, non-distracting movement
- Optimized performance on mobile devices

### 5.2 Daily Reflection Popup
- Special popup with daily spiritual reflection
- Elegant entrance animation
- Responsive sizing for all screen sizes

### 5.3 Ramadan Roadmap Progress Timeline
- Visual timeline showing Ramadan journey progress
- Interactive elements
- Horizontal scroll on mobile, vertical layout on desktop

### 5.4 Ambient Sound Toggle (Optional)
- Gentle ambient sound option
- No autoplay (user-activated only)
- Mute/unmute control

### 5.5 Smooth Transitions
- Smooth scroll behavior throughout the site
- Page transition animations

## 6. Technical Specifications

### 6.1 Technology Stack
- Framework: React (using Vite or Create React App)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Data Storage: localStorage for user progress and preferences

### 6.2 Component Architecture
- Modular component structure
- Reusable UI components
- Clear separation of concerns

### 6.3 Responsive Design
- **Mobile-first design approach**
- **Fully responsive layout across all devices (mobile phones, tablets, laptops, desktops)**
- **Breakpoints:**
  - Mobile: 320px - 640px
  - Tablet: 641px - 1024px
  - Desktop: 1025px and above
- **Adaptive layouts:**
  - Single column layout on mobile
  - Two-column layout on tablets
  - Multi-column grid on desktop
- **Touch-optimized interactions:**
  - Larger tap targets (minimum 44x44px)
  - Swipe gestures for navigation where appropriate
  - Touch-friendly buttons and controls
- **Flexible typography:**
  - Fluid font sizes using clamp() or responsive units
  - Readable text on all screen sizes
- **Responsive images and graphics:**
  - Scaled appropriately for each device
  - Optimized loading for mobile networks
- **Navigation:**
  - Hamburger menu on mobile
  - Full navigation bar on desktop
- **Component adaptations:**
  - Cards stack vertically on mobile
  - Grid layouts adjust column count based on screen size
  - Modals and popups sized appropriately for viewport
  - Table scrolls horizontally on mobile if needed

### 6.4 Performance & Optimization
- Optimized images (SVG format recommended)
- Lazy loading for components
- Efficient state management
- Reduced animations on low-performance devices
- Optimized bundle size for faster mobile loading

### 6.5 SEO & Accessibility
- SEO-friendly page title and meta description
- Semantic HTML structure
- Accessible navigation and interactions
- Proper ARIA labels for screen readers
- Keyboard navigation support

## 7. Animation & Interaction Details

### 7.1 Hero Section Animations
- Fade-in effects for text elements
- Floating animation for moon and stars
- Smooth parallax scrolling (reduced on mobile for performance)

### 7.2 Component Animations
- Card hover effects with subtle lift and glow (tap effects on mobile)
- Fade transitions when switching content
- Progress bar fill animations
- Button hover states with scale and color transitions (touch states on mobile)

### 7.3 Page Transitions
- Smooth scroll behavior
- Section reveal animations on scroll
- Staggered entrance for grid items

## 8. Content Accuracy Requirements

### 8.1 Islamic Content Verification
- All Quran verses must be 100% accurate with zero mistakes in Arabic text
- All Hadith must be authentic and accurately quoted
- All translations (Urdu and English) must be verified and completely accurate
- No errors permitted in transliteration
- Sources must be reliable and authentic

### 8.2 Quality Assurance
- Content must be reviewed for religious accuracy
- Translations must maintain the original meaning and context
- Proper attribution for all Islamic texts

## 9. User Experience Flow

### 9.1 First Visit
- User lands on hero section with welcoming animation
- Smooth scroll to explore sections
- Timing table displays complete Ramadan schedule

### 9.2 Daily Usage
- Quick access to daily Quran verse and Hadith
- Check and update Ramadan trackers
- View countdown to Sehri/Iftar based on table data
- Read Dua of the Day
- Check today's timing in the schedule table

### 9.3 Progress Tracking
- Visual feedback on completed goals
- Persistent data through localStorage
- Easy reset option for new Ramadan season

## 10. Device-Specific Considerations

### 10.1 Mobile Devices (Phones)
- Vertical scrolling optimized
- Single-column layouts
- Larger touch targets
- Simplified navigation with hamburger menu
- Reduced particle effects for performance
- Bottom-aligned action buttons for thumb reach
- Horizontal scroll for timing table if needed

### 10.2 Tablets
- Two-column layouts where appropriate
- Optimized for both portrait and landscape orientations
- Balanced between mobile and desktop experiences
- Touch and hover interactions supported

### 10.3 Desktop/Laptop
- Multi-column grid layouts
- Full navigation bar
- Enhanced animations and effects
- Hover states for interactive elements
- Wider content areas with appropriate max-width constraints
- Full table display without horizontal scroll

### 10.4 Cross-Device Testing
- Test on iOS (iPhone, iPad)
- Test on Android devices (various screen sizes)
- Test on different browsers (Chrome, Safari, Firefox, Edge)
- Verify touch interactions on touch-enabled laptops
- Ensure consistent experience across all platforms

## 11. Reference Files

1. Ramadan timing schedule image: image.jpeg