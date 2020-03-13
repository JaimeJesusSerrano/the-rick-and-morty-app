import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from './routes'

const Router = () => {
  return (
    <Switch>
      {Object.values(routes).map(({ component, path }) => (
        <Route exact component={component} key={path} path={path} />
      ))}
      <Route path="*">
        <Redirect to={routes.baseUrl.path} />
      </Route>
    </Switch>
  )
}

export default Router
