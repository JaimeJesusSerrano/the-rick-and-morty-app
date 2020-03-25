import React from 'react'
import { shallow } from 'enzyme'
import Card from '~Screens/characters/components/Card'
import { character } from '../data'

jest.mock('uuid', () => {
  let value = 0
  return {
    __esModule: true,
    v4: () => {
      value += 1
      return `test-key-${value}`
    },
  }
})

test('[Character card] shallow Snapshot', () => {
  const component = shallow(<Card character={character} />)
  expect(component).toMatchSnapshot()
})
