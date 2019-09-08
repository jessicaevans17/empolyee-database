import React, { Component } from "react"
import NavBar from "./components/NavBar"
import DisplayAllEmployees from "./Pages.jsx/DisplayAllEmployees"
import DisplayOneEmployee from "./Pages.jsx/DisplayOneEmployee"
import AddEmployee from "./Pages.jsx/AddEmployee"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={DisplayAllEmployees}></Route>
            <Route exact path="/:id" component={DisplayOneEmployee}></Route>
            <Route exact path="/add/employee" component={AddEmployee}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
