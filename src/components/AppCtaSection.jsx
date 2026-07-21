import { Box, Container, Typography, Stack, Paper, Chip, Button } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import InboxIcon from '@mui/icons-material/Inbox'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { fontMono, brand } from '../theme.js'
import Reveal from './Reveal.jsx'
import inboxImg from '../assets/app-inbox.jpeg'
import conversationImg from '../assets/app-conversation.jpeg'

/*const FEATURES = [
  {
    icon: InboxIcon,
    color: '#60A5FA',
    title: 'Smart Inbox',
    desc: 'All important messages, organized and delivered instantly.',
  },
  {
    icon: LockOutlinedIcon,
    color: '#34D399',
    title: 'Secure & Private',
    desc: 'Your phone number stays private. We ensure end-to-end security.',
  },
  {
    icon: FilterAltOutlinedIcon,
    color: '#A78BFA',
    title: 'Spam-Free Experience',
    desc: 'Pre-inbox staging and whitelisting keep your inbox clean.',
  },
  {
    icon: SmartphoneOutlinedIcon,
    color: '#FB923C',
    title: 'Built for India',
    desc: 'Designed for every Indian, to make communication effortless.',
  },
]*/

function AppPhone({ src, alt, width, sx }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        display: 'block',
        width,
        borderRadius: 6,
        boxShadow: '0 24px 60px rgba(11,27,51,0.3)',
        ...sx,
      }}
    />
  )
}

export default function AppCtaSection() {
  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Reveal>
          {/* animated conic glow ring around the card */}
          <Box sx={{ position: 'relative', borderRadius: 6, p: '1px', overflow: 'hidden' }}>
            <Box
              sx={{
                position: 'absolute',
                inset: '-60%',
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgba(0,128,255,0.5) 60deg, rgba(0,194,255,0.35) 120deg, transparent 180deg)',
                animation: 'border-spin 8s linear infinite',
                pointerEvents: 'none',
              }}
            />
            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 6,
                p: { xs: 4, sm: 6, md: 7 },
                border: '1px solid rgba(0,128,255,0.12)',
                background:
                  'linear-gradient(135deg, rgba(0,128,255,0.07), rgba(255,255,255,0.95) 55%), radial-gradient(700px circle at 75% 40%, rgba(0,128,255,0.08), transparent 60%), #F7FBFF',
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '1fr 1.1fr' },
                  columnGap: { lg: 6 },
                  rowGap: { xs: 6, lg: 0 },
                  alignItems: 'center',
                }}
              >
                {/* left — copy + features + notify */}
                <Stack spacing={3} sx={{ alignItems: { xs: 'center', lg: 'flex-start' }, textAlign: { xs: 'center', lg: 'left' } }}>
                  <Chip
                    icon={<RocketLaunchIcon sx={{ fontSize: 15, color: '#60A5FA !important' }} />}
                    label="COMING SOON"
                    size="small"
                    className="blink-badge"
                    sx={{
                      fontFamily: fontMono,
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      color: 'primary.main',
                      bgcolor: 'rgba(0,128,255,0.06)',
                      border: '1px solid rgba(0,128,255,0.3)',
                      px: 1,
                      py: 1.75,
                    }}
                  />
                  <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' }, lineHeight: 1.08 }}>
                    Our Mobile App
                    <br />
                    <Box component="span" sx={brand.gradientText}>
                      Coming Soon
                    </Box>
                  </Typography>
                  <Typography sx={{ fontSize: '1.05rem', color: 'text.secondary', maxWidth: 440, lineHeight: 1.7 }}>
                    Experience PhoneMail firsthand.
                    <br />
                    Here&apos;s a glimpse of our app!
                  </Typography>
                  <Box sx={{ width: 56, height: 3, borderRadius: 2, background: brand.gradient }} />

                  <Stack spacing={2.5} sx={{ width: '100%', pt: 1 }}>
                    {FEATURES.map((f) => {
                      const Icon = f.icon
                      return (
                        <Stack
                          key={f.title}
                          direction="row"
                          spacing={2}
                          sx={{ alignItems: 'flex-start', textAlign: 'left' }}
                        >
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: 3,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: `${f.color}1A`,
                              border: `1px solid ${f.color}40`,
                              flexShrink: 0,
                            }}
                          >
                            <Icon sx={{ fontSize: 22, color: f.color }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', mb: 0.25 }}>{f.title}</Typography>
                            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.55 }}>
                              {f.desc}
                            </Typography>
                          </Box>
                        </Stack>
                      )
                    })}
                  </Stack>

                  {/* notify me strip */}
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{
                      width: '100%',
                      mt: 1,
                      p: 2.5,
                      borderRadius: 4,
                      border: '1px solid rgba(11,27,51,0.08)',
                      bgcolor: 'rgba(0,128,255,0.03)',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(96,165,250,0.12)',
                        border: '1px solid rgba(96,165,250,0.3)',
                        flexShrink: 0,
                      }}
                    >
                      <NotificationsActiveIcon sx={{ fontSize: 22, color: '#60A5FA' }} />
                    </Box>
                    <Typography sx={{ flexGrow: 1, fontSize: '0.95rem', color: 'text.secondary', textAlign: { xs: 'center', sm: 'left' } }}>
                      Be the first to experience the future of email.
                    </Typography>
                    <Button
                      variant="contained"
                      endIcon={<ChevronRightIcon />}
                      sx={{
                        px: 3,
                        py: 1.1,
                        fontSize: '0.95rem',
                        background: 'linear-gradient(120deg, #0080FF, #005FCC)',
                        boxShadow: '0 10px 28px rgba(0,128,255,0.4)',
                        flexShrink: 0,
                        '&:hover': { background: 'linear-gradient(120deg, #0073E6, #0059B2)' },
                      }}
                    >
                      Notify Me
                    </Button>
                  </Stack>
                </Stack>

                {/* right — phone trio */}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* glow behind phones */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '80%',
                      height: '70%',
                      borderRadius: '50%',
                      background: 'radial-gradient(ellipse, rgba(0,128,255,0.18), transparent 70%)',
                      filter: 'blur(40px)',
                      pointerEvents: 'none',
                    }}
                  />
                  <AppPhone
                    src={inboxImg}
                    alt="PhoneMail inbox screen"
                    width={{ xs: 120, sm: 170, md: 190 }}
                    sx={{ mr: { xs: -3, sm: -4 }, opacity: 0.9 }}
                  />
                  <AppPhone
                    src={conversationImg}
                    alt="PhoneMail conversation view with High Court Registry"
                    width={{ xs: 160, sm: 220, md: 250 }}
                    sx={{ position: 'relative', zIndex: 2 }}
                  />
                  <AppPhone
                    src={inboxImg}
                    alt="PhoneMail inbox screen"
                    width={{ xs: 120, sm: 170, md: 190 }}
                    sx={{ ml: { xs: -3, sm: -4 }, opacity: 0.9 }}
                  />
                </Box>
              </Box>
            </Paper>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}
