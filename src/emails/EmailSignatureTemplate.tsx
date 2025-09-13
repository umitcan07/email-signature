import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Link,
} from '@react-email/components'
import type { SignatureData } from '@/types/signature'

interface EmailSignatureTemplateProps {
  data: SignatureData
}

export const EmailSignatureTemplate = ({ data }: EmailSignatureTemplateProps) => {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL || ''

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Personal Information Section */}
          <Section style={{ padding: '20px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'top', paddingRight: '20px', width: '80px' }}>
                    {data.avatarPhotoUrl && (
                      <Img
                        src={data.avatarPhotoUrl}
                        alt={data.name}
                        width="60"
                        height="60"
                        style={{
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #e5e7eb',
                        }}
                      />
                    )}
                  </td>
                  <td style={{ verticalAlign: 'top', width: '200px' }}>
                    <div style={{ marginBottom: '8px' }}>
                      <Text style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        margin: '0 0 2px 0'
                      }}>
                        {data.name}
                      </Text>
                      <Text style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        margin: '0 0 8px 0'
                      }}>
                        {data.role}
                      </Text>
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'top', textAlign: 'right' }}>
                    <div style={{ marginBottom: '8px' }}>
                      {data.telegram && (
                        <Text style={{ fontSize: '11px', color: '#374151', margin: '2px 0' }}>
                          <Link href={`https://t.me/${data.telegram}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                            <Img src={`${baseUrl}/icons/telegram-fill.png`} alt="Telegram" width="12" height="12" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }} />
                            {data.telegram}
                          </Link>
                        </Text>
                      )}
                      {data.linkedin && (
                        <Text style={{ fontSize: '11px', color: '#374151', margin: '2px 0' }}>
                          <Link href={data.linkedin} style={{ color: '#2563eb', textDecoration: 'none' }}>
                            <Img src={`${baseUrl}/icons/linkedin-box-fill.png`} alt="LinkedIn" width="12" height="12" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }} />
                            {data.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '')}
                          </Link>
                        </Text>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Company Information Section */}
          <Section style={{ marginTop: '15px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'top', width: '80px' }}>
                    {data.companyLogoUrl && (
                      <Img
                        src={data.companyLogoUrl}
                        alt="Company Logo"
                        width="60"
                        height="20"
                        style={{
                          height: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                    )}
                  </td>
                  <td style={{ verticalAlign: 'top', textAlign: 'right' }}>
                    <div style={{ marginBottom: '8px' }}>
                      <Text style={{ fontSize: '11px', color: '#374151', margin: '2px 0' }}>
                        <Link href={data.companyLinkedin} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          <Img src={`${baseUrl}/icons/linkedin-box-fill.png`} alt="LinkedIn" width="12" height="12" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }} />
                          LinkedIn
                        </Link>
                        {' | '}
                        <Link href={data.companyWebsite} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          <Img src={`${baseUrl}/icons/earth-fill.png`} alt="Website" width="12" height="12" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }} />
                          Website
                        </Link>
                        {' | '}
                        <Link href={data.companyTwitter} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          <Img src={`${baseUrl}/icons/x-fill.png`} alt="Twitter" width="12" height="12" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }} />
                          Twitter
                        </Link>
                      </Text>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Promotional Banner Section */}
          {data.showBanner && data.bannerImageUrl && (
            <Section style={{ marginTop: '20px' }}>
              <Link href={data.bannerHref || '#'}>
                <Img
                  src={data.bannerImageUrl}
                  alt="Promotional Banner"
                  width="600"
                  height="120"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
              </Link>
            </Section>
          )}

          {/* Disclaimer Section */}
          {data.disclaimerText && (
            <Section style={{ marginTop: '20px' }}>
              <Text style={{
                fontSize: '9px',
                color: '#6b7280',
                lineHeight: '1.4',
                margin: '0',
                fontStyle: 'italic',
                whiteSpace: 'pre-line'
              }}>
                {data.disclaimerText}
              </Text>
            </Section>
          )}
        </Container>
      </Body>
    </Html>
  )
}
