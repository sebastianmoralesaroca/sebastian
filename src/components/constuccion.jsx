import './construccion.scss'

function Construccion() {
  return (
    <section className="construccion" aria-label="Proyecto en construccion">
      <div className="construccion__content">
        <img
          className="construccion__sign"
          src="/danger.png"
          alt="Advertencia de proyecto en construccion"
        />
        <button className="construccion__button" type="button">
          Propyecto en <br />
          construccion
        </button>
      </div>
    </section>
  )
}

export default Construccion
