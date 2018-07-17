import React, { Component } from 'react';

class UpdateStudent extends Component {
    render() {
        return (
    
                <div className='updateStudent'>
                    <p> Update Student Info</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>First Name:</label>
                        <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='First Name' /> <br />

                        <label> Last Name:</label>
                        <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Last Name' /> <br />

                        <label>  Cohort:  </label>

                        <input type='text' name='course' value={this.state.course} onChange={this.handleChange} placeholder='Cohort' /> <br />

                        <input type='submit' value='Add'  />
                    </form>
                </div>
            
        );
    }
}

export default UpdateStudent;