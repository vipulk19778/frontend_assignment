import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { DashboardLayout } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export const BlocksPage = lazy(() => import('src/pages/blocks-page'));
export const VarietalsPage = lazy(() => import('src/pages/varietals-page'));
export const VineyardDashboardPage = lazy(() => import('src/pages/vineyard-dashboard'));
export const AboutPage = lazy(() => import('src/pages/about'));
export const ContactPage = lazy(() => import('src/pages/contact'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

const renderFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export const routesSection: RouteObject[] = [
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <VineyardDashboardPage /> },
      { path: 'varietals', element: <VarietalsPage /> },
      { path: 'blocks', element: <BlocksPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
];
