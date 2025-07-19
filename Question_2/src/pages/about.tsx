import { Box, Card, Typography, CardContent } from '@mui/material';

export function AboutPage() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        About Vineyard Management System
      </Typography>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We are dedicated to providing comprehensive vineyard management solutions that help
            viticulturists optimize their grape production, track varietal performance, and make
            data-driven decisions for sustainable wine production.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
            Features
          </Typography>
          <Typography variant="body1" paragraph>
            • Comprehensive vineyard block management
          </Typography>
          <Typography variant="body1" paragraph>
            • Varietal tracking and analysis
          </Typography>
          <Typography variant="body1" paragraph>
            • Clone management and performance monitoring
          </Typography>
          <Typography variant="body1" paragraph>
            • Data visualization and reporting
          </Typography>
          <Typography variant="body1" paragraph>
            • Export capabilities for further analysis
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
            Technology
          </Typography>
          <Typography variant="body1" paragraph>
            Built with modern web technologies including React, TypeScript, and Material-UI to
            provide a responsive and intuitive user experience across all devices.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutPage;
