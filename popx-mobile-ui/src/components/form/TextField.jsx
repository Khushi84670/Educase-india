import PropTypes from 'prop-types'

const TextField = ({ label, placeholder, type = 'text', required, name }) => {
  return (
    <label className="field">
      <span className="field__label">
        {label}
        {required && <span className="field__required">*</span>}
      </span>
      <input
        className="field__input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  )
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
}

export default TextField

