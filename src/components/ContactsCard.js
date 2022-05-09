import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Card, Container, Box, Grid, Typography, Paper } from '@mui/material/';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ContactsCard({firstName, contactId, lastName, email, key}) {

    return(
<ThemeProvider theme={Theme}>
    <div>
    <CssBaseline />

    <Accordion
    sx={{
      // marginLeft: 2,
      // marginBottom: 1,
      marginTop: 2,
      // marginRight: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}
    >
    {/* <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{contactId}</Typography>
    </AccordionSummary> */}
    <AccordionDetails>
        <Typography>
        {firstName} {lastName} <br />
        {email}
        </Typography>
    </AccordionDetails>
  </Accordion>
</div>
</ThemeProvider>
    )
}