# Christopher Perez - Personal Website

A modern, sophisticated personal website built with React, Vite, and Tailwind CSS, showcasing leadership, innovation, and service.

## About

This website serves as a digital presence for Christopher Perez - Founder & CEO of Altivum Inc., former Green Beret (18D Special Forces Medical Sergeant), Bronze Star Recipient, host of The Vector Podcast, and author of Beyond the Assessment.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Typography**: Inter, Playfair Display, Montserrat (Google Fonts)
- **Hosting**: AWS Amplify
- **CI/CD**: GitHub Actions

## Features

- Multi-page architecture with sophisticated navigation
- Responsive design optimized for all devices
- Modern typography and color system
- Strategic image placement showcasing professional journey
- Blog section for insights and perspectives
- Podcast page for The Vector Podcast
- Altivum Inc. company showcase
- Contact form and multiple communication channels

## Development

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

This project is configured for deployment on AWS Amplify. The `amplify.yml` file contains the build configuration.

### Amplify Setup

1. Connect your GitHub repository to AWS Amplify
2. Amplify will automatically detect the `amplify.yml` configuration
3. Deploy with automatic CI/CD on every push to main

## Project Structure

```
thechrisgrey/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # Reusable components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Altivum.tsx
│   │   ├── Podcast.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── amplify.yml         # AWS Amplify configuration
└── package.json
```

## Color Palette

- **Dark**: #0A0F1C
- **Navy**: #1A2332
- **Blue**: #2E4A6B
- **Slate**: #4A5A73
- **Silver**: #9BA6B8
- **Gold**: #C5A572

## Contributing

This is a personal website project. For inquiries or suggestions, please use the contact form on the website.

## License

Copyright © 2024 Christopher Perez. All rights reserved.
