# Travel-Themed Portfolio Website

A sleek, professional portfolio website built with React, TypeScript, and Tailwind CSS, featuring a cohesive travel theme with boarding passes, passport stamps, luggage tags, and animated elements.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── images/
│   │   ├── profile-photo.jpg    # Your profile photo (add here)
│   │   └── campus-photos/       # Optional campus photos
│   └── icons/                   # SVG icons (optional)
├── src/
│   ├── components/
│   │   ├── travel/              # Travel-themed components
│   │   │   ├── BoardingPass.tsx
│   │   │   ├── LuggageTag.tsx
│   │   │   ├── PassportStamp.tsx
│   │   │   ├── Cloud.tsx
│   │   │   └── AnimatedClouds.tsx
│   │   ├── Navigation.tsx
│   │   └── TypewriterText.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── CampusRecommendations.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

## 🎨 Design System

### Color Palette (Pastel/Muted)
- **Primary**: Soft sky blue (#A8DADC)
- **Secondary**: Muted terracotta (#E07A5F)
- **Accents**: Pastel lavender (#C9ADA7), soft mint (#95D5B2), cream (#F8F5F0)
- **Background**: Off-white (#FEFEFE)
- **Text**: Soft charcoal (#4A4A4A)

### Travel-Themed Components
- **Boarding Pass**: Used for work experience cards
- **Luggage Tags**: Used for skills and project tags
- **Passport Stamps**: Used for location markers
- **Animated Clouds**: Background element with smooth animations

## 📸 Assets to Add

### Required
1. **Profile Photo**: 
   - Path: `/public/images/profile-photo.jpg`
   - Format: JPG or PNG
   - Recommended size: 400x400px or larger (square format works best)

2. **Hero/Landing Background**: 
   - Path: `/public/images/hero-background.jpg` (or `.png`, `.webp`)
   - Format: JPG, PNG, or WebP
   - Recommended: High-quality image (1920x1080 or larger)
   - **Alternative**: Video background at `/public/videos/hero-background.mp4`
   - **Video formats**: MP4 (recommended), WebM, or MOV
   - **Note**: Currently configured for image background. To use video, uncomment the VideoBackground component in `src/sections/Hero.tsx`

### Optional
3. **Campus Photos**: 
   - Path: `/public/images/campus-photos/`
   - Format: JPG or PNG
   - Can be used in the Campus Recommendations section

4. **3D Models** (Advanced - requires additional setup):
   - If you want to use 3D models (GLB/GLTF), you'll need to:
     - Install `@react-three/fiber` and `@react-three/drei`
     - Create a 3D component wrapper
     - Place files in `/public/models/`
   - **Note**: This is more complex and requires additional dependencies

## ✨ Features

- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ♿ Accessibility considerations
- 🌈 Travel-themed cohesive design
- ⚡ Fast performance with Vite
- 🎨 TypeScript for type safety

## 🛠️ Tech Stack

- **React 19** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for icons

## 📝 Customization

### Update Contact Information
Edit `/src/sections/Contact.tsx` to update:
- Email address
- Phone number
- Location
- Social media links (LinkedIn, GitHub)

### Update Content
- **About Section**: `/src/sections/About.tsx`
- **Experience**: `/src/sections/Experience.tsx`
- **Projects**: `/src/sections/Projects.tsx`
- **Skills**: `/src/sections/Skills.tsx`
- **Campus Recommendations**: `/src/sections/CampusRecommendations.tsx`

### Update Colors
Edit `/tailwind.config.js` to customize the color palette.

## 🚢 Deployment

The site can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Build the project and deploy the `dist` folder.

## 📄 License

This project is open source and available for personal use.
