import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import listOfStudents from './list.json'
import axios from 'axios'

class StudentList extends Component {
  constructor () {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount () {
    axios.get('https://mern-lab-api.herokuapp.com/api/students')
      .then(res => {
        console.log(res)
        this.setState({
          students: res.data
        })
      })
      .catch(err => console.log('Error fetching data in studentLst', err))
  }
  render () {
    console.log(this.props)
    let list = this.state.students.map((student, i) => {
      return (
        <li className='ListOfStudent' key={i}>
          <Link to={/studentlist/ + student._id}> {student.firstName} {student.lastName}</Link>
        </li>
      )
    })

    // let list = listOfStudents.map((student, i) => {
    //   return (
    //     <div className='ListOfStudent' key={i}>
    //       <p><Link to={/studentList/ + student.firstName}> {student.firstName} {student.lastName} </Link></p>
    //     </div>
    //   )
    // })

    return (
      <div>
        <h3> Student List</h3>
        <ul>
          {list}
        </ul>
        {/* <div>
          {list}
        </div> */}
      </div>
    )
  }
}

export default StudentList
