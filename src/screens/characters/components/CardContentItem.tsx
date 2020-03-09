import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

interface CardContentItemProps {
  textAlign: 'end' | 'start'
  title: string
  value: string
}

const CardContentItem = ({ textAlign, title, value }: CardContentItemProps) => {
  const Container = styled.div`
    margin-bottom: 4px;
  `

  const StyledTitleTypography = styled(Typography)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 0.9rem;
  `

  const StyledDescriptionTypography = styled(Typography)`
    background-color: #263244;
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.palette.primary.light};
  `

  return (
    <Container style={{ textAlign }}>
      <StyledTitleTypography>{title}</StyledTitleTypography>
      <StyledDescriptionTypography>{value}</StyledDescriptionTypography>
    </Container>
  )
}

export default CardContentItem
