import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('Home component', () =>{
  
  it('should render `.header`', () => {
    const wrapper = shallow(<Home />)
    const text = wrapper.find('h2').text()
    expect(text).toEqual('General Assembly Student Database')
    
  })

})
