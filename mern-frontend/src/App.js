import React, { Component } from 'react'
import './App.css'
import {Route, Link, Switch} from 'react-router-dom'
import StudentList from './Components/StudentList/StudentList'
import NewStudent from './Components/NewStudent/NewStudent'
import Student from './Components/Student/Student'
import Home from './Components/Home/Home'

class App extends Component {
  constructor () {
    super()
    this.state = {
      students: [

      ]
      
    }
  }
  render () {
    return (
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link> <br />
          <Link to='/studentList'>All Students</Link> <br />
          <Link to='/addStudent'>Add New Student</Link>
        </nav>
        <main>
          <Switch>
            <Route
              path='/'
              exact
              component={Home}
            />
          </Switch>
          <Route
            path='/studentList'
            exact
            render={() => {
              return (
                <StudentList students={this.state.students} />
              )
            }}
          />

          <Route
            path='/addStudent'
            exact
            component={NewStudent}
          />

          <Route
            path='/studentlist/:firstName'
            render={(name) => {
              return <Student  {...name} students={this.state.students} />
            }}
          />
        </main>
      </div>
    )
  }
}

export default App
