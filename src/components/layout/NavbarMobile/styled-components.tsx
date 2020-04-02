import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

export const DrawerWrapper = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    padding: 10px;
  }
`;
