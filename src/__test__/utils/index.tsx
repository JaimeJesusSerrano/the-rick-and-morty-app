import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import NoSsr from '@material-ui/core/NoSsr'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { ThemeProvider } from 'styled-components'
import theme from '~Theme'

interface TestContainerProps {
  children: React.ReactNode,
  initialState?: {}
}

export const TestContainer = ({ children , initialState}: TestContainerProps) => {
  const mockStore = configureStore()
  const store = mockStore(initialState)
  return (
    <Provider store={store}>
      <CssBaseline />
      <NoSsr>
        <StylesProvider injectFirst>
          {/* To override the current theme */}
          <MuiThemeProvider theme={theme}>
            {/* Allow share the theme with styled components */}
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </NoSsr>
    </Provider>
  )
}
