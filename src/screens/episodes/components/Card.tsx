import React from 'react'
import { Card as MaterialUiCard, CardContent } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { Episode } from '../../../services/api/types'
import CardContentItem from '~Screens/episodes/components/CardContentItem'
import UnknownIcon from '~Assets/img/unknown.jpeg'

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
  episode: { name, episode, characters },
}: CardProps) => {
  return (
    <StyledCard>
      <LazyLoadImage
        alt={name}
        effect="blur"
        height={200}
        placeholderSrc={UnknownIcon}
        // src={image}
        threshold={500}
        width={200}
      />
      <StyledCardContent>
        <CardContentItem title="NAME" value={name} />
        <CardContentItem title="CODE" value={episode} />
      </StyledCardContent>
    </StyledCard>
  )
}

export default Card
