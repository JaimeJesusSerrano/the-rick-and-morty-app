import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { configureStore } from '~Store/config'
import App from './App'

const store = configureStore()

test('[App] shallow Snapshot', () => {
  const component = shallow(<App />)
  expect(component).toMatchSnapshot()
})

test('[App] Provider is loaded correctly', () => {
  const AppComponent = shallow(<App />)
  const ProviderComponent = <Provider store={store} />
  AppComponent.contains([ProviderComponent])
})
