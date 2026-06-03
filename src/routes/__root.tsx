import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, type ReactNode } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Md. Moshaheb Hossain — Business Analyst & Product Owner' },
      { name: 'description', content: 'Portfolio of Md. Moshaheb Hossain — Senior Business Analyst and Product Owner with 4+ years of experience across OTA platforms, ERP, fintech, and enterprise SaaS.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Domains' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
] as const

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        background: scrolled ? 'rgba(10,9,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,165,90,0.14)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.45rem', fontWeight: 600, color: '#F0EBE3', letterSpacing: '-0.02em', lineHeight: 1 }}>
          Moshaheb<span style={{ color: '#C9A55A' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.25rem' }} className="hidden md:flex">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeProps={{ className: 'nav-link active' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F0EBE3', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          aria-label="Toggle menu"
        >
          {open ? (
            <>
              <span style={{ width: 22, height: 1.5, background: '#C9A55A', transform: 'rotate(45deg) translate(4.5px, 4.5px)', transition: 'all 0.2s', display: 'block' }} />
              <span style={{ width: 22, height: 1.5, background: '#C9A55A', opacity: 0, transition: 'all 0.2s', display: 'block' }} />
              <span style={{ width: 22, height: 1.5, background: '#C9A55A', transform: 'rotate(-45deg) translate(4.5px, -4.5px)', transition: 'all 0.2s', display: 'block' }} />
            </>
          ) : (
            <>
              <span style={{ width: 22, height: 1.5, background: '#F0EBE3', display: 'block', transition: 'all 0.2s' }} />
              <span style={{ width: 22, height: 1.5, background: '#F0EBE3', display: 'block', transition: 'all 0.2s' }} />
              <span style={{ width: 22, height: 1.5, background: '#F0EBE3', display: 'block', transition: 'all 0.2s' }} />
            </>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: '#0A0908', borderTop: '1px solid #252118' }} className="md:hidden">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '0.9rem 1.5rem', borderBottom: '1px solid #1A1714', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: '#7A7166', transition: 'color 0.2s' }}
              activeProps={{ style: { display: 'block', padding: '0.9rem 1.5rem', borderBottom: '1px solid #1A1714', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: '#C9A55A' } }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1C1914', background: '#050403', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 600, color: '#F0EBE3', marginBottom: '0.5rem' }}>
            Moshaheb<span style={{ color: '#C9A55A' }}>.</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#5A5550', lineHeight: 1.7 }}>
            Business Analyst & Product Owner<br />Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A7166', marginBottom: '0.75rem', fontWeight: 600 }}>Navigation</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {NAV_LINKS.map(link => (
              <Link key={link.to} to={link.to} style={{ fontSize: '0.8rem', color: '#5A5550', textDecoration: 'none', transition: 'color 0.2s' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A7166', marginBottom: '0.75rem', fontWeight: 600 }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <a href="tel:+8801720334313" style={{ fontSize: '0.8rem', color: '#5A5550', textDecoration: 'none' }}>+880 1720 334313</a>
            <a href="mailto:moshahebhossain007@gmail.com" style={{ fontSize: '0.8rem', color: '#5A5550', textDecoration: 'none' }}>moshahebhossain007@gmail.com</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1C1914', paddingTop: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.7rem', color: '#3A3530' }}>© 2026 Md. Moshaheb Hossain. All rights reserved.</p>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
