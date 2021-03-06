import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box, Card, CssBaseline, Typography, Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import ContactsCard from '../components/ContactsCard';
import BG4 from './BG4.png';


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
    setSubscribers(response.data.id)
    setFirstName('')
    setLastName('')
    setEmail('')
    setSubscriber('')
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
            setSubscriber(response.data)

        })
    }, [token, loggedUserPk, setSubscribers, setSubscriber])


    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return(
    <ThemeProvider theme={Theme}>
    <CssBaseline />

    <Container
    sx={{
        backgroundImage: `url(${BG4})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        maxWidth: '100%',
        width: '100vh',
        minHeight: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        position: "relative",
        overflow: 'scroll',
        //zIndex: 1,
    }}
    >

    <Container
    sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        width: '38ch',
    }}>

    <Grid>
    <Grid>
    {/* item xs={12} sm={8} md={5} component={Paper} elevation={6} square */}
    <Container
    sx={{
        marginTop: 3,
        //marginRight: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    '& .MuiTextField-root': { m: 2, width: '30ch' },
    }}
    noValidate
    autoComplete="off"
    >
    {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}>

    <FormGroup
    sx={{
        marginBottom: 3,
    }}
    >
        <label htmlFor='reg-title'> First Name * </label>
        <TextField
            placeholder='First Name'
            id="firstName"
            // label="Title"
            name='firstName'
            variant="outlined"
            className='firstName'
            required value={firstName}
            helperText="Required"
            margin="normal"
            onChange={(e) => setFirstName(e.target.value)}
        />
    </FormGroup>

    <FormGroup
    sx={{
        marginBottom: 3,
    }}
    >
        <label htmlFor='reg-location'> Last Name * </label>
        <TextField
            placeholder='Last Name'
            id="lastName"
            // label="Location"
            name='lastName'
            variant="outlined"
            className='lastName'
            required value={lastName}
            helperText="Required"
            margin="normal"
            onChange={(e) => setLastName(e.target.value)}
        />
    </FormGroup>

    <FormGroup
        sx={{
            marginBottom: 2,
        }}
    >
        <label htmlFor='begin'> Email * </label>
        <TextField
            placeholder='Email'
            id="email"
            // label="month-day-year"
            type="email"
            name='email'
            required value={email}
            helperText="Required"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
        />
    </FormGroup>

    <Button 
    type='submit'
    fullWidth
    variant="contained"
    sx={{
        mt: 2,
        mb: 2,
        //borderRadius: 5,
    }}
    >
    Submit
    </Button>

    </form>
    </Container>
    </Grid>
    </Grid>

    
    <Typography component="h2" variant="h6"
    sx={{
        marginTop: 5,
    }}
    >
        <strong>Subscribers</strong>
    </Typography>

    <Container
        sx={{
            overflow: 'scroll',
            //width: '100%',
        }}
    >
    {subscribers.map((subscriber, pk ,id) => {
        return(
        <ContactsCard
            subscriberPk={subscriber.pk}
            subscriberId={subscriber.id}
            firstName={subscriber.first_name}
            lastName={subscriber.last_name}
            email={subscriber.email}
        />
    )}
    )}
    </Container>
    </Container>
    </Container>
    </ThemeProvider>
    )
}