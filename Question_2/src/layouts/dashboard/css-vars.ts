import type { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function dashboardLayoutVars(theme: Theme) {
  return {
    '--layout-transition-easing': 'linear',
    '--layout-transition-duration': '120ms',
    '--layout-nav-vertical-width': '300px',
    '--layout-nav-mobile-width': '300px',
    '--layout-nav-zIndex': '1000',
    '--layout-header-zIndex': '1100',
    '--layout-header-mobile-height': '64px',
    '--layout-header-desktop-height': '80px',
    '--layout-dashboard-content-pt': theme.spacing(1),
    '--layout-dashboard-content-pb': theme.spacing(8),
    '--layout-dashboard-content-px': theme.spacing(5),
  };
}
