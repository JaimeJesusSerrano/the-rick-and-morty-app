import React from 'react'
import { shallow } from 'enzyme'
import Home from '~Screens/Home'


test('Home screen has only Home text', () => {
  const component = shallow(<Home />)
  expect(component.text()).toEqual('Home')
})
