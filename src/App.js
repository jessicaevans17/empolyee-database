import React, { Component } from "react"
import NavBar from "./components/NavBar"
import { BrowswerRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>Hello!</div>
      </>
    )
  }
}

export default App
