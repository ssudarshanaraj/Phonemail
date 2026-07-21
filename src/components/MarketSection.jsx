import { Box, Container, Typography, Stack, Chip, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import SchoolIcon from '@mui/icons-material/School'
import GroupsIcon from '@mui/icons-material/Groups'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined'
import { fontMono, brand } from '../theme.js'
import BentoTile from './BentoTile.jsx'
import Reveal from './Reveal.jsx'

const STATS = [
  {
    icon: DescriptionOutlinedIcon,
    color: '#E11D48',
    value: '5,300+',
    valueColor: 'text.primary',
    label: 'Government Welfare Schemes',
  },
  {
    icon: MailOutlinedIcon,
    color: '#0080FF',
    value: '6,376 Cr',
    valueColor: '#0080FF',
    label: 'Government Emails',
  },
  /*{
    icon: GppGoodOutlinedIcon,
    color: '#059669',
    value: '100%',
    valueColor: '#059669',
    label: 'Secure & Privacy Focused',
  },*/
]

const SERVICES = [
  { icon: AccountBalanceIcon, color: '#7C3AED', title: 'Banks', caption: 'Instant updates' },
  { icon: AccountBalanceIcon, color: '#0080FF', title: 'Government', caption: 'Important alerts' },
  { icon: SchoolIcon, color: '#059669', title: 'Education', caption: 'Exam & results' },
  { icon: GroupsIcon, color: '#D97706', title: 'Social Welfare', caption: 'Schemes & benefits' },
  { icon: LocalHospitalIcon, color: '#E11D48', title: 'Healthcare', caption: 'Health notifications' },
]

function IconBadge({ icon: Icon, color, size = 44, iconSize = 22 }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: `${color}1E`,
        border: `1px solid ${color}44`,
        flexShrink: 0,
      }}
    >
      <Icon sx={{ fontSize: iconSize, color }} />
    </Box>
  )
}

export default function MarketSection() {
  return (
    <Box component="section" id="market" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 320px' },
            columnGap: { lg: 8 },
            rowGap: { xs: 6, lg: 0 },
            alignItems: 'start',
          }}
        >
          {/* left column */}
          <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
            <Reveal>
              <Chip
                icon={<StarIcon sx={{ fontSize: 15, color: '#0080FF !important' }} />}
                label="India's First Phone Number-based Email Platform"
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
            </Reveal>

            <Reveal delay={60}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' }, lineHeight: 1.05 }}>
                The Next Big Shift in
                <br />
                <Box component="span" sx={brand.gradientText}>
                  Digital India
                </Box>
              </Typography>
            </Reveal>

            <Reveal delay={120}>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'text.secondary', maxWidth: 560, lineHeight: 1.7 }}>
                Still leaving the email field blank in welfare scheme applications?
                <br />
                PhoneMail is here to disrupt the broken system.
              </Typography>
            </Reveal>

            <BentoTile delay={180} sx={{ p: { xs: 3, md: 3.5 }, width: '100%' }}>
              <Stack direction="row" spacing={2.5} sx={{ alignItems: 'flex-start' }}>
                <IconBadge icon={MailOutlinedIcon} color="#0080FF" size={52} iconSize={26} />
                <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.8 }}>
                  Every service where your phone number is registered can now reach you by email.
                  This means your scheme updates, government notifications, and court summons will
                  now reach you directly in your inbox.
                </Typography>
              </Stack>
            </BentoTile>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 2,
                width: '100%',
              }}
            >
              {STATS.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <BentoTile key={stat.value} delay={240 + i * 70} sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: `${stat.color}1A`,
                          border: `1px solid ${stat.color}40`,
                          flexShrink: 0,
                        }}
                      >
                        <Icon sx={{ fontSize: 24, color: stat.color }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.15, color: stat.valueColor }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', lineHeight: 1.45 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </Stack>
                  </BentoTile>
                )
              })}
            </Box>
          </Stack>

          {/* right column — services reached by email */}
          <Stack spacing={2}>
            {SERVICES.map((s, i) => (
              <BentoTile key={s.title} delay={i * 80} sx={{ p: 2.5 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <IconBadge icon={s.icon} color={s.color} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>{s.title}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>{s.caption}</Typography>
                  </Box>
                </Stack>
              </BentoTile>
            ))}
          </Stack>
        </Box>

        {/* scroll hint */}
        <Reveal delay={200}>
          <Stack direction="row" spacing={2} sx={{ mt: { xs: 7, md: 9 }, alignItems: 'center' }}>
            <Divider sx={{ flexGrow: 1, borderColor: 'rgba(11,27,51,0.1)' }} />
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <MouseOutlinedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography sx={{ fontFamily: fontMono, fontSize: '0.8rem', color: 'text.secondary' }}>
                Scroll to discover more
              </Typography>
            </Stack>
            <Divider sx={{ flexGrow: 1, borderColor: 'rgba(11,27,51,0.1)' }} />
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}
