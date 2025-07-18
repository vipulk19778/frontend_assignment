import { useMemo } from 'react';

import { getPlantings, buildVarietalTree } from '../utils/vineyard';

import type { VarietalNode } from '../types/vineyard';

export const useVarietalTreeBuilder = (): VarietalNode[] => {
  const plantings = useMemo(() => getPlantings(), []);

  return useMemo(() => buildVarietalTree(plantings), [plantings]);
};
