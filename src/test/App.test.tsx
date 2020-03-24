import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import App from '../App'

import { configureStore } from '~Store/config'
const store = configureStore()

test('Home Provider is loaded correctly', () => {
  const AppComponent = shallow(<App />)
  AppComponent.contains([<Provider store={store}></Provider>])
})
