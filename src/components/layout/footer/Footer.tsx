import React from 'react'
import styled from 'styled-components'
import { Typography, Link, Container } from '@material-ui/core'

const SFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing(3, 2)};
  text-align: center;
  margin-top: auto;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

const getDate = (): string => ` ${new Date().getFullYear()} .`

const Copyright = (): JSX.Element => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/JaimeJesusSerrano/the-rick-and-morty-app"
      >
        -
      </Link>
      {getDate()}
      {}
    </Typography>
  )
}

export const Footer = (): JSX.Element => {
  return (
    <SFooter>
      <Container maxWidth="sm">
        <Typography variant="body1" color="textPrimary" >
          {'Made with ♥ on Intermission. '}
        </Typography >
        <Copyright />
      </Container>
    </SFooter>
  )
}
