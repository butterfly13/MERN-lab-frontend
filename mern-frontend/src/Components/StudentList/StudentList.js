import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class StudentList extends Component {
  render () {
    console.log(this.props)
    let list = this.props.students.map((student, i) => {
      return (
        <li className='ListOfStudent' key={i}>
          <Link to={/studentlist/ + student.firstName}> {student.firstName} {student.lastName}</Link>
        </li>
      )
    })
    return (
      <div>
        <h3> Student List</h3>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default StudentList
