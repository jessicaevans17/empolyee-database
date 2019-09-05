import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1>Cat CEO</h1>
      <section className="menu">
        <section className="nav-link">Display All Employees</section>
        <section className="nav-link">Add Employee</section>
      </section>
    </nav>
  )
}

export default NavBar
