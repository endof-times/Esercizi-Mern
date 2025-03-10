import PropTypes from 'prop-types'

export function PostFilter({ field, value, onChange }) {
  return (
    <div>
      <label htmlFor={`fields-${field}`}>{field}:</label>
      <input type='text' name={`fields-${field}`} id={`fields-${field}`} value={value} onChange={(e)=> onChange(e.target.value)} />
    </div>
  )
}
//Cerca i post in base al campo(field) che scegliamo in App.jsx

//Usiamo PropTypes per assicurarci che il tipo dei prop ricevuti sia giusto
PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
