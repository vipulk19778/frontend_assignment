# Vineyard Explorer - Frontend Assignment Question 2

A comprehensive React + TypeScript application for visualizing and managing vineyard planting data. This application serves as a complete vineyard management dashboard with tree views, analytics, and data export capabilities.

## 🎯 Assignment Overview

This project demonstrates modern React development practices with TypeScript, Material-UI theming, data visualization, and comprehensive testing. The application processes vineyard planting data and provides multiple views for analysis and management.

## ✨ Features

### 🌱 **Vineyard Dashboard**

- **Statistics Overview**: Real-time statistics showing total blocks, varietals, clones, and most planted varietal
- **Interactive Charts**:
  - Pie chart for varietal distribution with hover effects
  - Bar chart displaying clone count per varietal
  - Responsive chart layouts for mobile devices
- **Data Export**: One-click CSV export functionality for all vineyard data
- **Responsive Design**: Fully responsive layout working on desktop, tablet, and mobile

### 🌳 **Tree Views**

- **Blocks View**: Hierarchical tree organized by blocks → varietals → clones
- **Varietals View**: Alternative hierarchy organized by varietals → clones → blocks
- **Interactive Navigation**: Expandable/collapsible tree nodes with smooth animations
- **Export Functionality**: Export specific view data to CSV format
- **Search & Filter**: Quick access to specific blocks or varietals

### 🎨 **Theme Management**

- **Dark/Light Mode**: Toggle between light and dark themes with custom VE branding
- **Persistent Settings**: Theme preference automatically saved in localStorage
- **Material-UI Integration**: Seamless theme switching across all components
- **Custom Logo**: Adaptive VE (Vineyard Explorer) logo with theme-aware colors

### 📊 **Data Processing**

- **Automatic Parsing**: Intelligent processing of planting entries in format "block.varietal.clone"
- **Statistical Analysis**: Real-time calculation of distribution metrics and popular varietals
- **Tree Building**: Dynamic construction of hierarchical data structures for visualization
- **Data Validation**: Robust error handling for malformed data entries

## 🛠 Technology Stack

- **Frontend**: React 19 + TypeScript
- **UI Library**: Material-UI (MUI) v7 with CSS variables support
- **Charts**: ApexCharts (react-apexcharts) for interactive data visualization
- **Routing**: React Router v7
- **Build Tool**: Vite with TypeScript support
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier with TypeScript rules
- **Icons**: Iconify for comprehensive icon library

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── charts/             # ApexCharts components (pie, bar charts)
│   ├── label/              # Label components with theming support
│   ├── logo/               # Custom VE logo component with dark/light mode
│   ├── stat-box/           # Statistics display cards
│   ├── tree-viewer/        # Hierarchical tree display component
│   ├── iconify/            # Icon management and Iconify integration
│   ├── svg-color/          # SVG color theming utilities
│   └── theme-switcher/     # Dark/light mode toggle component
├── contexts/               # React contexts for state management
│   └── theme-context.tsx   # Global theme state management
├── data/                   # Static data files
│   └── plantings.json      # Vineyard planting data (array format)
├── hooks/                  # Custom React hooks
│   ├── useBlockTreeBuilder.ts     # Hook for building block-based tree structure
│   ├── useVarietalTreeBuilder.ts  # Hook for building varietal-based tree structure
│   └── useTheme.ts         # Theme management hook
├── layouts/                # Layout components and navigation
│   ├── auth/              # Authentication layout (placeholder)
│   ├── dashboard/         # Main dashboard layout with sidebar
│   └── components/        # Layout-specific components
├── pages/                  # Page components for different routes
│   ├── vineyard-dashboard.tsx  # Main dashboard with stats and charts
│   ├── blocks-page.tsx         # Block tree view page
│   ├── varietals-page.tsx      # Varietal tree view page
│   ├── about.tsx               # About page
│   └── contact.tsx             # Contact page
├── routes/                 # Routing configuration and components
│   ├── sections.tsx        # Route definitions
│   └── components/         # Router-related components
├── sections/               # Page sections and views
│   └── error/             # Error handling components
├── theme/                  # Material-UI theme configuration
│   ├── create-theme.ts    # Theme factory with dark/light modes
│   ├── theme-provider.tsx # Theme context provider
│   └── types.ts           # Theme-related TypeScript types
├── types/                  # TypeScript type definitions
│   └── vineyard.ts        # Vineyard-specific types and interfaces
├── utils/                  # Utility functions
│   └── vineyard.ts        # Data processing and CSV export utilities
└── __tests__/              # Test files and configurations
    ├── required-tests.test.tsx        # Main test suite
    └── __snapshots__/                 # Jest snapshots
        └── required-tests.test.tsx.snap
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 20+ (as specified in package.json engines)
- **npm** or **yarn**: Package manager (yarn preferred as per packageManager config)
- **Git**: For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd frontend_assignment/Question_2
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3039` (or the port shown in terminal)

### Available Scripts

#### Development

- `npm run dev` - Start development server with hot reload
- `npm run tsc:watch` - Run TypeScript compiler in watch mode
- `npm run tsc:dev` - Run dev server and TypeScript watch together

#### Production

- `npm run build` - Build for production (includes TypeScript compilation)
- `npm run start` - Preview production build locally

#### Testing

- `npm run test` - Run Jest test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage reports

#### Code Quality

- `npm run lint` - Run ESLint on TypeScript/React files
- `npm run lint:fix` - Automatically fix ESLint issues
- `npm run fm:check` - Check Prettier formatting
- `npm run fm:fix` - Fix Prettier formatting issues
- `npm run fix:all` - Run both lint:fix and fm:fix

#### Utilities

- `npm run clean` - Clean node_modules and build directories
- `npm run re:dev` - Clean, reinstall, and start development
- `npm run re:build` - Clean, reinstall, and build for production

## 📊 Data Format & Processing

### Input Data Structure

The application processes vineyard planting data in the following format:

```json
["blockA.chardonnay.96", "blockA.chardonnay.95", "blockB.pinot-noir.115"]
```

Each entry represents: `block.varietal.clone`

### Data Processing Pipeline

1. **Parsing**: Each string is split by '.' to extract block, varietal, and clone information
2. **Validation**: Entries are validated for proper format (3 parts separated by dots)
3. **Aggregation**: Data is grouped and counted for statistical analysis
4. **Tree Building**: Hierarchical structures are created for both block and varietal views

### Supported Export Formats

- **CSV Export**: All data can be exported to CSV format
- **Statistical Reports**: Summary statistics with distribution metrics
- **Tree Data**: Hierarchical data structures for external processing

## 🧪 Testing

### Test Suite Overview

The application includes comprehensive testing using Jest and React Testing Library:

#### Test Files

- `src/__tests__/required-tests.test.tsx` - Main test suite
- `src/__tests__/__snapshots__/` - Jest snapshots for UI components

#### Test Coverage

1. **Unit Tests for Custom Hooks**:

   - `useBlockTreeBuilder` - Tests block-based tree construction
   - `useVarietalTreeBuilder` - Tests varietal-based tree construction
   - Data processing and validation logic

2. **Component Snapshot Tests**:

   - `Logo` component - Tests custom VE logo rendering
   - Theme integration - Tests dark/light mode compatibility
   - UI consistency - Ensures consistent rendering across updates

3. **Integration Tests**:
   - Theme switching functionality
   - Data export capabilities
   - Navigation and routing

#### Test Configuration

- **Environment**: jsdom for DOM simulation
- **Setup**: Custom test setup with Material-UI theme provider
- **Mocking**: Automatic mocking of external dependencies
- **Coverage**: Comprehensive coverage collection excluding type definitions

#### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode (for development)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

#### Test Results

- ✅ **Hook Tests**: Validates tree building algorithms and data processing
- ✅ **Snapshot Tests**: Ensures UI consistency with CSS variables support
- ✅ **Integration Tests**: Validates theme switching and component interactions

### Test Implementation Details

#### Hook Testing Example

```typescript
describe('useBlockTreeBuilder', () => {
  it('should build block tree using hook', () => {
    const { result } = renderHook(() => useBlockTreeBuilder());

    expect(result.current).toBeInstanceOf(Array);
    expect(result.current.length).toBeGreaterThan(0);

    const firstBlock = result.current[0];
    expect(firstBlock).toHaveProperty('block');
    expect(firstBlock).toHaveProperty('varietals');
    expect(Array.isArray(firstBlock.varietals)).toBe(true);
  });
});
```

#### Snapshot Testing Example

```typescript
describe('Logo Component', () => {
  it('should render Logo component snapshot', () => {
    const { container } = renderWithProviders(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

## 🔧 Key Components

### VineyardDashboard

The main dashboard component featuring:

- **Statistics Cards**: Real-time metrics display
- **Interactive Charts**: Pie and bar charts with hover effects
- **Export Functionality**: CSV download capabilities
- **Responsive Layout**: Mobile-first design approach

### TreeViewer

Hierarchical data visualization component:

- **Expandable Nodes**: Click to expand/collapse tree sections
- **Dual View Modes**: Toggle between blocks and varietals views
- **Search Integration**: Filter nodes by name or type
- **Performance Optimized**: Virtual scrolling for large datasets

### Logo Component

Custom VE (Vineyard Explorer) logo:

- **Adaptive Theming**: Automatic color adjustment for dark/light modes
- **SVG-Based**: Scalable vector graphics for crisp rendering
- **Theme Integration**: Uses Material-UI palette colors
- **CSS Variables Support**: Compatible with both theme modes and testing

### Charts Component

Data visualization using ApexCharts:

- **Pie Chart**: Varietal distribution with interactive legends
- **Bar Chart**: Clone counts with sortable data
- **Responsive Design**: Automatic resizing for mobile devices
- **Export Options**: Built-in chart export functionality

### Theme System

Comprehensive theming solution:

- **Material-UI Integration**: Full MUI v7 compatibility
- **CSS Variables**: Modern CSS custom properties support
- **Dark/Light Modes**: Automatic OS preference detection
- **Persistent Storage**: Theme preference saved in localStorage

## ⚙️ Configuration

### Build Configuration

- **Vite**: Modern build tool with TypeScript support
- **Babel**: JavaScript/TypeScript transformation
- **ESLint**: Code linting with TypeScript rules
- **Prettier**: Code formatting with consistent style rules

### Environment Configuration

```json
{
  "engines": { "node": ">=20" },
  "packageManager": "yarn@1.22.22"
}
```

### TypeScript Configuration

- **Strict Mode**: Full TypeScript strict checking enabled
- **Path Aliases**: `src/*` and `@/*` import paths configured
- **Module Resolution**: ESNext modules with bundler resolution

## 🎨 Customization

### Adding New Data

1. **Update Data File**: Modify `src/data/plantings.json` with new entries
2. **Format**: Ensure entries follow `block.varietal.clone` format
3. **Automatic Processing**: Data will be automatically processed and displayed
4. **Validation**: Invalid entries will be logged and filtered out

### Modifying Charts

- **Chart Configurations**: Located in `src/components/charts/charts.tsx`
- **Chart Library**: Uses ApexCharts with React wrapper
- **Customization Options**: Colors, animations, legends, and tooltips
- **Data Binding**: Automatic data updates when underlying data changes

### Theme Customization

- **Theme Files**: Located in `src/theme/` directory
- **Material-UI System**: Full MUI v7 theming support
- **CSS Variables**: Modern CSS custom properties integration
- **Color Schemes**: Easy customization of light/dark mode palettes

### Component Styling

- **Styled Components**: Material-UI styled system
- **CSS-in-JS**: Emotion-based styling solution
- **Theme Integration**: Automatic theme color and spacing
- **Responsive Design**: Built-in breakpoint management

## 🌐 Browser Support

### Supported Browsers

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

### Progressive Web App Features

- **Responsive Design**: Mobile-first approach
- **Touch Gestures**: Swipe and tap interactions
- **Performance**: Optimized loading and rendering
- **Accessibility**: WCAG 2.1 compliance

## 📈 Performance

### Optimization Features

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Lazy Loading**: Component-level lazy loading
- **Bundle Analysis**: Webpack bundle analyzer integration

### Development Features

- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Compile-time error checking
- **ESLint**: Real-time code quality feedback
- **Prettier**: Automatic code formatting

## 🚀 Deployment

### Production Build

```bash
npm run build
```

The build process:

1. **TypeScript Compilation**: Type checking and compilation
2. **Vite Build**: Optimized production bundle
3. **Asset Optimization**: Image and font optimization
4. **Code Minification**: JavaScript and CSS minification

### Build Output

- `dist/` directory contains production-ready files
- Static assets optimized for CDN deployment
- Source maps for debugging in production

### Deployment Platforms

- **Vercel**: Zero-config deployment (vercel.json included)
- **Netlify**: Static site deployment
- **GitHub Pages**: Direct repository deployment
- **Custom Server**: Traditional server deployment

## 🤝 Development Guidelines

### Code Standards

- **TypeScript**: All components must be strongly typed
- **ESLint**: Follow configured linting rules
- **Prettier**: Use consistent code formatting
- **Comments**: Document complex logic and component APIs

### Component Development

- **Functional Components**: Use React hooks instead of classes
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Props Interface**: Define TypeScript interfaces for all props
- **Error Boundaries**: Implement error handling for robustness

### Testing Guidelines

- **Unit Tests**: Test individual functions and hooks
- **Component Tests**: Test component rendering and interactions
- **Integration Tests**: Test feature workflows
- **Snapshot Tests**: Maintain UI consistency

## 📚 Contributing

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** from `development`
4. **Make your changes** with appropriate tests
5. **Run the test suite** to ensure nothing breaks
6. **Submit a pull request** with detailed description

### Pull Request Process

1. **Code Review**: All changes must be reviewed
2. **Tests**: New features must include tests
3. **Documentation**: Update README for significant changes
4. **TypeScript**: Maintain strict type checking
5. **Performance**: Consider performance implications

### Code Review Checklist

- [ ] TypeScript compilation without errors
- [ ] All tests pass
- [ ] ESLint rules followed
- [ ] Prettier formatting applied
- [ ] Component props properly typed
- [ ] Responsive design maintained
- [ ] Accessibility considerations addressed

## 📄 License

MIT License - see LICENSE file for details

This project is open source and available under the MIT License.

## 🆘 Support & Troubleshooting

### Common Issues

#### Build Errors

- **TypeScript Errors**: Run `npm run tsc:check` for detailed error messages
- **Dependency Issues**: Try `npm run clean` followed by `npm install`
- **Port Conflicts**: Vite will automatically use next available port

#### Development Issues

- **Hot Reload Not Working**: Check Vite configuration and restart dev server
- **Theme Not Switching**: Clear localStorage and refresh browser
- **Charts Not Rendering**: Verify data format and ApexCharts compatibility

### Getting Help

1. **GitHub Issues**: Check existing issues or create new one
2. **Documentation**: Review this README and inline code comments
3. **Community**: Join discussions in repository discussions section

### Reporting Bugs

When reporting bugs, please include:

- **Environment**: Node.js version, browser, operating system
- **Steps to Reproduce**: Detailed steps to recreate the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Screenshots**: Visual evidence if applicable
- **Console Errors**: Any error messages in browser console

---

**Built with ❤️ using React + TypeScript + Material-UI**

_This project demonstrates modern React development practices with comprehensive testing, theming, and data visualization capabilities._
