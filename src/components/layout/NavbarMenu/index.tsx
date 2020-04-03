import React from 'react'
import { Grid } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import Section from './Section'
import Search from './Search'
import routes from '~Routes/routes'

type NavbarMenuProps = {
  className?: string;
};

const StyledGrid = styled(Grid)`
  &.sidebar-nav {
    .MuiGrid-item {
      margin: 10px 0px;
      &.search-item {
        order: -1;
        margin-bottom: 20px;
      }
    }
  }
`;

const NavbarMenu = ({ className }: NavbarMenuProps) => {
  const location = useLocation()
  return (
    <StyledGrid container direction={className ? 'column' : 'row'} justify="flex-end" alignItems="center" className={className}>
      <Grid id="menu-screen-characters" item md={2} lg={1} container justify="center">
        <Section
          path={location.pathname}
          text="Characters"
          to={routes.characters.path}
          variant="h6"
        />
      </Grid>
      <Grid id="menu-screen-episodes" item md={2} lg={1} container justify="center">
        <Section
          path={location.pathname}
          text="Episodes"
          to={routes.episodes.path}
          variant="h6"
        />
      </Grid>
      <Grid id="menu-screen-locations" item md={2} lg={1} container justify="center">
        <Section
          path={location.pathname}
          text="Locations"
          to={routes.locations.path}
          variant="h6"
        />
      </Grid>
      <Grid item lg={3} className="search-item">
        <Search />
      </Grid>
    </StyledGrid>
  )
}

export default NavbarMenu
