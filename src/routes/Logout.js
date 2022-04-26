import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { Container } from '@mui/material';

export const Logout = ({token, setAuth, isLoggedIn}) => {

    const handleLogOut = () => {
    const options = {
        method: "POST",
        url: 'https://momentum-vagabond.herokuapp.com/auth/token/logout/',
        headers:{
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        data: {
            token:`${token}`,
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

        localStorage.setItem("username", "");
        localStorage.setItem("token", "");
        setAuth("", "");
        };

        //   .then((res) => {
        //     setAuth(null, null);
        //     localStorage.clear();
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //     setStatus(e.status);
        //     setAuth(null, null);
        //   });
    
    //   if (status === 401) {
    //     setAuth(null, null);
    //   }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return (
    <div className="logout">
        
    <div className="field-controls">
        <Container component="main" maxWidth="xs">

        <Card variant="outlined" sx={{
            mt: 20,
            pl: 21,
        }}>
            <h1>Logout</h1>
        <button className="Logout"
        onClick={() => handleLogOut()}>
            Logout
        </button>
        </Card>
        </Container>
    </div>
    </div>
)}