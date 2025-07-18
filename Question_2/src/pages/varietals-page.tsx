import { Box, Button, Container, Typography } from '@mui/material';

import { Iconify } from '../components/iconify';
import { TreeViewer } from '../components/tree-viewer';
import { useVarietalTreeBuilder } from '../hooks/useVarietalTreeBuilder';
import { downloadCSV, exportToCSV, getPlantings } from '../utils/vineyard';

export function VarietalsPage() {
  const varietalTree = useVarietalTreeBuilder();

  const handleExportCSV = () => {
    const plantings = getPlantings();
    const csvContent = exportToCSV(plantings);
    downloadCSV(csvContent, 'vineyard-varietals.csv');
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Iconify
            icon="solar:leaf-bold-duotone"
            width={32}
            height={32}
            sx={{ color: '#7b1fa2' }}
          />
          <Typography variant="h4">Varietals View</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Iconify icon="solar:download-bold-duotone" sx={{ color: 'white' }} />}
          onClick={handleExportCSV}
          sx={{
            background: 'linear-gradient(45deg, #8BC34A 30%, #4CAF50 90%)',
            transition: 'all 0.3s ease',
            ml: 'auto',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
            },
          }}
        >
          Export CSV
        </Button>
      </Box>

      <TreeViewer data={varietalTree} type="varietals" />
    </Container>
  );
}

export default VarietalsPage;
