import React from 'react'
import { mount } from 'enzyme'
import Characters from '~Screens/characters'
import { TestContainer } from '../../utils'
import { characterListInitialState } from './data'

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

test('[Character screen] mount Snapshot', () => {
  const component = mount(
    <TestContainer initialState={characterListInitialState}>
      <Characters />
    </TestContainer>
  )
  expect(component).toMatchSnapshot()
})
