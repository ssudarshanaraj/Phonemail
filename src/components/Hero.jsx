import { Box, Container, Typography, Stack, Chip, Divider } from '@mui/material'
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import LanguageIcon from '@mui/icons-material/Language'
import AndroidIcon from '@mui/icons-material/Android'
import AppleIcon from '@mui/icons-material/Apple'
import { fontMono, brand } from '../theme.js'
import BentoTile from './BentoTile.jsx'
import Reveal from './Reveal.jsx'
import heroImg from '../assets/hero-phone.png'

const STATS = [
  {
    icon: SmartphoneOutlinedIcon,
    color: '#E11D48',
    value: '50%',
    label: "Indians don't have a smartphone",
  },
  {
    icon: MailOutlinedIcon,
    color: '#0080FF',
    value: '63.1%',
    label: "don't know how to use email",
  },
  {
    icon: VerifiedUserOutlinedIcon,
    color: '#059669',
    value: '100%',
    label: 'Privacy-focused & secure',
  },
]

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 16, md: 20 },
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* faint blueprint grid, fading toward the bottom */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(11,27,51,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,51,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)',
        }}
      />

      {/* aurora orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-12%',
          left: '18%',
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,128,255,0.12), transparent 65%)',
          filter: 'blur(60px)',
          animation: 'drift-a 18s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          right: '6%',
          width: 440,
          height: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,194,255,0.1), transparent 65%)',
          filter: 'blur(70px)',
          animation: 'drift-b 22s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.1fr 1fr' },
            columnGap: { lg: 10 },
            rowGap: { xs: 6, lg: 0 },
            alignItems: 'center',
          }}
        >
          <Reveal>
            <Stack
              spacing={3}
              sx={{
                alignItems: { xs: 'center', lg: 'flex-start' },
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              {/*<Chip
                label="SMART EMAIL FOR A SMARTER YOU ✦"
                size="small"
                sx={{
                  fontFamily: fontMono,
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  bgcolor: 'rgba(0,128,255,0.06)',
                  color: 'primary.main',
                  border: '1px solid rgba(0,128,255,0.25)',
                  px: 1,
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 0 24px rgba(0,128,255,0.15)',
                }}
              />*/}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.75rem', sm: '3.75rem', md: '4.25rem' },
                  lineHeight: 1.02,
                  textShadow: '0 0 80px rgba(0,128,255,0.15)',
                }}
              >
                Email made simple,
                <br />
                for{' '}
                <Box component="span" sx={brand.gradientText}>
                  what matters
                </Box>
                .
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, color: 'text.secondary', maxWidth: 540, lineHeight: 1.7 }}>
                PhoneMail is an upcoming email platform that eliminates the need for separate email
                IDs — and anchors your inbox to the number you already have.
              </Typography>
              <Typography
                sx={{
                  fontFamily: fontMono,
                  fontSize: '0.85rem',
                  color: 'primary.dark',
                  px: 2.5,
                  py: 1,
                  borderRadius: 999,
                  border: '1px solid rgba(0,128,255,0.25)',
                  bgcolor: 'rgba(0,128,255,0.05)',
                }}
              >
                If you have a phone number, you have an email ID.
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                  gap: 2,
                  width: '100%',
                  pt: 1,
                }}
              >
                {STATS.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <BentoTile key={stat.value} delay={i * 100} sx={{ p: { xs: 2.5, md: 3 } }}>
                      <Stack spacing={1} sx={{ alignItems: { xs: 'center', lg: 'flex-start' } }}>
                        <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: `${stat.color}1E`,
                              border: `1px solid ${stat.color}44`,
                              flexShrink: 0,
                            }}
                          >
                            <Icon sx={{ fontSize: 18, color: stat.color }} />
                          </Box>
                          <Typography sx={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1, ...brand.gradientText }}>
                            {stat.value}
                          </Typography>
                        </Stack>
                        <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', lineHeight: 1.5 }}>
                          {stat.label}
                        </Typography>
                      </Stack>
                    </BentoTile>
                  )
                })}
              </Box>
            </Stack>
          </Reveal>

          <Reveal delay={150}>
            <Box
              component="img"
              src={heroImg}
              alt="PhoneMail app on a phone, surrounded by feature highlights: secure, simple, accessible, unified"
              sx={{
                display: 'block',
                width: '100%',
                maxWidth: { xs: 420, lg: 560 },
                mx: 'auto',
                filter: 'drop-shadow(0 30px 50px rgba(11,27,51,0.25))',
                animation: 'float-y 7s ease-in-out infinite',
              }}
            />
          </Reveal>
        </Box>

        {/* coming soon strip */}
        <Reveal delay={250}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 5 }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: 'none', sm: 'block' }, borderColor: 'rgba(11,27,51,0.1)' }}
              />
            }
            sx={{
              mt: { xs: 8, md: 10 },
              px: { xs: 3, sm: 6 },
              py: 3,
              borderRadius: 4,
              border: '1px solid',
              borderColor: brand.tileBorder,
              bgcolor: brand.tileBg,
              backgroundImage: brand.tileHighlight,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary' }}>Coming soon on</Typography>
            {[
              { icon: LanguageIcon, label: 'Web' },
              { icon: AndroidIcon, label: 'Android' },
              { icon: AppleIcon, label: 'iOS' },
            ].map((p) => {
              const Icon = p.icon
              return (
                <Stack key={p.label} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <Icon sx={{ fontSize: 20, color: 'text.primary' }} />
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 600 }}>{p.label}</Typography>
                </Stack>
              )
            })}
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}
