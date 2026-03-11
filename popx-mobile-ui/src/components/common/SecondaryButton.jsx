import PropTypes from 'prop-types'

const SecondaryButton = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} className="btn btn--secondary" onClick={onClick}>
      {label}
    </button>
  )
}

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
}

export default SecondaryButton

