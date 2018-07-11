import React, { Component } from 'react'


class Student extends Component {
  
  render () {
    console.log('from student')
    console.log(this.props)
    console.log(this.props.students)
    console.log('from props.match.params')
    let findMatching = this.props.match.params.id
    let student = this.props.students.find(list => list._id === findMatching)
    return (
      <div>
        <h3> Student Infomation</h3>
        <p><strong>First Name: </strong>{student.firstName}</p>
        <p><strong>Last Name:</strong> {student.lastName}</p>
        <p><strong>Cohort:</strong> {student.course}</p> 
        
      </div>
    )
  }
}

export default Student
