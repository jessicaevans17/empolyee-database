// import React, { useState, useEffect } from "react"
// import DatePicker from "react-datepicker"
// import axios from "axios"
// import "react-datepicker/dist/react-datepicker.css"

// const AddEmployee = () => {
//   const [startDate, setStartDate] = useState("")
//   const postData = async () => {
//     const resp = await axios.post(
//       "https://sdg-staff-directory-app.herokuapp.com/api/Business%20Company/Employees",
//       { firstName,
//         lastName,
//         birthday,
//         hiredDate	,
//         isFullTime	,
//         profileImage,
//         jobTitle	,
//         jobDescription,
//         phoneNumber	,
//         interestingFact,
//         address	,
//         city,
//         zip	,
//         state	,
//         salary	,
//         gender	,
//         email,
//         emergencyContactPerson	,
//         emergencyContactPhone	,
//         emergencyContactAddress,
//         ptoHours
//     )
//     )

//   }
//   return (
//     <>
//       <h1 className="directory-title">Add an Employee</h1>
//       <form className="add-employee-form" action="">
//         <div>
//           <label htmlFor="name">First Name:</label>
//           <input type="text" />
//         </div>
//         <div>
//           <label htmlFor="last-name">Last Name:</label>
//           <input type="text" />
//         </div>
//         <div>
//           <label htmlFor="birthday">Date of Birth:</label>
//           <DatePicker
//             className="date-picker"
//             selected={startDate}
//             onChange={date => setStartDate(date)}
//           />
//         </div>
//       </form>
//     </>
//   )
// }

// export default AddEmployee
