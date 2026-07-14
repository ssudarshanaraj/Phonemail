import { Box, Stack, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MicIcon from '@mui/icons-material/Mic'

function InboxScreen() {
  return (
    <Stack spacing={1} sx={{ p: 1.25 }}>
      <Stack direction="row" spacing={0.75} sx={{ px: 0.5, py: 0.5, alignItems: 'center' }}>
        <MailOutlineIcon sx={{ fontSize: 14, color: '#818CF8' }} />
        <Typography sx={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>Inbox</Typography>
      </Stack>
      {[
        { c: '#818CF8', w: '78%' },
        { c: '#34D399', w: '60%' },
        { c: '#F59E0B', w: '70%' },
        { c: '#A78BFA', w: '50%' },
      ].map((row, i) => (
        <Stack key={i} direction="row" spacing={0.75} sx={{ p: 0.75, borderRadius: 1.5, bgcolor: 'rgba(255,255,255,0.05)', alignItems: 'center' }}>
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: row.c, flexShrink: 0 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ height: 4, width: row.w, bgcolor: 'rgba(255,255,255,0.35)', borderRadius: 1, mb: 0.5 }} />
            <Box sx={{ height: 3, width: '40%', bgcolor: 'rgba(255,255,255,0.15)', borderRadius: 1 }} />
          </Box>
        </Stack>
      ))}
    </Stack>
  )
}

function ChatScreen() {
  return (
    <Stack spacing={1} sx={{ p: 1.25, height: '100%' }}>
      <Stack direction="row" spacing={0.75} sx={{ px: 0.5, py: 0.5, alignItems: 'center' }}>
        <ArrowBackIcon sx={{ fontSize: 12, color: '#9CA3AF' }} />
        <Typography sx={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>District Court</Typography>
      </Stack>
      <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'rgba(129,140,248,0.15)', maxWidth: '80%' }}>
        <Box sx={{ height: 4, width: '90%', bgcolor: 'rgba(255,255,255,0.35)', borderRadius: 1, mb: 0.5 }} />
        <Box sx={{ height: 4, width: '60%', bgcolor: 'rgba(255,255,255,0.35)', borderRadius: 1 }} />
      </Box>
      <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'rgba(255,255,255,0.08)', maxWidth: '75%', alignSelf: 'flex-end' }}>
        <Box sx={{ height: 4, width: '70%', bgcolor: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Stack direction="row" spacing={0.75} sx={{ p: 1, borderRadius: 3, bgcolor: 'rgba(129,140,248,0.15)', alignItems: 'center' }}>
        <MicIcon sx={{ fontSize: 12, color: '#818CF8' }} />
        <Box sx={{ height: 3, width: '50%', bgcolor: 'rgba(255,255,255,0.25)', borderRadius: 1 }} />
      </Stack>
    </Stack>
  )
}

export default function PhoneMockup({ variant = 'inbox' }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: 128, sm: 152 },
        height: { xs: 232, sm: 272 },
        borderRadius: 6,
        p: '10px',
        bgcolor: '#111827',
        border: '2px solid rgba(255,255,255,0.2)',
        boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
        transition: 'transform 0.5s ease',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '35%',
          height: 12,
          bgcolor: '#111827',
          borderRadius: 4,
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          height: '100%',
          borderRadius: 4,
          bgcolor: '#030712',
          overflow: 'hidden',
        }}
      >
        {variant === 'inbox' ? <InboxScreen /> : <ChatScreen />}
      </Box>
    </Box>
  )
}
