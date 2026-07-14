import { useState } from 'react'
import { Box, Container, Stack, Typography, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { brand } from '../theme.js'
import Reveal from './Reveal.jsx'

const FAQS = [
  {
    icon: AdminPanelSettingsOutlinedIcon,
    color: '#0080FF',
    q: "Won't my phone number be exposed?",
    a: 'PhoneMail is primarily for inbound communication from governments and service providers. However, to share a PhoneMail ID on business cards and websites without exposing your phone number, PhoneMail provides Alias IDs.',
  },
  {
    icon: MailOutlinedIcon,
    color: '#7C3AED',
    q: "Doesn't everyone already have email?",
    a: 'Most email IDs are created during phone setup, often without the user even realizing it. They exist mainly to enable Play Store access or app logins. Inbox remains dysfunctional. People struggle to open, read, and respond to emails.',
  },
  {
    icon: GppGoodOutlinedIcon,
    color: '#0D9488',
    q: 'What about spam?',
    a: 'Spam never reaches your inbox. Our pre-inbox staging system and whitelisting feature put you in complete control.',
  },
  {
    icon: DescriptionOutlinedIcon,
    color: '#DB2777',
    q: 'What if my phone has dual SIM?',
    a: 'During login, the app detects all active SIMs on the device and allows the user to select the phone number they wish to use for creating their email ID.',
  },
]

export default function FaqSection() {
  const [expanded, setExpanded] = useState(0)

  return (
    <Box component="section" id="faq" sx={{ position: 'relative', py: { xs: 10, md: 14 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
        {/* centered header */}
        <Reveal>
          <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Chip
              icon={<HelpOutlineIcon sx={{ fontSize: 15, color: '#0080FF !important' }} />}
              label="Got Questions?"
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
            <Typography variant="h2" sx={{ fontSize: { xs: '3rem', sm: '3.75rem', md: '4.25rem' }, lineHeight: 1 }}>
              FAQ
              <Box component="span" sx={brand.gradientText}>
                s
              </Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'text.secondary', lineHeight: 1.7 }}>
              Everything you need to know about PhoneMail
            </Typography>
          </Stack>
        </Reveal>

        {/* accordion list */}
        <Stack spacing={2}>
          {FAQS.map((item, i) => {
            const Icon = item.icon
            const open = expanded === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <Accordion
                  expanded={open}
                  onChange={() => setExpanded(open ? false : i)}
                  elevation={0}
                  disableGutters
                  sx={{
                    bgcolor: brand.tileBg,
                    backgroundImage: brand.tileHighlight,
                    border: '1px solid',
                    ...(open
                      ? { borderColor: `${item.color}55`, borderLeft: `3px solid ${item.color}` }
                      : { borderColor: brand.tileBorder }),
                    borderRadius: '16px !important',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: open ? `0 8px 32px ${item.color}22` : 'none',
                    '&:hover': { bgcolor: brand.tileBgHover },
                    '&::before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: open ? item.color : 'text.secondary' }} />}
                    sx={{ px: { xs: 2.5, md: 3 }, py: 1.25 }}
                  >
                    <Stack direction="row" spacing={2.5} sx={{ alignItems: 'center', pr: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: `${item.color}1A`,
                          border: `1px solid ${item.color}40`,
                          flexShrink: 0,
                        }}
                      >
                        <Icon sx={{ fontSize: 22, color: item.color }} />
                      </Box>
                      <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, fontWeight: 600 }}>
                        {item.q}
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 2.5, md: 3 }, pb: 3, pt: 0 }}>
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        pl: { xs: 0, md: '68px' },
                      }}
                    >
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Reveal>
            )
          })}
        </Stack>

        {/* support strip */}
        <Reveal delay={200}>
          <Stack direction="row" spacing={2.5} sx={{ mt: { xs: 6, md: 8 }, alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, borderTop: '1px dashed rgba(11,27,51,0.15)' }} />
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px dashed rgba(0,128,255,0.4)',
                }}
              >
                <HeadsetMicOutlinedIcon sx={{ fontSize: 24, color: '#0080FF' }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.95rem', color: 'text.primary' }}>Still have questions?</Typography>
                <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#0080FF' }}>
                    Contact our support team
                  </Typography>
                  <ChevronRightIcon sx={{ fontSize: 18, color: '#0080FF' }} />
                </Stack>
              </Box>
            </Stack>
            <Box sx={{ flexGrow: 1, borderTop: '1px dashed rgba(11,27,51,0.15)' }} />
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}
