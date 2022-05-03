import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from '@mui/system';
import { CurrentTripCard } from '../components/CurrentTripCard';


const CurrentTrip = ({token, loggedUserPk, username, id }) => {
    const [trip, setTrip] = useState("");
    const [begin, setBegin] = useState(null);
    // const [tripDate, setTripDate] = useState("")
    // const [tripUsername, setTripUsername] = useState([])

    useEffect(() =>{
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/current/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response.data)
        setTrip(response.data)
        setBegin(response.data.begin)

    })
    }, [token, loggedUserPk, setTrip, setBegin])

    return (

            <div>
            {/* {trips.map((trip, pk) => {
                return (
                    <CurrentTripCard
                    key={pk}
                    tripId={trip.pk}
                    title={trip.title}
                    location={trip.location}
                    begin={trip.begin}
                    end={trip.end}
                    />
                )
            }
            )
            } */}
            </div>

    )
}

export default CurrentTrip