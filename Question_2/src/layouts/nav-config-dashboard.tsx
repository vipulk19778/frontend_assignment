import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: (
      <Iconify
        icon="solar:chart-square-bold-duotone"
        width={24}
        height={24}
        sx={{ color: '#1976d2' }}
      />
    ),
  },
  {
    title: 'Blocks',
    path: '/blocks',
    icon: (
      <Iconify
        icon="solar:home-angle-bold-duotone"
        width={24}
        height={24}
        sx={{ color: '#2e7d32' }}
      />
    ),
  },
  {
    title: 'Varietals',
    path: '/varietals',
    icon: (
      <Iconify icon="solar:leaf-bold-duotone" width={24} height={24} sx={{ color: '#7b1fa2' }} />
    ),
  },

  {
    title: 'About',
    path: '/about',
    icon: (
      <Iconify
        icon="solar:settings-bold-duotone"
        width={24}
        height={24}
        sx={{ color: '#0288d1' }}
      />
    ),
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: (
      <Iconify icon="solar:chat-round-dots-bold" width={24} height={24} sx={{ color: '#d32f2f' }} />
    ),
  },
];
