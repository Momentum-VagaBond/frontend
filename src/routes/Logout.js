import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';

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
                console.log(response);
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
    <div className='auth-buttons'>
    <div className="field-controls">
        <button className="Logout"
        onClick={() => handleLogOut()}>
            Logout
        </button>
    </div>
    </div>
)}