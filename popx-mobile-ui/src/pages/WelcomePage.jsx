import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/common/PrimaryButton'
import SecondaryButton from '../components/common/SecondaryButton'

const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="screen screen--welcome">
      <div className="screen__spacer" />
      <div className="screen__content">
        <h1 className="screen__title">Welcome to PopX</h1>
        <p className="screen__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="screen__actions">
          <PrimaryButton
            label="Create Account"
            onClick={() => navigate('/signup')}
          />
          <SecondaryButton
            label="Already Registered? Login"
            onClick={() => navigate('/login')}
          />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage

