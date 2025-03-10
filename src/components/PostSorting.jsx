import PropTypes from 'prop-types'

export function PostSorting({
  fields = [],
  value,
  onChange,
  orderValue,
  onOrderChange,
}) {
  return (
    <div>
      <label htmlFor='sortBy'>Sort By:</label>
      <select
        name='sortBy'
        id='sorBy'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {fields.map((field) => (
          <option value={field} key={field}>
            {field}
          </option>
        ))}
      </select>
      {'/'}
      <label htmlFor='sortOrder'>Sort order: </label>
      <select
        name='sortOrder'
        id='sortOrder'
        value={orderValue}
        onChange={(e) => onOrderChange(e.target.value)}
      >
        <option value={'ascending'}>ascending</option>
        <option value={'descending'}>descending</option>
      </select>
    </div>
  )
}
//Crea due select per selezionare il campo per cui ordinare i post e decidere se selezionare ascendente o discendente
//fields andrà a contenere i timestamps createdAt e updatedAt, che andranno inseriti in option

//Usiamo PropTypes per assicurarci che il tipo dei prop ricevuti sia giusto
PostSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderValue: PropTypes.string.isRequired,
  onOrderChange: PropTypes.func.isRequired,
}
