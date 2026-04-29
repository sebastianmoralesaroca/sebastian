import './service-card.scss'

function ServiceCard({
  icon,
  title,
  description,
  tags = [],
  className = '',
}) {
  const safeTags = Array.isArray(tags) ? tags.slice(0, 3) : []

  return (
    <article className={['service-card', className].filter(Boolean).join(' ')}>
      <div className="service-card__body">
        <header className="service-card__header">
          <div className="service-card__icon" aria-hidden="true">
            {icon}
          </div>
          <h3 className="service-card__title">{title}</h3>
        </header>

        <p className="service-card__description">{description}</p>

        {safeTags.length ? (
          <ul className="service-card__tags" aria-label="Tags">
            {safeTags.map((tag, index) => (
              <li key={`${tag}-${index}`} className="service-card__tag">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export default ServiceCard
