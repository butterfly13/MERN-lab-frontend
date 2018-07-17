import React, { Component } from 'react'
import axios from 'axios'
import  { Redirect, Link } from 'react-router-dom'


class NewStudent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      course: ''
    }
    // if (window.location.origin === "http://localhost:3000") {
    //   this.origin = "http://localhost:4000";
    // } else {
    //   this.origin = "https://mern-lab-api.herokuapp.com/api/students";
    // }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewStudent = this.handleNewStudent.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
    
  }

  handleNewStudent() {
   
    // if(this.state.firstName.length > 2 && this.state.lastName.length > 2 && this.state.course.length > 3){
      axios.post('https://mern-lab-api.herokuapp.com/api/students', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        course: this.state.course
      })
      .then(res => {
        console.log(`in handleNewStudent`)
        console.log(res)
      })

    // }

    // this.setState(
    //     {
    //       firstName: '',
    //       lastName: '',
    //       course: ''
    //     }
    //   )
  }

  // handleRedirect() {
  //   this.props.history.push('/')
  // }

  handleRedirect () {
    if(this.state.redirect) {
      return <Redirect to="/studentList" />
    }
  }

 

  handleSubmit (e) {
    e.preventDefault()
    console.log('from handle submit in newStudent')
    console.log(this.state)
    // this.props.addStudent(this.state)
    this.handleNewStudent()
    console.log(this)
    // this.props.history.push('/studentList')
    console.log('after submit')
    this.handleRedirect()
    // this.setState(
    //   {
    //     firstName: '',
    //     lastName: '',
    //     course: ''
    //   }
    // )
    
  }

  render () {
    return (
      <div className='newStudent'>
        <p> Add New Student</p>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='First Name' /> <br />

          <label> Last Name:</label>
          <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Last Name' /> <br />

          <label>  Cohort:  </label>

          <input type='text' name='course' value={this.state.course} onChange={this.handleChange} placeholder='Cohort' /> <br />

          <Link to='/studentList' ><input type='submit' value='Add' /> </Link>
        </form>
      </div>
    )
  }
}

export default NewStudent
