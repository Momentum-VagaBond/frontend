import * as React from 'react';
import axios from "axios";
import { useState } from "react";

export const Logout = ({isLoggedIn, token, setAuth,}) => {

    const handleLogOut = (event) => {
    console.log('Handle Log Out Called');
    event.preventDefault();
    axios
        .post("https://momentum-vagabond.herokuapp.com/auth/token/logout/",
        {},
        {headers: {Authorization: `Token ${token}`}
    })
        .then((res) => {
        console.log(res);
        setAuth(null, null);
    })
    .catch((e) => {
        console.log(e);
        setAuth(null, null);
    });
    };

//   const isLoggedIn = username && token;

    return (
    <div className='auth-buttons'>
    <form
        className='mr-4 pr-5 field is-grouped is-grouped-right'
        onSubmit={handleLogOut}
    >
    <button
        className='button is-danger is-small is-dark mb-3'
        type='submit'>
        Log Out
    </button>
    </form>
</div>
    )}