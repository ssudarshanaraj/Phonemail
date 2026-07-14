import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { fontMono, fontDisplay } from '../theme.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* gradient hairline */}
      <Box
        sx={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(0,128,255,0.4) 30%, rgba(0,194,255,0.4) 70%, transparent)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 4 }, py: { xs: 5, md: 6 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
            <Box component="img" src="/logo.svg" alt="PhoneMail logo" sx={{ width: 28, height: 28 }} />
            <Typography sx={{ fontSize: '1rem', fontWeight: 800 }}>
              Phone
              <Box component="span" sx={{ color: 'primary.main' }}>
                Mail
              </Box>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
            {[
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Delete Account', to: '/delete-account' },
            ].map((link) => (
              <MuiLink
                key={link.to}
                component={RouterLink}
                to={link.to}
                underline="hover"
                sx={{ fontSize: '0.85rem', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
          <Typography sx={{ fontFamily: fontMono, fontSize: '0.75rem', color: 'text.secondary' }}>
            © {year} PhoneMail. All rights reserved.
          </Typography>
        </Stack>
      </Container>

      {/* ghost brand watermark */}
      <Typography
        aria-hidden
        sx={{
          fontFamily: fontDisplay,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          fontSize: { xs: '5rem', sm: '9rem', md: '13rem' },
          lineHeight: 0.8,
          textAlign: 'center',
          userSelect: 'none',
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(0,128,255,0.12), rgba(0,128,255,0))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          mb: '-1.5%',
        }}
      >
        PhoneMail
      </Typography>
    </Box>
  )
}
