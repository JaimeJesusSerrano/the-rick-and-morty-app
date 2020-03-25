import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import App from '../App'
import { configureStore } from '~Store/config'

const store = configureStore()

test('App snapshot', () => {
  const component = shallow(<App />)
  expect(component).toMatchSnapshot()
})

test('App Provider is loaded correctly', () => {
  const AppComponent = shallow(<App />)
  const ProviderComponent = <Provider store={store} />
  AppComponent.contains([ProviderComponent])
})

