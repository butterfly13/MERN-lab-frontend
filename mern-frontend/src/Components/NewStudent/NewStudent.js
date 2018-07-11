import React, { Component } from 'react'

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
  }

  // handleChange (e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   }, () => {
  //     console.log('state:', this.state)
  //     // this.props.addStudent(this.state)
  //   })
  // }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
    
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    this.props.addStudent(this.state)
    this.setState(
      {
        firstName: '',
        lastName: '',
        course: ''
      }
    )
    
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
