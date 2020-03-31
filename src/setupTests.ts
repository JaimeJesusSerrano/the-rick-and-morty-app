import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import webdriver from 'selenium-webdriver'

configure({ adapter: new Adapter() })

export const seleniumDriver = new webdriver.Builder()
  .forBrowser('chrome')
  // .setChromeOptions({})
  // .setFirefoxOptions({})
  .build()
