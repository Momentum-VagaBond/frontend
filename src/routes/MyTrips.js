import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField'
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function MyTrips({token, loggedUserPk, pk}) {
    const [trips, setTrips] = useState([]);


    useEffect(() => {
        axios
        .get("https://momentum-vagabond.herokuapp.com/api/trips/",
        {
            headers: {Authorization: `Token ${token}`}}
        )
        .then((response) => {
            console.log(response.data)
        setTrips(response.data)
        })
    }, [token, loggedUserPk])

    return(
    <>
    <Container maxWidth="xs">
        <h1>This is a test list of ALL User trips</h1>
    </Container>
    <Container component="main" maxWidth="xs">
    {trips.map((trip) =>
        <Card sx={{
            mt: 8,
            pl: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            border: 1
        }}>
            <p>pk: {trip.pk}</p>
            <p>title: {trip.title}</p>
            <p>location: {trip.location}</p>
            <p>duration: {trip.duration}</p>
            <p>user: {trip.user}</p>
            <p>username: {trip.username}</p>
            <p>first name: {trip.user_first_name}</p>
            <p>last name: {trip.user_last_name}</p>
        </Card>
        )}
    </Container>
    </>
    )
}