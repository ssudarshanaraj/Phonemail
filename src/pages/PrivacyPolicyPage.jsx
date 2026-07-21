import { Box, Container, Typography, Stack } from '@mui/material'
import { brand } from '../theme.js'

const SECTIONS = [
  {
    title: '1. Information We Collect',
    intro: 'We may collect the following types of information when you interact with our Website:',
    list: [
      <><strong>Cookies and usage data</strong> — collected automatically to help us understand how visitors use the site and to enable certain functionality.</>,
      <><strong>Information you provide</strong> — such as when you post Comments, contact us, or request to link to our Website (name, organization, contact details, and URLs).</>,
      <><strong>Technical data</strong> — such as IP address, browser type, device information, and referring pages, gathered through standard web logging and cookie technology.</>,
    ],
  },
  {
    title: '2. Cookies',
    paragraphs: [
      'We use cookies to retrieve user details on each visit, in order to improve site functionality and user experience. By accessing the Website, you agree to our use of cookies in line with this policy.',
      'Some of our affiliate and advertising partners may also place their own cookies on your device. We do not control these third-party cookies, and we encourage you to review the privacy policies of those partners separately.',
      'You can choose to disable cookies through your browser settings; however, doing so may affect the functionality of parts of the Website.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    intro: 'Information collected may be used to:',
    list: [
      'Operate, maintain, and improve the Website;',
      'Personalize your experience and remember your preferences;',
      'Respond to inquiries, link requests, or support requests;',
      'Monitor and moderate user-submitted Comments;',
      'Comply with legal obligations.',
    ],
  },
  {
    title: '4. User Comments',
    intro: 'Parts of the Website allow users to post and exchange opinions and information. Please note:',
    list: [
      'We do not filter, edit, publish, or review Comments before they appear on the Website.',
      'Comments reflect the views of the individual who posted them, not PhoneMail.',
      'By posting a Comment, you grant PhoneMail a non-exclusive license to use, reproduce, edit, and authorize others to use and reproduce that Comment in any format or media.',
      'We reserve the right to monitor and remove any Comments considered inappropriate, offensive, or in breach of our Terms and Conditions.',
      'Do not submit personal or sensitive information in public Comments, as this content is visible to other users and not treated as confidential.',
    ],
  },
  {
    title: '5. Third-Party Links and Content',
    paragraphs: [
      'Our Website may contain links to third-party websites (e.g., partner organizations, affiliates, or approved linking parties). We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policy of any external site you visit.',
      'We are not responsible for content appearing on websites that link to us, and we do not warrant the completeness or accuracy of any linked or embedded content.',
    ],
  },
  {
    title: '6. Data Sharing and Disclosure',
    intro: 'We do not sell your personal information. We may share limited information:',
    list: [
      'With service providers who help us operate the Website (e.g., hosting, analytics, advertising partners);',
      'When required to comply with a legal obligation, court order, or governmental request;',
      'To protect the rights, property, or safety of PhoneMail, our users, or the public.',
    ],
  },
  {
    title: '7. Data Accuracy and Availability',
    paragraphs: [
      'We do not guarantee that information on the Website is complete, accurate, or up to date, and we make no warranty regarding the continuous availability of the Website or its services.',
    ],
  },
  {
    title: '8. Your Rights',
    intro: 'Depending on applicable law, you may have the right to:',
    list: [
      'Request access to personal data we hold about you;',
      'Request correction or deletion of your personal data;',
      'Object to or restrict certain processing of your data;',
      'Withdraw consent where processing is based on consent (e.g., cookies).',
    ],
    outro: 'To exercise any of these rights, please contact us using the details in Section 12.',
  },
  {
    title: '9. Data Security',
    paragraphs: [
      'We take reasonable technical and organizational measures to protect information collected through the Website. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '10. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by applicable law, PhoneMail excludes all warranties and liability relating to the Website and its use, except where liability cannot legally be excluded — including liability for death, personal injury, or fraud. Where the Website and its services are provided free of charge, we will not be liable for any loss or damage arising from their use.',
    ],
  },
  {
    title: '11. Changes to This Policy',
    paragraphs: [
      'We reserve the right to amend this Privacy Policy at any time. Continued use of the Website following any changes constitutes your acceptance of the revised policy.',
    ],
  },
  {
    title: '12. Contact Us',
    paragraphs: [
      <>If you have questions about this Privacy Policy, or wish to request removal of a link, content, or personal data, please contact us at <strong>contact@phonemail.com</strong>.</>,
    ],
  },
]

const textSx = { fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.7, '& strong': { color: 'text.primary' } }

export default function PrivacyPolicyPage() {
  return (
    <Box component="main" sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' }, lineHeight: 1.1, mb: 1 }}>
              Privacy{' '}
              <Box component="span" sx={brand.gradientText}>
                Policy
              </Box>
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
              Website: phonemail.in &nbsp;·&nbsp; App: PhoneMail
            </Typography>
          </Box>

          <Typography sx={textSx}>
            This Privacy Policy explains how PhoneMail (&quot;the Company&quot;, &quot;We&quot;, &quot;Our&quot;,
            &quot;Us&quot;) collects, uses, and protects information when you (&quot;the Client&quot;,
            &quot;You&quot;, &quot;Your&quot;) visit or use phonemail.in (the &quot;Website&quot;). By using the
            PhoneMail app, you agree to the collection and use of information in accordance with this policy, as
            referenced in our Terms and Conditions.
          </Typography>

          {SECTIONS.map((section) => (
            <Box
              key={section.title}
              sx={{
                borderRadius: 4,
                border: '1px solid',
                borderColor: brand.tileBorder,
                bgcolor: brand.tileBg,
                px: { xs: 3, md: 3.5 },
                py: 3,
              }}
            >
              <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 1.5 }}>
                {section.title}
              </Typography>
              {section.intro && <Typography sx={{ ...textSx, mb: 1 }}>{section.intro}</Typography>}
              {section.paragraphs &&
                section.paragraphs.map((p, i) => (
                  <Typography key={i} sx={{ ...textSx, mb: i < section.paragraphs.length - 1 ? 1.5 : 0 }}>
                    {p}
                  </Typography>
                ))}
              {section.list && (
                <Box component="ul" sx={{ m: 0, pl: 3, '& li': { ...textSx, mb: 1, '&:last-child': { mb: 0 } } }}>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Box>
              )}
              {section.outro && <Typography sx={{ ...textSx, mt: 1 }}>{section.outro}</Typography>}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
