import { AppBar, Grid, Toolbar } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '~Components/Logo'
import routes from '~Routes/routes'
import Search from './Search'
import Section from './Section'

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

const StyledToolbar = styled(Toolbar)`
  flex-grow: 1;
`

const Menu = () => {
  const location = useLocation()
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item xs={6} />
          <Grid id="menu-screen-characters" item xs>
            <Section
              path={location.pathname}
              text="Characters"
              to={routes.characters.path}
              variant="h6"
            />
          </Grid>
          <Grid id="menu-screen-episodes" item xs>
            <Section
              path={location.pathname}
              text="Episodes"
              to={routes.episodes.path}
              variant="h6"
            />
          </Grid>
          <Grid id="menu-screen-locations" item xs>
            <Section
              path={location.pathname}
              text="Locations"
              to={routes.locations.path}
              variant="h6"
            />
          </Grid>
          <Grid item xs={2}>
            <Search />
          </Grid>
        </Grid>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Menu
