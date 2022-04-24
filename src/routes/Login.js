import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

export const Login = ({ setAuth, isLoggedIn, token }) => {
    const loginURL = "https://momentum-vagabond.herokuapp.com/auth/token/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        axios
            .post(loginURL, {
                username: username,
                password: password,
            })
            .then((response) => {
                console.log(response.data.username);
                setAuth(username, response.data.auth_token);
                setIsLoading(false)
            })
            .catch((e) => setError(e.message));
            console.log(username);
            console.log(password);
            console.log(token);
        }
        // if (isLoggedIn) {
        //     return <Navigate to="/userquestions" />
        // }
        if (isLoading) {
            return <CircularProgress />
                }
        
    return (
    <div className="loginDiv">
    <h1>Access your Box</h1>
        {error && <div className="errorDiv">{error}</div>}
    <h3>log in</h3>
    <form onSubmit={handleLogin}>
    <div className="usernameInput">
        <label className="usernameLabel">
            Username
        </label>
        <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
    </div>
    <div className="passwordDiv">
        <label className="passwordLabel">
            Password
        </label>
        <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="subButt">
            <button type="submit">
                Log in
            </button>
        </div>
    </form>
    {/* <div className="regButt">
        <Link to='/user'>Register</Link>
    </div> */}
    </div>
    )
    };