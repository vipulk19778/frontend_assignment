import plantingsData from '../data/plantings.json';

import type { BlockNode, VarietalNode, PlantingEntry, VineyardStats } from '../types/vineyard';

export const parsePlantingEntry = (entry: string): PlantingEntry => {
  const parts = entry.split('.');
  if (parts.length !== 3) {
    throw new Error(`Invalid planting entry format: ${entry}`);
  }
  return {
    block: parts[0],
    varietal: parts[1],
    clone: parts[2],
  };
};

export const getPlantings = (): PlantingEntry[] => plantingsData.map(parsePlantingEntry);

export const buildBlockTree = (plantings: PlantingEntry[]): BlockNode[] => {
  const blockMap = new Map<string, Map<string, Set<string>>>();

  plantings.forEach(({ block, varietal, clone }) => {
    if (!blockMap.has(block)) {
      blockMap.set(block, new Map());
    }
    const varietalMap = blockMap.get(block)!;
    if (!varietalMap.has(varietal)) {
      varietalMap.set(varietal, new Set());
    }
    varietalMap.get(varietal)!.add(clone);
  });

  return Array.from(blockMap.entries()).map(([block, varietalMap]) => ({
    block,
    varietals: Array.from(varietalMap.entries()).map(([varietal, clones]) => ({
      varietal,
      clones: Array.from(clones).map((clone) => ({ clone })),
    })),
  }));
};

export const buildVarietalTree = (plantings: PlantingEntry[]): VarietalNode[] => {
  const varietalMap = new Map<string, Map<string, Set<string>>>();

  plantings.forEach(({ block, varietal, clone }) => {
    if (!varietalMap.has(varietal)) {
      varietalMap.set(varietal, new Map());
    }
    const cloneMap = varietalMap.get(varietal)!;
    if (!cloneMap.has(clone)) {
      cloneMap.set(clone, new Set());
    }
    cloneMap.get(clone)!.add(block);
  });

  return Array.from(varietalMap.entries()).map(([varietal, cloneMap]) => ({
    varietal,
    clones: Array.from(cloneMap.entries()).map(([clone, blocks]) => ({
      clone,
      blocks: Array.from(blocks),
    })),
  }));
};

export const calculateStats = (plantings: PlantingEntry[]): VineyardStats => {
  const blocks = new Set<string>();
  const varietals = new Set<string>();
  const clones = new Set<string>();
  const varietalCount = new Map<string, number>();
  const varietalCloneCount = new Map<string, number>();

  plantings.forEach(({ block, varietal, clone }) => {
    blocks.add(block);
    varietals.add(varietal);
    clones.add(clone);

    varietalCount.set(varietal, (varietalCount.get(varietal) || 0) + 1);
    varietalCloneCount.set(varietal, (varietalCloneCount.get(varietal) || 0) + 1);
  });

  let mostPlantedVarietal = '';
  let maxCount = 0;
  varietalCount.forEach((count, varietal) => {
    if (count > maxCount) {
      maxCount = count;
      mostPlantedVarietal = varietal;
    }
  });

  return {
    totalBlocks: blocks.size,
    totalVarietals: varietals.size,
    totalClones: clones.size,
    mostPlantedVarietal,
    varietalDistribution: Object.fromEntries(varietalCount),
    cloneCountPerVarietal: Object.fromEntries(varietalCloneCount),
  };
};

export const exportToCSV = (plantings: PlantingEntry[]): string => {
  const headers = ['Block', 'Varietal', 'Clone'];
  const rows = plantings.map(({ block, varietal, clone }) => [block, varietal, clone]);

  const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n');

  return csvContent;
};

export const downloadCSV = (csvContent: string, filename: string): void => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
