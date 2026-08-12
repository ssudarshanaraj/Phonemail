import { Box, Container, Typography, Stack, Chip } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import DialpadIcon from '@mui/icons-material/Dialpad'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import ShieldIcon from '@mui/icons-material/Shield'
import LockIcon from '@mui/icons-material/Lock'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import GridViewIcon from '@mui/icons-material/GridView'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { brand } from '../theme.js'
import BentoTile from './BentoTile.jsx'
import Reveal from './Reveal.jsx'

const OVERVIEW = [
  {
    icon: RocketLaunchIcon,
    from: '#4DA3FF',
    to: '#0080FF',
    title: 'Setup in seconds',
    desc: 'PhoneMail auto detects your number and verifies with OTP instantly. No learning curve.',
  },
  {
    icon: DialpadIcon,
    from: '#A78BFA',
    to: '#7C3AED',
    title: 'Email for button phones',
    desc: 'Dial a toll-free number to create your account through an automated IVR, or simply send an SMS.',
  },
  {
    icon: NotificationsActiveIcon,
    from: '#34D399',
    to: '#059669',
    title: 'Catch every critical update',
    desc: 'No smartphone or internet? Get notified about every email by SMS.',
  },
]

const FEATURES = [
  {
    icon: ChatBubbleIcon,
    from: '#FB923C',
    to: '#EA580C',
    title: 'Inbox that feels like chat',
    desc: 'A clean, familiar interface that is easy to use, even for first-time users.',
  },
  {
    icon: GraphicEqIcon,
    from: '#818CF8',
    to: '#4F46E5',
    title: 'Voice-enabled',
    desc: 'Skip the typing. Respond to emails with a recorded voice message.',
  },
  {
    icon: ShieldIcon,
    from: '#2DD4BF',
    to: '#0D9488',
    title: 'Spam control',
    desc: 'A pre-inbox staging system and whitelisting feature put you in full control of your inbox.',
  },
  {
    icon: LockIcon,
    from: '#F472B6',
    to: '#DB2777',
    title: 'Web login',
    desc: 'Log in on any device with a QR code or secure OTP. No passwords, no hassle.',
  },
]

function FeatureRow({ item, delay, accentBorder }) {
  const Icon = item.icon
  return (
    <BentoTile
      delay={delay}
      sx={{
        p: { xs: 2.5, md: 3 },
        ...(accentBorder && { borderLeft: `3px solid ${item.from}` }),
      }}
    >
      <Stack direction="row" spacing={2.5} sx={{ alignItems: 'center' }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 3.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
            boxShadow: `0 10px 26px ${item.to}55`,
            flexShrink: 0,
          }}
        >
          <Icon sx={{ fontSize: 26, color: '#fff' }} />
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>{item.title}</Typography>
          <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary', lineHeight: 1.6 }}>
            {item.desc}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${item.from}55`,
            flexShrink: 0,
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 20, color: item.from }} />
        </Box>
      </Stack>
    </BentoTile>
  )
}

function ColumnHeader({ icon: Icon, color, label }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 1 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: `${color}1E`,
          border: `1px solid ${color}44`,
        }}
      >
        <Icon sx={{ fontSize: 19, color }} />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: '1.3rem' }}>{label}</Typography>
    </Stack>
  )
}

export default function SolutionSection() {
  return (
    <Box component="section" id="solution" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* centered header */}
        <Reveal>
          <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Chip
              icon={<AutoAwesomeIcon sx={{ fontSize: 15, color: '#0080FF !important' }} />}
              label="Powerful Features. Zero Complexity."
              size="small"
              sx={{
                fontSize: '0.8rem',
                color: 'primary.main',
                bgcolor: 'rgba(0,128,255,0.06)',
                border: '1px solid rgba(0,128,255,0.25)',
                px: 1,
                py: 1.75,
              }}
            />
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' }, lineHeight: 1.05 }}>
              Inside{' '}
              <Box component="span" sx={brand.gradientText}>
                PhoneMail
              </Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'text.secondary', maxWidth: 620, lineHeight: 1.7 }}>
              Everything you need to manage your communication smarter, faster and better.
            </Typography>
          </Stack>
        </Reveal>

        {/* two columns */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            columnGap: { md: 6 },
            rowGap: { xs: 5, md: 0 },
            alignItems: 'start',
          }}
        >
          <Stack spacing={2}>
            <Reveal>
              <ColumnHeader icon={GridViewIcon} color="#0080FF" label="Overview" />
            </Reveal>
            {OVERVIEW.map((item, i) => (
              <FeatureRow key={item.title} item={item} delay={i * 90} accentBorder />
            ))}
          </Stack>

          <Stack spacing={2}>
            <Reveal>
              <ColumnHeader icon={AutoAwesomeIcon} color="#7C3AED" label="Features" />
            </Reveal>
            {FEATURES.map((item, i) => (
              <FeatureRow key={item.title} item={item} delay={i * 90} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
