import { Box, Typography, Stack } from '@mui/material'
import { fontMono, brand } from '../theme.js'
import Reveal from './Reveal.jsx'

export default function SectionHeader({ eyebrow, title, gradientWord, subtitle, align = 'left', maxWidth }) {
  return (
    <Reveal>
      <Stack
        spacing={2.25}
        sx={{
          alignItems: align === 'center' ? 'center' : 'flex-start',
          textAlign: align,
          mb: { xs: 5, md: 7 },
        }}
      >
        {eyebrow && (
          <Stack
            direction="row"
            spacing={1.25}
            sx={{
              alignItems: 'center',
              px: 1.75,
              py: 0.75,
              borderRadius: 999,
              border: '1px solid rgba(11,27,51,0.1)',
              bgcolor: 'rgba(0,128,255,0.04)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: brand.gradient,
                boxShadow: '0 0 10px rgba(0,128,255,0.6)',
              }}
            />
            <Typography
              sx={{
                fontFamily: fontMono,
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              {eyebrow}
            </Typography>
          </Stack>
        )}
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' }, lineHeight: 1.08 }}
        >
          {title}{' '}
          {gradientWord && <Box component="span" sx={brand.gradientText}>{gradientWord}</Box>}
        </Typography>
        {subtitle && (
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.1rem' }, maxWidth: maxWidth || 560, lineHeight: 1.7 }}>
            {subtitle}
          </Typography>
        )}
      </Stack>
    </Reveal>
  )
}
