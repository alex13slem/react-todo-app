import { useMemo } from 'react';

export const usePagination = totalPages =>
  useMemo(() => [...Array(totalPages).keys()].map(i => i + 1), [totalPages]);
