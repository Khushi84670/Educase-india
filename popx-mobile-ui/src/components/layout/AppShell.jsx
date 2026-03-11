import PropTypes from 'prop-types'
import MobileFrame from './MobileFrame'
import FlowControls from './FlowControls'

const AppShell = ({ children }) => {
  return (
    <div className="app-shell">
      <header className="desktop-header">
        <div className="desktop-header__left">
          <div className="desktop-header__grid" />
          <span className="desktop-header__brand">devtask</span>
          <span className="desktop-header__separator">&gt;</span>
          <span className="desktop-header__page">Landing Screen</span>
        </div>
      </header>
      <main className="app-shell__main">
        <div className="app-shell__column">
          <MobileFrame>{children}</MobileFrame>
          <FlowControls />
        </div>
      </main>
    </div>
  )
}

AppShell.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppShell

