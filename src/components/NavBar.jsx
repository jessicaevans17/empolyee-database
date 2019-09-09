import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        {" "}
        <h1 className="company-logo">Business Company</h1>
      </Link>
      <section className="menu">
        <Link to="/">
          <section className="nav-link">Display All Employees</section>
        </Link>
        <Link to="/add/employee">
          <section className="nav-link">Add Employee</section>
        </Link>
      </section>
    </nav>
  )
}

export default NavBar
