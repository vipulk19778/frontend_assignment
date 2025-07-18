import { useState } from 'react';

import { Box, Stack, TextField, IconButton, Typography } from '@mui/material';

import { Iconify } from '../iconify';

import type { BlockNode, VarietalNode } from '../../types/vineyard';

interface TreeViewerProps {
  data: BlockNode[] | VarietalNode[];
  type: 'blocks' | 'varietals';
}

export function TreeViewer({ data, type }: TreeViewerProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filterData = (items: any[]) => {
    if (!searchTerm) return items;

    return items.filter((item) => {
      const mainKey = type === 'blocks' ? item.block : item.varietal;
      const searchLower = searchTerm.toLowerCase();

      // Search in main key
      if (mainKey.toLowerCase().includes(searchLower)) return true;

      // Search in nested items
      if (type === 'blocks') {
        return item.varietals.some(
          (v: any) =>
            v.varietal.toLowerCase().includes(searchLower) ||
            v.clones.some((c: any) => c.clone.toLowerCase().includes(searchLower))
        );
      } else {
        return item.clones.some(
          (c: any) =>
            c.clone.toLowerCase().includes(searchLower) ||
            c.blocks.some((b: any) => b.toLowerCase().includes(searchLower))
        );
      }
    });
  };

  const sortData = (items: any[]) =>
    [...items].sort((a, b) => {
      const aKey = type === 'blocks' ? a.block : a.varietal;
      const bKey = type === 'blocks' ? b.block : b.varietal;
      return aKey.localeCompare(bKey);
    });

  const filteredData = sortData(filterData(data));

  const renderSearch = () => (
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ maxWidth: 300, width: '100%' }}
        slotProps={{
          input: {
            startAdornment: (
              <Iconify icon="eva:search-fill" sx={{ mr: 1, color: 'text.secondary' }} />
            ),
          },
        }}
      />
    </Stack>
  );

  const renderTreeNode = (
    name: string,
    count: number,
    level: number,
    isExpanded: boolean,
    onToggle: () => void,
    children?: React.ReactNode,
    nodeType?: string
  ) => {
    // Determine icon based on content type
    const getNodeIcon = () => {
      if (name.startsWith('Block:')) {
        return { icon: 'solar:home-angle-bold-duotone' as const, color: '#2e7d32' }; // Green for blocks
      } else if (name.startsWith('Varietal:')) {
        return { icon: 'solar:leaf-bold-duotone' as const, color: '#7b1fa2' }; // Purple for varietals
      } else if (name.startsWith('Clone:')) {
        return { icon: 'solar:branch-bold-duotone' as const, color: '#ff6f00' }; // Orange for clones
      } else {
        return { icon: 'solar:folder-open-bold-duotone' as const, color: '#1976d2' }; // Blue fallback
      }
    };

    const nodeIcon = getNodeIcon();

    return (
      <Box key={name} sx={{ ml: level * 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 0.5,
            px: 1,
            borderRadius: 1,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: 'action.hover',
              transform: 'translateX(4px)',
            },
          }}
          onClick={onToggle}
        >
          <Box sx={{ mr: 2, width: 24, display: 'flex', justifyContent: 'center' }}>
            {children ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <IconButton size="small" sx={{ p: 0.5 }}>
                  <Iconify
                    icon={isExpanded ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
                    width={16}
                    height={16}
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s ease',
                      transform: isExpanded ? 'none' : 'rotate(-90deg)',
                    }}
                  />
                </IconButton>
                <Iconify
                  icon={nodeIcon.icon}
                  width={16}
                  height={16}
                  sx={{
                    color: nodeIcon.color,
                    opacity: 0.8,
                  }}
                />
              </Box>
            ) : (
              <Iconify
                icon={nodeIcon.icon}
                width={16}
                height={16}
                sx={{
                  color: nodeIcon.color,
                  opacity: 0.8,
                }}
              />
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flex: 1,
              borderLeft: level > 0 ? '2px solid' : 'none',
              borderColor: level === 1 ? 'primary.main' : 'secondary.main',
              pl: level > 0 ? 1 : 0,
            }}
          >
            <Typography
              variant={level === 0 ? 'subtitle1' : level === 1 ? 'body1' : 'body2'}
              fontWeight={level === 0 ? 'bold' : level === 1 ? 'medium' : 'normal'}
              color={level === 0 ? 'primary' : level === 1 ? 'text.primary' : 'text.secondary'}
            >
              {name}
            </Typography>
            {count > 0 && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  backgroundColor: level === 0 ? 'primary.light' : 'action.hover',
                  color: level === 0 ? 'primary.contrastText' : 'text.secondary',
                  px: 1,
                  py: 0.25,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                  fontWeight: 'medium',
                }}
              >
                {count}
              </Typography>
            )}
          </Box>
        </Box>
        {children && isExpanded && (
          <Box sx={{ ml: 1, borderLeft: '1px solid', borderColor: 'divider' }}>{children}</Box>
        )}
      </Box>
    );
  };

  if (type === 'blocks') {
    const blockData = filteredData as BlockNode[];
    return (
      <Box sx={{ width: '100%' }}>
        {renderSearch()}
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            p: 1,
            overflow: 'auto',
          }}
        >
          {blockData.map((block) => (
            <Box key={block.block}>
              {renderTreeNode(
                `Block: ${block.block}`,
                block.varietals.length,
                0,
                expanded[block.block] || false,
                () => toggleExpanded(block.block),
                <Box>
                  {block.varietals.map((varietal) => (
                    <Box key={varietal.varietal}>
                      {renderTreeNode(
                        `Varietal: ${varietal.varietal}`,
                        varietal.clones.length,
                        1,
                        expanded[`${block.block}-${varietal.varietal}`] || false,
                        () => toggleExpanded(`${block.block}-${varietal.varietal}`),
                        <Box>
                          {varietal.clones.map((clone) =>
                            renderTreeNode(
                              `Clone: ${clone.clone}`,
                              0,
                              2,
                              false,
                              () => {},
                              undefined
                            )
                          )}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  const varietalData = filteredData as VarietalNode[];
  return (
    <Box sx={{ width: '100%' }}>
      {renderSearch()}
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          p: 1,
          overflow: 'auto',
        }}
      >
        {varietalData.map((varietal) => (
          <Box key={varietal.varietal}>
            {renderTreeNode(
              `Varietal: ${varietal.varietal}`,
              varietal.clones.length,
              0,
              expanded[varietal.varietal] || false,
              () => toggleExpanded(varietal.varietal),
              <Box>
                {varietal.clones.map((clone) => (
                  <Box key={clone.clone}>
                    {renderTreeNode(
                      `Clone: ${clone.clone}`,
                      clone.blocks.length,
                      1,
                      expanded[`${varietal.varietal}-${clone.clone}`] || false,
                      () => toggleExpanded(`${varietal.varietal}-${clone.clone}`),
                      <Box>
                        {clone.blocks.map((block) =>
                          renderTreeNode(`Block: ${block}`, 0, 2, false, () => {}, undefined)
                        )}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
