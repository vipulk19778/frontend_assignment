import type { LinkProps } from '@mui/material/Link';

import { useId } from 'react';
import Link from '@mui/material/Link';
import { styled, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components/router-link';

// Logo classes
const logoClasses = {
  root: 've__logo__root',
};

// Simple Logo component for VE (Vineyard Explorer)
export type LogoProps = LinkProps & {
  isSingle?: boolean;
  disabled?: boolean;
};

export function Logo({
  sx,
  disabled,
  className,
  href = '/',
  isSingle = true,
  ...other
}: LogoProps) {
  const theme = useTheme();
  const gradientId = useId();

  // Support both CSS variables (for tests) and regular theme values (for app)
  const PRIMARY_MAIN = theme.vars?.palette?.primary?.main || 'var(--mui-palette-primary-main)';
  const PRIMARY_DARKER = theme.vars?.palette?.primary?.dark || 'var(--mui-palette-primary-dark)';

  // For text color in full logo, use primary color in dark mode for better visibility
  const TEXT_COLOR =
    theme.palette.mode === 'dark'
      ? theme.vars?.palette?.primary?.light || theme.palette.primary.light
      : theme.vars?.palette?.text?.primary || 'var(--mui-palette-text-primary)';

  const singleLogo = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`${gradientId}-text`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={PRIMARY_MAIN} />
          <stop offset="1" stopColor={PRIMARY_DARKER} />
        </linearGradient>
      </defs>
      <text
        x="40"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill={`url(#${gradientId}-text)`}
      >
        VE
      </text>
    </svg>
  );

  const fullLogo = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`${gradientId}-text-full`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={PRIMARY_MAIN} />
          <stop offset="1" stopColor={PRIMARY_DARKER} />
        </linearGradient>
      </defs>
      <text
        x="20"
        y="40"
        textAnchor="start"
        dominantBaseline="middle"
        fontSize="28"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill={`url(#${gradientId}-text-full)`}
      >
        VE
      </text>
      <text
        x="60"
        y="40"
        textAnchor="start"
        dominantBaseline="middle"
        fontSize="16"
        fontWeight="500"
        fontFamily="Arial, sans-serif"
        fill={TEXT_COLOR}
      >
        Vineyard Explorer
      </text>
    </svg>
  );

  return (
    <LogoRoot
      component={RouterLink}
      href={href}
      aria-label="Logo"
      underline="none"
      className={`${logoClasses.root} ${className || ''}`}
      sx={[
        {
          width: 40,
          height: 40,
          ...(!isSingle && { width: 200, height: 40 }),
          ...(disabled && { pointerEvents: 'none' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
}

// Simple styled component for logo
const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: 'transparent',
  display: 'inline-flex',
  verticalAlign: 'middle',
}));
