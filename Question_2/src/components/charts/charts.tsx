import {
  Bar,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  PieChart,
  ResponsiveContainer,
} from 'recharts';

import { Box, Card, Typography, CardContent, Grid } from '@mui/material';

interface ChartsProps {
  varietalDistribution: Record<string, number>;
  cloneCountPerVarietal: Record<string, number>;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function Charts({ varietalDistribution, cloneCountPerVarietal }: ChartsProps) {
  const varietalData = Object.entries(varietalDistribution).map(([name, value]) => ({
    name,
    value,
  }));

  const cloneData = Object.entries(cloneCountPerVarietal).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Varietal Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={varietalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.name} ${(entry.percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {varietalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Clone Count per Varietal
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={cloneData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
