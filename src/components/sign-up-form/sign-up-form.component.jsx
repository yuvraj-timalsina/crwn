import { useState } from 'react';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor='displayName'>Display Name</label>
        <input
          onChange={handleChange}
          name='displayName'
          value={displayName}
          type='text'
          id='displayName'
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          onChange={handleChange}
          name='email'
          value={email}
          type='email'
          id='email'
          required
        />

        <label htmlFor=''>Password</label>
        <input
          onChange={handleChange}
          name='password'
          value={password}
          type='password'
          required
        />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          type='password'
          id='confirmPassword'
          required
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
