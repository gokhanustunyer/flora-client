# 🐕 Flora Client - AI Dog Photo Transformation

<div align="center">

**Transform your pup's photos with the power of AI**

*A modern, responsive web application that uses artificial intelligence to create stunning transformations of dog photos with Good Natured Brand styling.*

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-green?style=flat)](https://www.w3.org/WAI/WCAG21/quickref/)

[✨ Live Demo](#) • [📖 Documentation](#installation) • [🤝 Contributing](#contributing)

</div>

---

## 🎯 Overview

Flora Client is a sophisticated frontend application that leverages AI technology to transform dog photos with Good Natured Brand's signature styling. Built with modern web technologies, it offers a seamless, accessible, and delightful user experience across all devices.

### ✨ Key Features

- **🎨 AI-Powered Transformations** - Advanced AI processing creates stunning visual transformations
- **📱 Responsive Design** - Optimized for all devices with mobile-first approach (320px+)
- **♿ Accessibility First** - WCAG 2.1 AA compliant with full keyboard navigation
- **🖼️ Side-by-Side Comparison** - Interactive before/after image viewer
- **📥 Smart Upload** - Drag & drop with comprehensive file validation
- **📲 Social Sharing** - One-click sharing to Instagram and Facebook
- **💾 Download & Branding** - Download transformed images with GNB logo overlay
- **🎭 Brand Integration** - Custom Good Natured Brand color palette and styling

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.3](https://www.typescriptlang.org/) with strict mode
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom brand colors
- **State Management**: React Hooks with TypeScript
- **Icons**: Heroicons (embedded SVGs)

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript strict mode
- **PostCSS**: For Tailwind CSS processing
- **File Validation**: Custom image validation with size/type checking

### API Integration
- **HTTP Client**: Native Fetch API
- **Data Format**: multipart/form-data for uploads
- **Response Format**: JSON with typed interfaces
- **Error Handling**: Comprehensive error boundaries

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/flora-client.git
   cd flora-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment (optional)**
   ```bash
   # Create .env.local for custom API endpoint
   echo "NEXT_PUBLIC_API_BASE_URL=https://your-api-endpoint.com" > .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
flora-client/
├── 📱 app/                     # Next.js App Router
│   ├── globals.css             # Global styles & Tailwind imports
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main application page
├── 🧩 components/              # Reusable React components
│   ├── UploadForm.tsx          # File upload with drag & drop
│   ├── ImageViewer.tsx         # Side-by-side image comparison
│   ├── DownloadButton.tsx      # Download with branding overlay
│   ├── ShareButtons.tsx        # Social media sharing
│   ├── LoadingSpinner.tsx      # Loading states
│   └── ErrorMessage.tsx        # Error handling UI
├── 🔧 lib/                     # Utility functions
│   └── api.ts                  # API client & validation
├── 🏷️ types/                   # TypeScript definitions
│   └── index.ts                # Component & API interfaces
├── 🎨 public/                  # Static assets
│   └── logo.png                # GNB logo for branding
├── ⚙️ Configuration files
│   ├── next.config.js          # Next.js configuration
│   ├── tailwind.config.js      # Custom colors & themes
│   ├── tsconfig.json           # TypeScript settings
│   └── package.json            # Dependencies & scripts
```

---

## 🔌 API Integration

The application integrates with a REST API for AI image processing:

### Endpoint
```
POST https://flora-backend-five.vercel.app/api/v1/generate
```

### Request Format
```typescript
// multipart/form-data
FormData {
  image: File // JPG, PNG, WebP, BMP (max 10MB)
}
```

### Response Format
```typescript
interface ApiResponse {
  success: boolean;
  data?: {
    imageUrl?: string;        // Public URL to generated image
    base64Image?: string;     // Base64 encoded image data
  };
  error?: string;             // Error message if failed
}
```

### File Validation
- **Accepted formats**: JPG, JPEG, PNG, WebP, BMP
- **Maximum size**: 10MB
- **Client-side validation**: Type and size checking before upload

---

## 🎨 Customization

### Brand Colors

The application uses a custom color palette defined in `tailwind.config.js`:

```javascript
// Good Natured Brand Green Palette
'gnb-green': {
  50: '#f0f9f4',   // Light backgrounds
  600: '#2d7d51',  // Primary buttons
  700: '#276442',  // Hover states
}

// Good Natured Brand Beige Palette  
'gnb-beige': {
  50: '#fefefe',   // Alternative backgrounds
  500: '#e2d4c2',  // Accent colors
}
```

### Logo & Branding

1. **Replace Logo**: Update `public/logo.png` with your brand logo
2. **Modify Overlay**: Edit logo positioning in `ImageViewer.tsx`
3. **Update Colors**: Customize color palette in `tailwind.config.js`

### Social Sharing

Configure sharing parameters in `components/ShareButtons.tsx`:

```typescript
const defaultHashtag = '#GoodNaturedPup';
const defaultMention = '@goodnaturedbrand';
```

---

## ♿ Accessibility Features

Our commitment to inclusivity includes:

- **🎯 WCAG 2.1 AA Compliance**: Meets accessibility standards
- **⌨️ Keyboard Navigation**: Full keyboard accessibility
- **🔊 Screen Reader Support**: Proper ARIA labels and semantic HTML
- **🎭 Focus Management**: Clear focus indicators and logical tab order
- **🌈 Color Contrast**: Sufficient contrast ratios for all text
- **📱 Touch Targets**: Minimum 44px touch targets for mobile

---

## 📱 Responsive Design

### Breakpoint Strategy
```css
/* Mobile First Approach */
xs:  320px+  /* Extra small devices */
sm:  640px+  /* Small devices */
md:  768px+  /* Medium devices */
lg:  1024px+ /* Large devices */
xl:  1280px+ /* Extra large devices */
```

### Key Features
- **Adaptive Layouts**: Components resize smoothly across breakpoints
- **Touch-Friendly**: Large buttons and touch targets on mobile
- **Image Optimization**: Responsive images with proper aspect ratios
- **Typography Scaling**: Fluid typography that adapts to screen size

---

## 🔧 Development

### Available Scripts

```bash
npm run dev     # Start development server with hot reload
npm run build   # Build optimized production bundle
npm run start   # Start production server
npm run lint    # Run ESLint for code quality
```

### Code Quality Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended rules + custom configurations
- **Component Architecture**: Modular, reusable components
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Performance**: Optimized images, code splitting, and caching

### Development Workflow

1. **Feature Development**: Create feature branches from `main`
2. **Code Review**: All changes require pull request review
3. **Testing**: Manual testing across devices and accessibility tools
4. **Type Safety**: All components and APIs fully typed

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git push origin main
   ```

2. **Deploy with Vercel**
   - Connect your GitHub repository to Vercel
   - Configure environment variables if needed
   - Deploy automatically on every push

### Alternative Platforms

For other hosting platforms:

```bash
# Build the application
npm run build

# The build output is in the `.next` directory
# Deploy the entire project directory including .next/
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL | `https://flora-backend-five.vercel.app` |

---

## 🌐 Browser Support

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅  
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+ ✅

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

1. **Fork & Clone**
   ```bash
   git clone https://github.com/your-username/flora-client.git
   cd flora-client
   npm install
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow existing code style and patterns
   - Add TypeScript types for new features
   - Test across different devices and browsers
   - Ensure accessibility compliance

4. **Submit Pull Request**
   - Provide clear description of changes
   - Include screenshots for UI changes
   - Reference any related issues

### Contribution Guidelines

- **Code Style**: Follow existing TypeScript and React patterns
- **Commits**: Use conventional commit messages
- **Documentation**: Update README for significant changes
- **Testing**: Ensure all features work across supported browsers

---

## 📄 License

© 2025 Good Natured Brand. All rights reserved.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework  
- **Heroicons** - For the beautiful icon set
- **Vercel** - For seamless deployment platform

---

<div align="center">

**Built with ❤️ by the Flora Team**

[⭐ Star this repo](https://github.com/your-username/flora-client) • [🐛 Report Bug](https://github.com/your-username/flora-client/issues) • [💡 Request Feature](https://github.com/your-username/flora-client/issues)

</div>