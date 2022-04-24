// import { Navigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export const Register = ({ isLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegistration = (e) => {
      console.log("making post");
    e.preventDefault();
    setError("");
    console.log(username, password, email);
      axios
        .post("https://momentum-vagabond.herokuapp.com/auth/users/", {
          username: username,
          password: password,
          email: email,
        })
        .then((res) => {
          console.log(res.data);
          setIsRegistered(true);
          console.log(isRegistered)
        })
        .catch((e) => setError(e.message))
      }
  // if (isLoggedIn) {
  //   return <Navigate to='/' />
  // }
  // if (isRegistered) {
  //   console.log("Registered!")
  //   return <Navigate to='/login' />
  // }
  return (
    <div className="Register">
    <h2>register</h2>
        {error && <div className="error">{error}</div>}

    <form onSubmit={handleRegistration}>

        <label htmlFor='reg-email'>Email: </label>
          <input
            type='text'
            className='text-input'
            id='reg-email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        <label htmlFor='reg-username'>Choose a Username: </label>
        <input
            type='text'
            className='text-input'
            id='reg-username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />

          <br></br>

        <label htmlFor='password'>Choose a Password: </label>
        <input
            type='password'
            className='password-reg'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <label htmlFor='password'>Enter your e-mail: </label>
          <input
            type='text'
            className='text-input'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          < button color="primary" type='submit'>Register</button>
      </form>
    </div>
  );
}