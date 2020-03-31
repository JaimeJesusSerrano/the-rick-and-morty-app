import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import {By, until} from 'selenium-webdriver'
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
    await seleniumDriver.sleep(500)
    await seleniumDriver.wait(until.elementLocated(By.css('#menu-screen-characters a')))
    await seleniumDriver.findElement(By.css('#menu-screen-characters a')).click()

    await seleniumDriver.sleep(500)
    await seleniumDriver.wait(until.elementLocated(By.css('#menu-screen-episodes a')))
    await seleniumDriver.findElement(By.css('#menu-screen-episodes a')).click()

    await seleniumDriver.sleep(500)
    await seleniumDriver.wait(until.elementLocated(By.css('#menu-screen-locations a')))
    await seleniumDriver.findElement(By.css('#menu-screen-locations a')).click()

    await seleniumDriver.sleep(500)
  } finally {
    await seleniumDriver.quit()
  }
}, 60000)
