// import * as React from 'react';
// import { useState } from 'react';
// import axios from "axios";
// import { Navigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import { Container } from '@mui/material';
// import { useMultipleForm } from "usetheform";
// import NewTripFormPage1 from './NewTripFormPage1';
// import NewTripFormPage2 from './NewTripFormPage2';
// import NewTripFormPage3 from './NewTripFormPage3';
// import NewTripForm from './NewTripForm';


// export default function NewTrip({token, isLoggedIn}) {
//     const [title, setTitle] = useState("");
//     const [location, setLocation] = useState("");
//     const [begin, setBegin] = useState("");
//     const [end, setEnd] = useState("");
//     const [error, setError] = useState("");
//     const [isSubmit, setSubmit] = useState(false);
//     const [currentPage, setPage] = useState(1);

//     const nextPage = () => setPage((prev) => ++prev);
//     const prevPage = () => setPage((prev) => --prev);
//     const [getWizardState, wizard] = useMultipleForm();
//     const onSubmitWizard = () => console.log(getWizardState());

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError("");
//             console.log(location, title);

//     axios
//     .post("https://momentum-vagabond.herokuapp.com/api/trips/",
//     {
//         "title": title,
//         "location": location,
//         "begin": begin,
//         "end": end,
//     },
//     {
//         headers: {Authorization: `Token ${token}`}
//     }
//     )
//     .then(response => {
//         console.log(response.data);
//     setTitle('')
//     setLocation('')
//     setBegin('')
//     setEnd('')
//     })
//     .catch((e) => setError(e.message))
//     }

//     if (isSubmit) {
//         console.log("Submitted!")
//     // return <Navigate to='/' />
//     }

//     if (!isLoggedIn) {
//         <Navigate to="/login" />
//     }

//     return (
//         <Container
//         sx={{
//             my: 8,
//             mx: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//         }}>
    
//     {/* {error && <div className="error">{error}</div>} */}
//     <h1>New Trip!</h1>

//         <NewTripForm />



//         </Container>
//     );
// }