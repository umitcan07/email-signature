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
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#ffffff', color: '#000000', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Section style={{ padding: '20px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'top', paddingRight: '20px' }}>
                    {data.avatarPhotoUrl && (
                      <Img
                        src={data.avatarPhotoUrl}
                        alt={data.name}
                        width="80"
                        height="80"
                        style={{
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #e5e7eb',
                        }}
                      />
                    )}
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <Text style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        margin: '0 0 5px 0'
                      }}>
                        {data.name}
                      </Text>
                      <Text style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        margin: '0 0 10px 0'
                      }}>
                        {data.role}
                      </Text>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <Text style={{ fontSize: '12px', color: '#374151', margin: '2px 0' }}>
                        📧 <Link href={`mailto:${data.email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          {data.email}
                        </Link>
                      </Text>
                      <Text style={{ fontSize: '12px', color: '#374151', margin: '2px 0' }}>
                        🌐 <Link href={data.companyWebsite} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          {data.companyWebsite.replace(/^https?:\/\//, '')}
                        </Link>
                      </Text>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <Text style={{ fontSize: '12px', color: '#374151', margin: '2px 0' }}>
                        <Link href={data.companyLinkedin} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          LinkedIn
                        </Link>
                        {' | '}
                        <Link href={data.companyTwitter} style={{ color: '#2563eb', textDecoration: 'none' }}>
                          Twitter
                        </Link>
                        {data.telegram && (
                          <>
                            {' | '}
                            <Link href={`https://t.me/${data.telegram}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                              Telegram
                            </Link>
                          </>
                        )}
                        {data.linkedin && (
                          <>
                            {' | '}
                            <Link href={data.linkedin} style={{ color: '#2563eb', textDecoration: 'none' }}>
                              Personal LinkedIn
                            </Link>
                          </>
                        )}
                      </Text>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {data.bannerImageUrl && (
            <Section style={{ marginTop: '20px' }}>
              <Link href={data.bannerHref || '#'}>
                <Img
                  src={data.bannerImageUrl}
                  alt="Company Banner"
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

          {data.companyLogoUrl && (
            <Section style={{ marginTop: '20px', textAlign: 'center' }}>
              <Img
                src={data.companyLogoUrl}
                alt="Company Logo"
                width="120"
                height="40"
                style={{
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Section>
          )}

          {data.disclaimerText && (
            <Section style={{ marginTop: '20px' }}>
              <Text style={{
                fontSize: '10px',
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
