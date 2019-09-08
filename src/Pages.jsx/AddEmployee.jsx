import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const AddEmployee = () => {
  const [startDate, setStartDate] = useState("")
  return (
    <>
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
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </div>
      </form>
    </>
  )
}

export default AddEmployee
