import Card from './card'
import './project.scss'

const projectCards = [
  {
    title: 'Dichosa',
    description: 'Circulo de mujeres en proceso de sanacion y crecimiento',
    image: '/dichosa.png',
    imageAlt: 'Dichosa',
    href: 'https://dichosa.vercel.app/',
    tags: ['SASS', 'JavaScript', 'React'],
  },
  {
    title: 'North Security',
    description: 'Seguridad privada para eventos, empresas e instituciones',
    image: '/north.png',
    imageAlt: 'north security',
    href: 'https://north-securit.netlify.app/',
    tags: ['Tailwind', 'JavaScript', 'npm'],
  },
  {
    title: 'Lim',
    description: 'Seguridad y servicios integrales',
    image: '/lim.png',
    imageAlt: 'seguridad',
    href: 'https://www.limchile.cl/',
    tags: ['SASS', 'JavaScript', 'React'],
  },
  {
    title: 'justclean',
    description: 'Servicios de aseo para empresas e instituciones',
    image: '/justclean.png',
    imageAlt: 'aseo',
    href: 'https://justclean.cl/',
    tags: ['SASS', 'JavaScript', 'React'],
  },
  {
    title: 'Securitytank',
    description: 'Empresa de seguridad privada',
    image: '/securitytank.png',
    imageAlt: 'seguridad',
    href: 'https://securitytank.cl/',
    tags: ['SASS', 'JavaScript', 'node'],
  },
  {
    title: 'Data Base',
    description: 'Gestion de base de Datos SQL y NoSQL',
    image: '/database.jpeg',
    imageAlt: 'data base',
    href: '#',
    tags: ['SQL', 'NoSQL', 'MongoDB'],
  },
]

function Project() {
  return (
    <section className="project" id="project" aria-label="Proyectos">
      <h2 className="project__title">Proyectos</h2>
      <div className="project__grid">
        {projectCards.map((card, index) => (
          <Card
            key={`${card.title}-${index}`}
            title={card.title}
            description={card.description}
            image={card.image}
            imageAlt={card.imageAlt}
            href={card.href}
            tags={card.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default Project
