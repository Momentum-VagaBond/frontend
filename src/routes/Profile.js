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


const Profile = ({username, token, loggedUserPk, id, trip, trips, trip_user }) => {
  const [profiles, setProfiles] = useState([]);
  const [userTrips, setUserTrips] = useState([]);

  const isUserTrips = trip & username

    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/auth/me/",
        {headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response.data)
      setProfiles(response.data)
      console.log(trips)
      setUserTrips(response.data.pk)
      })
    }, [token, loggedUserPk, userTrips, trips])

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
      <Card
      sx={{
        padding: 10,
        borderRadius: 10,
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 100%)',
        backgroundColor: '#0000',
      }}
      >
      This is {username}'s Profile
      </Card>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    </Box>
    <Card component="main" maxwidth="xs">
      {profiles.map((profile, pk) => {
        return (
          <ProfileCard key={pk}
            profileId={profile.pk}
            id={profile.id}
            bio={profile.bio}
            firstName={profile.first_name}
            lastName={profile.last_name}
            username={profile.username}
            />
      )}
        )}
    </Card>

    <Card component="main" maxwidth="xs">
      <h3>Your Trips</h3>
      <TripCard key={id}
      userTrips={trip_user}
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