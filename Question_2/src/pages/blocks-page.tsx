import { Box, Button, Typography } from '@mui/material';

import { Iconify } from '../components/iconify';
import { TreeViewer } from '../components/tree-viewer';
import { useBlockTreeBuilder } from '../hooks/useBlockTreeBuilder';
import { downloadCSV, exportToCSV, getPlantings } from '../utils/vineyard';

export function BlocksPage() {
  const blockTree = useBlockTreeBuilder();

  const handleExportCSV = () => {
    const plantings = getPlantings();
    const csvContent = exportToCSV(plantings);
    downloadCSV(csvContent, 'vineyard-blocks.csv');
  };

  return (
    <Box>
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
            icon="solar:home-angle-bold-duotone"
            width={32}
            height={32}
            sx={{ color: '#4CAF50' }}
          />
          <Typography variant="h4">Blocks View</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Iconify icon="solar:download-bold-duotone" sx={{ color: 'white' }} />}
          onClick={handleExportCSV}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            transition: 'all 0.3s ease',
            ml: 'auto',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
            },
          }}
        >
          Export CSV
        </Button>
      </Box>

      <TreeViewer data={blockTree} type="blocks" />
    </Box>
  );
}

export default BlocksPage;
