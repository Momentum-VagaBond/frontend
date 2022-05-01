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
import { ImageUploadForm } from '../components/ImageUploadForm';
// import { PictureAsPdfOutlined } from '@mui/icons-material';


const Profile = ({username, token, loggedUserPk, id, bio }) => {
  const [trips, setTrips] = useState([]);


    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/auth/me",
        {headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response.data)
      setTrips(response.data.trips)
      })
    }, [token, loggedUserPk, setTrips])

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
      <h2>This is {username}'s Profile</h2>
      {bio}
      </Card>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    </Box>


    <Card component="main" maxwidth="xs">
      {trips.map((trip, pk) => {
        return (
          <TripCard key={pk}
            tripId={trip.pk}
            title={trip.title}
            location={trip.location}
            firstName={trip.user_first_name}
            lastName={trip.user_last_name}
            username={trip.username}
            />
      )}
        )}
    </Card>

  </Container>
  )
};

export default Profile