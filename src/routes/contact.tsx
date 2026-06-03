import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const SOCIAL_LINKS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 11 19.79 19.79 0 0 1 1.57 2.48 2 2 0 0 1 3.54 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+880 1720 334313',
    href: 'tel:+8801720334313',
    sub: 'Call or WhatsApp',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'moshahebhossain007@gmail.com',
    href: 'mailto:moshahebhossain007@gmail.com',
    sub: 'Direct email',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/moshaheb',
    href: 'https://www.linkedin.com/in/moshaheb',
    sub: 'Professional network',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+880 1720 334313',
    href: 'https://wa.me/8801720334313',
    sub: 'Quick messages',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => { setSubmitted(true); setLoading(false) })
      .catch(() => setLoading(false))
  }

  return (
    <div style={{ background: '#0A0908', paddingTop: '5rem' }}>

      {/* ── Header ─────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span className="section-label">Let's Connect</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#F0EBE3', letterSpacing: '-0.02em', marginTop: '0.3rem', maxWidth: 600 }}>
            Get in<br />
            <span style={{ fontStyle: 'italic', color: '#C9A55A' }}>Touch</span>
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#7A7166', lineHeight: 1.8, maxWidth: 480, marginTop: '1.25rem' }}>
            Open to collaboration, new opportunities, or just a conversation about
            product strategy and business analysis.
          </p>
        </div>
      </section>

      {/* ── Social cards ────────────────────────── */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5px', background: '#1C1914', marginBottom: '5rem' }}>
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-lift"
                style={{
                  background: '#0D0C0A',
                  padding: '2rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ width: 44, height: 44, border: '1px solid rgba(201,165,90,0.25)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A55A' }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5A5550', marginBottom: '0.25rem', fontWeight: 600 }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#F0EBE3', fontWeight: 500, wordBreak: 'break-all' }}>
                    {link.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#5A5550', marginTop: '0.2rem' }}>
                    {link.sub}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ── Contact Form ─────────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }} className="rsp-contact-grid">
            {/* Left info */}
            <div>
              <span className="section-label">Send a Message</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 600, color: '#F0EBE3', marginTop: '0.75rem', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                I'll respond within 24 hours.
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#6A6460', lineHeight: 1.8, marginBottom: '2rem' }}>
                Whether you're looking for a Business Analyst, Product Owner, or want
                to collaborate on a challenging product — let's talk.
              </p>
              <div style={{ borderLeft: '1px solid rgba(201,165,90,0.25)', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#5A5550', marginBottom: '0.3rem' }}>References available from:</div>
                <div style={{ fontSize: '0.82rem', color: '#C0B8AE', lineHeight: 1.7 }}>
                  Md. Harun-Ur-Rashid<br />
                  <span style={{ fontSize: '0.73rem', color: '#5A5550' }}>
                    Sr. Project Manager<br />
                    TechnoNext Software Limited, US Bangla Group
                  </span><br />
                  <a href="tel:+8801707881151" style={{ color: '#C9A55A', textDecoration: 'none', fontSize: '0.78rem' }}>+880 1707 881151</a>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#C0B8AE', lineHeight: 1.7, marginTop: '0.75rem' }}>
                  Md. Toukir Ahmed<br />
                  <span style={{ fontSize: '0.73rem', color: '#5A5550' }}>
                    Assistant Professor, Dept. of IRE<br />
                    University of Frontier Technology, Bangladesh (UFTB)
                  </span><br />
                  <a href="tel:+8801738039128" style={{ color: '#C9A55A', textDecoration: 'none', fontSize: '0.78rem' }}>+880 1738 039128</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ background: '#0D0C0A', border: '1px solid rgba(201,165,90,0.25)', borderRadius: '3px', padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#C9A55A', marginBottom: '0.75rem' }}>◆</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#F0EBE3', marginBottom: '0.75rem' }}>
                    Message Sent
                  </h3>
                  <p style={{ fontSize: '0.83rem', color: '#6A6460', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Thanks for reaching out. I'll be in touch very soon.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline-gold" style={{ border: '1px solid rgba(201,165,90,0.3)' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="rsp-name-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7166', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Name
                      </label>
                      <input type="text" name="name" required placeholder="Your name" className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7166', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Email
                      </label>
                      <input type="email" name="email" required placeholder="your@email.com" className="form-input" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7166', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Subject
                    </label>
                    <input type="text" name="subject" placeholder="Collaboration / Opportunity / General" className="form-input" />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7166', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Message
                    </label>
                    <textarea name="message" required rows={6} placeholder="Tell me about the opportunity or project..." className="form-input" style={{ resize: 'none' }} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold"
                    style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
