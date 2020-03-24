import React from 'react'
import { Card as MaterialUiCard, CardContent } from '@material-ui/core'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { Episode } from '../../../services/api/types'
import CardContentItem from '~Screens/episodes/components/CardContentItem'

interface CardProps {
  episode: Episode
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
// eslint-disable-next-line @typescript-eslint/camelcase
  episode: { name, episode, air_date },
}: CardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <CardContentItem title="NAME" value={name} />
        <CardContentItem title="CODE" value={episode} />
        {/* eslint-disable-next-line @typescript-eslint/camelcase */}
        <CardContentItem title="Air date" value={air_date}/>
      </StyledCardContent>
    </StyledCard>
  )
}

export default Card
