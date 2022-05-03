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
import LogDetail from './routes/LogDetail'
import { TripDetailCard } from './components/TripDetailCard';
import MyTrips from './routes/MyTrips';
import LogCard from './components/LogCard';
import useLocalStorageState from 'use-local-storage-state';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './assets/Theme'
import  Geolocate  from './components/Geolocate';
import MapBox from './components/MapBox';




const App = () => {
  
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
  const [registerSuccess, setRegisterSuccess] = useState("")
  // const [avatar, setAvatar] = useLocalStorageState('Avatar', "");
  const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('UserPk', '');
  const [tripId, setTripId] = useLocalStorageState('TripId', '');

  const getLoggedUserPk = (pk) =>
    setLoggedUserPk(pk)

  const getTripId = (pk) =>
    setTripId(pk)

  // const updateAvatar = (newImg) =>
  //   setAvatar(newImg)

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

const isLoggedIn = username && token


  return (
    <ThemeProvider theme={Theme}>
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
          path="/geo"
          element={<Geolocate />}
        />
        <Route
          path="/map"
          element={<MapBox />}
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
          element={<AllTrips token={token} setTripId={setTripId} getTripId={getTripId} loggedUserPk={loggedUserPk} isLoggedIn={isLoggedIn} username={username}/>}
        />
      <Route
          path="/trips/:tripId"
          element={<TripDetail token={token} loggedUserPk={loggedUserPk} isLoggedIn={isLoggedIn} username={username}/>}
        />
      <Route
          path="/trips/:tripId/:logId"
          element={<LogDetail token={token} loggedUserPk={loggedUserPk} isLoggedIn={isLoggedIn} username={username}/>}
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
          element={<NewLog loggedUserPk={loggedUserPk} tripId={tripId} setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/mytrips"
          element={<MyTrips setAuth={setAuth} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />
        <Route
          path="/logcard"
          element={<LogCard setAuth={setAuth} loggedUserPk={loggedUserPk} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />
        {/* <Route path="/upload" element={<ImageUploadForm token={token} />} /> */}
        <Route
          path="/tripdetailcard"
          element={<TripDetailCard setAuth={setAuth} loggedUserPk={loggedUserPk} token={token} isLoggedIn={isLoggedIn} username={username} />}
        />

        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
