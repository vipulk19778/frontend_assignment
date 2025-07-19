import { mergeClasses } from 'minimal-shared/utils';

import { styled } from '@mui/material/styles';

// Layout classes
const layoutClasses = {
  root: 'layout__root',
  header: 'layout__header',
  sidebar: 'layout__sidebar',
  sidebarContainer: 'layout__sidebar-container',
  main: 'layout__main',
  content: 'layout__content',
};

// ----------------------------------------------------------------------

export type MainSectionProps = React.ComponentProps<typeof MainRoot>;

export function MainSection({ children, className, sx, ...other }: MainSectionProps) {
  return (
    <MainRoot className={mergeClasses([layoutClasses.main, className])} sx={sx} {...other}>
      {children}
    </MainRoot>
  );
}

// ----------------------------------------------------------------------
const MainRoot = styled('main')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  padding: '0px 32px 8px',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px 8px',
  },
}));
