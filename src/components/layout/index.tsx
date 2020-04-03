import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Sidebar from '~Components/layout/Sidebar'
import Breadcrumbs from './Breadcrumbs'
import { Footer } from './footer'
import Menu from './Menu'

interface LayoutProps {
  children: React.ReactNode
}

const GridBreadcrumb = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: 10px 15px 5px 15px;
`

const Container = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  flex: 1;
`

const ChildrenContainer = styled(Grid)`
  flex: 1;
  padding: 5px 15px 5px 15px;
`

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }: LayoutProps) => (
  <SContainer>
    <Menu />

    <Container container direction="column">
      <GridBreadcrumb container>
        <Grid item md={1}/>
        <Grid item xs={12} md={10}>
          <Breadcrumbs />
        </Grid>
        <Grid item md={1} />
      </GridBreadcrumb>

      <ChildrenContainer container>
        <Grid item xs={1} md={1} />
        <Grid item xs={10} md={7}>
          {children}
        </Grid>
        <Grid item xs={1} md={1} />
        <Grid item xs={1} md="auto" />
        <Grid item xs={10} md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={1}/>
      </ChildrenContainer>

        <Footer />
    </Container>
  </SContainer>
)

export default Layout
