import Home from './home'
import Project from './project'
import Service from './service'
import Construccion from './constuccion'

function Cuerpo({ activeView, onNavigate }) {
  if (activeView === 'project') {
    return <Project />
  }

  if (activeView === 'service') {
    return <Service />
  }

  if (activeView === 'construction') {
    return <Construccion />
  }

  return (
    <>
      <Home onNavigate={onNavigate} />
    </>
  )
}

export default Cuerpo
