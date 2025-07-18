import { useMemo } from 'react';

import { getPlantings, buildBlockTree } from '../utils/vineyard';

import type { BlockNode } from '../types/vineyard';

export const useBlockTreeBuilder = (): BlockNode[] => {
  const plantings = useMemo(() => getPlantings(), []);

  return useMemo(() => buildBlockTree(plantings), [plantings]);
};
