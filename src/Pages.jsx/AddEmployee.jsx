import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css"

const AddEmployee = () => {
  const [birthDate, setBirthDate] = useState("")
  const [hireDate, setHireDate] = useState("")
  const postData = async () => {
    const resp = await axios.post(
      "https://sdg-staff-directory-app.herokuapp.com/api/Business%20Company/Employees"
    )
  }
  return (
    <>
      <h1 className="directory-title">Add an Employee</h1>
      <form className="add-employee-form" action="">
        <div>
          <label htmlFor="name">First Name:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="birthday">Date of Birth:</label>
          <DatePicker
            className="date-picker"
            selected={birthDate}
            onChange={date => setBirthDate(date)}
          />
        </div>
        <div>
          <label htmlFor="birthday">Hire Date:</label>
          <DatePicker
            className="date-picker"
            selected={hireDate}
            onChange={date => setHireDate(date)}
          />
        </div>
        <div>
          <label htmlFor="job-title">Job Title:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="job-description">Job Description:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="interesting-fact">Interesting Fact:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="zip">Zip:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="pto">PTO:</label>
          <input type="text" />
        </div>
      </form>
    </>
  )
}

export default AddEmployee
