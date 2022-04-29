import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Container from '@mui/material/Container';
import { ProfileCard } from "../components/ProfileCard";
import { TripCard } from '../components/TripCard';
// import { PictureAsPdfOutlined } from '@mui/icons-material';


const Profile = ({username, token, loggedUserPk, id, trips }) => {
  const [profiles, setProfiles] = useState([]);
  const [userTrips, setUserTrips] = useState([]);
  

    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/auth/me/",
        {headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response.data)
      setProfiles(response.data)
      console.log(userTrips)
      setUserTrips(response.data.pk)
      })
    }, [token, loggedUserPk, userTrips])

return (
<Container component="main" maxWidth="xs">
  <CssBaseline />
    <Box sx={{
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center',
        }}
    >
      This is {username}'s Profile
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    </Box>
    <Card component="main" maxwidth="xs">
      {profiles.map((profile, pk) => {
        return (
          <ProfileCard key={pk}
            profileId={profile.pk}
            id={profile.id}
            bio={profile.bio}
            />
      )}
        )}
    </Card>

    <Card component="main" maxwidth="xs">
      <h3>Your Trips</h3>
      <TripCard
      />
    </Card>
    
    {/* {userTrips.filter(trip => trip.includes(`${id}`)).map(filteredTrip => (
    <TripCard
      username={filteredTrip.username}
      // key={trip.pk}
      title={filteredTrip.title}
      location={filteredTrip.location}
      // duration={trip.duration}
      trip_user={filteredTrip.user}
      // trip_username={trip.username}
      // trip_user_first={trip.user_first_name}
      // trip_user_last={trip.user_last_name}
      begin={filteredTrip.begin}
      end={filteredTrip.end}
      // tripId={trip.pk}
    />
    ))} */}

  </Container>
  )
};

export default Profile