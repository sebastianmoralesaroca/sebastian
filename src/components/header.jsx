import './header.scss'
import { useEffect, useState } from 'react'

const whatsappMessage = encodeURIComponent('Hola, quiero cotizar')
const whatsappHref = `https://wa.me/56941771163?text=${whatsappMessage}`

function Header({ activeView = 'home', onBack }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const canGoBack = activeView !== 'home'

  useEffect(() => {
    let rafId = 0

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        setIsScrolled(window.scrollY > 8)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <header className={isScrolled ? 'header header--scrolled' : 'header'}>
      <button
        className="header__button header__button--back"
        type="button"
        aria-label="Retroceder"
        onClick={onBack}
        disabled={!canGoBack}
      >
        <img src="/back.svg" alt="" aria-hidden="true" />
      </button>

      <a
        className="header__button"
        href={whatsappHref}
        aria-label="WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/whatsapp.svg" alt="" aria-hidden="true" />
      </a>
    </header>
  )
}

export default Header
