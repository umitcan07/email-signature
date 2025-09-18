import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Img,
  Link,
  Hr,
  Font,
} from '@react-email/components'
import type { SignatureData } from '@/types/signature';
import { COMPANY_INFO } from '@/constants/company';
import { BANNER_OPTIONS } from '@/constants/banners';


const BASE_URL = import.meta.env.PUBLIC_BASE_URL || 'https://magna-email-signature.netlify.app/'

const FADED_TEXT = '#CACACE'
const GREY_TEXT = '#A0A0A7'
const BLACK_TEXT = '#050505'
const DIVIDER_COLOR = '#E5E7EB'

interface EmailSignatureTemplateProps {
  data: SignatureData
}

const IconLink = ({ href, icon, alt, children }: {
  href: string,
  icon: string,
  alt: string,
  children?: React.ReactNode,
}) => {
  return (
    <Link href={href} style={{
      color: '#A0A0A7',
      fontWeight: "600",
      textDecoration: 'none',
      fontSize: '10px',
      lineHeight: '16px',
      display: 'flex',
      alignItems: 'end',
      gap: '4px',
      padding: '4px 0px 4px 2px'
    }}>
      <Img src={icon} alt={alt} width="16" height="16" />
      {children}
    </Link>
  )
}

const Divider = () => {
  return (
    <Hr style={{
      border: 'none',
      borderTop: `1px solid ${DIVIDER_COLOR}`,
      margin: '24px 0'
    }} />
  )
}

const UserSection = ({ imageUrl, name, role, showTwitter, showLinkedin, showTelegram, showCalendar, twitterUsername, linkedinUsername, telegramUsername, calendarUrl }: {
  imageUrl: string,
  name: string,
  role: string,
  showTwitter: boolean,
  showLinkedin: boolean,
  showTelegram: boolean,
  showCalendar: boolean,
  twitterUsername: string | undefined,
  linkedinUsername: string | undefined,
  telegramUsername: string | undefined,
  calendarUrl: string | undefined
}) => {
  return (
    <Section>
      <Row>
        <Column style={{ width: '80%', padding: '0 12px 0 0' }}>
          <Row>
            <Column align='left' style={{ width: '40px' }}>
              <Img src={imageUrl} alt={name} width="40" height="40" />
            </Column>
            <Column align='left' style={{ width: '100%', padding: '0 12px' }}>
              <Row>
                <Text style={{ fontSize: '10px', lineHeight: '20px', margin: 0, padding: 0, color: GREY_TEXT, fontWeight: '500', letterSpacing: '0.12em' }}>{role.toUpperCase()}</Text>
              </Row>
              <Row>
                <Text style={{ fontSize: '14px', fontWeight: '600', lineHeight: '20px', margin: 0, color: BLACK_TEXT }}>{name}</Text>
              </Row>
            </Column>
          </Row>
        </Column>
        <Column align='right'>
          <Row align='right'>
            <Column>
              {showTelegram && telegramUsername && <IconLink href={`https://t.me/${telegramUsername}`} icon={`${BASE_URL}/icons/telegram-fill.png`} alt="Telegram">{telegramUsername}</IconLink>}
              {showLinkedin && linkedinUsername && <IconLink href={`https://linkedin.com/in/${linkedinUsername}`} icon={`${BASE_URL}/icons/linkedin-box-fill.png`} alt="LinkedIn">{linkedinUsername}</IconLink>}
              {showTwitter && twitterUsername && <IconLink href={`https://x.com/${twitterUsername}`} icon={`${BASE_URL}/icons/x-fill.png`} alt="Twitter">{twitterUsername}</IconLink>}
              {showCalendar && calendarUrl && <IconLink href={calendarUrl} icon={`${BASE_URL}/icons/calendar.png`} alt="Calendar">Book a call</IconLink>}
            </Column>
          </Row>
        </Column>
      </Row >
    </Section >
  )
}

const CompanySection = ({ logoUrl, website, linkedin, twitter }: { logoUrl: string, website: string, linkedin: string, twitter: string }) => {
  return (
    <Section>
      <Row>
        <Column style={{ width: '80%' }}>
          <Link href={website}>
            <Img
              alt="Magna Logo"
              height="16"
              src={logoUrl}
              style={
                {
                  height: 16,
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  marginTop: '4px',
                  marginLeft: '4px'
                }
              }
            />
          </Link>
        </Column>
        <Column align="right">
          <Row align="right">
            <Column>
              <IconLink href={website} icon={`${BASE_URL}/icons/earth-fill.png`} alt="Website"></IconLink>
            </Column>
            <Column>
              <IconLink href={linkedin} icon={`${BASE_URL}/icons/linkedin-box-fill.png`} alt="LinkedIn"></IconLink>
            </Column>
            <Column>
              <IconLink href={twitter} icon={`${BASE_URL}/icons/x-fill.png`} alt="Twitter"></IconLink>
            </Column>
          </Row>
        </Column >
      </Row >
    </Section >
  )
}


const BannerSection = ({ selectedBanner, customBannerUrl, customBannerHref }: {
  selectedBanner: string,
  customBannerUrl: string,
  customBannerHref: string
}) => {
  const bannerOption = BANNER_OPTIONS.find(option => option.value === selectedBanner)

  if (!bannerOption || selectedBanner === 'no-banner') {
    return null
  }

  const imageUrl = selectedBanner === 'custom' ? customBannerUrl : `${BASE_URL}/${bannerOption.url}`
  const href = selectedBanner === 'custom' ? customBannerHref : bannerOption.href

  if (!imageUrl) {
    return null
  }

  return (
    <Section style={{ marginTop: '16px' }}>
      <Row>
        <Column align='left'>
          <Link href={href || '#'}>
            <Img src={imageUrl} alt="Banner" width="320" height="auto" />
          </Link>
        </Column>
      </Row>
    </Section>
  )
}


const DisclaimerMessage = ({ message }: { message: string }) => {
  return (
    <Section>
      <Column>
        <Text style={{
          fontSize: '10px',
          color: FADED_TEXT,
          lineHeight: '1.5',
          margin: '0',
          fontStyle: 'italic',
          whiteSpace: 'pre-line'
        }}>
          {message}
        </Text>
      </Column>
    </Section>
  )
}

export const EmailSignatureTemplate = ({ data }: EmailSignatureTemplateProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily={["Arial", "sans-serif"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
            format: "woff2",
          }}
        />
      </Head>
      <Body style={{
        backgroundColor: '#ffffff',
        color: '#1f2937',
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: '1.6',
        margin: '0',
        padding: '0',
      }}>
        <Container align='left' style={{
          maxWidth: '540px',
          padding: '24px',
        }}>

          <Divider />
          <UserSection
            imageUrl={data.avatarPhotoUrl}
            name={data.name}
            role={data.role}
            showTwitter={data.showTwitter}
            showLinkedin={data.showLinkedin}
            showTelegram={data.showTelegram}
            showCalendar={data.showCalendar}
            twitterUsername={data.twitterUsername}
            linkedinUsername={data.linkedinUsername}
            telegramUsername={data.telegramUsername}
            calendarUrl={data.calendarUrl}
          />
          <Divider />

          <CompanySection
            logoUrl={COMPANY_INFO.logoUrl}
            website={COMPANY_INFO.website}
            linkedin={COMPANY_INFO.linkedin}
            twitter={COMPANY_INFO.twitter}
          />
          <BannerSection
            selectedBanner={data.selectedBanner}
            customBannerUrl={data.customBannerUrl}
            customBannerHref={data.customBannerHref}
          />

          <Divider />
          {/* Disclaimer Section */}
          {data.disclaimerText && (
            <DisclaimerMessage message={data.disclaimerText} />
          )}
        </Container>
      </Body>
    </Html >
  )
}
