import PropTypes from 'prop-types'

const PrimaryButton = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} className="btn btn--primary" onClick={onClick}>
      {label}
    </button>
  )
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
}

export default PrimaryButton

