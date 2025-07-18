# Vineyard Explorer

A comprehensive React + TypeScript application for visualizing and managing vineyard planting data. This application provides tree views, dashboard analytics, and data export capabilities for vineyard management.

## Features

### 🌱 **Vineyard Dashboard**

- **Statistics Overview**: View total blocks, varietals, clones, and most planted varietal
- **Interactive Charts**:
  - Pie chart showing varietal distribution
  - Bar chart displaying clone count per varietal
- **Data Export**: Export vineyard data to CSV format
- **Responsive Design**: Works on desktop and mobile devices

### 🌳 **Tree Views**

- **Blocks View**: Hierarchical view organized by blocks → varietals → clones
- **Varietals View**: Hierarchical view organized by varietals → clones → blocks
- **Expandable Nodes**: Click to expand/collapse tree sections
- **Export Functionality**: Export specific view data to CSV

### 🎨 **Theme Management**

- **Dark/Light Mode**: Toggle between light and dark themes
- **Persistent Settings**: Theme preference saved in localStorage
- **Material-UI Integration**: Seamless theme switching across all components

### 📊 **Data Processing**

- **Automatic Parsing**: Processes planting entries in format "block.varietal.clone"
- **Statistical Analysis**: Calculates distribution metrics and popular varietals
- **Tree Building**: Constructs hierarchical data structures for visualization

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **UI Library**: Material-UI (MUI)
- **Charts**: Recharts
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── charts/         # Chart components (pie, bar)
│   ├── stat-box/       # Statistics display cards
│   ├── tree-viewer/    # Hierarchical tree display
│   └── iconify/        # Icon components
├── contexts/           # React contexts
│   └── theme-context.tsx  # Theme management
├── data/              # Static data files
│   └── plantings.json # Vineyard planting data
├── hooks/             # Custom React hooks
│   ├── useBlockTreeBuilder.ts
│   ├── useVarietalTreeBuilder.ts
│   └── useTheme.ts
├── pages/             # Page components
│   ├── vineyard-dashboard.tsx
│   ├── blocks-page.tsx
│   └── varietals-page.tsx
├── types/             # TypeScript type definitions
│   └── vineyard.ts
├── utils/             # Utility functions
│   └── vineyard.ts    # Data processing utilities
└── __tests__/         # Test files
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd frontend_assignment/Question_2
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**
   Navigate to `http://localhost:3039` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run test` - Run tests

## Data Format

The application expects vineyard data in the following format:

```json
["blockA.chardonnay.96", "blockA.chardonnay.95", "blockB.pinot-noir.115"]
```

Each entry represents: `block.varietal.clone`

## Key Components

### VineyardDashboard

The main dashboard displaying:

- Summary statistics cards
- Distribution charts
- Export functionality

### TreeViewer

Hierarchical data visualization with:

- Expandable/collapsible nodes
- Two view modes (blocks/varietals)
- Responsive design

### Charts

Data visualization components:

- Pie chart for varietal distribution
- Bar chart for clone counts
- Responsive and interactive

## Testing

The application includes comprehensive tests for:

- Data processing utilities
- Tree building algorithms
- Statistical calculations
- Component rendering

Run tests with:

```bash
npm run test
```

## Customization

### Adding New Data

1. Update `src/data/plantings.json` with new entries
2. Data will be automatically processed and displayed

### Modifying Charts

- Chart configurations in `src/components/charts/charts.tsx`
- Uses Recharts library for customization

### Theme Customization

- Theme settings in `src/theme/` directory
- Material-UI theme system integration

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive Web App features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

## Support

For issues or questions:

1. Check the GitHub issues page
2. Create a new issue with detailed description
3. Include steps to reproduce any bugs

---

Built with ❤️ using React + TypeScript + Material-UI
