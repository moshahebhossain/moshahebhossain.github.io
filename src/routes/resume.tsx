import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const CERTIFICATIONS = [
  { title: 'Project Management Fundamentals', year: '2024', icon: '◆' },
  { title: 'Jira Project Management', year: '2024', icon: '◈' },
  { title: 'Business Analysis & Process Management', year: '2023', icon: '◇' },
  { title: 'Huawei — Future of Mobile App', year: '2021', icon: '◉' },
]

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )
  const educations = [...allEducations].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div style={{ background: '#0A0908', paddingTop: '5rem' }}>

      {/* ── Header ─────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="section-label">Career History</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#F0EBE3', letterSpacing: '-0.02em', marginTop: '0.3rem' }}>
              Résumé<span style={{ color: '#C9A55A' }}>.</span>
            </h1>
          </div>
          <a href="/Moshaheb_Hossain_CV.pdf" download className="btn-gold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </a>
        </div>
      </section>

      {/* ── Work Experience Timeline ─────────────── */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <span className="section-label">Work Experience</span>

          <div style={{ position: 'relative', marginTop: '2.5rem', paddingLeft: '2.5rem' }}>
            {/* Vertical line */}
            <div className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {jobs.map((job, i) => (
                <div
                  key={job.jobTitle + job.startDate}
                  className={`anim-slide-r delay-${(i + 1) * 100}`}
                  style={{ position: 'relative' }}
                >
                  {/* Dot */}
                  <div className="timeline-dot" />

                  {/* Content card */}
                  <div
                    className="card-lift"
                    style={{
                      background: '#0D0C0A',
                      border: '1px solid #1C1914',
                      borderRadius: '3px',
                      padding: '1.75rem 2rem',
                    }}
                  >
                    {/* Date badge */}
                    <div style={{
                      display: 'inline-block',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#C9A55A',
                      background: 'rgba(201,165,90,0.08)',
                      border: '1px solid rgba(201,165,90,0.2)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px',
                      marginBottom: '0.9rem',
                      fontWeight: 600,
                    }}>
                      {job.startDate.slice(0, 7).replace('-', ' / ')} — {job.endDate ? job.endDate.slice(0, 7).replace('-', ' / ') : 'Present'}
                    </div>

                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#F0EBE3', marginBottom: '0.25rem', lineHeight: 1.2 }}>
                      {job.jobTitle}
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: '#7A7166', marginBottom: '1rem' }}>
                      {job.company} · {job.location}
                    </div>

                    <p style={{ fontSize: '0.83rem', color: '#6A6460', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                      {job.summary}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {job.tags.map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ───────────────────────────── */}
      <section style={{ borderTop: '1px solid #1C1914', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <span className="section-label">Education</span>

          <div style={{ position: 'relative', marginTop: '2.5rem', paddingLeft: '2.5rem' }}>
            <div className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {educations.map((edu, i) => (
                <div
                  key={edu.school}
                  className={`anim-slide-r delay-${(i + 1) * 100}`}
                  style={{ position: 'relative' }}
                >
                  <div className="timeline-dot" />
                  <div
                    className="card-lift"
                    style={{ background: '#0D0C0A', border: '1px solid #1C1914', borderRadius: '3px', padding: '1.75rem 2rem' }}
                  >
                    <div style={{ display: 'inline-block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A55A', background: 'rgba(201,165,90,0.08)', border: '1px solid rgba(201,165,90,0.2)', padding: '0.2rem 0.6rem', borderRadius: '2px', marginBottom: '0.9rem', fontWeight: 600 }}>
                      {edu.startDate.slice(0, 4)} — {edu.endDate?.slice(0, 4) ?? 'Present'}
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 600, color: '#F0EBE3', marginBottom: '0.3rem' }}>
                      {edu.school}
                    </h3>
                    <p style={{ fontSize: '0.83rem', color: '#6A6460', lineHeight: 1.75 }}>
                      {edu.summary}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                      {edu.tags.map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ──────────────────────── */}
      <section style={{ background: '#0D0C0A', borderTop: '1px solid #1C1914', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <span className="section-label">Certifications</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 600, color: '#F0EBE3', marginTop: '0.3rem', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Professional Development
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5px', background: '#1C1914' }}>
            {CERTIFICATIONS.map(cert => (
              <div
                key={cert.title}
                className="card-lift"
                style={{ background: '#0D0C0A', padding: '1.75rem 1.5rem', textAlign: 'center' }}
              >
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#C9A55A', marginBottom: '0.75rem' }}>{cert.icon}</div>
                <div style={{ fontSize: '0.82rem', color: '#C0B8AE', fontWeight: 500, lineHeight: 1.45, marginBottom: '0.5rem' }}>{cert.title}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: '#5A5550' }}>{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume
