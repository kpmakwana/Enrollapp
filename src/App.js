import React, { Component } from 'react'
import './CSS/main.css';
import StudentForm from './components/RegistrationForm.js';
import Students from './components/Students';
import {BrowserRouter as Router, Route,Switch ,Link} from 'react-router-dom'
import logo from './img/logo.png'
import UpdateForm from './components/UpdateForm'
export default class App extends Component {
  render() {
    return (
    <Router>
    <div>
    <header>
			<div className="logo-container">
				<img style={{width: "65px"}} src={logo} alt="logo" />
			</div>
			<nav>
				<ul className="nav-links">

          <Link className="nav-link" to='/details' >All students</Link>
          <Link className="nav-link" to='/' >Registration Form</Link>

					<li><a className="nav-link" id='git-link' href="https://github.com/kpmakwana" target="blank">Git</a></li>
				</ul>
			</nav>
    </header>

    <div className="App">
      
      <Switch>
      <Route path='/' exact component={StudentForm} />
      <Route path='/details' component={Students} />
      <Route path='/update' component={UpdateForm} />
      <Route path='*' component={StudentForm} />
      
      </Switch>
    </div>
    </div>
    </Router>
  );
}
}

