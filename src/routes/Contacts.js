import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box, Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { ContactsCard } from '../components/ContactsCard';


export default function AddContacts({token, isLoggedIn, loggedUserPk}) {
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState([])
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
    setContact(response.data)
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
            setContacts(response.data)

        })
    }, [token, loggedUserPk, setContacts])


    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return(
    <ThemeProvider theme={Theme}>
    <Container
    sx={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
        position: 'absolute',
    }}>
    <Box
    sx={{
        paddingRight: 2,
        paddingBottom: 6,
        paddingLeft: 2,
        position: 'absolute',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
        Add Contacts
    {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}>

    <Card>
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
    </Card>

    </form>
    </Box>
    </Container>
    <Box
    sx={{
        marginTop: 70,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    }}
    >
    <h3>Contacts</h3>
    {contacts.map((contact, pk) => {
        return(
        <ContactsCard
            key={pk}
            firstName={contact.first_name}
            lastName={contact.last_name}
            email={contact.email}
        />
    )}
    )}
    </Box>
    </ThemeProvider>
    )
}