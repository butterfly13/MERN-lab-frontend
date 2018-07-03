import React, { Component } from 'react';

class Student extends Component {
    render() {
        console.log('from student')
        console.log(this.props)
        let student = this.props.students.find(list => list.firstName === this.props.match.params.firstName)
        console.log(student)
        return (
            <div>
                <h3> Student Infomation</h3>
                <p><strong>First Name: </strong>{student.firstName}</p>
                <p><strong>Last Name:</strong> {student.lastName}</p>
                <p><strong>Cohort:</strong> {student.course}</p>

            </div>
        );
    }
}

export default Student;