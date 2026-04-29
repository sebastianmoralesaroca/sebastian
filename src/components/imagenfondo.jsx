import { useState } from 'react'
import Header from './header'
import Presentacion from './presentacion'
import Cuerpo from './cuerpo'
import './imagenfondo.scss'

function ImagenFondo() {
  const [activeView, setActiveView] = useState('home')
  const isHome = activeView === 'home'

  const handleBack = () => {
    if (activeView !== 'home') {
      setActiveView('home')
    }
  }

  return (
    <main
      className={[
        'imagenfondo-page',
        isHome ? 'imagenfondo-page--home' : '',
        !isHome ? 'imagenfondo-page--detail' : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="imagenfondo-card">
        <div className="imagenfondo-home-layout">
          <div className="imagenfondo-hero">
            <Header activeView={activeView} onBack={handleBack} />
            <Presentacion />
          </div>
          <div className="imagenfondo-home-content">
            <Cuerpo activeView={activeView} onNavigate={setActiveView} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ImagenFondo
