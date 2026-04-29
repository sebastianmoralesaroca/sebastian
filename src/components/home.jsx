import './home.scss'

const homeCards = [
  {
    title: 'Proyectos',
    subtitle:
      'Revisa proyectos reales, desarrollos en proceso y soluciones que construyo para distintos contextos digitales.',
    image:  '/project.jpeg',
    imageAlt: 'Portada de proyectos',
    view: 'project',
  },
  {
    title: 'Servicios',
    subtitle:
      'Explora los servicios que ofrezco en desarrollo web, integracion de sistemas y construccion de productos digitales.',
    image: '/setup2.jpeg',
    imageAlt: 'Portada de servicios',
    view: 'service',
  },
  {
    title: 'Download CV',
    subtitle:
      'Accede a mi curriculm, experiencia, stack tecnico y recorrido profesional en una sola vista descargable.',
    image: '/download2.jpeg',
    imageAlt: 'Portada para descargar curriculum',
    href: '/CV_Sebastian_Morales.pdf',
    download: 'CV_sebastian_Morales.pdf',
  },
  {
    title: 'Code in GitHub',
    subtitle:
      'Consulta mis repositorios, practicas de desarrollo y proyectos versionados donde documento parte de mi trabajo.',
    image: '/code.jpeg',
    imageAlt: 'Portada de GitHub',
    href: 'https://github.com/sebastianmoralesaroca',
  },
  {
    title: 'Founder MyMenu',
    subtitle:
      'Emprendimiento personal del que soy fundador. Actualmente sigue en produccion y pronto estara disponible.',
    image: '/menu.jpeg',
    imageAlt: 'Portada de MyMenu',
    view: 'construction',
  },
  {
    title: 'Founder MyWeb',
    subtitle:
      'Proyecto personal en etapa de produccion del que soy fundador. Muy pronto estara disponible para su lanzamiento.',
    image: '/setup.jpeg',
    imageAlt: 'Portada de MyWeb',
    view: 'construction',
  },
]

function Home({ onNavigate }) {
  return (
    <section className="home" aria-label="Contenido principal">
      {homeCards.map((card, index) => (
        card.view ? (
          <button
            key={`${card.title}-${index}`}
            className="home__card"
            type="button"
            onClick={() => onNavigate?.(card.view)}
            style={{ '--home-card-image': `url(${card.image})` }}
          >
            <div className="home__card-overlay">
              <h2 className="home__card-title">{card.title}</h2>
              <p className="home__card-subtitle">{card.subtitle}</p>
            </div>
            <img className="home__card-image" src={card.image} alt={card.imageAlt} />
          </button>
        ) : (
          <a
            key={`${card.title}-${index}`}
            className="home__card"
            href={card.href}
            download={card.download}
            style={{ '--home-card-image': `url(${card.image})` }}
          >
            <div className="home__card-overlay">
              <h2 className="home__card-title">{card.title}</h2>
              <p className="home__card-subtitle">{card.subtitle}</p>
            </div>
            <img className="home__card-image" src={card.image} alt={card.imageAlt} />
          </a>
        )
      ))}
    </section>
  )
}

export default Home
