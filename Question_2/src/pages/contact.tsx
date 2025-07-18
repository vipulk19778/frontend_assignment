import { Box, Card, Typography, CardContent } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export function ContactPage() {
  return (
    <Box>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Have questions about our vineyard management system? We&apos;d love to hear from you.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Iconify
                  icon="solar:home-angle-bold-duotone"
                  width={24}
                  height={24}
                  sx={{ mr: 2 }}
                />
                <Typography variant="body1">123 Vineyard Lane, Wine Valley, CA 94558</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Iconify
                  icon="solar:home-angle-bold-duotone"
                  width={24}
                  height={24}
                  sx={{ mr: 2 }}
                />
                <Typography variant="body1">(555) 123-4567</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Iconify icon="solar:chat-round-dots-bold" width={24} height={24} sx={{ mr: 2 }} />
                <Typography variant="body1">info@vineyardmanagement.com</Typography>
              </Box>
            </Box>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Business Hours
            </Typography>
            <Typography variant="body1" paragraph>
              Monday - Friday: 9:00 AM - 5:00 PM PST
            </Typography>
            <Typography variant="body1" paragraph>
              Saturday: 10:00 AM - 2:00 PM PST
            </Typography>
            <Typography variant="body1" paragraph>
              Sunday: Closed
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              Support
            </Typography>
            <Typography variant="body1" paragraph>
              For technical support, please email support@vineyardmanagement.com or call our support
              line at (555) 123-4568.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default ContactPage;
