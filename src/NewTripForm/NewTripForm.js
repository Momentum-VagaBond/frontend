// import React, { useState } from "react";
// import { useMultipleForm } from "usetheform";

// import NewTripFormPage1 from "./NewTripFormPage1";
// import NewTripFormPage2 from "./NewTripFormPage2";
// import NewTripFormPage3 from "./NewTripFormPage3";

// export default function NewTripForm() {
//     const [currentPage, setPage] = useState(1);
//     const nextPage = () => setPage((prev) => ++prev);
//     const prevPage = () => setPage((prev) => --prev);

//     const [getWizardState, wizard] = useMultipleForm();
//     const onSubmitWizard = () => console.log(getWizardState());

//     return (
//     <div className="NewTripForm">
//         {currentPage=== 1 && (
//         <NewTripFormPage1
//         {...wizard}
//         onSubmit={nextPage}
//         />
//         )}
//         {currentPage=== 2 && (
//         <NewTripFormPage2
//             {...wizard}
//             prevPage={prevPage}
//             onSubmit={nextPage}
//         />
//         )}
//         {currentPage=== 3 && (
//         <NewTripFormPage3
//             {...wizard}
//             prevPage={prevPage}
//             onSubmit={onSubmitWizard}
//         />
//         )}
//     </div>
// );
// }