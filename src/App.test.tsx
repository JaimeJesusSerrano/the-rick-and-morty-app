import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { By, Key, until } from 'selenium-webdriver'
import { configureStore } from '~Store/config'
import App from './App'
import { seleniumDriver } from './setupTests'

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

test('[App] Load correctly', async () => {
  try {
    await seleniumDriver.get('http://localhost:3000/')
    await seleniumDriver.wait(until.titleIs('React App'), 10000)
    await seleniumDriver.get('http://localhost:3000/characters')
    await seleniumDriver.wait(until.titleIs('React App'), 10000)
  } finally {
    await seleniumDriver.quit()
  }
}, 30000)
