import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Register } from './routes/Register';
import { useState } from 'react';
import { Login } from './routes/Login';
import { Logout } from './routes/Logout';
import NewTrip from './routes/NewTrip';
import NewLog from './routes/NewLog';
import Navbar from './components/Navbar';
import Header from './assets/Header';
import Profile from './routes/Profile';
import { TripDetail } from './routes/TripDetail';
import LogDetail from './routes/LogDetail'
import { TripDetailCard } from './components/TripDetailCard';
import MyTrips from './routes/MyTrips';
import Home from './routes/Home'
import LogCard from './components/LogCard';
import useLocalStorageState from 'use-local-storage-state';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './Theme'
import  Geolocate  from './components/Geolocate';
import MapBox from './components/MapBox';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';


import AllTrips from './routes/AllTrips';


const App = () => {
  
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('Token', '')
  const [username, setUsername] = useLocalStorageState('Username', '')
  const [registerSuccess, setRegisterSuccess] = useState("")
  // const [avatar, setAvatar] = useLocalStorageState('Avatar', "");
  const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('UserPk', '');
  const [tripId, setTripId] = useLocalStorageState('TripId', '');
  const [status, setStatus] = useState(null);

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

const style1 = {
  margin: 0,
  top: 'auto',
  right: 10,
  bottom: 120,
  left: 'auto',
  position: 'fixed',
};
if (status === 401) {
  setAuth(null, null);
}

  return (
    <ThemeProvider theme={Theme}>
    <div className="App">

      <Header />

      <Router>
      
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab style={style1} component={Link} to="/newlog" color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      </Box>

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
          path="/logout"
          element={<Logout setAuth={setAuth} token={token} setLoggedUserPk={setLoggedUserPk} loggedUserPk={loggedUserPk} isLoggedIn={isLoggedIn} />}
        />

      {!token ? (
          <></>
        ) : (
          <>

        <Route
          path="/geo"
          element={<Geolocate />}
        />
        <Route
          path="/map"
          element={<MapBox />}
        />
        <Route
          path="/profile"
          element={<Profile setAuth={setAuth} token={token} username={username} />}
        />
        <Route
          path="/home"
          element={<Home token={token} loggedUserPk={loggedUserPk} isLoggedIn={isLoggedIn} username={username}/>}
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
        {/* <Route
          path="/tripdetailcard"
          element={<TripDetailCard setAuth={setAuth} loggedUserPk={loggedUserPk} token={token} isLoggedIn={isLoggedIn} username={username} />}
        /> */}
        <Route
          path="/trips/current/user/"
          element={<Profile setAuth={setAuth} loggedUserPk={loggedUserPk} token={token} isLoggedIn={isLoggedIn} username={username} setTripId={setTripId} getTripId={getTripId} />}
        />
        <Route
          path="/trip/future/user/"
          element={<Profile setAuth={setAuth} loggedUserPk={loggedUserPk} token={token} isLoggedIn={isLoggedIn} username={username} setTripId={setTripId} getTripId={getTripId} />}
        />

        
        </>
        )}
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
