'use client';

import { theme } from '@/data/theme';
import { ThemeProvider } from '@emotion/react';

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
