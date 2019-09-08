import React, { useEffect, useState } from "react"
import axios from "axios"
import CatPic from "../images/businesscat.jpeg"

const DisplayOneEmployee = props => {
  const data = props.location.state.item
  console.log(data)
  const [employeeData, setEmployeeData] = useState([])
  const [birthday, setBirthday] = useState("")

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
        <section className="">
          <img src={CatPic} alt="Business Cat" />
          <section className="employee-detailed-info">
            <h2 className="first-last-name">
              {employeeData.firstName} {employeeData.lastName}
            </h2>
            <h3 className="job-title">{employeeData.jobTitle}</h3>
            <div>Date of Birth: {birthday}</div>
            <div>Hire Date: {employeeData.hiredDate}</div>
            <div>
              Full Time:{" "}
              {employeeData.isFullTime ? <span>Yes</span> : <span>No</span>}
            </div>
            <div>Phone Number: {employeeData.phoneNumber}</div>
            <div> Address: {employeeData.address}</div>
            <div>
              {employeeData.city}, {employeeData.state}
              {employeeData.zip}
            </div>
            <div>Salary: ${employeeData.salary}</div>
            <div>PTO: {employeeData.ptoHours} hours</div>
            <div>Gender: {employeeData.gender}</div>
            <div>Email Address: {employeeData.email}</div>
            <div>Emergency Contact: {employeeData.emergencyContactPerson}</div>
            <div>
              Emergency Contact Phone: {employeeData.emergencyContactPhone}
            </div>
            <div>
              Emergency Contact Address: {employeeData.emergencyContactAddress}
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default DisplayOneEmployee
