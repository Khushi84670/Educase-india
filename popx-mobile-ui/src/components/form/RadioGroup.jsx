import PropTypes from 'prop-types'

const RadioGroup = ({ label, name, options }) => {
  return (
    <fieldset className="radio-group">
      <legend className="radio-group__label">{label}</legend>
      <div className="radio-group__options">
        {options.map((option) => (
          <label key={option.value} className="radio-group__option">
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={option.defaultChecked}
            />
            <span className="radio-group__text">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      defaultChecked: PropTypes.bool,
    }),
  ).isRequired,
}

export default RadioGroup

