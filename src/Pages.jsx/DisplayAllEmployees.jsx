import React, { useState, useEffect } from "react"
import axios from "axios"
import CatPic from "../images/businesscat.jpeg"

const DisplayAllEmployees = () => {
  const [employeeData, setEmployeeData] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      " https://sdg-staff-directory-app.herokuapp.com/api/Business%20Company/Employees"
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  console.log(employeeData)
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1 className="directory-title">Employee Purr-ectory</h1>
      <main className="employee-section">
        {employeeData.map((item, i) => {
          return (
            <section className="employee-card" key={i}>
              <img src={CatPic} alt="Business Cat" />
              <section className="employee-info">
                <h2 className="first-last-name">
                  {" "}
                  {item.firstName} {item.lastName}
                </h2>
                <h3 className="job-title">{item.jobTitle}</h3>
              </section>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default DisplayAllEmployees
