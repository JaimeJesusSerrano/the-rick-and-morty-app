import CssBaseline from '@material-ui/core/CssBaseline'
import NoSsr from '@material-ui/core/NoSsr'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from '~Components/layout'
import { configureStore } from '~Store/config'
import Router from './routes'
import theme from './theme'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <NoSsr>
        <StylesProvider injectFirst>
          {/* To override the current theme */}
          <MuiThemeProvider theme={theme}>
            {/* Allow share the theme with styled components */}
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Layout>
                  <Router />
                </Layout>
              </BrowserRouter>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </NoSsr>
    </Provider>
  )
}

export default App
