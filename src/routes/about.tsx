import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

const TOOLS = [
  'Figma', 'JIRA', 'Confluence', 'Power BI', 'Tableau', 'SQL',
  'MS Excel', 'Postman', 'BPMN 2.0', 'Draw.io', 'Miro', 'Balsamiq',
  'Trello', 'MS Office', 'CRM Systems',
]

const ARTEFACTS = [
  { abbr: 'BRD', name: 'Business Requirement Document' },
  { abbr: 'FRD', name: 'Functional Requirement Document' },
  { abbr: 'SRS', name: 'Software Requirements Specification' },
  { abbr: 'UC',  name: 'Use Case Specifications' },
  { abbr: 'US',  name: 'User Stories with Acceptance Criteria' },
  { abbr: 'WF',  name: 'Wireframes & Figma Prototypes' },
  { abbr: 'RTM', name: 'Requirement Traceability Matrix' },
  { abbr: 'IG',  name: 'Implementation Guides' },
]

const GALLERY = [
  {
    src: '/better-profile.jpg',
    alt: 'Moshaheb Hossain — Professional',
    span: 'tall',
  },
  {
    src: '/photo-1.jpg',
    alt: 'Moshaheb Hossain',
    span: 'wide',
  },
  {
    src: '/photo-2.jpg',
    alt: 'Moshaheb Hossain',
    span: 'square',
  },
  {
    src: '/photo-3.jpg',
    alt: 'Moshaheb Hossain',
    span: 'wide',
  },
]

function About() {
  return (
    <div style={{ background: '#0A0908', paddingTop: '5rem' }}>

      {/* ── Header ─────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">The Person</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#F0EBE3', letterSpacing: '-0.02em', marginTop: '0.3rem', maxWidth: 680 }}>
            About<br />
            <span style={{ fontStyle: 'italic', color: '#C9A55A' }}>Moshaheb Hossain</span>
          </h1>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────── */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '6px',
          }} className="rsp-gallery">
            {/* Main tall image — spans 2 rows */}
            <div className="gallery-img" style={{ gridRow: '1 / 3', aspectRatio: '0.7' }}>
              <img
                src={GALLERY[0].src}
                alt={GALLERY[0].alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Wide image top-right */}
            <div className="gallery-img" style={{ gridColumn: '2 / 4', aspectRatio: '2.1' }}>
              <img
                src={GALLERY[1].src}
                alt={GALLERY[1].alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Two squares bottom */}
            <div className="gallery-img" style={{ aspectRatio: '1' }}>
              <img
                src={GALLERY[2].src}
                alt={GALLERY[2].alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="gallery-img" style={{ aspectRatio: '1' }}>
              <img
                src={GALLERY[3].src}
                alt={GALLERY[3].alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Summary ────────────────── */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '5rem', alignItems: 'start' }} className="rsp-about-cols">
          <div>
            <span className="section-label">Professional Summary</span>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'With over 4 years of experience in the IT and Tech industry, I specialize in Business Analysis and Product Management across the complete Software Development Life Cycle (SDLC), with strong command of both Agile and Waterfall methodologies.',
                'Proficient in creating comprehensive documentation including Business Requirement Documents (BRD), Functional Requirement Documents (FRD), Use Case Specifications, Workflows, Implementation Guides, and Requirement Traceability Matrix (RTM).',
                'My expertise spans Requirement Elicitation & Prioritization, Scope Management, Gap Analysis, Stakeholder Management, Sprint Planning, Product Backlog Management, and Change Request Management. I excel in creating User Stories, UML diagrams, and Wireframes using Figma.',
                'Awarded Strategic Business Analyst of the Year 2025 at US Bangla Group for exceptional contribution to OTA platform development and enterprise ERP implementation.',
              ].map((para, i) => (
                <p key={i} style={{ fontSize: '0.9rem', color: '#7A7166', lineHeight: 1.85 }}>{para}</p>
              ))}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['SDLC Expert', 'Agile & Waterfall', 'Technical Documentation', 'Data Analysis', 'UX Design'].map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div style={{ borderLeft: '1px solid #1C1914', paddingLeft: '3rem' }} className="rsp-divider">
            <span className="section-label">Quick Facts</span>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'Current Role', value: 'Business Analyst → Product Owner' },
                { label: 'Company', value: 'TechnoNext (US Bangla Group)' },
                { label: 'Location', value: 'Dhaka, Bangladesh' },
                { label: 'Education', value: 'BSc in CSE, BAUST' },
                { label: 'Experience', value: '4+ Years in IT/Tech' },
                { label: 'Award', value: 'Strategic BA of the Year 2025' },
                { label: 'Publication', value: 'IJRASET, Vol. 10, 2022' },
              ].map(fact => (
                <div key={fact.label}>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5A5550', marginBottom: '0.2rem', fontWeight: 600 }}>{fact.label}</div>
                  <div style={{ fontSize: '0.85rem', color: '#F0EBE3' }}>{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools & Technologies ────────────────── */}
      <section style={{ borderTop: '1px solid #1C1914', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">Tools & Platforms</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 600, color: '#F0EBE3', marginTop: '0.3rem', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Industry-Standard Tools
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {TOOLS.map(tool => (
              <span
                key={tool}
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: '#131110',
                  border: '1px solid #252118',
                  color: '#C0B8AE',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  borderRadius: '2px',
                  transition: 'all 0.2s',
                  cursor: 'default',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(201,165,90,0.4)'
                  el.style.color = '#C9A55A'
                  el.style.background = 'rgba(201,165,90,0.06)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = '#252118'
                  el.style.color = '#C0B8AE'
                  el.style.background = '#131110'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BA Artefacts ─────────────────────────── */}
      <section style={{ background: '#0D0C0A', borderTop: '1px solid #1C1914', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">Deliverables</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 600, color: '#F0EBE3', marginTop: '0.3rem', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            BA Artefacts I Produce
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5px', background: '#1C1914' }}>
            {ARTEFACTS.map(art => (
              <div
                key={art.abbr}
                className="card-lift"
                style={{ background: '#0D0C0A', padding: '1.75rem 1.5rem' }}
              >
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#C9A55A', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {art.abbr}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#7A7166', lineHeight: 1.5 }}>
                  {art.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
