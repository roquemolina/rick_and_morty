import React, {useState} from 'react';
import validation from '../helpers/validation';

let initialUserData = {
  email: '',
  password: ''
};

function Form({login}) {
  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState(initialUserData);

  function handleChange (e) {
    let property = e.target.name,
    value = e.target.value;
    setUserData(
      {
        ...userData,
        [property]: value
      }
    )
    setErrors(
      validation(
        {...userData, [property]: value}
        )
      )
  }

  function handleSubmit (e) {
    e.preventDefault();
    login(userData);
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input 
        type="text"
        name='email'
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password"></label>
      <input
        type="text"
        name='password'
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button type='submit'>Submit</button>
    </form>
   );
}

export default Form;