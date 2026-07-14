import { Fade, Fab, useScrollTrigger } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function BackToTop() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 400 })

  return (
    <Fade in={trigger}>
      <Fab
        size="small"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          bgcolor: 'primary.main',
          color: '#fff',
          '&:hover': { bgcolor: 'primary.dark' },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  )
}
