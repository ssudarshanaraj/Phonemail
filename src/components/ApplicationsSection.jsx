import { Box, Container, Typography, Stack, Chip, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import GavelIcon from '@mui/icons-material/Gavel'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import { brand } from '../theme.js'
import BentoTile from './BentoTile.jsx'
import Reveal from './Reveal.jsx'
import legalImg from '../assets/legal_gavel.png'
import welfareImg from '../assets/constitution_india.png'
import bankingImg from '../assets/online_banking.png'
import healthImg from '../assets/doctor_healthcare.png'

const APPLICATIONS = [
  {
    image: legalImg,
    icon: GavelIcon,
    from: '#4DA3FF',
    to: '#0080FF',
    title: 'Courts and Legal',
    desc: 'Secure delivery of notices, summons, orders and legal documents.',
  },
  {
    image: welfareImg,
    icon: GroupsIcon,
    from: '#A78BFA',
    to: '#7C3AED',
    title: 'Welfare Schemes',
    desc: 'Reach citizens with scheme updates, approvals and benefit notifications.',
  },
  {
    image: bankingImg,
    icon: AccountBalanceIcon,
    from: '#00C2FF',
    to: '#0080FF',
    title: 'Financial Services',
    desc: 'Account alerts, statements, KYC updates and transaction notifications.',
  },
  {
    image: healthImg,
    icon: MonitorHeartOutlinedIcon,
    from: '#2DD4BF',
    to: '#0D9488',
    title: 'Utilities and Healthcare',
    desc: 'Bills, appointment reminders, test reports and service updates.',
  },
]

export default function ApplicationsSection() {
  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* centered header */}
        <Reveal>
          <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Chip
              icon={<StarIcon sx={{ fontSize: 15, color: '#0080FF !important' }} />}
              label="Trusted Across Sectors"
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
              Real-World{' '}
              <Box component="span" sx={brand.gradientText}>
                Applications
              </Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'text.secondary', maxWidth: 620, lineHeight: 1.7 }}>
              Every compliance-grade document exchange today runs on email.
            </Typography>
            <Box sx={{ width: 48, height: 3, borderRadius: 2, background: brand.gradient }} />
          </Stack>
        </Reveal>

        {/* sector cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 3 },
          }}
        >
          {APPLICATIONS.map((app, i) => {
            const Icon = app.icon
            return (
              <BentoTile
                key={app.title}
                delay={i * 90}
                sx={{
                  p: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: `${app.from}33`,
                  '&:hover': { borderColor: `${app.from}66` },
                }}
              >
                {/* image with floating icon badge */}
                <Box sx={{ position: 'relative', p: 2, pb: 0 }}>
                  <Box
                    component="img"
                    src={app.image}
                    alt={app.title}
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: 190,
                      objectFit: 'cover',
                      borderRadius: 3,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 30,
                      left: 30,
                      width: 44,
                      height: 44,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${app.from}, ${app.to})`,
                      boxShadow: `0 8px 22px ${app.to}66`,
                    }}
                  >
                    <Icon sx={{ fontSize: 22, color: '#fff' }} />
                  </Box>
                </Box>

                <Stack spacing={1} sx={{ p: 3, pt: 2.5, flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.15rem' }}>{app.title}</Typography>
                  <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary', lineHeight: 1.6, flexGrow: 1 }}>
                    {app.desc}
                  </Typography>
                  <Box
                    sx={{
                      alignSelf: 'flex-end',
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${app.from}55`,
                      bgcolor: `${app.from}14`,
                    }}
                  >
                    <ArrowForwardIcon sx={{ fontSize: 17, color: app.from }} />
                  </Box>
                </Stack>
              </BentoTile>
            )
          })}
        </Box>

        {/* bottom hint */}
        <Reveal delay={200}>
          <Stack direction="row" spacing={2} sx={{ mt: { xs: 7, md: 9 }, alignItems: 'center' }}>
            <Divider sx={{ flexGrow: 1, borderColor: 'rgba(11,27,51,0.1)' }} />
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <GppGoodOutlinedIcon sx={{ fontSize: 19, color: '#0080FF' }} />
              <Typography sx={{ fontSize: '0.9rem', color: 'primary.main' }}>
                Secure. Compliant. Reliable.
              </Typography>
            </Stack>
            <Divider sx={{ flexGrow: 1, borderColor: 'rgba(11,27,51,0.1)' }} />
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}
