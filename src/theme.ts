import { createTheme } from '@mui/material'

const baseTheme = createTheme({
  breakpoints: {
    values: {
      // these are the min-width a view-port activates
      xs: 0,
      sm: 414,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '12px',
          },

          '*::-webkit-scrollbar-thumb': {
            opacity: 0.8,
            backgroundColor: '#D2D3D6',
            border: '4px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: '8px',
            height: '100px',
          },

          '*::-webkit-scrollbar-corner': {
            background: 'transparent',
          },
        },
      },
    },
  },
})

export default baseTheme
