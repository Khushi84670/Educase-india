import PrimaryButton from '../components/common/PrimaryButton'
import TextField from '../components/form/TextField'
import RadioGroup from '../components/form/RadioGroup'

const SignupPage = () => {
  return (
    <div className="screen screen--form">
      <h1 className="screen__title">Create your PopX account</h1>
      <form className="form">
        <TextField
          label="Full Name"
          name="fullName"
          placeholder="Marry Doe"
          required
        />
        <TextField
          label="Phone number"
          name="phone"
          placeholder="Marry Doe"
          required
        />
        <TextField
          label="Email address"
          name="email"
          placeholder="Marry Doe"
          type="email"
          required
        />
        <TextField
          label="Password"
          name="password"
          placeholder="Marry Doe"
          type="password"
          required
        />
        <TextField
          label="Company name"
          name="company"
          placeholder="Marry Doe"
        />
        <RadioGroup
          label="Are you an Agency?"
          name="agency"
          options={[
            { value: 'yes', label: 'Yes', defaultChecked: true },
            { value: 'no', label: 'No' },
          ]}
        />
        <div className="form__actions">
          <PrimaryButton type="submit" label="Create Account" />
        </div>
      </form>
    </div>
  )
}

export default SignupPage

