import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Link, Switch} from 'react-router-dom'
import StudentList from './Components/StudentList/StudentList'
import NewStudent from './Components/NewStudent/NewStudent'
import Student from './Components/Student/Student'
import Home from './Components/Home/Home'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      students: []

    }
    this.getStudents = this.getStudents.bind(this)
    this.handleAddStudent = this.handleAddStudent.bind(this)
  }

  getStudents () {
    axios.get('https://mern-lab-api.herokuapp.com/api/students')
      .then(res => {
        console.log('from api')
        console.log(res)
        this.setState({
          students: res.data
        })
      })
      .catch(err => console.log('Error fetching data in studentLst', err))
  }

  handleAddStudent (student) {
    const newStudent = this.state.students
    newStudent.push(student)
    // this.setState({students: newStudent}, () =>{
    //   console.log(`new student`, this.state)
    // })
    axios.post('https://mern-lab-api.herokuapp.com/api/students', {
      students: newStudent
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    console.log('after pushing to db')
    console.log(this.state)

    // axios.post('https://mern-lab-api.herokuapp.com/api/students', {
    // students: newStudent
    // const newStudent = this.state.students
    // newStudent.push(student)
    // this.setState({students: newStudent})

    // })
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  }

  componentWillMount () {
    this.getStudents()
  }

  componentDidMount () {
    this.getStudents()
  }

  render () {
    return (

      <div className='App'>
        <Router>
          <div className='routerContainer'>
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
                // component={NewStudent}
                render={() => {
                  return (
                    <NewStudent addStudent={this.handleAddStudent} />
                  )
                }}
              />

              <Route
                path='/studentlist/:id'
                render={(name) => {
                  return <Student {...name} students={this.state.students} />
                }}
              />
            </main>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
