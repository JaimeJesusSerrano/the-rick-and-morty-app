import React from 'react'
import { Card as MaterialUiCard, CardContent } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Character } from '~Api/types'
import UnknownIcon from '~Assets/img/unknown.jpeg'
import CardContentItem from '~Screens/characters/components/CardContentItem'

interface CardProps {
  character: Character
}

const Card = ({
  character: { gender, image, location, name, origin, species, status },
}: CardProps) => {

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
        {cardContentItems.map((item) => {
          return (<CardContentItem key={uuidv4()} title={item.title} value={item.value} />)
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
