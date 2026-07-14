import { Box, Container, Typography, Stack } from '@mui/material'
import { brand } from '../theme.js'

const DELETE_STEPS = [
  <>Log in to your account.</>,
  <>Go to <strong>Settings</strong> from the navigation menu.</>,
  <>Select <strong>Delete Account</strong>.</>,
  <>Verify your identity by entering the OTP sent to your registered phone number.</>,
  <>Once the OTP is verified, your account will be deleted, and you will be redirected to the login page.</>,
]

const REACTIVATE_STEPS = [
  <>Enter your phone number.</>,
  <>Click Yes.</>,
  <>Verify the OTP sent to your registered mobile number.</>,
  <>After successful verification, your account will be restored.</>,
]

const AFTER_REACTIVATION = [
  'All previously existing emails, including your Inbox and Sent Mail, will be restored.',
  'Any emails that existed before account deletion will remain intact.',
  'All new emails received after reactivation will also be available, ensuring continuity of your email history.',
]

function StepsCard({ steps }) {
  return (
    <Box
      component="ol"
      sx={{
        m: 0,
        pl: 0,
        listStylePosition: 'inside',
        borderRadius: 4,
        border: '1px solid',
        borderColor: brand.tileBorder,
        bgcolor: brand.tileBg,
        px: { xs: 3, md: 3.5 },
        py: 1,
        '& li': {
          py: 2.25,
          fontSize: '0.95rem',
          lineHeight: 1.7,
          color: 'text.secondary',
          borderBottom: '1px solid rgba(11,27,51,0.06)',
          '&:last-child': { borderBottom: 'none' },
          '& strong': { color: 'primary.main' },
        },
      }}
    >
      {steps.map((step, i) => (
        <li key={i}>{step}</li>
      ))}
    </Box>
  )
}

export default function DeleteAccountPage() {
  return (
    <Box component="main" sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
        <Stack spacing={3.5}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' }, lineHeight: 1.1 }}>
            Account Deletion and{' '}
            <Box component="span" sx={brand.gradientText}>
              Reactivation
            </Box>
          </Typography>

          <Typography sx={{ fontSize: '1rem', color: 'text.secondary', lineHeight: 1.7 }}>
            Sorry to see you go! You can deactivate your account at any time by following these steps:
          </Typography>

          <StepsCard steps={DELETE_STEPS} />

          <Typography variant="h3" sx={{ fontSize: '1.35rem', pt: 2 }}>
            Reactivating Your Account
          </Typography>

          <Typography sx={{ fontSize: '1rem', color: 'text.secondary', lineHeight: 1.7 }}>
            If you later log in using the same registered phone number, you will be informed that your
            account has been deleted and will be given the option to{' '}
            <Box component="strong" sx={{ color: 'primary.main' }}>
              Reactivate
            </Box>{' '}
            your account.
          </Typography>

          <Typography sx={{ fontSize: '1rem', color: 'text.secondary' }}>To reactivate your account:</Typography>

          <StepsCard steps={REACTIVATE_STEPS} />

          <Typography sx={{ fontSize: '1rem', color: 'text.secondary' }}>Upon reactivation:</Typography>

          <Box component="ul" sx={{ m: 0, pl: 3, '& li': { fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.7, mb: 1 } }}>
            {AFTER_REACTIVATION.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
