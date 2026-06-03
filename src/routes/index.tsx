import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const STATS = [
  { num: '4+',  label: 'Years Experience' },
  { num: '12+', label: 'Products Shipped' },
  { num: '10K+',label: 'ERP Users Served' },
  { num: '8',   label: 'Domain Verticals' },
]

const COMPETENCIES = [
  {
    symbol: '◆',
    title: 'Business Analysis',
    items: ['Requirement Elicitation', 'BRD · FRD · SRS', 'Gap Analysis', 'BPMN 2.0 Modelling', 'Stakeholder Management'],
  },
  {
    symbol: '◈',
    title: 'Product Ownership',
    items: ['Product Roadmapping', 'User Stories & Epics', 'Sprint Planning', 'Backlog Management', 'Release Planning'],
  },
  {
    symbol: '◇',
    title: 'Data & Analytics',
    items: ['Data Analysis', 'Power BI / Tableau', 'SQL Querying', 'Business Intelligence', 'Heatmap Analytics'],
  },
  {
    symbol: '◉',
    title: 'Technical Skills',
    items: ['Figma Wireframing', 'JIRA / Confluence', 'Postman API Analysis', 'UML Diagrams', 'Technical Documentation'],
  },
]

function Home() {
  return (
    <div style={{ background: '#0A0908', minHeight: '100vh' }}>

      {/* ── Hero ─────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '8rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }} className="rsp-hero">

          {/* Left: text */}
          <div className="anim-fade-up">
            <span className="section-label">Business Analyst · Product Owner</span>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 600,
              lineHeight: 1.04,
              color: '#F0EBE3',
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
              marginTop: '0.25rem',
            }}>
              Md. Moshaheb<br />
              <span style={{ fontStyle: 'italic', color: '#C9A55A' }}>Hossain</span>
            </h1>

            <p style={{ fontSize: '1rem', color: '#7A7166', lineHeight: 1.8, maxWidth: 520, marginBottom: '2.5rem' }}>
              Over 4 years transforming complex business requirements into
              innovative digital products. Expert in OTA platforms, enterprise
              ERP, fintech, and multi-domain SaaS solutions across the full SDLC.
            </p>

            <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
              <a href="/Moshaheb_Hossain_CV.pdf" download className="btn-gold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
              <Link to="/projects" className="btn-outline-gold">
                View Domains →
              </Link>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="anim-fade-in delay-300 rsp-hero-photo" style={{ position: 'relative', width: 300, flexShrink: 0 }}>
            {/* Decorative backing */}
            <div style={{
              position: 'absolute',
              inset: '-18px',
              background: 'linear-gradient(135deg, rgba(201,165,90,0.12) 0%, rgba(201,165,90,0.04) 100%)',
              border: '1px solid rgba(201,165,90,0.2)',
              borderRadius: '4px',
            }} />
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: -18, left: -18, width: 24, height: 24, borderTop: '2px solid #C9A55A', borderLeft: '2px solid #C9A55A' }} />
            <div style={{ position: 'absolute', bottom: -18, right: -18, width: 24, height: 24, borderBottom: '2px solid #C9A55A', borderRight: '2px solid #C9A55A' }} />

            <div className="gallery-img" style={{ aspectRatio: '0.82', position: 'relative', zIndex: 1 }}>
              <img
                src="/better-profile.jpg"
                alt="Md. Moshaheb Hossain"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
              />
            </div>

            {/* Award badge */}
            <div style={{
              position: 'absolute',
              bottom: -14,
              left: -14,
              background: '#0D0C0A',
              border: '1px solid rgba(201,165,90,0.35)',
              padding: '0.6rem 0.85rem',
              borderRadius: '2px',
              zIndex: 2,
            }}>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7166', marginBottom: '0.15rem' }}>Award 2025</div>
              <div style={{ fontSize: '0.72rem', color: '#C9A55A', fontWeight: 700, lineHeight: 1.3 }}>Strategic BA of the Year</div>
              <div style={{ fontSize: '0.62rem', color: '#5A5550' }}>US Bangla Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────── */}
      <section style={{ borderTop: '1px solid #1C1914', borderBottom: '1px solid #1C1914' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="rsp-stats">
          {STATS.map((s, i) => (
            <div key={s.label} className={`anim-fade-up delay-${(i + 1) * 100}`} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.8rem', fontWeight: 700, color: '#C9A55A', lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5A5550', marginTop: '0.4rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Competencies ────────────────────── */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">Expertise</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 600, color: '#F0EBE3', letterSpacing: '-0.02em', marginTop: '0.25rem' }}>
              Core Competencies
            </h2>
          </div>

          {/* Grid with gap lines */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5px', background: '#1C1914', border: '1px solid #1C1914' }}>
            {COMPETENCIES.map((c, i) => (
              <div
                key={c.title}
                className={`card-lift anim-fade-up delay-${(i + 1) * 100}`}
                style={{ background: '#0D0C0A', padding: '2rem 1.75rem' }}
              >
                <div style={{ fontSize: '1.3rem', color: '#C9A55A', marginBottom: '0.85rem', lineHeight: 1 }}>{c.symbol}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 600, color: '#F0EBE3', marginBottom: '1.25rem' }}>
                  {c.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {c.items.map(item => (
                    <li key={item} style={{ fontSize: '0.8rem', color: '#6A6460', padding: '0.35rem 0', borderBottom: '1px solid #1A1714', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#C9A55A', flexShrink: 0, display: 'inline-block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #141210 0%, #1A1614 100%)', border: '1px solid #252118', margin: '0 1.5rem 6rem', borderRadius: '4px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 600, color: '#F0EBE3', marginBottom: '0.4rem' }}>
              Ready to collaborate?
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#7A7166' }}>Open to new opportunities and product challenges.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">Get in Touch</Link>
            <Link to="/resume" className="btn-outline-gold">View Resume</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
