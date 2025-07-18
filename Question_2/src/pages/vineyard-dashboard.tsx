import { useMemo } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import { Charts } from '../components/charts';
import { Iconify } from '../components/iconify';
import { StatBox } from '../components/stat-box';
import { downloadCSV, exportToCSV, getPlantings, calculateStats } from '../utils/vineyard';

export function VineyardDashboard() {
  const plantings = useMemo(() => getPlantings(), []);
  const stats = useMemo(() => calculateStats(plantings), [plantings]);

  const handleExportCSV = () => {
    const csvContent = exportToCSV(plantings);
    downloadCSV(csvContent, 'vineyard-plantings.csv');
  };

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
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
          <Typography variant="h4">Vineyard Dashboard</Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="solar:share-bold" />}
            onClick={handleExportCSV}
            sx={{ ml: 'auto' }}
          >
            Export CSV
          </Button>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatBox
          title="Total Blocks"
          value={stats.totalBlocks}
          icon={<Iconify icon="solar:home-angle-bold-duotone" width={48} height={48} />}
          color="primary"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatBox
          title="Total Varietals"
          value={stats.totalVarietals}
          icon={<Iconify icon="solar:leaf-bold-duotone" width={48} height={48} />}
          color="info"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatBox
          title="Total Clones"
          value={stats.totalClones}
          icon={<Iconify icon="solar:tree-bold-duotone" width={48} height={48} />}
          color="success"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatBox
          title="Most Planted"
          value={stats.mostPlantedVarietal}
          icon={<Iconify icon="solar:shield-keyhole-bold-duotone" width={48} height={48} />}
          color="warning"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Charts
          varietalDistribution={stats.varietalDistribution}
          cloneCountPerVarietal={stats.cloneCountPerVarietal}
        />
      </Grid>
    </Grid>
  );
}

export default VineyardDashboard;
