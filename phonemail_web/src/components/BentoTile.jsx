import { useRef } from 'react'
import { Paper, Typography } from '@mui/material'
import { fontMono, brand } from '../theme.js'
import Reveal from './Reveal.jsx'

export default function BentoTile({ index, delay = 0, sx, children, accent = false, ...rest }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <Reveal delay={delay}>
      <Paper
        ref={ref}
        elevation={0}
        onMouseMove={handleMouseMove}
        sx={{
          position: 'relative',
          height: '100%',
          p: { xs: 3, md: 3.5 },
          borderRadius: 4,
          bgcolor: accent ? 'rgba(0,128,255,0.08)' : brand.tileBg,
          backgroundImage: brand.tileHighlight,
          border: '1px solid',
          borderColor: accent ? 'rgba(0,128,255,0.35)' : brand.tileBorder,
          overflow: 'hidden',
          transition: 'border-color 0.35s ease, background-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease',
          // cursor-tracking spotlight
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 0.4s ease',
            background:
              'radial-gradient(340px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0,128,255,0.08), transparent 65%)',
          },
          '&:hover': {
            bgcolor: accent ? 'rgba(0,128,255,0.12)' : brand.tileBgHover,
            borderColor: 'rgba(0,128,255,0.45)',
            transform: 'translateY(-4px)',
            boxShadow: brand.glowRing,
            '&::after': { opacity: 1 },
          },
          ...sx,
        }}
        {...rest}
      >
        {index && (
          <Typography
            sx={{
              position: 'absolute',
              top: 18,
              right: 20,
              fontFamily: fontMono,
              fontSize: '0.7rem',
              color: 'rgba(11,27,51,0.3)',
              letterSpacing: '0.05em',
            }}
          >
            {index}
          </Typography>
        )}
        {children}
      </Paper>
    </Reveal>
  )
}
