import './index.css'

const CountriesList = props => {
  const {countryDetails, visitedToCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickAdd = () => {
    visitedToCountry(id)
  }

  const visit = isVisited ? 'Visited' : 'Visit'
  const visitClassName = isVisited ? 'visited' : ''

  return (
    <li className="country-item">
      <div className="country">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="visit-text">{visit}</p>
        ) : (
          <button
            type="button"
            className={`visit ${visitClassName}`}
            onClick={onClickAdd}
          >
            {visit}
          </button>
        )}
      </div>
      <hr className="line" />
    </li>
  )
}

export default CountriesList
