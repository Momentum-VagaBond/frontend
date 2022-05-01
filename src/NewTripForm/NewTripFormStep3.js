// import React, { useState } from "react";
// import { FormControl, FormGroup, Input, InputLabel } from '@mui/material'

// export const NewTripFormStep3 = (props) => {
//     const [begin, setBegin] = useState("");
//     const [end, setEnd] = useState("");
//     const { data, handleChange, next, back, } = props;

//     return (
//     <FormControl>
//         <FormGroup>
//         <label htmlFor="begin">Begins:</label>
//         <input
//             id="filled-basic"
//             label="day-month-year"
//             variant="filled"
//             className='tripBegin'
//             required value={begin}
//             onChange={(e) => setBegin(e.target.value)}
//             // onChange={handleChange}
//         >
//         </input>

//         <label htmlFor="end">Ends:</label>
//         <input
//             id="filled-basic"
//             label="day-month-year"
//             variant="filled"
//             className='tripEnd'
//             required value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             // onChange={handleChange}
//         >
//         </input>
//         </FormGroup>

//         <button type="button" onClick={back}>Back</button> 
//         <button type="button" onClick={next}>Next</button>
//     </FormControl>
// );
// };