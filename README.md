# QA-dash

A modern auction dashboard for vehicle bidding and management.

## Features

- Browse available vehicles with filtering and sorting
- View detailed vehicle information and conditions
- Place and track bids
- Monitor auction status and time remaining
- View past results and won auctions
- Manage account settings and preferences

## Tech Stack

- React
- Vite
- TailwindCSS
- React Router
- Lucide Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/QA-dash.git
cd QA-dash
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `/src/components` - Reusable React components
- `/src/pages` - Page components and routes
- `/src/utils` - Utility functions and helpers
- `/public` - Static assets and resources

## Data Management

The application uses a CSV file (`db.csv`) as a data source for vehicle information. The data is loaded and parsed at runtime, with the following structure:

- Vehicle details (make, model, year, etc.)
- Auction status and bidding information
- Vehicle conditions and specifications
- Location and logistics data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
