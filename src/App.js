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
import TripDetail from './routes/TripDetail';
import MyTrips from './routes/MyTrips';
import LogCard from './components/LogCard';
import useLocalStorageState from 'use-local-storage-state';
import { NavigateBeforeRounded } from '@mui/icons-material';

const muiBaseTheme = createMuiTheme();

const App = () => {
  
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
  const [registerSuccess, setRegisterSuccess] = useState("")
  const [avatar, setAvatar] = useLocalStorageState('Avatar', "");
  const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('UserPk', '');

  const getLoggedUserPk = (pk) =>
    setLoggedUserPk(pk)

  // const updateAvatar = (newImg) =>
  //   setAvatar(newImg)

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
          element={<Login setAuth={setAuth} setRegisterSuccess={setRegisterSuccess} getLoggedUserPk={getLoggedUserPk} setLoggedUserPk={setLoggedUserPk} loggedUserPk={loggedUserPk} registerSuccess={registerSuccess} setToken={setToken} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/profile"
          element={<Profile setAuth={setAuth} token={token} username={username} />}
        />
        <Route
          path="/trips"
          element={<AllTrips token={token} loggedUserPk={loggedUserPk} isLoggedIn={isLoggedIn} username={username}/>}
        />

      <Route
          path="/trips/:tripId"
          element={<TripDetail token={token} isLoggedIn={isLoggedIn} username={username}/>}
        />

        <Route
          path="/logout"
          element={<Logout setAuth={setAuth} token={token} setLoggedUserPk={setLoggedUserPk} loggedUserPk={loggedUserPk} isLoggedIn={isLoggedIn} />}
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
          path="/mytrips"
          element={<MyTrips setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />
        <Route
          path="/logcard"
          element={<LogCard setAuth={setAuth} loggedUserPk={loggedUserPk} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />
          {/* <Route path="/home"></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
