# Elite Wheels 🏎️

A luxury car showcase and rental app featuring exotic brands like Ferrari, Rolls-Royce, and Lamborghini. Users can browse car models, explore rental options, and book premium driving experiences for automobile enthusiasts and luxury travelers.

## Features

✨ **Elite Fleet Collection** - Discover supercars, luxury sedans, and exotic vehicles  
🎯 **Advanced Filtering** - Filter by brand, category, location, and price range  
🏁 **Premium Experiences** - Track days, scenic drives, and exclusive automotive events  
🚗 **Detailed Car Specs** - Complete specifications, features, and performance data  
📱 **Responsive Design** - Beautiful experience on desktop and mobile  
🎨 **Luxury Aesthetic** - Elegant design with gold accents and sophisticated styling

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Images:** Unsplash API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/elite-wheels.git
cd elite-wheels
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Project Structure

```
├── App.tsx                 # Main application component
├── components/             # Reusable React components
│   ├── ui/                # shadcn/ui components
│   ├── figma/             # Figma-specific components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── FeaturedSection.tsx # Featured content
│   ├── FilterSection.tsx  # Car filtering
│   ├── CarCard.tsx        # Car display card
│   ├── CarModal.tsx       # Car details modal
│   ├── StatsSection.tsx   # Statistics display
│   └── Footer.tsx         # Site footer
├── styles/
│   └── globals.css        # Global styles and Tailwind config
├── guidelines/
│   └── Guidelines.md      # Project guidelines
└── public/                # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## Environment Variables

No environment variables are required for the basic functionality. The app uses mock data and Unsplash images.

For production, you may want to add:
- `NEXT_PUBLIC_ANALYTICS_ID` - Google Analytics
- `NEXT_PUBLIC_API_URL` - Backend API endpoint (when integrating with Supabase)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- 🔐 User authentication and profiles
- 📅 Real-time booking system
- 💳 Payment integration
- 🗺️ Interactive location map
- ⭐ User reviews and ratings
- 📱 Mobile app
- 🔍 AI-powered car recommendations
- 🚗 Virtual car tours
- 📊 Driving analytics dashboard

## License

This project is licensed under the MIT License.

## Acknowledgments

- Car images from [Unsplash](https://unsplash.com)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)