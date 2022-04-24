import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './routes/Register';
import { Login } from './routes/Login'
import { Logout } from './routes/Logout'
import { NewTrip } from './routes/NewTrip'
import { Navbar } from './components/Navbar'
import useLocalStorageState from 'use-local-storage-state';
import { NavigateBeforeRounded } from '@mui/icons-material';

const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
  const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('loggedUserPk', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const getLoggedUserPk = (pk) =>
  setLoggedUserPk(pk)

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
          element={<Login setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} loggedUserPk={loggedUserPk} setLoggedUserPk={setLoggedUserPk} />}
        />
        <Route
          path="/logout"
          element={<Logout setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/newtrip"
          element={<NewTrip setAuth={setAuth} setToken={setToken} isLoggedIn={isLoggedIn} loggedUserPk={loggedUserPk} />}
        />

          {/* <Route path="/home"></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
