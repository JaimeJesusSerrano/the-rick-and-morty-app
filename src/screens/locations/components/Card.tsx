import React from 'react'
import { Card as MaterialUiCard, CardContent } from '@material-ui/core'
import styled from 'styled-components'
import { Location } from '~Api/types'
import CardContentItem from './CardContentItem'

interface CardProps {
  location: Location
}

const StyledCard = styled(MaterialUiCard)`
  border-radius: 20px;
  line-height: 0;
`

const StyledCardContent = styled(CardContent)`
  &:last-child {
    padding: 10px;
  }
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 10px;
`

const Card = ({
  location: { name, type, dimension },
}: CardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <CardContentItem title="NAME" value={name} />
        <CardContentItem title="TYPE" value={type} />
        <CardContentItem title="DIMENSION" value={dimension} />
      </StyledCardContent>
    </StyledCard>
  )
}

export default Card
