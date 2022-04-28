import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Container from '@mui/material/Container';
import { Link as RouterLink, useNavigate, Navigate } from 'react-router-dom'
import { ProfileCard } from "../components/ProfileCard";


const Profile = ({username, token}) => {
  const [profiles, setProfiles] = useState([]);

    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/auth/me/",
      {
        headers: {Authorization: `Token ${token}`}}
      )
      .then((response) => {
        console.log(response.data)
      setProfiles(response.data)
      })
    }, [token])

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
      This is {username}'s' Profile
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    </Box>
    <Card component="main" maxwidth="xs">
      {profiles.map((profile) => {
        return (
          <ProfileCard
            profileId={profile.pk}
            id={profile.id}
            bio={profile.bio}
            />
      )}
        )}
    </Card>
    {/* <Card>
      <Link to="/trips">Trips</Link>
    </Card> */}
  </Container>
  )
};

export default Profile