import { renderHook, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useBlockTreeBuilder } from '../hooks/useBlockTreeBuilder';
import { Logo } from '../components/logo';

// Create a theme with CSS variables support
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#1976d2',
      dark: '#0d47a1',
    },
    text: {
      primary: '#000000',
    },
  },
});

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </BrowserRouter>
  );

describe('Required Tests', () => {
  // Unit test for a tree hook
  it('should build block tree using hook', () => {
    const { result } = renderHook(() => useBlockTreeBuilder());

    expect(result.current).toBeInstanceOf(Array);
    expect(result.current.length).toBeGreaterThan(0);

    const firstBlock = result.current[0];
    expect(firstBlock).toHaveProperty('block');
    expect(firstBlock).toHaveProperty('varietals');
    expect(Array.isArray(firstBlock.varietals)).toBe(true);
  });

  // Render/snapshot test for a component
  it('should render Logo component snapshot', () => {
    const { container } = renderWithProviders(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
