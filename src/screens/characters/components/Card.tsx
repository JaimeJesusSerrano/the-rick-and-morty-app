import React, { useState } from 'react'
import {
  Card as MaterialUiCard,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
} from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Character } from '~Api/types'
import UnknownIcon from '~Assets/img/unknown.jpeg'
import CardContentItem from '~Screens/characters/components/CardContentItem'

export interface CardProps {
  character: Character
}

export type CharacterComparableInfo = {
  name: string
  gender: string
  species: string
  status: string
  image: string
}

const getCardInformation = (
  gender: string,
  name: string,
  species: string,
  status: string,
  image: string
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
  const [isSelected, setIsSelected] = useState(false)
  const CardComparatorSelector = (): JSX.Element => {
    return (
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            console.log(`send to comparator: ${name}`)
            console.log(
              getCardInformation(name, gender, species, status, image)
            )
          }}
        >
          Send to comparator
        </Button>
      </CardActions>
    )
  }

  const cardContentItems = [
    { title: 'NAME', value: name },
    { title: 'STATUS', value: status },
    { title: 'SPECIES', value: species },
    { title: 'GENDER', value: gender },
    { title: 'ORIGIN', value: origin.name },
    { title: 'LAST LOCATION', value: location.name },
  ]

  return (
    <StyledCard>
      {isSelected && CardComparatorSelector()}
      <CardActionArea
        onClick={() => {
          setIsSelected(!isSelected)
        }}
      >
        <LazyLoadImage
          alt={name}
          effect="blur"
          height={200}
          placeholderSrc={UnknownIcon}
          src={image}
          threshold={500}
          width={200}
        />
      </CardActionArea>
      <StyledCardContent>
        {cardContentItems.map(item => {
          return (
            <CardContentItem
              key={uuidv4()}
              title={item.title}
              value={item.value}
            />
          )
        })}
      </StyledCardContent>
    </StyledCard>
  )
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

export default Card
