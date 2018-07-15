import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'



class StudentList extends Component {


  render () {
    console.log(this.props)
    let list = this.props.students.map((student, i) => {
      return (
        <div className='ListOfStudent' key={i}>
          <p><Link to={/studentlist/ + student._id}> {student.firstName} {student.lastName}</Link></p>
         
        </div>
      )
    })

    return (
      <div>
        <h3> Student List</h3>

        {list}

      </div>
    )
  }
}

export default StudentList
