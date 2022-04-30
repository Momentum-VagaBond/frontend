import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AllTrips from "../routes/AllTrips";
import { Card } from "@mui/material";

export const UserTrips = ({trips, username, setUsername, profiles, profile}) => {
    const [userTrips, setUserTrips] = useState([])

    return(
        <Card>
            {profiles.map((profile) => profiles.usernames.map((username) => username.trip))}
        </Card>
    )
}