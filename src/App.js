import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponents';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponents';
import CreateEmployeeComponent from './components/CreateEmployeeComponents';
import ViewEmployeeComponent from './components/ViewEmployeeComponents';

function App() {
  return (

    <div>

        <Router>

        <div>

                <header>

                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">Employee Management App</a></div>
                    </nav>
                    
                </header>

            </div>

                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                    </Switch>
                </div>

        </Router>

    </div>
    
  );
}

export default App;