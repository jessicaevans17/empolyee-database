import React, { useEffect, useState } from "react"
import axios from "axios"
import CatPic from "../images/businesscat.jpeg"

const DisplayOneEmployee = props => {
  const data = props.location.state.item
  console.log(data)
  const [employeeData, setEmployeeData] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/Business%20Company/Employees/${data.id}`
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1 className="directory-title">Employee In-fur-mation</h1>
      <main className="employee-section">
        <section className="employee-detailed-section">
          <img src={CatPic} alt="Business Cat" />
          <section className="employee-detailed-info">
            <h2 className="">
              {employeeData.firstName} {employeeData.lastName}
            </h2>
            <h3 className="">{employeeData.jobTitle}</h3>
            <div className="info">
              <strong>Date of Birth: </strong>
              {employeeData.birthday}
            </div>
            <div className="info">
              <strong>Hire Date: </strong>
              {employeeData.hiredDate}
            </div>
            <div className="info">
              <strong>Full Time:</strong>{" "}
              {employeeData.isFullTime ? <span>Yes</span> : <span>No</span>}
            </div>
            <div className="info">
              <strong>Phone Number: </strong>
              {employeeData.phoneNumber}
            </div>
            <div className="info">
              <strong>Address: </strong>
              {employeeData.address}
            </div>
            <div className="info">
              {employeeData.city}, {employeeData.state}
              {employeeData.zip}
            </div>
            <div className="info">
              <strong>Salary:</strong> ${employeeData.salary}
            </div>
            <div className="info">
              <strong>PTO:</strong> {employeeData.ptoHours} hours
            </div>
            <div className="info">
              <strong>Gender: </strong>
              {employeeData.gender}
            </div>
            <div className="info">
              <strong>Email Address: </strong>
              {employeeData.email}
            </div>
            <div className="info">
              <strong>Emergency Contact: </strong>
              {employeeData.emergencyContactPerson}
            </div>
            <div className="info">
              <strong>Emergency Contact Phone: </strong>
              {employeeData.emergencyContactPhone}
            </div>
            <div className="info">
              <strong>Emergency Contact Address: </strong>{" "}
              {employeeData.emergencyContactAddress}
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default DisplayOneEmployee
