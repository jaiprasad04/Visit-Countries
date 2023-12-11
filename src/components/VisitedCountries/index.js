import './index.css'

const VisitedCountries = props => {
  const {visitCountry, deleteVisitCountry} = props
  const {id, name, imageUrl} = visitCountry

  const onClickRemove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="country-box">
      <div className="visited-country-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="visited-country-description">
          <p className="visited-country-name">{name}</p>
          <button
            type="button"
            data-testid="delete"
            onClick={onClickRemove}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
