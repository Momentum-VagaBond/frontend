import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { FormHelperText } from '@mui/material';

export default function AddContacts({token, isLoggedIn}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
            console.log(firstName, lastName, email)

    axios
    .post("https://momentum-vagabond.herokuapp.com/api/contacts/",
    {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )


    }
}