import React from "react";
import { useState } from "react";
import { Card } from "@mui/material";

export const UserTrips = ({profiles}) => {
    const [userTrips, setUserTrips] = useState([])

    return(
        <Card>
            {profiles.map((profile) => profiles.usernames.map((username) => username.trip))}
        </Card>
    )
}