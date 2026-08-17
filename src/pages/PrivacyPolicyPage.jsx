import { Box, Container, Typography, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { brand } from '../theme.js'

// Content is keyed by language. The mobile app opens a different link per
// language: /privacy-policy (or /privacy-policy/en) for English and
// /privacy-policy/ta for Tamil.
const CONTENT = {
  en: {
    heading: { pre: 'Privacy', highlight: 'Policy' },
    meta: 'Website: phonemail.in  ·  App: PhoneMail',
    intro:
      'This Privacy Policy explains how PhoneMail ("the Company", "We", "Our", "Us") collects, uses, and protects information when you ("the Client", "You", "Your") visit or use phonemail.in (the "Website"). By using the PhoneMail app, you agree to the collection and use of information in accordance with this policy, as referenced in our Terms and Conditions.',
    sections: [
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
          <>If you have questions about this Privacy Policy, or wish to request removal of a link, content, or personal data, please contact PhoneMail via the contact details provided on <strong>phonemail.in</strong>.</>,
        ],
      },
    ],
  },

  ta: {
    heading: { pre: 'தனியுரிமை', highlight: 'கொள்கை' },
    meta: 'இணையதளம்: phonemail.in  ·  செயலி: PhoneMail',
    intro:
      'இந்தத் தனியுரிமைக் கொள்கை, நீங்கள் ("வாடிக்கையாளர்", "நீங்கள்", "உங்கள்") phonemail.in ("இணையதளம்") ஐப் பார்வையிடும்போது அல்லது பயன்படுத்தும்போது, PhoneMail ("நிறுவனம்", "நாங்கள்", "எங்கள்") எவ்வாறு தகவலைச் சேகரிக்கிறது, பயன்படுத்துகிறது மற்றும் பாதுகாக்கிறது என்பதை விளக்குகிறது. PhoneMail செயலியைப் பயன்படுத்துவதன் மூலம், எங்கள் விதிமுறைகள் மற்றும் நிபந்தனைகளில் குறிப்பிடப்பட்டுள்ளபடி, இந்தக் கொள்கையின்படி தகவல் சேகரிப்பு மற்றும் பயன்பாட்டிற்கு நீங்கள் ஒப்புக்கொள்கிறீர்கள்.',
    sections: [
      {
        title: '1. நாங்கள் சேகரிக்கும் தகவல்',
        intro: 'எங்கள் இணையதளத்துடன் நீங்கள் தொடர்பு கொள்ளும்போது பின்வரும் வகையான தகவல்களை நாங்கள் சேகரிக்கலாம்:',
        list: [
          <><strong>குக்கீகள் மற்றும் பயன்பாட்டுத் தரவு</strong> — பார்வையாளர்கள் தளத்தை எவ்வாறு பயன்படுத்துகிறார்கள் என்பதைப் புரிந்துகொள்ளவும், சில செயல்பாடுகளை இயக்கவும் தானாகவே சேகரிக்கப்படுகிறது.</>,
          <><strong>நீங்கள் வழங்கும் தகவல்</strong> — கருத்துகளை இடுகையிடும்போது, எங்களைத் தொடர்பு கொள்ளும்போது அல்லது எங்கள் இணையதளத்துடன் இணைக்கக் கோரும்போது (பெயர், நிறுவனம், தொடர்பு விவரங்கள் மற்றும் URLகள்).</>,
          <><strong>தொழில்நுட்பத் தரவு</strong> — நிலையான இணையப் பதிவு மற்றும் குக்கீ தொழில்நுட்பம் மூலம் சேகரிக்கப்படும் IP முகவரி, உலாவி வகை, சாதனத் தகவல் மற்றும் பரிந்துரைக்கும் பக்கங்கள் போன்றவை.</>,
        ],
      },
      {
        title: '2. குக்கீகள்',
        paragraphs: [
          'ஒவ்வொரு வருகையிலும் பயனர் விவரங்களை மீட்டெடுக்க நாங்கள் குக்கீகளைப் பயன்படுத்துகிறோம், இதன் மூலம் தளச் செயல்பாடு மற்றும் பயனர் அனுபவத்தை மேம்படுத்துகிறோம். இணையதளத்தை அணுகுவதன் மூலம், இந்தக் கொள்கைக்கு ஏற்ப குக்கீகளைப் பயன்படுத்துவதற்கு நீங்கள் ஒப்புக்கொள்கிறீர்கள்.',
          'எங்கள் சில இணை மற்றும் விளம்பரப் பங்குதாரர்கள் உங்கள் சாதனத்தில் தங்களுடைய சொந்தக் குக்கீகளையும் வைக்கலாம். இந்த மூன்றாம் தரப்பு குக்கீகளை நாங்கள் கட்டுப்படுத்துவதில்லை, மேலும் அந்தப் பங்குதாரர்களின் தனியுரிமைக் கொள்கைகளைத் தனித்தனியாக மதிப்பாய்வு செய்யுமாறு நாங்கள் உங்களை ஊக்குவிக்கிறோம்.',
          'உங்கள் உலாவி அமைப்புகள் மூலம் குக்கீகளை முடக்கத் தேர்வு செய்யலாம்; இருப்பினும், அவ்வாறு செய்வது இணையதளத்தின் சில பகுதிகளின் செயல்பாட்டைப் பாதிக்கலாம்.',
        ],
      },
      {
        title: '3. உங்கள் தகவலை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்',
        intro: 'சேகரிக்கப்பட்ட தகவல் பின்வருவனவற்றிற்குப் பயன்படுத்தப்படலாம்:',
        list: [
          'இணையதளத்தை இயக்க, பராமரிக்க மற்றும் மேம்படுத்த;',
          'உங்கள் அனுபவத்தைத் தனிப்பயனாக்கவும் உங்கள் விருப்பங்களை நினைவில் கொள்ளவும்;',
          'விசாரணைகள், இணைப்புக் கோரிக்கைகள் அல்லது ஆதரவுக் கோரிக்கைகளுக்குப் பதிலளிக்க;',
          'பயனர்கள் சமர்ப்பித்த கருத்துகளைக் கண்காணித்து மேற்பார்வையிட;',
          'சட்டப் பொறுப்புகளைக் கடைப்பிடிக்க.',
        ],
      },
      {
        title: '4. பயனர் கருத்துகள்',
        intro: 'இணையதளத்தின் சில பகுதிகள் பயனர்கள் கருத்துகளையும் தகவல்களையும் இடுகையிடவும் பரிமாறிக்கொள்ளவும் அனுமதிக்கின்றன. தயவுசெய்து கவனிக்கவும்:',
        list: [
          'கருத்துகள் இணையதளத்தில் தோன்றுவதற்கு முன் நாங்கள் அவற்றை வடிகட்டவோ, திருத்தவோ, வெளியிடவோ அல்லது மதிப்பாய்வு செய்யவோ இல்லை.',
          'கருத்துகள் அவற்றை இடுகையிட்ட தனிநபரின் கருத்துகளைப் பிரதிபலிக்கின்றன, PhoneMail இன் கருத்துகளை அல்ல.',
          'ஒரு கருத்தை இடுகையிடுவதன் மூலம், அந்தக் கருத்தை எந்த வடிவத்திலும் அல்லது ஊடகத்திலும் பயன்படுத்த, மறுஉருவாக்கம் செய்ய, திருத்த மற்றும் மற்றவர்களைப் பயன்படுத்தவும் மறுஉருவாக்கம் செய்யவும் அங்கீகரிக்க PhoneMail க்கு ஒரு தனியுரிமையற்ற உரிமத்தை நீங்கள் வழங்குகிறீர்கள்.',
          'பொருத்தமற்றதாக, புண்படுத்தும் விதமாக அல்லது எங்கள் விதிமுறைகள் மற்றும் நிபந்தனைகளை மீறுவதாகக் கருதப்படும் எந்தக் கருத்துகளையும் கண்காணித்து அகற்றும் உரிமையை நாங்கள் கொண்டுள்ளோம்.',
          'பொதுக் கருத்துகளில் தனிப்பட்ட அல்லது முக்கியமான தகவலைச் சமர்ப்பிக்க வேண்டாம், ஏனெனில் இந்த உள்ளடக்கம் மற்ற பயனர்களுக்குத் தெரியும் மற்றும் இரகசியமாகக் கருதப்படாது.',
        ],
      },
      {
        title: '5. மூன்றாம் தரப்பு இணைப்புகள் மற்றும் உள்ளடக்கம்',
        paragraphs: [
          'எங்கள் இணையதளத்தில் மூன்றாம் தரப்பு இணையதளங்களுக்கான இணைப்புகள் (எ.கா., பங்குதாரர் நிறுவனங்கள், இணை நிறுவனங்கள் அல்லது அங்கீகரிக்கப்பட்ட இணைப்புத் தரப்புகள்) இருக்கலாம். எந்த மூன்றாம் தரப்பு தளங்களின் உள்ளடக்கம், தனியுரிமைக் கொள்கைகள் அல்லது நடைமுறைகள் மீதும் எங்களுக்குக் கட்டுப்பாடு இல்லை, மேலும் எந்தப் பொறுப்பையும் நாங்கள் ஏற்கவில்லை. நீங்கள் பார்வையிடும் எந்த வெளிப்புறத் தளத்தின் தனியுரிமைக் கொள்கையையும் மதிப்பாய்வு செய்யுமாறு நாங்கள் உங்களை ஊக்குவிக்கிறோம்.',
          'எங்களுடன் இணைக்கும் இணையதளங்களில் தோன்றும் உள்ளடக்கத்திற்கு நாங்கள் பொறுப்பல்ல, மேலும் இணைக்கப்பட்ட அல்லது உட்பொதிக்கப்பட்ட எந்த உள்ளடக்கத்தின் முழுமை அல்லது துல்லியத்திற்கும் நாங்கள் உத்தரவாதம் அளிக்கவில்லை.',
        ],
      },
      {
        title: '6. தரவு பகிர்வு மற்றும் வெளிப்படுத்தல்',
        intro: 'உங்கள் தனிப்பட்ட தகவலை நாங்கள் விற்பனை செய்வதில்லை. நாங்கள் வரையறுக்கப்பட்ட தகவலைப் பகிரலாம்:',
        list: [
          'இணையதளத்தை இயக்க எங்களுக்கு உதவும் சேவை வழங்குநர்களுடன் (எ.கா., ஹோஸ்டிங், பகுப்பாய்வு, விளம்பரப் பங்குதாரர்கள்);',
          'சட்டப் பொறுப்பு, நீதிமன்ற உத்தரவு அல்லது அரசாங்கக் கோரிக்கையைக் கடைப்பிடிக்க வேண்டியிருக்கும்போது;',
          'PhoneMail, எங்கள் பயனர்கள் அல்லது பொதுமக்களின் உரிமைகள், சொத்து அல்லது பாதுகாப்பைப் பாதுகாக்க.',
        ],
      },
      {
        title: '7. தரவு துல்லியம் மற்றும் கிடைக்கும் தன்மை',
        paragraphs: [
          'இணையதளத்தில் உள்ள தகவல் முழுமையானது, துல்லியமானது அல்லது புதுப்பிக்கப்பட்டது என்பதற்கு நாங்கள் உத்தரவாதம் அளிக்கவில்லை, மேலும் இணையதளம் அல்லது அதன் சேவைகள் தொடர்ந்து கிடைக்கும் தன்மை குறித்து நாங்கள் எந்த உத்தரவாதமும் அளிக்கவில்லை.',
        ],
      },
      {
        title: '8. உங்கள் உரிமைகள்',
        intro: 'பொருந்தக்கூடிய சட்டத்தைப் பொறுத்து, உங்களுக்குப் பின்வரும் உரிமைகள் இருக்கலாம்:',
        list: [
          'உங்களைப் பற்றி நாங்கள் வைத்திருக்கும் தனிப்பட்ட தரவை அணுகக் கோர;',
          'உங்கள் தனிப்பட்ட தரவைத் திருத்த அல்லது நீக்கக் கோர;',
          'உங்கள் தரவின் சில செயலாக்கத்தை எதிர்க்க அல்லது கட்டுப்படுத்த;',
          'செயலாக்கம் ஒப்புதலின் அடிப்படையில் இருக்கும்போது ஒப்புதலைத் திரும்பப் பெற (எ.கா., குக்கீகள்).',
        ],
        outro: 'இந்த உரிமைகளில் ஏதேனும் ஒன்றைப் பயன்படுத்த, பிரிவு 12 இல் உள்ள விவரங்களைப் பயன்படுத்தி எங்களைத் தொடர்பு கொள்ளவும்.',
      },
      {
        title: '9. தரவு பாதுகாப்பு',
        paragraphs: [
          'இணையதளம் மூலம் சேகரிக்கப்படும் தகவலைப் பாதுகாக்க நாங்கள் நியாயமான தொழில்நுட்ப மற்றும் நிறுவன நடவடிக்கைகளை மேற்கொள்கிறோம். இருப்பினும், இணையம் வழியாகப் பரிமாற்றம் செய்யும் எந்த முறையும் அல்லது மின்னணு சேமிப்பும் முழுமையாகப் பாதுகாப்பானது அல்ல, மேலும் முழுமையான பாதுகாப்பிற்கு நாங்கள் உத்தரவாதம் அளிக்க முடியாது.',
        ],
      },
      {
        title: '10. பொறுப்பு வரம்பு',
        paragraphs: [
          'பொருந்தக்கூடிய சட்டத்தால் அனுமதிக்கப்பட்ட அதிகபட்ச அளவிற்கு, மரணம், தனிப்பட்ட காயம் அல்லது மோசடிக்கான பொறுப்பு உட்பட — சட்டப்பூர்வமாகப் பொறுப்பை விலக்க முடியாத இடங்களைத் தவிர, இணையதளம் மற்றும் அதன் பயன்பாடு தொடர்பான அனைத்து உத்தரவாதங்களையும் பொறுப்பையும் PhoneMail விலக்குகிறது. இணையதளமும் அதன் சேவைகளும் இலவசமாக வழங்கப்படும் இடத்தில், அவற்றைப் பயன்படுத்துவதால் ஏற்படும் எந்த இழப்பு அல்லது சேதத்திற்கும் நாங்கள் பொறுப்பேற்க மாட்டோம்.',
        ],
      },
      {
        title: '11. இந்தக் கொள்கையில் மாற்றங்கள்',
        paragraphs: [
          'இந்தத் தனியுரிமைக் கொள்கையை எந்த நேரத்திலும் திருத்தும் உரிமையை நாங்கள் கொண்டுள்ளோம். ஏதேனும் மாற்றங்களைத் தொடர்ந்து இணையதளத்தைத் தொடர்ந்து பயன்படுத்துவது திருத்தப்பட்ட கொள்கையை நீங்கள் ஏற்றுக்கொள்வதைக் குறிக்கிறது.',
        ],
      },
      {
        title: '12. எங்களைத் தொடர்பு கொள்ளுங்கள்',
        paragraphs: [
          <>இந்தத் தனியுரிமைக் கொள்கை குறித்து உங்களுக்குக் கேள்விகள் இருந்தால், அல்லது ஒரு இணைப்பு, உள்ளடக்கம் அல்லது தனிப்பட்ட தரவை அகற்றக் கோர விரும்பினால், <strong>phonemail.in</strong> இல் வழங்கப்பட்டுள்ள தொடர்பு விவரங்கள் மூலம் PhoneMail ஐத் தொடர்பு கொள்ளவும்.</>,
        ],
      },
    ],
  },
}

const textSx = { fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.7, '& strong': { color: 'text.primary' } }

export default function PrivacyPolicyPage() {
  const { lang } = useParams()
  const content = CONTENT[lang] ?? CONTENT.en
  // When a language param is present the page is embedded in the mobile app
  // without the site navbar, so it needs far less top padding.
  const embedded = Boolean(lang)

  return (
    <Box
      component="main"
      sx={{
        pt: embedded ? { xs: 4, md: 5 } : { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 4 } }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' }, lineHeight: 1.1, mb: 1 }}>
              {content.heading.pre}{' '}
              <Box component="span" sx={brand.gradientText}>
                {content.heading.highlight}
              </Box>
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
              {content.meta}
            </Typography>
          </Box>

          <Typography sx={textSx}>{content.intro}</Typography>

          {content.sections.map((section) => (
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
