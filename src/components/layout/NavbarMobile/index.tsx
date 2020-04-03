import React from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { DrawerWrapper } from './styled-components';
import NavbarMenu from '~Components/layout/NavbarMenu';

const NavbarMobile = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  type DrawerSide = 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer('right', true)}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <DrawerWrapper
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        <NavbarMenu className="sidebar-nav" />
      </DrawerWrapper>
    </>
  );
};

export default NavbarMobile
