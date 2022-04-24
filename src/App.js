import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './routes/Register';
import { Login } from './routes/Login';
import { Logout } from './routes/Logout';
import Profile from './routes/Profile';
import AllTrips from './routes/AllTrips';
import useLocalStorageState from 'use-local-storage-state';

const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

const isLoggedIn = username && token


  return (
    <div className="App">
      <h1>Welcome, {username}! </h1>
      <Router>
        <Routes>
        <Route
          path="/register"
          element={<Register isLoggedIn={isLoggedIn} setAuth={setAuth} setToken={setToken}/>}
        />
        <Route
          path="/login"
          element={<Login setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/profile"
          element={<Profile token={token} username={username} />}
        />
        <Route
          path="/trips"
          element={<AllTrips token={token} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/logout"
          element={<Logout setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} />}
        />
          {/* <Route path="/home"></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
