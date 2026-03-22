'use client'

import { useState, useEffect, useCallback } from 'react'

export default function SoldOutModal() {
  const [isVisible, setIsVisible] = useState(false)

  const handleClose = useCallback(() => {
    sessionStorage.setItem('soldout-seen', 'true')
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('soldout-seen')) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 350)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }

    const scrollY = window.scrollY
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [isVisible, handleClose])

  if (!isVisible) return null

  return (
    <div className="soldout-backdrop" role="dialog" aria-modal="true" aria-labelledby="soldout-title">
      <div className="soldout-container">

        <div className="soldout-icon-wrapper">
          <svg className="soldout-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="soldout-badge">LISTA DE ESPERA DISPONIBLE</span>

        <h2 className="soldout-title" id="soldout-title">¡Cupos Agotados!</h2>

        <div className="soldout-body">
          <p>
            Debido al alto flujo de registros y la extraordinaria demanda, los cupos disponibles
            se agotaron en tiempo récord.
          </p>
          <p>
            Si aún deseas participar, puedes inscribirte en la <strong>lista de espera</strong>.
            En caso de que algún participante desista, serás notificado con prioridad para
            confirmar tu lugar.
          </p>
        </div>

        <div className="soldout-highlight">
          <span className="soldout-highlight-icon" aria-hidden="true">✉️</span>
          <p>
            <strong>Mantente atento a tu correo electrónico</strong> — será el canal oficial
            de comunicación para cualquier actualización sobre tu inscripción.
          </p>
        </div>

        <button className="soldout-btn" onClick={handleClose} autoFocus>
          Entendido, ver página
        </button>

      </div>
    </div>
  )
}
