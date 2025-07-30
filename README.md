# Good Natured Pup - Dog Image Transformation App

A responsive frontend application for transforming dog photos using AI, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Image Upload**: Drag and drop or click to upload dog photos (JPG/PNG, max 10MB)
- **AI Transformation**: Send images to custom REST API for AI-generated transformations
- **Side-by-Side Comparison**: Toggle between original and generated images
- **Download Functionality**: Download transformed images with GNB branding
- **Social Sharing**: Share to Instagram and Facebook with pre-filled hashtags
- **Responsive Design**: Works on all devices (min width 320px)
- **WCAG 2.1 AA Compliant**: Accessible design with proper ARIA labels and keyboard navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API Integration**: Fetch API with multipart/form-data

## Project Structure

```
flora-client/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # Reusable React components
│   ├── UploadForm.tsx     # File upload with validation
│   ├── ImageViewer.tsx    # Image display with toggle
│   ├── DownloadButton.tsx # Image download functionality
│   ├── ShareButtons.tsx   # Social media sharing
│   ├── LoadingSpinner.tsx # Loading indicator
│   └── ErrorMessage.tsx   # Error display component
├── lib/                   # Utility functions
│   └── api.ts            # API integration functions
├── types/                 # TypeScript type definitions
│   └── index.ts          # Component and API types
├── public/               # Static assets
│   └── logo.png          # GNB logo placeholder
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flora-client
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
# Create .env.local file
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration

The app expects a REST API endpoint at `/api/generate` that:

- Accepts `POST` requests with `multipart/form-data`
- Expects an `image` field containing the uploaded file
- Returns JSON response with:
  ```json
  {
    "success": true,
    "data": {
      "imageUrl": "https://example.com/image.jpg",
      "base64Image": "data:image/jpeg;base64,..."
    }
  }
  ```

## Customization

### Brand Colors

The app uses custom GNB brand colors defined in `tailwind.config.js`:

- **Green Palette**: `gnb-green-50` to `gnb-green-900`
- **Beige Palette**: `gnb-beige-50` to `gnb-beige-900`

### Logo

Replace `public/logo.png` with your actual GNB logo. The logo is displayed as an overlay on generated images.

### Social Sharing

Modify hashtags and mentions in `components/ShareButtons.tsx`:
- Default hashtag: `#GoodNaturedPup`
- Default mention: `@goodnaturedbrand`

## Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG 2.1 AA compliant color ratios
- **Semantic HTML**: Proper heading hierarchy and landmarks

## Responsive Design

- **Mobile First**: Designed for 320px minimum width
- **Breakpoints**: xs (320px), sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Layout**: Components adapt to different screen sizes
- **Touch Friendly**: Large touch targets for mobile devices

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Code formatting (recommended)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `out` directory:

```bash
npm run build
npm run export  # If using static export
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL | `http://localhost:3001` |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2024 Good Natured Brand. All rights reserved. 