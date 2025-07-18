import { Box, Card, Typography, CardContent } from '@mui/material';

interface StatBoxProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export function StatBox({ title, value, icon, color = 'primary' }: StatBoxProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h4" color={`${color}.main`} gutterBottom>
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
          {icon && <Box sx={{ color: `${color}.main`, opacity: 0.7 }}>{icon}</Box>}
        </Box>
      </CardContent>
    </Card>
  );
}
