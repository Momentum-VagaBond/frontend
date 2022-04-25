import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './routes/Register';
import { Login } from './routes/Login';
import { Logout } from './routes/Logout';
import NewTrip from './routes/NewTrip';
import { Navbar } from './components/Navbar';
import Profile from './routes/Profile';
import AllTrips from './routes/AllTrips';
import useLocalStorageState from 'use-local-storage-state';
import { NavigateBeforeRounded } from '@mui/icons-material';

const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('vagaBondToken', '')
  const [username, setUsername] = useLocalStorageState('vagaBondUsername', '')
  // const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('loggedUserPk', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  // const getLoggedUserPk = (pk) =>
  // setLoggedUserPk(pk)

const isLoggedIn = username && token


  return (
    <div className="App">
      <h1>NavaBond</h1>
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
          element={<Logout setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/newtrip"
          element={<NewTrip setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} />}
        />

          {/* <Route path="/home"></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
