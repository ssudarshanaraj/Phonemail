import { createTheme } from '@mui/material/styles'

export const fontDisplay = '"Space Grotesk", "Inter", system-ui, sans-serif'
export const fontMono = '"JetBrains Mono", ui-monospace, monospace'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0080FF',
      light: '#4DA3FF',
      dark: '#0059B2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00B8D9',
    },
    error: {
      main: '#E11D48',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0B1B33',
      secondary: '#5A6B85',
    },
    divider: 'rgba(11,27,51,0.08)',
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
    h1: { fontFamily: fontDisplay, fontWeight: 700, letterSpacing: '-0.04em' },
    h2: { fontFamily: fontDisplay, fontWeight: 700, letterSpacing: '-0.03em' },
    h3: { fontFamily: fontDisplay, fontWeight: 600, letterSpacing: '-0.02em' },
    h4: { fontFamily: fontDisplay, fontWeight: 600, letterSpacing: '-0.01em' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})

export const brand = {
  gradient: 'linear-gradient(120deg, #4DA3FF 0%, #0080FF 45%, #00C2FF 100%)',
  gradientText: {
    background: 'linear-gradient(110deg, #0080FF 0%, #005FCC 30%, #0080FF 55%, #00C2FF 85%, #0080FF 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    animation: 'gradient-pan 6s ease-in-out infinite',
  },
  glowRing: '0 0 0 1px rgba(0,128,255,0.25), 0 12px 40px rgba(0,128,255,0.15)',
  tileBorder: 'rgba(11,27,51,0.08)',
  tileBg: 'rgba(0,128,255,0.03)',
  tileBgHover: 'rgba(0,128,255,0.06)',
  glassBg: 'rgba(255,255,255,0.7)',
  // kept for API compatibility — on the light theme cards need no top highlight
  tileHighlight: 'none',
}

export default theme
