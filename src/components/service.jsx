import ServiceCard from './service-card'
import './service.scss'

const serviceItems = [
  {
    icon: '🤖',
    title: 'Programación IA',
    description:
      'Desarrollo de soluciones con inteligencia artificial para automatizar procesos y mejorar la toma de decisiones empresariales.',
    tags: ['#ChatGPT', '#N8N', '#Python'],
  },
  {
    icon: '💻',
    title: 'Desarrollo Web',
    description:
      'Creación de sitios web modernos y responsivos. Optimización SEO, integración de bases de datos y desarrollo con tecnologías actuales.',
    tags: ['#ReactJS', '#NodeJS', '#TypeScript'],
  },
  {
    icon: '🚀',
    title: 'Landing Pages',
    description:
      'Diseño y desarrollo de landing pages optimizadas para conversión. Carga rápida, formularios de contacto e integración con herramientas de marketing.',
    tags: ['#SEO', '#Responsive', '#Conversion'],
  },
  {
    icon: '📱',
    title: 'Aplicaciones Web',
    description:
      'Desarrollo de aplicaciones web completas y escalables. Arquitectura full-stack, autenticación de usuarios, APIs REST y despliegue en la nube.',
    tags: ['#Full-Stack', '#Cloud', '#API REST'],
  },
  {
    icon: '🔗',
    title: 'Integraciones API',
    description:
      'Integración de sistemas mediante APIs. Pasarelas de pago, servicios de mensajería, automatización con Zapier y sincronización de datos entre plataformas.',
    tags: ['#Stripe', '#WhatsApp', '#Zapier'],
  },
  {
    icon: '📊',
    title: 'Bases de Datos',
    description:
      'Organización, gestión y visualización de datos para convertir información dispersa en paneles claros y útiles para la toma de decisiones.',
    tags: ['#Power BI', '#Dashboards', '#Gestión de Datos'],
  },
  {
    icon: '🛠️',
    title: 'Corrección de Errores',
    description:
      'Servicio de corrección de bugs y errores en plazo fijo. Diagnóstico de problemas, solución de fallos críticos y optimización de código existente.',
    tags: ['#Bug Fixes', '#Debugging', '#Optimización'],
  },
  {
    icon: '🤝',
    title: 'Colaboración',
    description:
      'Trabajo en equipo permanente. Añadir productos, actualizar catálogos, gestión de inventario, nuevas funcionalidades y soporte estratégico.',
    tags: ['#Gestión', '#Actualizaciones', '#Soporte'],
  },
  {
    icon: '🔒',
    title: 'Ciberseguridad',
    description:
      'Implementación de medidas de seguridad esenciales. Certificados SSL/TLS, firewall, protección DDoS, autenticación de dos factores y auditorías de seguridad.',
    tags: ['#SSL/TLS', '#Firewall', '#2FA'],
  },
  {
    icon: '💡',
    title: 'Consultoría y Auditoría',
    description:
      'Asesoramiento estratégico en tecnología y auditoría de sistemas. Consultoría en arquitectura, optimización de procesos, análisis de seguridad, revisión de código y evaluación de infraestructura tecnológica.',
    tags: ['#Consultoría', '#Auditoría', '#Optimización'],
  },
]

function Service() {
  return (
    <section className="service" id="services" aria-label="Servicios">
      <h2 className="service__title">Servicios</h2>
      <div className="service__grid">
        {serviceItems.map((item, index) => (
          <ServiceCard
            key={`${item.title}-${index}`}
            icon={item.icon}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default Service
