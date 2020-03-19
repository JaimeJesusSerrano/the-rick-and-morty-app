import React, { useState } from 'react'
import {
  Card as MaterialUiCard,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
} from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Character } from '../../../services/api/types'
import CardContentItem from '~Screens/characters/components/CardContentItem'
import UnknownIcon from '~Assets/img/unknown.jpeg'

interface CardProps {
  character: Character
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

type CharacterComparableInfo = {
  name: string
  gender: string
  species: string
  status: string
}

const getCardInformation = (
  gender: string,
  name: string,
  species: string,
  status: string,
  image: string,
): CharacterComparableInfo => {
  return {
    name,
    gender,
    species,
    status,
    image,
  }
}

const Card = ({
  character: { gender, image, location, name, origin, species, status },
}: CardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <StyledCard>
      {isVisible ? (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              console.log(`send to comparator: ${name}`)
            }}
          >
            Send to comparator
          </Button>
        </CardActions>
      ) : null}
      <CardActionArea
        onClick={() => {
          setIsVisible(!isVisible)
          console.log(getCardInformation(name, gender, species, status, image))
        }}
      >
        <CardMedia>
          <LazyLoadImage
            alt={name}
            effect="blur"
            height={200}
            placeholderSrc={UnknownIcon}
            src={image}
            threshold={500}
            width={200}
          />
        </CardMedia>
        <StyledCardContent>
          <CardContentItem title="NAME" value={name} />
          <CardContentItem title="STATUS" value={status} />
          <CardContentItem title="SPICES" value={species} />
          <CardContentItem title="GENDER" value={gender} />
          <CardContentItem title="ORIGIN" value={origin.name} />
          <CardContentItem title="LAST LOCATION" value={location.name} />
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  )
}

export default Card
