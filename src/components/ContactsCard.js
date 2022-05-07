import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardActionArea } from '@mui/material/';
import Container from '@mui/material/Container';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";

export const ContactsCard = ({firstName, lastName, email}) => {

    return(
<ThemeProvider theme={Theme}>
<CssBaseline />

<Container>
<Card>
    <li>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    </li>
</Card>
</Container>

</ThemeProvider>
    )
}