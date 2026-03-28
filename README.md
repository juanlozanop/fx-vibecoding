# Stock Dashboard

A modern, mobile-responsive stock dashboard built with React and TypeScript. Currently displays NVIDIA (NVDA) stock data with plans to integrate real-time API data.

## Features

- 📱 **Mobile Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 📊 **Stock Data Display** - Shows current price, change, volume, market cap, and key metrics
- 🎨 **Modern UI** - Clean, professional interface with gradient backgrounds
- ⚡ **Fast Performance** - Built with Vite for optimal development and build performance
- 🔄 **Real-time Ready** - Structure in place for API integration

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS3** - Custom responsive styling with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stock-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── data/
│   └── nvda-stock.json    # Dummy stock data
├── App.tsx                # Main application component
├── App.css                # Application styles
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Current Data

The dashboard currently displays dummy data for NVIDIA Corporation (NVDA) including:

- Current stock price
- Daily change (amount and percentage)
- Trading volume
- Market capitalization
- P/E ratio
- Daily high/low
- 52-week high/low
- Last updated timestamp

## Future Enhancements

- [ ] Real-time API integration
- [ ] Multiple stock symbols support
- [ ] Interactive charts and graphs
- [ ] Stock watchlist functionality
- [ ] Historical data visualization
- [ ] Price alerts and notifications
- [ ] Dark/light theme toggle

## Mobile Responsiveness

The dashboard is fully responsive with breakpoints at:
- **Desktop**: > 768px
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.