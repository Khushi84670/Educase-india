import { useLocation, useNavigate } from 'react-router-dom'

const steps = ['/', '/signup', '/login', '/profile']

const FlowControls = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentIndex = Math.max(
    0,
    steps.findIndex((path) => path === location.pathname),
  )

  const isFirst = currentIndex === 0
  const isLast = currentIndex === steps.length - 1

  const goTo = (index) => {
    if (index >= 0 && index < steps.length) {
      navigate(steps[index])
    }
  }

  return (
    <div className="flow-controls">
      <button
        type="button"
        className="flow-controls__icon-button"
        onClick={() => navigate('/')}
        aria-label="Go to first screen"
      >
        ⌂
      </button>
      <div className="flow-controls__pager">
        <button
          type="button"
          className="flow-controls__arrow"
          onClick={() => goTo(currentIndex - 1)}
          disabled={isFirst}
          aria-label="Previous screen"
        >
          ‹
        </button>
        <span className="flow-controls__indicator">
          {currentIndex + 1} of {steps.length}
        </span>
        <button
          type="button"
          className="flow-controls__arrow"
          onClick={() => goTo(currentIndex + 1)}
          disabled={isLast}
          aria-label="Next screen"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default FlowControls

