import type { ButtonBaseProps } from '@mui/material/ButtonBase';

import { useCallback } from 'react';

import ButtonBase from '@mui/material/ButtonBase';
import { useColorScheme } from '@mui/material/styles';

import { Iconify } from '../iconify';
import { useVineyardTheme } from '../../contexts/theme-context';

// ----------------------------------------------------------------------

export type ThemeSwitcherProps = ButtonBaseProps & {
  sx?: ButtonBaseProps['sx'];
};

export function ThemeSwitcher({ sx, ...other }: ThemeSwitcherProps) {
  const { mode, toggleMode } = useVineyardTheme();
  const { setColorScheme } = useColorScheme();

  const handleToggle = useCallback(() => {
    toggleMode();
    const newMode = mode === 'light' ? 'dark' : 'light';
    setColorScheme(newMode);
  }, [mode, toggleMode, setColorScheme]);

  return (
    <ButtonBase
      disableRipple
      onClick={handleToggle}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      sx={[
        (theme) => ({
          p: 0.5,
          width: 40,
          height: 40,
          borderRadius: 1,
          color: mode === 'light' ? '#FFB347' : '#87CEEB',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: theme.vars.palette.action.hover,
            transform: 'scale(1.1)',
            '& .theme-icon': {
              transform: 'rotate(180deg)',
            },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify
        icon={mode === 'light' ? 'solar:sun-bold-duotone' : 'solar:moon-bold-duotone'}
        width={22}
        height={22}
        className="theme-icon"
        sx={{
          transition: 'transform 0.3s ease-in-out',
        }}
      />
    </ButtonBase>
  );
}
