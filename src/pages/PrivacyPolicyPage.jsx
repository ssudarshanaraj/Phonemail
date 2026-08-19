import { Box, Container, Typography, Stack, Link } from '@mui/material'
import { useParams } from 'react-router-dom'
import { brand } from '../theme.js'

const supportEmail = (
  <Link href="mailto:support@phonemail.in" sx={{ color: 'inherit', textDecorationColor: 'currentColor' }}>
    support@phonemail.in
  </Link>
)

// Content is keyed by language. The mobile app opens a different link per
// language: /privacy-policy (or /privacy-policy/en) for English and
// /privacy-policy/ta for Tamil.
//
// A section can use either the simple fields (intro / paragraphs / list /
// outro) or a `blocks` array for richer layouts. Each block is one of:
//   { subtitle: '…' }  — a bold sub-heading
//   { text: … }        — a paragraph
//   { list: [ … ] }    — a bulleted list
const CONTENT = {
  en: {
    heading: { pre: 'Privacy', highlight: 'Policy' },
    meta: 'App: PhoneMail  ·  Genezei Global Solutions Private Limited',
    intro:
      'This Privacy Policy applies to the PhoneMail mobile application ("the App") developed and operated by Genezei Global Solutions Private Limited. This Privacy Policy explains how we collect, use, store, process, and protect user information when you use the App and related services. By using the App, you agree to the practices described in this Privacy Policy.',
    sections: [
      {
        title: '1. App and Developer Identification',
        blocks: [
          { text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, you may contact us using the details below:' },
          {
            list: [
              <><strong>App Name:</strong> PhoneMail</>,
              <><strong>Company Name:</strong> Genezei Global Solutions Private Limited</>,
              <><strong>Developer Name:</strong> Rajesh Raghupathi</>,
              <><strong>Contact Email:</strong> {supportEmail}</>,
            ],
          },
        ],
      },
      {
        title: '2. User Data Collection Disclosure',
        blocks: [
          { text: 'PhoneMail collects, stores, processes, and uses certain user information to provide email, messaging, backup, and related services through the App.' },
          { subtitle: 'Personal Information' },
          {
            list: [
              <>Mobile number (used as your account identity and email address, e.g. &lt;number&gt;@phonemail.in)</>,
              'Display name and profile image',
              'Email content, subject lines, and attachments you send or receive',
              'Contacts you choose to email (for addressing purposes)',
            ],
          },
          { subtitle: 'Attachment and Media Information' },
          { list: ['Images, files, and voice-note recordings you choose to attach to an email'] },
          { subtitle: 'Authentication Information' },
          {
            list: [
              'OTP verification codes sent to your registered mobile number',
              'Login session / authentication tokens',
            ],
          },
          { subtitle: 'Contacts Information' },
          {
            list: [
              'Device contact names and phone numbers, read locally to classify inbox senders as Known/Unknown, support compose auto-suggestions, and notify contacts if you change your registered number (see Section 3)',
            ],
          },
          { subtitle: 'Device and Technical Information' },
          { text: 'Certain technical and device-related information may be collected automatically, including:' },
          {
            list: [
              'Device identifiers',
              'Push-notification tokens',
              'App version and device / OS information',
              'Network connectivity status',
            ],
          },
          { subtitle: 'Third-Party Services and SDKs' },
          { text: 'The App may use third-party services such as:' },
          {
            list: [
              <><strong>Firebase</strong> — push notifications and app diagnostics</>,
              <><strong>Google Sign-In / Google Drive</strong> — for the optional backup and restore feature, when you choose to enable it</>,
            ],
          },
          { text: 'These third-party services may collect certain technical information in accordance with their own privacy policies.' },
          { subtitle: 'Information Not Intentionally Collected' },
          { text: 'The App does not intentionally collect:' },
          {
            list: [
              'Precise or coarse location data',
              'Payment card or banking information',
              'General SMS message content (see Section 8 regarding OTP auto-fill)',
              'Contacts data beyond local, on-device matching described in Section 3',
            ],
          },
        ],
      },
      {
        title: '3. Purpose of Data Collection',
        blocks: [
          { text: 'PhoneMail collects and uses user information for service-related purposes, including:' },
          {
            list: [
              <><strong>Account Registration and Login</strong> — To create and authenticate your account using your mobile number, automatically verify OTP codes, and keep you signed in across sessions.</>,
              <><strong>Email Service Delivery</strong> — To send, receive, store, organize (Inbox, Favourite, Spam, Archive, Trash), and display your emails and attachments, including image, file, and voice-note attachments you choose to send.</>,
              <><strong>Contact Matching</strong> — To read your device contacts locally and match them against PhoneMail's user directory, so senders can be classified as Known or Unknown, to support compose auto-suggestions, and to notify your contacts if you change your registered mobile number.</>,
              <><strong>Push Notifications</strong> — To alert you about new mail, delivery status, and account activity, including while the app is closed, via background sync and push notification services.</>,
              <><strong>Backup and Restore</strong> — When you choose to use the Google Drive backup feature, to back up and restore your mail data to your own Google Drive account.</>,
              <><strong>Web Login</strong> — To let you sign in to a companion web session by scanning a QR code from the app.</>,
              <><strong>Security and Fraud Prevention</strong> — To detect suspicious login activity, protect your account, and maintain the integrity of the service.</>,
              <><strong>Service Improvement and Support</strong> — To diagnose technical issues, respond to support requests, and improve app performance and reliability.</>,
            ],
          },
          { text: 'PhoneMail does not use personal information for unauthorized advertising or unlawful marketing purposes.' },
        ],
      },
      {
        title: '4. Data Sharing and Third Parties',
        blocks: [
          { text: 'PhoneMail does not sell, rent, trade, or share users’ personal information with third parties for marketing or commercial purposes.' },
          { text: 'User information collected through the App is used solely for providing application services such as:' },
          {
            list: [
              'User authentication',
              'Email sending and delivery',
              'Contact matching for inbox classification',
              'Backup and restore (Google Drive, when enabled by you)',
              'Push notification services',
              'Customer support',
            ],
          },
          { text: 'The App may use trusted technical service providers such as Firebase and Google for authentication, notifications, backup, and related technical functionality. These providers process only the information required for their function.' },
          { text: 'Except where required by law, regulatory obligation, or legal process, PhoneMail does not disclose personal information to external organizations or unauthorized parties.' },
        ],
      },
      {
        title: '5. Data Retention',
        blocks: [
          { text: 'PhoneMail does not permanently retain user data on its backend servers beyond what is necessary to provide the service.' },
          {
            list: [
              <><strong>Mail and Attachments</strong> — Emails and attachments are retained to support delivery, sync, and the folders you manage (Inbox, Archive, Trash). Deleting a mail or emptying Trash removes it from active storage.</>,
              <><strong>Account Information</strong> — Your mobile number and profile details are retained only while your account remains active.</>,
              <><strong>Contacts</strong> — Device contacts are matched locally on your device for the purposes described in Section 3 and are not permanently stored on PhoneMail's backend.</>,
              <><strong>Backup Data</strong> — Data backed up via Google Drive is stored in your own Google Drive account, governed by your Google account and Google's own retention practices, not on PhoneMail's servers.</>,
              <><strong>Technical / Diagnostic Logs</strong> — Device and technical information may be retained temporarily for troubleshooting, security monitoring, and service reliability, and is not kept longer than operationally necessary.</>,
            ],
          },
          { text: 'Account deletion and the limits on permanent removal of message content are described in Section 6.' },
        ],
      },
      {
        title: '6. Account Deletion and Reactivation',
        blocks: [
          { text: 'PhoneMail provides users with an in-app option to delete their account.' },
          { text: 'To request account deletion:' },
          {
            list: [
              'Log in to your account.',
              'Go to Settings from the navigation menu.',
              'Select Delete Account.',
              'Verify your identity by entering the OTP sent to your registered phone number.',
              'Once the OTP is successfully verified, the account will be deleted and you will be redirected to the login page.',
            ],
          },
          { subtitle: 'Temporary Retention and Reactivation' },
          { text: 'After an account deletion request is completed, the account may remain in a deactivated state to allow the user to reactivate the account at a later time.' },
          { text: 'If the user subsequently logs in using the same registered phone number, they will be informed that their account has been deleted and will be provided with the option to reactivate the account.' },
          { text: 'To reactivate the account:' },
          {
            list: [
              'Enter the registered phone number.',
              'Select Yes to proceed with reactivation.',
              'Verify the OTP sent to the registered mobile number.',
              'Upon successful OTP verification, the account will be restored.',
            ],
          },
          { text: 'Upon reactivation:' },
          {
            list: [
              'All previously existing emails, including emails in the Inbox and Sent Mail, will be restored.',
              'Emails that existed before account deletion will remain intact.',
              'Any new emails received after reactivation will also be available, ensuring continuity of the user’s email history.',
            ],
          },
          { subtitle: 'Permanent Deletion — Important Limitation' },
          { text: 'Because the user’s registered phone number also serves as their email address/alias within PhoneMail, PhoneMail cannot guarantee the permanent or complete deletion of all personal information associated with the account. Specifically:' },
          {
            list: [
              'Emails sent by a user may remain in the recipient’s Inbox or Sent Mail because the content resides within the recipient’s own account and cannot be unilaterally removed by PhoneMail.',
              'Emails sent to the user by other users may remain associated with the user’s phone-number-based email address within the sender’s records.',
              'PhoneMail does not independently retain or make further use of message content after an account is deleted. Any continued availability of such content exists within the mailbox of the other party involved in the email exchange, as an inherent part of messaging and email delivery.',
              'Account and security metadata may be retained for the period required to meet applicable legal, regulatory, fraud-prevention, or dispute-resolution obligations.',
            ],
          },
          { text: 'This limitation is disclosed to users so they can make an informed decision before requesting account deletion.' },
        ],
      },
      {
        title: '7. Security Practices',
        blocks: [
          { text: 'PhoneMail implements reasonable administrative, technical, and organizational security measures to help protect user information from unauthorized access, misuse, alteration, disclosure, or destruction.' },
          { text: 'Our security practices may include:' },
          {
            list: [
              'OTP-based authentication for login, deletion, and reactivation',
              'Secure local storage of authentication tokens on-device',
              'Restricted internal access to authorized personnel only',
              'Secure server and database infrastructure',
              'Monitoring and protection against unauthorized access attempts',
            ],
          },
          { text: 'While we take reasonable steps to protect personal information, no method of electronic transmission or storage can be guaranteed to be completely secure.' },
        ],
      },
      {
        title: '8. Permission Usage Disclosure',
        blocks: [
          { text: 'PhoneMail requests only the permissions necessary for the App’s core functionality:' },
          {
            list: [
              <><strong>Phone Number / Phone State</strong> — Used to automatically detect and prefill your device's phone number during signup and login, since your phone number is your PhoneMail account identity.</>,
              <><strong>SMS (OTP Auto-Fill)</strong> — PhoneMail auto-reads one-time verification codes to streamline login and account verification, using the Android SMS Retriever mechanism. This does not require broad SMS read permission and does not access the content of your other text messages.</>,
              <><strong>Contacts</strong> — Used locally on your device to classify inbox senders as Known/Unknown, support compose auto-suggestions, and notify contacts of a number change. Your contact list is not uploaded or permanently stored on PhoneMail's servers.</>,
              <><strong>Camera</strong> — Used to capture photos for email attachments, profile pictures, and to scan QR codes for the Web Login feature.</>,
              <><strong>Microphone</strong> — Used only when you choose to record a voice-note attachment for an email.</>,
              <><strong>Storage / Media</strong> — Used to attach, download, and open files, images, and videos within emails.</>,
              <><strong>Notifications</strong> — Used to alert you about new mail and account-related activity.</>,
            ],
          },
          { subtitle: 'Permissions Not Requested' },
          { text: 'PhoneMail does not request or use:' },
          {
            list: [
              'Precise or coarse location',
              'Microphone access outside of user-initiated voice-note recording',
              'Contacts access for any purpose beyond local matching described above',
            ],
          },
        ],
      },
      {
        title: '9. Sensitive Data Handling',
        blocks: [
          { text: 'PhoneMail processes only the information necessary to provide its email service.' },
          { subtitle: 'Sensitive Information' },
          { text: 'The App may process:' },
          {
            list: [
              'Email content and attachments (including images, files, and voice notes) you choose to send or receive',
              'OTP and authentication information required for login, deletion, and reactivation',
            ],
          },
          { subtitle: 'Information Not Collected' },
          { text: 'PhoneMail does not request, access, or collect:' },
          {
            list: [
              'Precise location information',
              'Financial or banking information',
              'General SMS message content',
              'Microphone access outside voice-note attachments you create',
            ],
          },
        ],
      },
      {
        title: '10. Children’s Privacy',
        paragraphs: [
          'PhoneMail is not intended for use by children under the age of 18. The App does not knowingly collect, store, or process personal information from children. If we become aware that personal information belonging to a child has been collected unintentionally, we will take reasonable steps to delete such information from our systems.',
          <>Parents or guardians who believe a child may have provided personal information through the App may contact us at {supportEmail}.</>,
        ],
      },
      {
        title: '11. Your Rights',
        intro: 'Depending on applicable law, you may:',
        list: [
          'Access or correct your personal details',
          'Request deletion of your account and data (see Section 6)',
          'Opt out of promotional or non-essential notifications',
        ],
        outro: <>To exercise these rights, contact us at {supportEmail}.</>,
      },
      {
        title: '12. Updates to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. We will notify you through the App or via email when material changes occur. Continued use of the App following any changes constitutes acceptance of the revised policy.',
        ],
      },
      {
        title: '13. Contact Us',
        blocks: [
          { text: 'If you have questions, concerns, or requests regarding this Privacy Policy, contact us at:' },
          {
            list: [
              <><strong>Email:</strong> {supportEmail}</>,
              <><strong>Developer:</strong> Rajesh Raghupathi</>,
              <><strong>Company:</strong> Genezei Global Solutions Private Limited</>,
            ],
          },
        ],
      },
    ],
  },

  ta: {
    heading: { pre: 'தனியுரிமை', highlight: 'கொள்கை' },
    meta: 'செயலி: PhoneMail  ·  Genezei Global Solutions Private Limited',
    intro:
      'இந்தத் தனியுரிமைக் கொள்கை, Genezei Global Solutions Private Limited நிறுவனத்தால் உருவாக்கப்பட்டு இயக்கப்படும் PhoneMail மொபைல் செயலிக்கு ("செயலி") பொருந்தும். நீங்கள் செயலியையும் அது தொடர்பான சேவைகளையும் பயன்படுத்தும்போது, உங்கள் தகவலை நாங்கள் எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம், சேமிக்கிறோம், செயலாக்குகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதை இந்தக் கொள்கை விளக்குகிறது. செயலியைப் பயன்படுத்துவதன் மூலம், இந்தத் தனியுரிமைக் கொள்கையில் விவரிக்கப்பட்டுள்ள நடைமுறைகளுக்கு நீங்கள் ஒப்புக்கொள்கிறீர்கள்.',
    sections: [
      {
        title: '1. செயலி மற்றும் டெவலப்பர் அடையாளம்',
        blocks: [
          { text: 'இந்தத் தனியுரிமைக் கொள்கை அல்லது உங்கள் தனிப்பட்ட தகவல் குறித்து ஏதேனும் கேள்விகள், கவலைகள் அல்லது கோரிக்கைகள் இருந்தால், கீழே உள்ள விவரங்களைப் பயன்படுத்தி எங்களைத் தொடர்பு கொள்ளலாம்:' },
          {
            list: [
              <><strong>செயலியின் பெயர்:</strong> PhoneMail</>,
              <><strong>நிறுவனத்தின் பெயர்:</strong> Genezei Global Solutions Private Limited</>,
              <><strong>டெவலப்பர் பெயர்:</strong> Rajesh Raghupathi</>,
              <><strong>தொடர்பு மின்னஞ்சல்:</strong> {supportEmail}</>,
            ],
          },
        ],
      },
      {
        title: '2. பயனர் தரவு சேகரிப்பு வெளிப்படுத்தல்',
        blocks: [
          { text: 'மின்னஞ்சல், செய்தியிடல், காப்புப்பிரதி மற்றும் அது தொடர்பான சேவைகளை செயலி மூலம் வழங்க, PhoneMail சில பயனர் தகவல்களைச் சேகரிக்கிறது, சேமிக்கிறது, செயலாக்குகிறது மற்றும் பயன்படுத்துகிறது.' },
          { subtitle: 'தனிப்பட்ட தகவல்' },
          {
            list: [
              <>மொபைல் எண் (உங்கள் கணக்கு அடையாளம் மற்றும் மின்னஞ்சல் முகவரியாகப் பயன்படுத்தப்படுகிறது, எ.கா. &lt;எண்&gt;@phonemail.in)</>,
              'காட்சிப் பெயர் மற்றும் சுயவிவரப் படம்',
              'நீங்கள் அனுப்பும் அல்லது பெறும் மின்னஞ்சல் உள்ளடக்கம், தலைப்பு வரிகள் மற்றும் இணைப்புகள்',
              'நீங்கள் மின்னஞ்சல் அனுப்பத் தேர்வுசெய்யும் தொடர்புகள் (முகவரியிடும் நோக்கத்திற்காக)',
            ],
          },
          { subtitle: 'இணைப்பு மற்றும் மீடியா தகவல்' },
          { list: ['ஒரு மின்னஞ்சலுடன் இணைக்கத் தேர்வுசெய்யும் படங்கள், கோப்புகள் மற்றும் குரல்-குறிப்பு பதிவுகள்'] },
          { subtitle: 'அங்கீகாரத் தகவல்' },
          {
            list: [
              'உங்கள் பதிவுசெய்யப்பட்ட மொபைல் எண்ணுக்கு அனுப்பப்படும் OTP சரிபார்ப்புக் குறியீடுகள்',
              'உள்நுழைவு அமர்வு / அங்கீகார டோக்கன்கள்',
            ],
          },
          { subtitle: 'தொடர்புகள் தகவல்' },
          {
            list: [
              'சாதனத் தொடர்புப் பெயர்கள் மற்றும் தொலைபேசி எண்கள் — இன்பாக்ஸ் அனுப்புநர்களை அறியப்பட்ட/அறியப்படாதவர் என வகைப்படுத்தவும், உருவாக்கும் தானியங்கி பரிந்துரைகளை ஆதரிக்கவும், நீங்கள் உங்கள் பதிவுசெய்யப்பட்ட எண்ணை மாற்றினால் தொடர்புகளுக்கு அறிவிக்கவும் சாதனத்தில் உள்ளூரில் படிக்கப்படுகிறது (பிரிவு 3 ஐப் பார்க்கவும்)',
            ],
          },
          { subtitle: 'சாதனம் மற்றும் தொழில்நுட்பத் தகவல்' },
          { text: 'சில தொழில்நுட்ப மற்றும் சாதனம் தொடர்பான தகவல்கள் தானாகவே சேகரிக்கப்படலாம், அவற்றுள்:' },
          {
            list: [
              'சாதன அடையாளங்காட்டிகள்',
              'புஷ்-அறிவிப்பு டோக்கன்கள்',
              'செயலி பதிப்பு மற்றும் சாதனம் / OS தகவல்',
              'நெட்வொர்க் இணைப்பு நிலை',
            ],
          },
          { subtitle: 'மூன்றாம் தரப்பு சேவைகள் மற்றும் SDKகள்' },
          { text: 'செயலி பின்வரும் மூன்றாம் தரப்பு சேவைகளைப் பயன்படுத்தலாம்:' },
          {
            list: [
              <><strong>Firebase</strong> — புஷ் அறிவிப்புகள் மற்றும் செயலி கண்டறிதல்கள்</>,
              <><strong>Google Sign-In / Google Drive</strong> — நீங்கள் இயக்கத் தேர்வுசெய்யும்போது, விருப்பமான காப்புப்பிரதி மற்றும் மீட்டமைப்பு அம்சத்திற்காக</>,
            ],
          },
          { text: 'இந்த மூன்றாம் தரப்பு சேவைகள் தங்களுடைய சொந்தத் தனியுரிமைக் கொள்கைகளின்படி சில தொழில்நுட்பத் தகவல்களைச் சேகரிக்கலாம்.' },
          { subtitle: 'வேண்டுமென்றே சேகரிக்கப்படாத தகவல்' },
          { text: 'செயலி வேண்டுமென்றே பின்வருவனவற்றைச் சேகரிப்பதில்லை:' },
          {
            list: [
              'துல்லியமான அல்லது தோராயமான இருப்பிடத் தரவு',
              'பணம் செலுத்தும் அட்டை அல்லது வங்கித் தகவல்',
              'பொதுவான SMS செய்தி உள்ளடக்கம் (OTP தானாக நிரப்புதல் குறித்து பிரிவு 8 ஐப் பார்க்கவும்)',
              'பிரிவு 3 இல் விவரிக்கப்பட்டுள்ள உள்ளூர், சாதனத்தில்-பொருந்துதலுக்கு அப்பாற்பட்ட தொடர்புகள் தரவு',
            ],
          },
        ],
      },
      {
        title: '3. தரவு சேகரிப்பின் நோக்கம்',
        blocks: [
          { text: 'PhoneMail பின்வரும் சேவை தொடர்பான நோக்கங்களுக்காக பயனர் தகவலைச் சேகரித்துப் பயன்படுத்துகிறது:' },
          {
            list: [
              <><strong>கணக்குப் பதிவு மற்றும் உள்நுழைவு</strong> — உங்கள் மொபைல் எண்ணைப் பயன்படுத்தி உங்கள் கணக்கை உருவாக்கி அங்கீகரிக்க, OTP குறியீடுகளைத் தானாகச் சரிபார்க்க, மற்றும் அமர்வுகள் முழுவதும் உங்களை உள்நுழைந்த நிலையில் வைத்திருக்க.</>,
              <><strong>மின்னஞ்சல் சேவை வழங்கல்</strong> — உங்கள் மின்னஞ்சல்கள் மற்றும் இணைப்புகளை (நீங்கள் அனுப்பத் தேர்வுசெய்யும் படம், கோப்பு மற்றும் குரல்-குறிப்பு இணைப்புகள் உட்பட) அனுப்ப, பெற, சேமிக்க, ஒழுங்கமைக்க (இன்பாக்ஸ், பிடித்தவை, ஸ்பேம், காப்பகம், குப்பை) மற்றும் காட்ட.</>,
              <><strong>தொடர்பு பொருத்துதல்</strong> — உங்கள் சாதனத் தொடர்புகளை உள்ளூரில் படித்து PhoneMail இன் பயனர் அடைவுடன் பொருத்த, இதன் மூலம் அனுப்புநர்களை அறியப்பட்ட அல்லது அறியப்படாதவர் என வகைப்படுத்த, உருவாக்கும் தானியங்கி பரிந்துரைகளை ஆதரிக்க, மற்றும் நீங்கள் உங்கள் பதிவுசெய்யப்பட்ட மொபைல் எண்ணை மாற்றினால் உங்கள் தொடர்புகளுக்கு அறிவிக்க.</>,
              <><strong>புஷ் அறிவிப்புகள்</strong> — பின்னணி ஒத்திசைவு மற்றும் புஷ் அறிவிப்பு சேவைகள் மூலம், செயலி மூடப்பட்டிருந்தாலும், புதிய அஞ்சல், வழங்கல் நிலை மற்றும் கணக்குச் செயல்பாடு குறித்து உங்களுக்கு அறிவிக்க.</>,
              <><strong>காப்புப்பிரதி மற்றும் மீட்டமைப்பு</strong> — நீங்கள் Google Drive காப்புப்பிரதி அம்சத்தைப் பயன்படுத்தத் தேர்வுசெய்யும்போது, உங்கள் அஞ்சல் தரவை உங்கள் சொந்த Google Drive கணக்கில் காப்புப்பிரதி எடுக்கவும் மீட்டமைக்கவும்.</>,
              <><strong>வலை உள்நுழைவு</strong> — செயலியிலிருந்து QR குறியீட்டை ஸ்கேன் செய்வதன் மூலம் இணை வலை அமர்வில் உள்நுழைய உங்களை அனுமதிக்க.</>,
              <><strong>பாதுகாப்பு மற்றும் மோசடி தடுப்பு</strong> — சந்தேகத்திற்குரிய உள்நுழைவு செயல்பாட்டைக் கண்டறிய, உங்கள் கணக்கைப் பாதுகாக்க, மற்றும் சேவையின் ஒருமைப்பாட்டைப் பராமரிக்க.</>,
              <><strong>சேவை மேம்பாடு மற்றும் ஆதரவு</strong> — தொழில்நுட்பச் சிக்கல்களைக் கண்டறிய, ஆதரவுக் கோரிக்கைகளுக்குப் பதிலளிக்க, மற்றும் செயலி செயல்திறன் மற்றும் நம்பகத்தன்மையை மேம்படுத்த.</>,
            ],
          },
          { text: 'அங்கீகரிக்கப்படாத விளம்பரம் அல்லது சட்டவிரோத சந்தைப்படுத்தல் நோக்கங்களுக்காக PhoneMail தனிப்பட்ட தகவலைப் பயன்படுத்துவதில்லை.' },
        ],
      },
      {
        title: '4. தரவு பகிர்வு மற்றும் மூன்றாம் தரப்பினர்',
        blocks: [
          { text: 'சந்தைப்படுத்தல் அல்லது வணிக நோக்கங்களுக்காக PhoneMail பயனர்களின் தனிப்பட்ட தகவலை மூன்றாம் தரப்பினருக்கு விற்பதில்லை, வாடகைக்கு விடுவதில்லை, பரிமாறுவதில்லை அல்லது பகிர்வதில்லை.' },
          { text: 'செயலி மூலம் சேகரிக்கப்படும் பயனர் தகவல் பின்வருவன போன்ற செயலி சேவைகளை வழங்குவதற்காக மட்டுமே பயன்படுத்தப்படுகிறது:' },
          {
            list: [
              'பயனர் அங்கீகாரம்',
              'மின்னஞ்சல் அனுப்புதல் மற்றும் வழங்கல்',
              'இன்பாக்ஸ் வகைப்பாட்டிற்கான தொடர்பு பொருத்துதல்',
              'காப்புப்பிரதி மற்றும் மீட்டமைப்பு (Google Drive, நீங்கள் இயக்கும்போது)',
              'புஷ் அறிவிப்பு சேவைகள்',
              'வாடிக்கையாளர் ஆதரவு',
            ],
          },
          { text: 'அங்கீகாரம், அறிவிப்புகள், காப்புப்பிரதி மற்றும் அது தொடர்பான தொழில்நுட்பச் செயல்பாட்டிற்காக Firebase மற்றும் Google போன்ற நம்பகமான தொழில்நுட்ப சேவை வழங்குநர்களை செயலி பயன்படுத்தலாம். இந்த வழங்குநர்கள் தங்கள் செயல்பாட்டிற்குத் தேவையான தகவலை மட்டுமே செயலாக்குகிறார்கள்.' },
          { text: 'சட்டம், ஒழுங்குமுறைக் கடமை அல்லது சட்ட நடைமுறையால் தேவைப்படும் இடங்களைத் தவிர, PhoneMail தனிப்பட்ட தகவலை வெளிப்புற நிறுவனங்களுக்கு அல்லது அங்கீகரிக்கப்படாத தரப்பினருக்கு வெளியிடுவதில்லை.' },
        ],
      },
      {
        title: '5. தரவு தக்கவைப்பு',
        blocks: [
          { text: 'சேவையை வழங்குவதற்குத் தேவையானதைத் தாண்டி PhoneMail தனது பின்தள சேவையகங்களில் பயனர் தரவை நிரந்தரமாகத் தக்கவைப்பதில்லை.' },
          {
            list: [
              <><strong>அஞ்சல் மற்றும் இணைப்புகள்</strong> — வழங்கல், ஒத்திசைவு மற்றும் நீங்கள் நிர்வகிக்கும் கோப்புறைகளை (இன்பாக்ஸ், காப்பகம், குப்பை) ஆதரிக்க மின்னஞ்சல்களும் இணைப்புகளும் தக்கவைக்கப்படுகின்றன. ஒரு அஞ்சலை நீக்குவது அல்லது குப்பையைக் காலி செய்வது அதைச் செயலில் உள்ள சேமிப்பிலிருந்து அகற்றுகிறது.</>,
              <><strong>கணக்குத் தகவல்</strong> — உங்கள் மொபைல் எண் மற்றும் சுயவிவர விவரங்கள் உங்கள் கணக்கு செயலில் இருக்கும் வரை மட்டுமே தக்கவைக்கப்படுகின்றன.</>,
              <><strong>தொடர்புகள்</strong> — சாதனத் தொடர்புகள் பிரிவு 3 இல் விவரிக்கப்பட்ட நோக்கங்களுக்காக உங்கள் சாதனத்தில் உள்ளூரில் பொருத்தப்படுகின்றன, மேலும் PhoneMail இன் பின்தளத்தில் நிரந்தரமாகச் சேமிக்கப்படுவதில்லை.</>,
              <><strong>காப்புப்பிரதி தரவு</strong> — Google Drive வழியாக காப்புப்பிரதி எடுக்கப்பட்ட தரவு உங்கள் சொந்த Google Drive கணக்கில் சேமிக்கப்படுகிறது; இது PhoneMail இன் சேவையகங்களில் அல்ல, உங்கள் Google கணக்கு மற்றும் Google இன் சொந்த தக்கவைப்பு நடைமுறைகளால் நிர்வகிக்கப்படுகிறது.</>,
              <><strong>தொழில்நுட்ப / கண்டறிதல் பதிவுகள்</strong> — சிக்கல் தீர்த்தல், பாதுகாப்பு கண்காணிப்பு மற்றும் சேவை நம்பகத்தன்மைக்காக சாதனம் மற்றும் தொழில்நுட்பத் தகவல் தற்காலிகமாகத் தக்கவைக்கப்படலாம், மேலும் செயல்பாட்டு ரீதியாக தேவையானதைவிட நீண்ட காலம் வைக்கப்படாது.</>,
            ],
          },
          { text: 'கணக்கு நீக்கம் மற்றும் செய்தி உள்ளடக்கத்தை நிரந்தரமாக அகற்றுவதற்கான வரம்புகள் பிரிவு 6 இல் விவரிக்கப்பட்டுள்ளன.' },
        ],
      },
      {
        title: '6. கணக்கு நீக்கம் மற்றும் மறுசெயல்படுத்தல்',
        blocks: [
          { text: 'PhoneMail பயனர்களுக்குத் தங்கள் கணக்கை நீக்குவதற்கான செயலிக்குள் விருப்பத்தை வழங்குகிறது.' },
          { text: 'கணக்கு நீக்கத்தைக் கோர:' },
          {
            list: [
              'உங்கள் கணக்கில் உள்நுழையவும்.',
              'வழிசெலுத்தல் மெனுவிலிருந்து அமைப்புகளுக்குச் செல்லவும்.',
              'கணக்கை நீக்கு என்பதைத் தேர்ந்தெடுக்கவும்.',
              'உங்கள் பதிவுசெய்யப்பட்ட தொலைபேசி எண்ணுக்கு அனுப்பப்பட்ட OTP ஐ உள்ளிட்டு உங்கள் அடையாளத்தைச் சரிபார்க்கவும்.',
              'OTP வெற்றிகரமாகச் சரிபார்க்கப்பட்டவுடன், கணக்கு நீக்கப்பட்டு நீங்கள் உள்நுழைவுப் பக்கத்திற்கு திருப்பி விடப்படுவீர்கள்.',
            ],
          },
          { subtitle: 'தற்காலிக தக்கவைப்பு மற்றும் மறுசெயல்படுத்தல்' },
          { text: 'கணக்கு நீக்கக் கோரிக்கை முடிந்த பிறகு, பயனர் பின்னர் கணக்கை மறுசெயல்படுத்த அனுமதிக்கும் வகையில், கணக்கு செயலிழந்த நிலையில் இருக்கலாம்.' },
          { text: 'பயனர் அதே பதிவுசெய்யப்பட்ட தொலைபேசி எண்ணைப் பயன்படுத்தி மீண்டும் உள்நுழைந்தால், அவர்களின் கணக்கு நீக்கப்பட்டுள்ளது என்று அவர்களுக்குத் தெரிவிக்கப்பட்டு, கணக்கை மறுசெயல்படுத்தும் விருப்பம் வழங்கப்படும்.' },
          { text: 'கணக்கை மறுசெயல்படுத்த:' },
          {
            list: [
              'பதிவுசெய்யப்பட்ட தொலைபேசி எண்ணை உள்ளிடவும்.',
              'மறுசெயல்படுத்துவதைத் தொடர ஆம் என்பதைத் தேர்ந்தெடுக்கவும்.',
              'பதிவுசெய்யப்பட்ட மொபைல் எண்ணுக்கு அனுப்பப்பட்ட OTP ஐச் சரிபார்க்கவும்.',
              'OTP வெற்றிகரமாகச் சரிபார்க்கப்பட்டவுடன், கணக்கு மீட்டமைக்கப்படும்.',
            ],
          },
          { text: 'மறுசெயல்படுத்தலின்போது:' },
          {
            list: [
              'இன்பாக்ஸ் மற்றும் அனுப்பிய அஞ்சல் உள்பட, முன்பே இருந்த அனைத்து மின்னஞ்சல்களும் மீட்டமைக்கப்படும்.',
              'கணக்கு நீக்கத்திற்கு முன் இருந்த மின்னஞ்சல்கள் அப்படியே இருக்கும்.',
              'மறுசெயல்படுத்தலுக்குப் பிறகு பெறப்படும் புதிய மின்னஞ்சல்களும் கிடைக்கும், இதனால் பயனரின் மின்னஞ்சல் வரலாற்றின் தொடர்ச்சி உறுதி செய்யப்படுகிறது.',
            ],
          },
          { subtitle: 'நிரந்தர நீக்கம் — முக்கியமான வரம்பு' },
          { text: 'பயனரின் பதிவுசெய்யப்பட்ட தொலைபேசி எண் PhoneMail க்குள் அவர்களின் மின்னஞ்சல் முகவரி/மாற்றுப்பெயராகவும் செயல்படுவதால், கணக்குடன் தொடர்புடைய அனைத்து தனிப்பட்ட தகவல்களையும் நிரந்தரமாக அல்லது முழுமையாக நீக்குவதற்கு PhoneMail உத்தரவாதம் அளிக்க முடியாது. குறிப்பாக:' },
          {
            list: [
              'ஒரு பயனர் அனுப்பிய மின்னஞ்சல்கள் பெறுநரின் இன்பாக்ஸ் அல்லது அனுப்பிய அஞ்சலில் இருக்கலாம், ஏனெனில் உள்ளடக்கம் பெறுநரின் சொந்தக் கணக்கில் இருக்கிறது, அதை PhoneMail ஒருதலைப்பட்சமாக அகற்ற முடியாது.',
              'மற்ற பயனர்களால் பயனருக்கு அனுப்பப்பட்ட மின்னஞ்சல்கள் அனுப்புநரின் பதிவுகளில் பயனரின் தொலைபேசி-எண் அடிப்படையிலான மின்னஞ்சல் முகவரியுடன் தொடர்புடையதாக இருக்கலாம்.',
              'கணக்கு நீக்கப்பட்ட பிறகு PhoneMail செய்தி உள்ளடக்கத்தை சுயாதீனமாகத் தக்கவைப்பதில்லை அல்லது மேலும் பயன்படுத்துவதில்லை. அத்தகைய உள்ளடக்கம் தொடர்ந்து கிடைப்பது, மின்னஞ்சல் பரிமாற்றத்தில் ஈடுபட்டுள்ள மற்ற தரப்பினரின் அஞ்சல் பெட்டிக்குள், செய்தியிடல் மற்றும் மின்னஞ்சல் வழங்கலின் இயல்பான பகுதியாக இருக்கிறது.',
              'பொருந்தக்கூடிய சட்ட, ஒழுங்குமுறை, மோசடி-தடுப்பு அல்லது தகராறு-தீர்வுக் கடமைகளைப் பூர்த்தி செய்யத் தேவையான காலத்திற்கு கணக்கு மற்றும் பாதுகாப்பு மெட்டாடேட்டா தக்கவைக்கப்படலாம்.',
            ],
          },
          { text: 'கணக்கு நீக்கத்தைக் கோருவதற்கு முன் பயனர்கள் தகவலறிந்த முடிவை எடுக்கும் வகையில் இந்த வரம்பு அவர்களுக்கு வெளிப்படுத்தப்படுகிறது.' },
        ],
      },
      {
        title: '7. பாதுகாப்பு நடைமுறைகள்',
        blocks: [
          { text: 'அங்கீகரிக்கப்படாத அணுகல், தவறான பயன்பாடு, மாற்றம், வெளிப்படுத்தல் அல்லது அழிவிலிருந்து பயனர் தகவலைப் பாதுகாக்க உதவும் வகையில் PhoneMail நியாயமான நிர்வாக, தொழில்நுட்ப மற்றும் நிறுவன பாதுகாப்பு நடவடிக்கைகளைச் செயல்படுத்துகிறது.' },
          { text: 'எங்கள் பாதுகாப்பு நடைமுறைகளில் பின்வருவன அடங்கும்:' },
          {
            list: [
              'உள்நுழைவு, நீக்கம் மற்றும் மறுசெயல்படுத்தலுக்கான OTP அடிப்படையிலான அங்கீகாரம்',
              'சாதனத்தில் அங்கீகார டோக்கன்களைப் பாதுகாப்பாக உள்ளூரில் சேமித்தல்',
              'அங்கீகரிக்கப்பட்ட பணியாளர்களுக்கு மட்டும் கட்டுப்படுத்தப்பட்ட உள் அணுகல்',
              'பாதுகாப்பான சேவையகம் மற்றும் தரவுத்தள உள்கட்டமைப்பு',
              'அங்கீகரிக்கப்படாத அணுகல் முயற்சிகளுக்கு எதிரான கண்காணிப்பு மற்றும் பாதுகாப்பு',
            ],
          },
          { text: 'தனிப்பட்ட தகவலைப் பாதுகாக்க நாங்கள் நியாயமான நடவடிக்கைகளை எடுத்தாலும், மின்னணு பரிமாற்றம் அல்லது சேமிப்பின் எந்த முறையும் முழுமையாகப் பாதுகாப்பானது என்று உத்தரவாதம் அளிக்க முடியாது.' },
        ],
      },
      {
        title: '8. அனுமதி பயன்பாட்டு வெளிப்படுத்தல்',
        blocks: [
          { text: 'செயலியின் முக்கிய செயல்பாட்டிற்குத் தேவையான அனுமதிகளை மட்டுமே PhoneMail கோருகிறது:' },
          {
            list: [
              <><strong>தொலைபேசி எண் / தொலைபேசி நிலை</strong> — உங்கள் தொலைபேசி எண் உங்கள் PhoneMail கணக்கு அடையாளமாக இருப்பதால், பதிவு மற்றும் உள்நுழைவின்போது உங்கள் சாதனத்தின் தொலைபேசி எண்ணைத் தானாகக் கண்டறிந்து முன்நிரப்பப் பயன்படுகிறது.</>,
              <><strong>SMS (OTP தானாக நிரப்புதல்)</strong> — Android SMS Retriever வழிமுறையைப் பயன்படுத்தி, உள்நுழைவு மற்றும் கணக்குச் சரிபார்ப்பை எளிதாக்க PhoneMail ஒருமுறை சரிபார்ப்புக் குறியீடுகளைத் தானாகப் படிக்கிறது. இதற்கு விரிவான SMS படிக்கும் அனுமதி தேவையில்லை மற்றும் உங்கள் மற்ற உரை செய்திகளின் உள்ளடக்கத்தை அணுகுவதில்லை.</>,
              <><strong>தொடர்புகள்</strong> — இன்பாக்ஸ் அனுப்புநர்களை அறியப்பட்ட/அறியப்படாதவர் என வகைப்படுத்தவும், உருவாக்கும் தானியங்கி பரிந்துரைகளை ஆதரிக்கவும், எண் மாற்றம் குறித்து தொடர்புகளுக்கு அறிவிக்கவும் உங்கள் சாதனத்தில் உள்ளூரில் பயன்படுத்தப்படுகிறது. உங்கள் தொடர்புப் பட்டியல் PhoneMail இன் சேவையகங்களில் பதிவேற்றப்படுவதில்லை அல்லது நிரந்தரமாகச் சேமிக்கப்படுவதில்லை.</>,
              <><strong>கேமரா</strong> — மின்னஞ்சல் இணைப்புகள், சுயவிவரப் படங்களுக்குப் புகைப்படங்களை எடுக்கவும், வலை உள்நுழைவு அம்சத்திற்கு QR குறியீடுகளை ஸ்கேன் செய்யவும் பயன்படுகிறது.</>,
              <><strong>மைக்ரோஃபோன்</strong> — ஒரு மின்னஞ்சலுக்கான குரல்-குறிப்பு இணைப்பைப் பதிவுசெய்யத் தேர்வுசெய்யும்போது மட்டுமே பயன்படுகிறது.</>,
              <><strong>சேமிப்பகம் / மீடியா</strong> — மின்னஞ்சல்களுக்குள் கோப்புகள், படங்கள் மற்றும் வீடியோக்களை இணைக்க, பதிவிறக்க மற்றும் திறக்கப் பயன்படுகிறது.</>,
              <><strong>அறிவிப்புகள்</strong> — புதிய அஞ்சல் மற்றும் கணக்கு தொடர்பான செயல்பாடு குறித்து உங்களுக்கு அறிவிக்கப் பயன்படுகிறது.</>,
            ],
          },
          { subtitle: 'கோரப்படாத அனுமதிகள்' },
          { text: 'PhoneMail பின்வருவனவற்றைக் கோருவதில்லை அல்லது பயன்படுத்துவதில்லை:' },
          {
            list: [
              'துல்லியமான அல்லது தோராயமான இருப்பிடம்',
              'பயனர் தொடங்கிய குரல்-குறிப்புப் பதிவுக்கு அப்பாற்பட்ட மைக்ரோஃபோன் அணுகல்',
              'மேலே விவரிக்கப்பட்ட உள்ளூர் பொருத்துதலுக்கு அப்பாற்பட்ட எந்த நோக்கத்திற்கும் தொடர்புகள் அணுகல்',
            ],
          },
        ],
      },
      {
        title: '9. முக்கியமான தரவு கையாளுதல்',
        blocks: [
          { text: 'PhoneMail தனது மின்னஞ்சல் சேவையை வழங்குவதற்குத் தேவையான தகவலை மட்டுமே செயலாக்குகிறது.' },
          { subtitle: 'முக்கியமான தகவல்' },
          { text: 'செயலி பின்வருவனவற்றைச் செயலாக்கலாம்:' },
          {
            list: [
              'நீங்கள் அனுப்பத் அல்லது பெறத் தேர்வுசெய்யும் மின்னஞ்சல் உள்ளடக்கம் மற்றும் இணைப்புகள் (படங்கள், கோப்புகள் மற்றும் குரல் குறிப்புகள் உட்பட)',
              'உள்நுழைவு, நீக்கம் மற்றும் மறுசெயல்படுத்தலுக்குத் தேவையான OTP மற்றும் அங்கீகாரத் தகவல்',
            ],
          },
          { subtitle: 'சேகரிக்கப்படாத தகவல்' },
          { text: 'PhoneMail பின்வருவனவற்றைக் கோருவதில்லை, அணுகுவதில்லை அல்லது சேகரிப்பதில்லை:' },
          {
            list: [
              'துல்லியமான இருப்பிடத் தகவல்',
              'நிதி அல்லது வங்கித் தகவல்',
              'பொதுவான SMS செய்தி உள்ளடக்கம்',
              'நீங்கள் உருவாக்கும் குரல்-குறிப்பு இணைப்புகளுக்கு அப்பாற்பட்ட மைக்ரோஃபோன் அணுகல்',
            ],
          },
        ],
      },
      {
        title: '10. குழந்தைகளின் தனியுரிமை',
        paragraphs: [
          'PhoneMail 18 வயதுக்குட்பட்ட குழந்தைகள் பயன்படுத்த விரும்பப்படவில்லை. செயலி குழந்தைகளிடமிருந்து தனிப்பட்ட தகவலை அறிந்தே சேகரிப்பதில்லை, சேமிப்பதில்லை அல்லது செயலாக்குவதில்லை. ஒரு குழந்தையைச் சேர்ந்த தனிப்பட்ட தகவல் தற்செயலாகச் சேகரிக்கப்பட்டுள்ளது என்பதை நாங்கள் அறிந்தால், அத்தகைய தகவலை எங்கள் அமைப்புகளிலிருந்து நீக்க நியாயமான நடவடிக்கைகளை எடுப்போம்.',
          <>ஒரு குழந்தை செயலி மூலம் தனிப்பட்ட தகவலை வழங்கியிருக்கலாம் என்று நம்பும் பெற்றோர்கள் அல்லது பாதுகாவலர்கள் {supportEmail} இல் எங்களைத் தொடர்பு கொள்ளலாம்.</>,
        ],
      },
      {
        title: '11. உங்கள் உரிமைகள்',
        intro: 'பொருந்தக்கூடிய சட்டத்தைப் பொறுத்து, நீங்கள்:',
        list: [
          'உங்கள் தனிப்பட்ட விவரங்களை அணுகலாம் அல்லது திருத்தலாம்',
          'உங்கள் கணக்கு மற்றும் தரவை நீக்கக் கோரலாம் (பிரிவு 6 ஐப் பார்க்கவும்)',
          'விளம்பர அல்லது அத்தியாவசியமற்ற அறிவிப்புகளிலிருந்து விலகலாம்',
        ],
        outro: <>இந்த உரிமைகளைப் பயன்படுத்த, {supportEmail} இல் எங்களைத் தொடர்பு கொள்ளவும்.</>,
      },
      {
        title: '12. இந்தக் கொள்கையின் புதுப்பிப்புகள்',
        paragraphs: [
          'இந்தத் தனியுரிமைக் கொள்கையை நாங்கள் அவ்வப்போது புதுப்பிக்கலாம். முக்கியமான மாற்றங்கள் ஏற்படும்போது செயலி மூலமாகவோ அல்லது மின்னஞ்சல் மூலமாகவோ உங்களுக்கு அறிவிப்போம். ஏதேனும் மாற்றங்களைத் தொடர்ந்து செயலியைத் தொடர்ந்து பயன்படுத்துவது திருத்தப்பட்ட கொள்கையை ஏற்றுக்கொள்வதைக் குறிக்கிறது.',
        ],
      },
      {
        title: '13. எங்களைத் தொடர்பு கொள்ளுங்கள்',
        blocks: [
          { text: 'இந்தத் தனியுரிமைக் கொள்கை குறித்து உங்களுக்குக் கேள்விகள், கவலைகள் அல்லது கோரிக்கைகள் இருந்தால், பின்வரும் முகவரியில் எங்களைத் தொடர்பு கொள்ளவும்:' },
          {
            list: [
              <><strong>மின்னஞ்சல்:</strong> {supportEmail}</>,
              <><strong>டெவலப்பர்:</strong> Rajesh Raghupathi</>,
              <><strong>நிறுவனம்:</strong> Genezei Global Solutions Private Limited</>,
            ],
          },
        ],
      },
    ],
  },
}

const textSx = { fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.7, '& strong': { color: 'text.primary' } }

function SectionBody({ section }) {
  // Rich layout: an ordered array of subtitle / text / list blocks.
  if (section.blocks) {
    return (
      <>
        {section.blocks.map((block, i) => {
          if (block.subtitle) {
            return (
              <Typography
                key={i}
                sx={{ fontSize: '1rem', fontWeight: 600, color: 'text.primary', mt: i === 0 ? 0 : 2.5, mb: 1 }}
              >
                {block.subtitle}
              </Typography>
            )
          }
          if (block.list) {
            return (
              <Box
                key={i}
                component="ul"
                sx={{ m: 0, mb: 1.5, pl: 3, '& li': { ...textSx, mb: 1, '&:last-child': { mb: 0 } } }}
              >
                {block.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </Box>
            )
          }
          return (
            <Typography key={i} sx={{ ...textSx, mb: 1.5 }}>
              {block.text}
            </Typography>
          )
        })}
      </>
    )
  }

  // Simple layout: intro / paragraphs / list / outro.
  return (
    <>
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
    </>
  )
}

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
              <SectionBody section={section} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
