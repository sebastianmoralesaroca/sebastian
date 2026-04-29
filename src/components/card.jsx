import './card.scss'

function Card({
  title,
  description,
  tags = [],
  image,
  imageAlt = '',
  imagePaddingY = 16,
  imagePadding,
  imageFit = 'cover',
  href,
  className = '',
}) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href } : {}
  const safeTags = Array.isArray(tags) ? tags.slice(0, 3) : []
  const resolvedImagePaddingY =
    typeof (imagePadding ?? imagePaddingY) === 'number'
      ? `${imagePadding ?? imagePaddingY}px`
      : imagePadding ?? imagePaddingY

  return (
    <Wrapper
      className={['card', className].filter(Boolean).join(' ')}
      style={{
        '--card-image': `url(${image})`,
        '--card-image-padding-y': resolvedImagePaddingY,
        '--card-image-fit': imageFit,
      }}
      {...wrapperProps}
    >
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description ? <p className="card__description">{description}</p> : null}
        {safeTags.length ? (
          <ul className="card__tags" aria-label="Tags">
            {safeTags.map((tag, index) => (
              <li key={`${tag}-${index}`} className="card__tag">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <img
        className="card__image"
        src={image}
        alt={imageAlt}
        aria-hidden={imageAlt ? undefined : true}
      />
    </Wrapper>
  )
}

export default Card
