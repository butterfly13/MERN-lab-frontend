import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Link, Switch} from 'react-router-dom'
import StudentList from './Components/StudentList/StudentList'
import NewStudent from './Components/NewStudent/NewStudent'
import Student from './Components/Student/Student'
import Home from './Components/Home/Home'
// import UpdateStudent from './Components/UpdateStudent/UpdateStudent'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      students: []

    }
    this.getStudents = this.getStudents.bind(this)
    // this.addStudent = this.addStudent.bind(this)
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

  // componentWillMount () {
  //   this.getStudents()
    
  // }

  componentDidMount () {
    this.getStudents()
    
  }

  // addStudent (student) {
  //   let newStudents = this.state.students
  //   newStudents.push(student)
  //   this.setState({students: newStudents})
  //   this.getStudents()
  // }

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
                render={(student) => {
                  return (
                    <StudentList 
                      students={this.state.students} 
                      getStudents={this.getStudents}
                      {...student}
                      
                    />
                  )
                }}
              />

              {/* <Route
                path='/addStudent'
                exact
                // component={NewStudent}
                render={() => {
                  return (
                    <NewStudent
                     addStudent={this.addStudent} 
                    //  getStudents={this.getStudents}
                    />
                  )
                }}
              /> */}
              <Route path='/addStudent' component={NewStudent} />
              {/* <Route 
                path='/updateStudent/:id'
                path={UpdateStudent}
              /> */}

              <Route
                path='/studentlist/:id'
                render={(name) => {
                  return (
                    <Student 
                      {...name} 
                      students={this.state.students}
                      getStudents={this.getStudents}
                      deleteStudent={this.deleteStudent}
                     />
                  )
                  
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
