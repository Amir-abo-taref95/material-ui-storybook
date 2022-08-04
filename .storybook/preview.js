import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { heIL } from '@mui/material/locale';

import { initializeRTL } from 'storybook-addon-rtl';

initializeRTL();

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const defaultTheme = createTheme(
  {
    direction: 'rtl',
    typography: {
      fontFamily: "Rubik"
    }
  },
  heIL
); // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
