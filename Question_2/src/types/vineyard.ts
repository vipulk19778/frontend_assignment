// Core data types
export type ThemeMode = 'light' | 'dark';

export interface PlantingEntry {
  block: string;
  varietal: string;
  clone: string;
}

// Tree structure types
export interface TreeNode {
  id: string;
  label: string;
  expandable: boolean;
  children?: TreeNode[];
}

export interface BlockNode {
  block: string;
  varietals: BlockVarietalNode[];
}

export interface BlockVarietalNode {
  varietal: string;
  clones: CloneNode[];
}

export interface VarietalNode {
  varietal: string;
  clones: VarietalCloneNode[];
}

export interface CloneNode {
  clone: string;
}

export interface VarietalCloneNode {
  clone: string;
  blocks: string[];
}

// Statistics types
export interface VineyardStats {
  totalBlocks: number;
  totalVarietals: number;
  totalClones: number;
  mostPlantedVarietal: string;
  varietalDistribution: { [key: string]: number };
  cloneCountPerVarietal: { [key: string]: number };
}

// Theme types
export type Theme = 'light' | 'dark';

// Chart data types
export interface ChartData {
  name: string;
  value: number;
}

export interface BarChartData {
  name: string;
  count: number;
}
