import { AppBar, Grid, Toolbar, Hidden } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Logo from '~Components/Logo'
import NavbarMenu from '~Components/layout/NavbarMenu'
import NavbarMobile from '~Components/layout/NavbarMobile'

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

const StyledToolbar = styled(Toolbar)`
  flex-grow: 1;
`

const Menu = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={1}>
            <Logo />
          </Grid>
          <Grid item xs={11} container direction="row" justify="flex-end">
            <Hidden smDown>
              <NavbarMenu />
            </Hidden>
            <Hidden mdUp>
              <NavbarMobile />
            </Hidden>
          </Grid>
        </Grid>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Menu
