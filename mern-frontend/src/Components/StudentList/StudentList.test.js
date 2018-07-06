import React from 'react'
import { shallow } from 'enzyme'
import StudentList from './StudentList'

describe('StudentList component', () => {
    it('should have header', () =>{
        const wrapper = shallow(<StudentList />)
        const header = wrapper.find('h3').text()
        expect(header).toEqual('Student List')

    })
})