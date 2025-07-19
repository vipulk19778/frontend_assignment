import type { Theme, SxProps, CSSObject } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

// Layout classes
const layoutClasses = {
  root: 'layout__root',
  header: 'layout__header',
  sidebar: 'layout__sidebar',
  sidebarContainer: 'layout__sidebar-container',
  main: 'layout__main',
  content: 'layout__content',
};

// Simple Layout Section component
export type LayoutSectionProps = React.ComponentProps<'div'> & {
  sx?: SxProps<Theme>;
  cssVars?: CSSObject;
  children?: React.ReactNode;
  footerSection?: React.ReactNode;
  headerSection?: React.ReactNode;
  sidebarSection?: React.ReactNode;
};

export function LayoutSection({
  sx,
  cssVars,
  children,
  footerSection,
  headerSection,
  sidebarSection,
  className,
  ...other
}: LayoutSectionProps) {
  const inputGlobalStyles = cssVars ? (
    <GlobalStyles styles={() => ({ body: { ...cssVars } })} />
  ) : null;

  return (
    <>
      {inputGlobalStyles}

      <LayoutRoot id="root__layout" className={className} sx={sx} {...other}>
        {sidebarSection ? (
          <>
            {sidebarSection}
            <LayoutSidebarContainer className={layoutClasses.sidebarContainer}>
              {headerSection}
              {children}
              {footerSection}
            </LayoutSidebarContainer>
          </>
        ) : (
          <>
            {headerSection}
            {children}
            {footerSection}
          </>
        )}
      </LayoutRoot>
    </>
  );
}

// Simple styled components
const LayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  minHeight: '100vh',
}));

const LayoutSidebarContainer = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
}));
