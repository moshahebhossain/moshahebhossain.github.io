import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: Domains,
})

const DOMAINS = [
  {
    icon: '✈',
    category: 'Travel & Tourism',
    title: 'OTA Platforms (B2C & B2B)',
    description: 'Flight, Hotel, Visa, Tour, e-SIM, and Ancillaries for consumer and business travelers.',
    highlights: [
      'GDS / Airline Supplier Integration',
      'Branded Fare & Partner Perks',
      'Auto-issue, Reissue & Refund Automation',
      'Multi-gateway Payment (EBL, MTB, MFS)',
      'PCI DSS Compliance',
    ],
    accent: '#4A7B9D',
  },
  {
    icon: '⚖',
    category: 'Finance & Accounting',
    title: 'SaaS Accounting Systems',
    description: 'Multi-entity financial management solutions for fast-growing startups and enterprises.',
    highlights: [
      'Multi-entity SaaS Accounting Platform',
      'Automated Reconciliation Process',
      'Financial Reporting & Compliance',
      'Seller Module & Accounting Features',
      'Cartup Seller Integration',
    ],
    accent: '#5A9A7A',
  },
  {
    icon: '🛒',
    category: 'Retail & Commerce',
    title: 'E-Commerce Platforms',
    description: 'End-to-end online marketplace solutions with payments, inventory, and seller management.',
    highlights: [
      'Payment Gateway Integration (PCI DSS)',
      'Multi-vendor Marketplace Systems',
      'Cart & Checkout Optimization',
      'Inventory & Order Management',
      'Foodi Map & Delivery Zone Solutions',
    ],
    accent: '#9A6A5A',
  },
  {
    icon: '⚙',
    category: 'Enterprise Software',
    title: 'ERP Systems',
    description: 'Enterprise resource planning for 10,000+ user organisations across 5 functional modules.',
    highlights: [
      'Performance & Employee Management',
      'Asset & Recruitment Modules',
      'Dashboard Analytics & Reporting',
      'US Bangla Group ERP (ODO)',
      'Change Request Management',
    ],
    accent: '#7A6A9A',
  },
  {
    icon: '💳',
    category: 'Financial Technology',
    title: 'Fintech & Payment Gateway',
    description: 'Secure financial transaction systems integrating multiple payment rails and MFS providers.',
    highlights: [
      'Multi-gateway Integration (EBL, MTB, MFS)',
      'PCI DSS Compliance Implementation',
      'Visa, Mastercard & MFS Integration',
      'Reconciliation Automation',
      'Fraud Prevention Workflows',
    ],
    accent: '#9A8A4A',
  },
  {
    icon: '🚗',
    category: 'Mobility',
    title: 'Ride-sharing Platforms',
    description: 'Transportation & mobility solutions built from MVP to production-ready.',
    highlights: [
      'PortYou MVP (Full Product Lifecycle)',
      'Driver & Admin Module Design',
      'Real-time Dispatch Logic',
      'Fare Calculation Engine',
      'User Rating & Feedback Systems',
    ],
    accent: '#6A9A6A',
  },
  {
    icon: '✦',
    category: 'Food Technology',
    title: 'Food Delivery Platforms',
    description: 'Restaurant management and food delivery systems with advanced zone analytics.',
    highlights: [
      'Foodi Map Solution & Heatmap Analytics',
      'Delivery Zone Optimization',
      'Driver Dispatch Efficiency',
      'Restaurant Onboarding',
      'Order & Inventory Management',
    ],
    accent: '#9A6A7A',
  },
  {
    icon: '✈',
    category: 'Aviation',
    title: 'Aviation Operations',
    description: 'Airline management systems covering safety, efficiency, and passenger services.',
    highlights: [
      'Fuel Efficiency & Flight Safety Modules',
      'Transport Management with GPS Tracking',
      'Passenger Service System (PSS)',
      'Flight Schedule Management',
      'US Bangla Airlines Integration',
    ],
    accent: '#4A7A9A',
  },
]

export default function Domains() {
  return (
    <div style={{ background: '#0A0908', paddingTop: '5rem' }}>

      {/* ── Header ─────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">Work Portfolio</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#F0EBE3', letterSpacing: '-0.02em', marginTop: '0.3rem', maxWidth: 680 }}>
            Domain<br />
            <span style={{ fontStyle: 'italic', color: '#C9A55A' }}>Expertise</span>
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#7A7166', lineHeight: 1.8, maxWidth: 560, marginTop: '1.25rem' }}>
            Extensive experience across 8 distinct industries, delivering full-lifecycle business analysis
            and product ownership for complex software systems.
          </p>
        </div>
      </section>

      {/* ── Domain Cards ────────────────────────── */}
      <section style={{ padding: '0 1.5rem 6rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Alternating 2-col + full asymmetric grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5px', background: '#1C1914' }}>
            {DOMAINS.map((d, i) => (
              <div
                key={d.title}
                className={`card-lift anim-fade-up delay-${Math.min((i % 4 + 1) * 100, 400)}`}
                style={{
                  background: '#0D0C0A',
                  padding: '2.25rem 2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background icon */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontSize: '4.5rem',
                  opacity: 0.04,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  {d.icon}
                </div>

                {/* Category */}
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5A5550', marginBottom: '0.75rem', fontWeight: 600 }}>
                  {d.category}
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 600, color: '#F0EBE3', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {d.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.8rem', color: '#6A6460', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {d.description}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {d.highlights.map(h => (
                    <li key={h} style={{ fontSize: '0.77rem', color: '#7A7166', display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A55A', flexShrink: 0, marginTop: '0.38rem', display: 'inline-block' }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Accent line at bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${d.accent}40 0%, transparent 100%)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
