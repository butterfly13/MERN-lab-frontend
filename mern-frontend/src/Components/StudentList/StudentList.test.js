import React from 'react'
import { shallow, mount} from 'enzyme'
import StudentList from './StudentList'

describe('StudentList component', () => {
  it('should render list of students', () => {
    const wrapper = mount(<StudentList />)
    wrapper.find()
  })
})
