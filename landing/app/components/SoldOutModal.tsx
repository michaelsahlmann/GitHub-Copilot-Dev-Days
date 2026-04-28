'use client'

import { useState, useEffect, useCallback } from 'react'

export default function SoldOutModal() {
  const [isVisible, setIsVisible] = useState(false)
  const storageKey = 'event-finished-seen'

  const handleClose = useCallback(() => {
    sessionStorage.setItem(storageKey, 'true')
    setIsVisible(false)
  }, [storageKey])

  useEffect(() => {
    if (sessionStorage.getItem(storageKey)) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 350)

    return () => clearTimeout(timer)
  }, [storageKey])

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
              d="M12 22C17.523 22 22 17.523 22 12S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m8 12 2.5 2.5L16 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="soldout-badge">EVENTO FINALIZADO</span>

        <h2 className="soldout-title" id="soldout-title">¡Evento finalizado con éxito!</h2>

        <div className="soldout-body">
          <p>
            Gracias por acompañarnos en esta edición de <strong>GitHub Copilot Dev Days</strong>.
            La jornada cerró exitosamente y alcanzamos los objetivos de aprendizaje y comunidad.
          </p>
          <p>
            Agradecemos a todas las personas asistentes, speakers y colaboradores por hacer posible
            este encuentro. Muy pronto compartiremos novedades de próximas actividades.
          </p>
        </div>

        <div className="soldout-highlight">
          <span className="soldout-highlight-icon" aria-hidden="true">🎉</span>
          <p>
            <strong>Gracias por ser parte de la comunidad.</strong> Seguinos para enterarte de
            futuras ediciones y nuevos espacios de formación.
          </p>
        </div>

        <button className="soldout-btn" onClick={handleClose} autoFocus>
          Entendido
        </button>

      </div>
    </div>
  )
}
