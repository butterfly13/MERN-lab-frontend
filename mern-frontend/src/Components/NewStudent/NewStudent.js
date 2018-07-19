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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewStudent = this.handleNewStudent.bind(this)
    // this.handleRedirect = this.handleRedirect.bind(this)
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
      console.log('in side handle new student')
      console.log(this.state)
    this.setState(
        {
          firstName: '',
          lastName: '',
          course: ''
        }
      )
  }


  // handleRedirect () {
  //   if(this.state.redirect) {
  //     return <Redirect to="/" />
  //   }
  // }

 

  handleSubmit (e) {
    e.preventDefault()
    console.log('from handle submit in newStudent')
    console.log(this.state)
    this.props.addStudent(this.state)
    // console.log()
    // this.props.addStudent(this.state)
    this.handleNewStudent()
    console.log(this)
    // this.props.history.push('/studentList')
    console.log('after submit')
    // this.handleRedirect()

    
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
          <input type='submit' value='Add' />
      
          
        </form>
      </div>
    )
  }
}

export default NewStudent
