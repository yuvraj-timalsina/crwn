import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
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
