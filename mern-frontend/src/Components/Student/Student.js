import React, { Component } from 'react'
import {Link, Redirect, Route} from 'react-router-dom'
import axios from 'axios'
// import UpdateStudent from './UpdateStudent/UpdateStudent'


class Student extends Component {
  

  handleRedirect () {
    this.props.history.push('/studentList')
  }

  handleUpdate = () => {
    window.location = '/updateStudent'
  }

  // handleDelelte(e){
  //   e.preventDefault()
  //   console.log('from handle delete')
  //   // console.log(`https://mern-lab-api.herokuapp.com/api/students/${_id}`)
  //   let url = `https://mern-lab-api.herokuapp.com/api/students/${this.props.students._id}` 

  //   axios.delete(url)
  //     .then(res => {
  //       console.log(res)
  //       // this.props.listOfStudents()
  //       this.props.getStudents()
  //       this.handleRedirect()
  //     })
  //     .catch(err => {
  //       console.log('error in handleDelete', err)
  //     })
  // }  
  
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
        <button>
          <Link to='/' 
          onClick={e=>{
            e.preventDefault()
            axios.delete(`https://mern-lab-api.herokuapp.com/api/students/${student._id}`)
            .then(() => {
              this.props.getStudents()
              this.handleRedirect()
            } )
            .catch(err => console.log(err))
          }}>Delete Student</Link></button>
          {/* <button>
            <Link to={'/UpdateStudent'}>
              onClick={this.handleUpdate}
              Update Student Info
            </Link>
          </button> */}
          
         

          {/* <button><Link to='/'onClick={this.handleDelelte}>Delete Student</Link></button> */}
        
      </div>
    )
  }
}

export default Student
