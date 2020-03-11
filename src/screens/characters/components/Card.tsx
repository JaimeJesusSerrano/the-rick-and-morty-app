import React from 'react'
import {
  Card as MaterialUiCard,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { Character } from '../../../services/api/types'
import CardContentItem from '~Screens/characters/components/CardContentItem'
import UnknownIcon from '~Assets/img/unknown.jpeg'

interface CardProps {
  character: Character
}

const StyledCard = styled(MaterialUiCard)`
    border-radius: 20px;
  `

const StyledCardMedia = styled(CardMedia)`
    height: 200px;
    position: relative;
    width: 200px;
  `

const StyledCardContent = styled(CardContent)`
    &:last-child {
      padding: 10px;
    }
    background-color: ${({ theme }) => theme.palette.secondary.main};
    padding: 10px;
  `

const Card = ({
  character: { gender, image, location, name, origin, species, status },
}: CardProps) => {
  return (
    <StyledCard>
      <LazyLoadImage
        alt={name}
        effect="blur"
        height={200}
        placeholderSrc={UnknownIcon}
        src={image}
        threshold={500}
        width={200}
      />
      <StyledCardContent>
        <CardContentItem title="STATUS" value={status} />
        <CardContentItem title="SPICES" value={species} />
        <CardContentItem title="GENDER" value={gender} />
        <CardContentItem title="ORIGIN" value={origin.name} />
        <CardContentItem title="LAST LOCATION" value={location.name} />
      </StyledCardContent>
    </StyledCard>
  )
}

export default Card
