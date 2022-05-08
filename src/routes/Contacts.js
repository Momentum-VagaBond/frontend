import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box, Card, CssBaseline, Typography, Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { ContactsCard } from '../components/ContactsCard';


export default function AddContacts({token, isLoggedIn, loggedUserPk}) {
    const [subscribers, setSubscribers] = useState([])
    const [subscriber, setSubscriber] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
            console.log(firstName, lastName, email)

//Add
    axios
    .post("https://momentum-vagabond.herokuapp.com/api/contacts/",
    {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then(response => {
        console.log(response.data);
    setSubscriber(response.data)
    setFirstName('')
    setLastName('')
    setEmail('')
    alert("Contact submitted!")
    })
    .catch((e) => setError(e.message))
    }

//View
    useEffect(() => {
        axios
        .get("https://momentum-vagabond.herokuapp.com/api/contacts/",
            {headers: {Authorization: `Token ${token}`}
        })
        .then((response) => {
            console.log(response.data)
            setSubscribers(response.data)

        })
    }, [token, loggedUserPk, setSubscribers])


    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return(
    <ThemeProvider theme={Theme}>
    <CssBaseline />

    <Container
    sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
        // marginTop: 10,
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // backgroundColor: '#e9ecef',
        // position: 'absolute',
    }}>
    <Card
    sx={{
        marginBottom: 3,
    }}
    >
    <Typography>
        Add a Subscriber
    </Typography>
    </Card>

    <Grid container component="main">
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
    sx={{
        marginTop: 2,
        //marginRight: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    '& .MuiTextField-root': { m: 2, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
    {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}>

    <FormGroup>
        <label htmlFor='reg-title'> First Name * </label>
        <TextField
            placeholder='First Name'
            id="firstName"
            // label="Title"
            name='firstName'
            variant="filled"
            className='firstName'
            required value={firstName}
            helperText="This is required!"
            onChange={(e) => setFirstName(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-location'> Last Name * </label>
        <TextField
            placeholder='Last Name'
            id="lastName"
            // label="Location"
            name='lastName'
            variant="filled"
            className='lastName'
            required value={lastName}
            helperText="This is required!"
            onChange={(e) => setLastName(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='begin'> Email * </label>
        <TextField
            placeholder='Email'
            id="email"
            // label="month-day-year"
            type="email"
            name='email'
            required value={email}
            helperText="This is required!"
            onChange={(e) => setEmail(e.target.value)}
        />
    </FormGroup>

    <Button 
    type='submit'
    fullWidth
    variant="contained"
    sx={{
        mt: 3,
        mb: 2,
        borderRadius: 5,
    }}
    >
    Submit
    </Button>

    </form>
    </Box>
    </Grid>
    </Grid>
    </Container>
    <Box
    sx={{
        // marginTop: 10,
        // marginRight: 10,
        marginLeft: 2,
        marginBottom: 5,
        marginTop: 2,
        marginRight: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
    >
        <Card
    sx={{
        //marginBottom: 1,
        marginTop: 3,
    }}
    >
    <Typography>
        Subscribers
    </Typography>
    </Card>
    {subscribers.map((subscriber, pk) => {
        return(
        <ContactsCard
            key={pk}
            firstName={subscriber.first_name}
            lastName={subscriber.last_name}
            email={subscriber.email}
        />
    )}
    )}
    </Box>
    </ThemeProvider>
    )
}