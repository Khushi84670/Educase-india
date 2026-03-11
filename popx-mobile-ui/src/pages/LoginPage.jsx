import PrimaryButton from '../components/common/PrimaryButton'
import TextField from '../components/form/TextField'

const LoginPage = () => {
  return (
    <div className="screen screen--form">
      <h1 className="screen__title">Signin to your PopX account</h1>
      <p className="screen__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form className="form">
        <TextField
          label="Email Address"
          name="email"
          placeholder="Enter email address"
          type="email"
          required
        />
        <TextField
          label="Password"
          name="password"
          placeholder="Enter password"
          type="password"
          required
        />
        <div className="form__actions">
          <PrimaryButton type="submit" label="Login" />
        </div>
      </form>
    </div>
  )
}

export default LoginPage

