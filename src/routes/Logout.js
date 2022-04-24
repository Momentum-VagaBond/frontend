import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';

export const Logout = ({token, setAuth, isLoggedIn}) => {
    const [status, setStatus] = useState(null);

    const handleLogOut = () => {
        console.log("logout");
        axios
          .post(
            'https://momentum-vagabond.herokuapp.com/auth/token/logout/',
            {},
            {
              headers: { Authorization: `Token ${token}` },
            }
          )
          .then((res) => {
            setAuth(null, null);
            localStorage.clear();
          })
        //   .catch((e) => {
        //     console.log(e);
        //     setStatus(e.status);
        //     setAuth(null, null);
        //   });
      };
    
      if (status === 401) {
        setAuth(null, null);
      }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return (
    <div className='auth-buttons'>
    <form
        className='logout-form'
        onSubmit={handleLogOut}
    >
    <button
        className='submitButt'
        type='submit'>
        Log Out
    </button>
    </form>
</div>
    )}