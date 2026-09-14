import { ImageResponse } from 'next/og';

export const alt = 'Nord Media House — Directional Creative Studio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF8FF',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(139, 124, 168, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(187, 169, 208, 0.25) 0%, transparent 50%)',
          fontFamily: 'serif',
          color: '#1F1929',
          padding: '60px',
        }}
      >
        {/* Border Frame */}
        <div
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid rgba(31, 25, 41, 0.15)',
            borderRadius: '32px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px',
            boxShadow: '0 25px 50px -12px rgba(44, 36, 59, 0.15)',
          }}
        >
          {/* Top Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: '#1F1929',
                  color: '#FAF8FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: 'bold',
                }}
              >
                N
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '22px', fontWeight: 'bold', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Nord Media House
                </span>
                <span style={{ fontSize: '13px', color: '#8B7CA8', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Directional Creative Studio
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '999px',
                backgroundColor: 'rgba(31, 25, 41, 0.05)',
                border: '1px solid rgba(31, 25, 41, 0.1)',
                fontSize: '14px',
                letterSpacing: '0.15em',
                fontWeight: 'bold',
                color: '#1F1929',
              }}
            >
              <span>4K UHD &bull; SHORT-FORM REELS</span>
            </div>
          </div>

          {/* Center Pitch */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '850px' }}>
            <div
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                lineHeight: 1.15,
                color: '#1F1929',
                letterSpacing: '-0.02em',
              }}
            >
              Scandinavian Visual Restraint Meets High-Octane Social Strategy.
            </div>
            <div
              style={{
                fontSize: '22px',
                color: 'rgba(31, 25, 41, 0.7)',
                fontFamily: 'sans-serif',
                lineHeight: 1.4,
              }}
            >
              Engineering viral short-form reels, 4K food & commercial stills, and high-performance Meta Ads campaigns.
            </div>
          </div>

          {/* Bottom Metric Tags */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(31, 25, 41, 0.1)',
              paddingTop: '24px',
              fontFamily: 'sans-serif',
              fontSize: '15px',
              color: 'rgba(31, 25, 41, 0.65)',
            }}
          >
            <span>&bull; 4.8x Meta Ads ROAS</span>
            <span>&bull; 12M+ Organic Views</span>
            <span>&bull; 4K Cinema Stills</span>
            <span style={{ fontWeight: 'bold', color: '#8B7CA8' }}>nordmediahouse.com &rarr;</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
