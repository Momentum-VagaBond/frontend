import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './routes/Register';
import { useState } from 'react';
import { Login } from './routes/Login';
import { Logout } from './routes/Logout';
import NewTrip from './routes/NewTrip';
import NewLog from './routes/NewLog';
import { Navbar } from './components/Navbar';
import Profile from './routes/Profile';
import AllTrips from './routes/AllTrips';
import MyTrips from './routes/MyTrips';
import LogCard from './components/LogCard';
import useLocalStorageState from 'use-local-storage-state';
import { NavigateBeforeRounded } from '@mui/icons-material';


const App = () => {
  
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
  const [registerSuccess, setRegisterSuccess] = useState("")

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  // const getLoggedUserPk = (pk) =>
  // setLoggedUserPk(pk)

const isLoggedIn = username && token


  return (
    <div className="App">

      <Router>

      <Navbar
          isLoggedIn={isLoggedIn}
          token={token}
          setToken={setToken}
          setUsername={setUsername}
          />

        <Routes>
        <Route
          path="/register"
          element={<Register isLoggedIn={isLoggedIn} setRegisterSuccess={setRegisterSuccess} registerSuccess={registerSuccess} setAuth={setAuth} username={username} token={token} setToken={setToken}/>}
        />
        <Route
          path="/"
          element={<Login setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login setAuth={setAuth} setRegisterSuccess={setRegisterSuccess} registerSuccess={registerSuccess} setToken={setToken} isLoggedIn={isLoggedIn} />}
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
          element={<Logout setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/newtrip"
          element={<NewTrip setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />
        <Route
          path="/newlog"
          element={<NewLog setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/users/1/mytrips/"
          element={<MyTrips setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />
        <Route
          path="/logcard"
          element={<LogCard setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />
          {/* <Route path="/home"></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
