import Image from 'next/image'
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      {/* ─── NAV ─── */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <img
            src="/github-copilot-dev-days.png"
            alt="GitHub Copilot Dev Days"
            style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://luma.com/fydb0k9x"
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inscribirme ↗
        </a>
      </nav>

      {/* ─── OFFICIAL BANNER ─── */}
      <div className="official-banner">
        <div className="official-banner-track">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="official-banner-inner">
              <span className="official-star">✦</span>
              <span className="official-text">
                <strong>Evento oficial autorizado de GitHub Copilot Dev Days</strong>
                {' '}— Avalado por el programa global de GitHub
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-badge-row animate-in">
          <span className="badge badge-free">🎉 100% Gratuito</span>
          <span className="badge badge-official">🏅 Evento Oficial GitHub</span>
          <span className="badge badge-new">🌎 Global</span>
        </div>

        <div className="hero-image-wrapper animate-in animate-delay-1">
          <Image
            src="/github-copilot-dev-days.png"
            alt="GitHub Copilot Dev Days"
            width={420}
            height={240}
            className="hero-image"
            priority
          />
        </div>

        <p className="hero-eyebrow animate-in animate-delay-1">Comunidad · IA · Código</p>

        <h1 className="hero-title animate-in animate-delay-2">
          GitHub Copilot<br />
          <span className="hero-title-accent">Dev Days</span>
        </h1>

        <p className="hero-city animate-in animate-delay-2">
          📍 Ciudad del Este, Paraguay
        </p>

        <div className="hero-info-chips animate-in animate-delay-3">
          <span className="chip">
            <span className="chip-icon">📅</span>
            Sábado 25 de Abril, 2026
          </span>
          <span className="chip">
            <span className="chip-icon">🕗</span>
            08:00 – 17:00 (PY)
          </span>
          <span className="chip">
            <span className="chip-icon">💻</span>
            Presencial
          </span>
          <span className="chip">
            <span className="chip-icon">🎓</span>
            Todos los niveles
          </span>
        </div>

        <div className="hero-cta-group animate-in animate-delay-4">
          <a
            href="https://luma.com/event/evt-m1xp6Y25jC1Dix9"
            className="luma-checkout--button"
            data-luma-action="checkout"
            data-luma-event-id="evt-m1xp6Y25jC1Dix9"
          >
            🚀 Reservar mi lugar gratis
          </a>
        </div>

        <div className="hero-scarcity animate-in animate-delay-4">
          <span className="scarcity-dot" />
          <span>Cupos limitados · Confirmación requerida vía email</span>
        </div>

        <a
          href="#agenda"
          className="hero-secondary-btn animate-in animate-delay-4"
        >
          Ver agenda ↓
        </a>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section about-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Sobre el evento</p>
            <h2 className="section-title">Transformando el desarrollo<br />con Inteligencia Artificial</h2>
          </div>

          <p className="about-content">
            Una iniciativa <strong>global y presencial</strong> impulsada por la comunidad,
            centrada en la programación asistida por IA con <strong>GitHub Copilot</strong>.
            Esta serie reúne a desarrolladores, entusiastas y líderes tecnológicos locales para
            explorar el verdadero potencial de Copilot a través de <strong>experiencias inmersivas</strong>.
          </p>

          <p className="about-content">
            Cada sesión está diseñada en torno a <strong>flujos de trabajo reales</strong> y talleres
            interactivos. Ya sea que estés dando tus primeros pasos con GitHub Copilot o busques
            perfeccionar tu dominio, este evento te brindará las habilidades para integrar la IA en
            tu ciclo de desarrollo diario.
          </p>

          <div className="requirements-card">
            <span className="requirements-icon">💻</span>
            <div className="requirements-text">
              <strong>Requisito para el taller práctico</strong>
              Notebook personal obligatorio, incluyendo su cargador. Asegúrate de traerla completamente cargada.
            </div>
          </div>

          <div className="requirements-card" style={{ marginTop: '1.5rem' }}>
            <span className="requirements-icon">🌎</span>
            <div className="requirements-text">
              <strong>¿No estás cerca de Ciudad del Este?</strong>
              GitHub Copilot Dev Days es un evento global. Busca otras locaciones alrededor del mundo en{' '}
              <a
                href="https://luma.com/githubcopilotdevdays"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#58a6ff', textDecoration: 'none', fontWeight: 500 }}
              >
                luma.com/githubcopilotdevdays ↗
              </a>
            </div>
          </div>

          <div className="requirements-card" style={{ marginTop: '1.5rem', borderLeftColor: 'var(--accent-purple)', backgroundColor: 'rgba(133, 52, 243, 0.05)' }}>
            <span className="requirements-icon">🎓</span>
            <div className="requirements-text">
              <strong>Para todos los niveles de experiencia</strong>
              Desde principiantes que no saben nada sobre IA o GitHub Copilot, hasta desarrolladores avanzados. ¡Todos son bienvenidos a aprender!
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">9h</div>
              <div className="stat-label">De contenido</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">3+</div>
              <div className="stat-label">Sesiones técnicas</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">0 $</div>
              <div className="stat-label">Totalmente gratis</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGENDA ─── */}
      <section className="section agenda-section" id="agenda">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Agenda del día</p>
            <h2 className="section-title">¿Qué vamos a hacer?</h2>
            <p className="section-subtitle">
              Sábado 25 de Abril · 08:00 a 17:00 · Sujeto a modificaciones
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot">🎟️</div>
              <div className="timeline-content">
                <div className="timeline-time">08:00 hs</div>
                <div className="timeline-title">Acreditación & Networking</div>
                <div className="timeline-desc">Registro de participantes y espacio para conectar con la comunidad.</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">🎤</div>
              <div className="timeline-content">
                <div className="timeline-time">08:30 hs</div>
                <div className="timeline-title">Bienvenida y Apertura</div>
                <div className="timeline-desc">Presentación oficial de GitHub Copilot Dev Days y dinámica del día.</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">🚀</div>
              <div className="timeline-content">
                <div className="timeline-time">09:00 hs</div>
                <div className="timeline-title">Sesión 1: GitHub Copilot en la práctica</div>
                <div className="timeline-desc">Instalación de VS Code · Creación de cuenta GitHub · Primeros pasos con Copilot.</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">💡</div>
              <div className="timeline-content">
                <div className="timeline-time">10:00 hs</div>
                <div className="timeline-title">Sesión 2: Beneficios & Ponentes</div>
                <div className="timeline-desc">GitHub Copilot: Tu compañero de IA para cada flujo de trabajo. Testimonios de la comunidad.</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">⚗️</div>
              <div className="timeline-content">
                <div className="timeline-time">10:00 hs</div>
                <div className="timeline-title">Laboratorio práctico</div>
                <div className="timeline-desc">Ejercicios guiados usando GitHub Copilot en escenarios reales.</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">🤖</div>
              <div className="timeline-content">
                <div className="timeline-time">13:30 hs</div>
                <div className="timeline-title">Sesión técnica: Modelos de LLMs</div>
                <div className="timeline-desc">Deep dive en los modelos de lenguaje detrás de GitHub Copilot.</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">🛠️</div>
              <div className="timeline-content">
                <div className="timeline-time">15:30 hs</div>
                <div className="timeline-title">Taller Hands-on</div>
                <div className="timeline-desc">
                  Workshop intensivo. Todo el contenido disponible en{' '}
                  <a
                    href="https://copilot-dev-days.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}
                  >
                    copilot-dev-days.github.io ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">🏁</div>
              <div className="timeline-content">
                <div className="timeline-time">17:00 hs</div>
                <div className="timeline-title">Cierre del evento</div>
                <div className="timeline-desc">Palabras de cierre, recursos y próximos pasos en la comunidad.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION ─── */}
      <section className="section location-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Ubicación</p>
            <h2 className="section-title">¿Cómo llegar?</h2>
          </div>

          <div className="location-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.5!2d-54.6485!3d-25.5084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzMwLjIiUyA1NMKwMzgnNTQuNiJX!5e0!3m2!1ses!2spy!4v1"
              width="600"
              height="220"
              className="map-embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mi LAB Hub de Innovación - Ciudad del Este"
            />
            <div className="location-details">
              <div className="location-info-row">
                <span className="location-info-icon">📌</span>
                <div>
                  <div className="location-info-title">Lugar del evento</div>
                  <div className="location-info-value">Mi LAB - Hub de Innovación Colaborativo</div>
                  <div className="location-info-sub">Plaza City · Km 8, Ciudad del Este 7000, Paraguay</div>
                </div>
              </div>

              <div className="location-info-row">
                <span className="location-info-icon">🅿️</span>
                <div>
                  <div className="location-info-title">Estacionamiento</div>
                  <div className="location-info-value">Amplio estacionamiento disponible</div>
                  <div className="location-info-sub">Sin costo adicional para asistentes</div>
                </div>
              </div>

              <div className="location-info-row">
                <span className="location-info-icon">🗓️</span>
                <div>
                  <div className="location-info-title">Fecha y horario</div>
                  <div className="location-info-value">Sábado 25 de Abril, 2026</div>
                  <div className="location-info-sub">08:00 a 17:00 (hora Paraguay, GMT-3)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VOLUNTEERS & SPONSORS ─── */}
      <section className="section get-involved-section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-muted)' }}>
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Sponsors & Voluntarios</p>
            <h2 className="section-title">Sé parte de la iniciativa</h2>
            <p className="section-subtitle">
              Ya sea sumándote como voluntario pionero o apoyando el evento como patrocinador, hay un espacio para ti.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {/* Sponsor Card */}
            <div className="stat-card get-involved-sponsor" style={{ textAlign: 'left', padding: '28px' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px', color: '#fef08a' }}>Conviértete en Patrocinador</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                Apoya a la comunidad tecnológica local y conecta tu marca con líderes y desarrolladores apasionados por la Inteligencia Artificial y el futuro del código.
              </p>
              <a 
                href="https://wa.me/595981328046" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="badge"
                style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', border: '1px solid rgba(37, 211, 102, 0.3)', padding: '8px 16px', fontSize: '13px', textDecoration: 'none', transition: 'all 0.2s' }}
              >
                Contactar por WhatsApp ↗
              </a>
            </div>

            {/* Volunteer Card */}
            <div className="stat-card get-involved-volunteer" style={{ textAlign: 'left', padding: '28px' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>⭐</div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px', color: '#ddd6fe' }}>Únete como Voluntario</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                Sé pionero en este evento único. Obtendrás acceso exclusivo a oportunidades de networking, contactos clave y muchísimos otros beneficios especiales.
              </p>
              <a 
                href="https://wa.me/595981328046" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="badge"
                style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', border: '1px solid rgba(37, 211, 102, 0.3)', padding: '8px 16px', fontSize: '13px', textDecoration: 'none', transition: 'all 0.2s' }}
              >
                Postularse por WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REGISTER ─── */}
      <section className="section register-section" id="registro">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Inscripción gratuita</p>
            <h2 className="section-title">¡Reservá tu lugar ahora!</h2>
            <p className="section-subtitle">
              Entrada 100% gratuita. Solo necesitás confirmar tu asistencia.<br />
              Recibirás un email de confirmación con todos los detalles.
            </p>
          </div>

          {/* Urgency cards */}
          <div className="urgency-cards">
            <div className="urgency-card urgency-limited">
              <span className="urgency-icon">⚡</span>
              <div>
                <div className="urgency-title">Cupos Limitados</div>
                <div className="urgency-desc">El espacio físico tiene capacidad limitada. Asegurá tu lugar cuanto antes.</div>
              </div>
            </div>
            <div className="urgency-card urgency-confirm">
              <span className="urgency-icon">✅</span>
              <div>
                <div className="urgency-title">Confirmación Requerida</div>
                <div className="urgency-desc">Recibirás un email de confirmación. Si no podés asistir, por favor cancelá para liberar el cupo.</div>
              </div>
            </div>
            <div className="urgency-card urgency-free">
              <span className="urgency-icon">🎟️</span>
              <div>
                <div className="urgency-title">100% Gratuito</div>
                <div className="urgency-desc">Sin costo alguno. Solo traé tu laptop y muchas ganas de aprender IA.</div>
              </div>
            </div>
          </div>

          {/* Desktop: iframe embed */}
          <div className="register-iframe-wrapper">
            <iframe
              src="https://luma.com/embed/event/evt-m1xp6Y25jC1Dix9/simple"
              width="600"
              height="500"
              frameBorder="0"
              style={{ border: '1px solid #30363d', borderRadius: '12px' }}
              allow="fullscreen; payment"
              aria-hidden={false}
              tabIndex={0}
              title="Inscripción al evento en Luma"
            />
          </div>

          {/* Mobile: checkout button */}
          <div className="register-mobile-cta">
            <a
              href="https://luma.com/event/evt-m1xp6Y25jC1Dix9"
              className="luma-checkout--button"
              data-luma-action="checkout"
              data-luma-event-id="evt-m1xp6Y25jC1Dix9"
              style={{ maxWidth: '380px', width: '100%' }}
            >
              🚀 Reservar mi lugar gratis
            </a>
            <span className="register-note">
              🔒 Gratuito · Confirmación por email · Cupos limitados
            </span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="container">
          <img
            src="/github-copilot-dev-days.png"
            alt="GitHub Copilot Dev Days"
            style={{ height: '28px', width: 'auto', objectFit: 'contain', margin: '0 auto 16px', display: 'block', opacity: 0.6 }}
          />

          <div className="footer-links">
            <a
              href="https://copilot-dev-days.github.io"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal de Labs ↗
            </a>
            <a
              href="https://github.com/michaelsahlmann/GitHub-Copilot-Dev-Days/blob/main/EVENT_CODE_OF_CONDUCT.md"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Código de Conducta
            </a>
            <a
              href="https://luma.com/fydb0k9x"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Luma ↗
            </a>
          </div>

          <div className="footer-divider" />

          <p className="footer-copy" style={{ marginBottom: '16px', fontSize: '14px' }}>
            ¿Tienes dudas sobre el evento?{' '}
            <a
              href="https://wa.me/595981328046"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}
            >
              Habla con el organizador por WhatsApp
            </a>
          </p>

          <p className="footer-copy">
            Organizado por{' '}
            <a href="mailto:michelsd12@gmail.com">Michael Sahlmann</a>
            {' '}·{' '}
            Ciudad del Este, Paraguay<br />
            GitHub Copilot Dev Days es una iniciativa global de comunidad · Marzo–Mayo 2026
          </p>
        </div>
      </footer>
    </>
  )
}
