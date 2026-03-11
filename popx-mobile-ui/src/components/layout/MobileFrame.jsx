import PropTypes from 'prop-types'

const MobileFrame = ({ children }) => {
  return (
    <div className="mobile-container">
      <div className="mobile-content">{children}</div>
    </div>
  )
}

MobileFrame.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MobileFrame

