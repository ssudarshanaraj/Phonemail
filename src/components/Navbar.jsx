import { useState } from 'react'
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  useScrollTrigger,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'
import { useNavigate, useLocation } from 'react-router-dom'
import { fontMono, brand } from '../theme.js'
import RegisterDialog from './RegisterDialog.jsx'

const NAV_LINKS = [
  { label: 'Explore', href: '#market' },
  { label: 'Features', href: '#solution' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 })

  const handleRegisterClick = () => {
    setDrawerOpen(false)
    setRegisterOpen(true)
  }

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (href) => {
    setDrawerOpen(false)
    const scroll = () => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      // wait for the home sections to mount before scrolling
      setTimeout(scroll, 150)
    } else {
      scroll()
    }
  }

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: { xs: 12, md: 20 },
          left: 0,
          right: 0,
          zIndex: 1200,
          display: 'flex',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            width: '100%',
            maxWidth: 980,
            px: { xs: 2, md: 1 },
            py: 1,
            borderRadius: 999,
            bgcolor: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
            border: '1px solid',
            borderColor: scrolled ? 'rgba(11,27,51,0.12)' : 'rgba(11,27,51,0.06)',
            backdropFilter: 'blur(20px)',
            boxShadow: scrolled ? brand.glowRing : 'none',
            transition: 'all 0.35s ease',
          }}
        >
          <Stack
            direction="row"
            spacing={1.1}
            sx={{ alignItems: 'center', flexGrow: 1, cursor: 'pointer', pl: { xs: 0.5, md: 1.5 } }}
            onClick={() => handleNavClick('body')}
          >
            <Box component="img" src="/logo.svg" alt="PhoneMail logo" sx={{ width: 30, height: 30 }} />
            <Typography sx={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: '1.05rem' }}>
              Phone
              <Box component="span" sx={brand.gradientText}>
                Mail
              </Box>
            </Typography>
            {!isMobile && (
              <Chip
                label="Coming soon"
                size="small"
                className="blink-badge"
                sx={{
                  ml: 0.5,
                  height: 22,
                  fontFamily: fontMono,
                  fontSize: '0.65rem',
                  bgcolor: 'rgba(0,128,255,0.08)',
                  color: 'primary.main',
                  border: '1px solid rgba(0,128,255,0.3)',
                }}
              />
            )}
          </Stack>

          {!isMobile && (
            <Stack direction="row" spacing={0.5} sx={{ pr: 0.5 }}>
              {NAV_LINKS.map((link) => (
                <Box
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    cursor: 'pointer',
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'text.secondary',
                    '&:hover': { color: 'text.primary', bgcolor: 'rgba(0,128,255,0.06)' },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link.label}
                </Box>
              ))}
              <Button
                onClick={handleRegisterClick}
                variant="contained"
                size="small"
                sx={{
                  ml: 1,
                  px: 2.5,
                  fontSize: '0.85rem',
                  background: brand.gradient,
                  boxShadow: '0 8px 24px rgba(0,128,255,0.3)',
                }}
              >
                Register
              </Button>
            </Stack>
          )}

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: { sx: { width: 260, bgcolor: 'background.paper', backgroundImage: 'none' } },
        }}
      >
        <Stack direction="row" sx={{ justifyContent: 'flex-end' }} p={1}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Stack>
        <List sx={{ px: 1 }}>
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
        <Box px={2} pt={0.5}>
          <Button
            onClick={handleRegisterClick}
            variant="contained"
            fullWidth
            sx={{ background: brand.gradient, boxShadow: '0 8px 24px rgba(0,128,255,0.3)' }}
          >
            Register
          </Button>
        </Box>
        <Box px={3} pt={2}>
          <Chip
            label="Coming soon"
            size="small"
            className="blink-badge"
            sx={{ bgcolor: 'rgba(0,128,255,0.08)', color: 'primary.main', fontWeight: 600 }}
          />
        </Box>
      </Drawer>

      <RegisterDialog open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </>
  )
}
